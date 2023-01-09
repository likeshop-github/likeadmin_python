import os

from fastapi import FastAPI, Depends
from fastapi.staticfiles import StaticFiles
from fastapi_pagination import add_pagination


def configure_event(app: FastAPI):
    """配置事件处理, 并初始化三方库"""
    from fastapi_cache import FastAPICache
    from .config import get_settings
    from .dependencies.database import db
    from .dependencies.cache import redis_be, custom_key_builder

    settings = get_settings()

    @app.on_event('startup')
    async def startup():
        await db.connect()
        FastAPICache.init(redis_be, prefix=settings.redis_prefix, key_builder=custom_key_builder)

    @app.on_event('shutdown')
    async def shutdown():
        await db.disconnect()


def configure_middleware(app: FastAPI):
    """配置中间件"""
    from uvicorn.middleware.proxy_headers import ProxyHeadersMiddleware
    from .middlewares import init_cors_middleware, init_timeout_middleware

    app.add_middleware(ProxyHeadersMiddleware)
    init_cors_middleware(app)
    init_timeout_middleware(app)


def configure_router(app: FastAPI, prefix='/api'):
    """配置路由"""
    from .dependencies.verify import verify_token, verify_show_mode
    from .config import get_settings
    from .front.routers import index
    from .front.routers import upload
    from .admin.routers import user, common, system, monitor, setting
    from .generator.routers import gen

    settings = get_settings()
    # 后台依赖
    admin_deps = [Depends(verify_token)]
    if settings.disallow_modify:
        admin_deps.append(Depends(verify_show_mode))

    app.include_router(index.router, prefix=prefix)
    app.include_router(upload.router, prefix=prefix)
    # admin
    app.include_router(user.router, prefix=prefix, dependencies=admin_deps)
    app.include_router(common.router, prefix=prefix, dependencies=admin_deps)
    app.include_router(system.router, prefix=prefix, dependencies=admin_deps)
    app.include_router(monitor.router, prefix=prefix, dependencies=admin_deps)
    app.include_router(setting.router, prefix=prefix, dependencies=admin_deps)
    # gen
    app.include_router(gen.router, prefix=prefix, dependencies=admin_deps)


def create_app() -> FastAPI:
    """创建FastAPI应用,并初始化"""
    from .config import get_settings
    from .exceptions.global_exc import configure_exception

    settings = get_settings()
    app = FastAPI()
    # 上传路径创建
    if not os.path.exists(settings.upload_directory):
        os.makedirs(settings.upload_directory)
    # 上传路径配置
    app.mount(settings.upload_prefix, StaticFiles(directory=settings.upload_directory), name='upload')
    # 静态资源路径配置
    if settings.enabled_static:
        app.mount(settings.static_path, StaticFiles(directory=settings.static_directory), name='static')

    configure_exception(app)
    configure_event(app)
    configure_middleware(app)
    configure_router(app)
    add_pagination(app)
    return app
