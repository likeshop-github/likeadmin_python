import{_ as A}from"./index.ba5f4adb.js";import{H as g,O as k,P as y,I as x,D as H,C as N,F as U,w as I}from"./element-plus.f12e93f2.js";import{r as F,f as R}from"./index.84673fea.js";import{d as C,a1 as q,an as O,o as m,c as P,X as e,P as o,u as l,a as i,U as r,O as E,T as S,Q as T}from"./@vue.a137a740.js";import"./@vueuse.07613b64.js";import"./@element-plus.3660753f.js";import"./lodash-es.a31ceab4.js";import"./dayjs.b0476e70.js";import"./axios.9640b842.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.3fb3ef02.js";import"./vue-router.9605b890.js";import"./pinia.9b4180ce.js";import"./css-color-function.a13f8320.js";import"./color.7afdf413.js";import"./clone.8bef1d37.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.d3ae6d3f.js";import"./vue-clipboard3.0f0c7a0b.js";import"./clipboard.863e7101.js";import"./echarts.7e912674.js";import"./zrender.754e8e90.js";import"./tslib.60310f1a.js";import"./highlight.js.7165574c.js";import"./@highlightjs.7fc78ec7.js";function G(p){return F.post({url:"/channel/h5/save",params:p})}function L(){return F.get({url:"/channel/h5/detail"})}const Q=i("div",{class:"form-tips"},"\u72B6\u6001\u4E3A\u5173\u95ED\u65F6\uFF0C\u5C06\u4E0D\u5BF9\u5916\u63D0\u4F9B\u670D\u52A1\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C",-1),X={class:"w-80"},j=C({name:"h5Config"}),we=C({...j,setup(p){const t=q({status:0,close:0,url:"",accessLink:""}),c=async()=>{const d=await L();for(const u in t)t[u]=d[u]},B=async()=>{await G(t),c(),R.msgSuccess("\u64CD\u4F5C\u6210\u529F")};return c(),(d,u)=>{const D=g,_=x,n=k,f=y,s=H,b=N,v=U,V=I,h=A,w=O("perms");return m(),P("div",null,[e(_,{class:"!border-none",shadow:"never"},{default:o(()=>[e(D,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1AH5\u5546\u57CE\u8BBE\u7F6E",closable:!1,"show-icon":""})]),_:1}),e(_,{class:"!border-none mt-4",shadow:"never"},{default:o(()=>[e(v,{ref:"formRef",model:l(t),"label-width":"160px"},{default:o(()=>[e(s,{label:"\u6E20\u9053\u72B6\u6001",required:"",prop:"status"},{default:o(()=>[i("div",null,[e(f,{modelValue:l(t).status,"onUpdate:modelValue":u[0]||(u[0]=a=>l(t).status=a)},{default:o(()=>[e(n,{label:1},{default:o(()=>[r("\u5F00\u542F")]),_:1}),e(n,{label:0},{default:o(()=>[r("\u5173\u95ED")]),_:1})]),_:1},8,["modelValue"]),Q])]),_:1}),e(s,{label:"\u5173\u95ED\u540E\u8BBF\u95EE\u9875\u9762",prop:"close"},{default:o(()=>[e(f,{modelValue:l(t).close,"onUpdate:modelValue":u[1]||(u[1]=a=>l(t).close=a)},{default:o(()=>[e(n,{label:0},{default:o(()=>[r("\u7A7A\u9875\u9762")]),_:1}),e(n,{label:1},{default:o(()=>[r("\u81EA\u5B9A\u4E49\u94FE\u63A5")]),_:1})]),_:1},8,["modelValue"])]),_:1}),l(t).close==1?(m(),E(s,{key:0,label:"",prop:"url"},{default:o(()=>[i("div",X,[e(b,{modelValue:l(t).url,"onUpdate:modelValue":u[2]||(u[2]=a=>l(t).url=a),placeholder:"\u8BF7\u8F93\u5165\u5B8C\u6574\u7684url"},null,8,["modelValue"])])]),_:1})):S("",!0)]),_:1},8,["model"])]),_:1}),T((m(),E(h,null,{default:o(()=>[e(V,{type:"primary",onClick:B},{default:o(()=>[r("\u4FDD\u5B58")]),_:1})]),_:1})),[[w,["channel:h5:save"]]])])}}});export{we as default};
