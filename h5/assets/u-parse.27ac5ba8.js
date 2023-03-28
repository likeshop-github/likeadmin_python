import{_ as t,an as e,ao as i,K as r,J as s,a4 as o,o as a,c as n,w as l,E as h,g as d,b as c,a9 as u,p as f,j as m}from"./index.0362d7aa.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";v(" , ,\t,\r,\n,\f"),v("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),v("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),v("area,base,canvas,frame,iframe,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr"),v("a,colgroup,fieldset,legend"),v("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),v("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video");var g={address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"};function v(t){for(var e=Object.create(null),i=t.split(","),r=i.length;r--;)e[i[r]]=!0;return e}var{windowWidth:b,platform:y}=t();var _=p({name:"parser",emits:["parse","load","ready","error","imgtap","linkpress"],data(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},preview:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html(t){this.setContent(t)}},created(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(null!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,r=e.split("://")[0],s=r.length;(i=e[s])&&("/"!=i||"/"==e[s-1]||"/"==e[s+1]);s++)r+=Math.random()>.5?i.toUpperCase():i;return r+=e.substr(s),this[t]=r}if(this[t]=e,e.includes("data:image"))if(!e.match(/data:image\/(\S+?);(\S+?),(.+)/))return}}},mounted(){this.document=document.getElementById("rtf"+this._uid),this.html&&this.setContent(this.html)},beforeUnmount(){this._observer&&this._observer.disconnect(),this.imgList.each((t=>{})),clearInterval(this._timer)},methods:{setContent(t,s){if(t){var o=document.createElement("div");s?this.rtf?this.rtf.appendChild(o):this.rtf=o:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=o),o.innerHTML=this._handleHtml(t,s);for(var a,n=this.rtf.getElementsByTagName("style"),l=0;a=n[l++];)a.innerHTML=a.innerHTML.replace(/body/g,"#rtf"+this._uid),a.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((t=>{for(let e,i=0;e=t[i++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),this._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var h=this,d=this.rtf.getElementsByTagName("title");d.length&&this.autosetTitle&&e({title:d[0].innerText});var c=t=>{var e=t.getAttribute("src");this.domain&&e&&("/"==e[0]?"/"==e[1]?t.src=(this.domain.includes("://")?this.domain.split("://")[0]:"")+":"+e:t.src=this.domain+e:e.includes("://")||0==e.indexOf("data:")||(t.src=this.domain+"/"+e))};this.imgList.length=0;var u=this.rtf.getElementsByTagName("img");for(let t,e=0,r=0;t=u[e];e++)parseInt(t.style.width||t.getAttribute("width"))>b&&(t.style.height="auto"),c(t),t.hasAttribute("ignore")||"A"==t.parentElement.nodeName||(t.i=r++,h.imgList.push(t.getAttribute("original-src")||t.src||t.getAttribute("data-src")),t.onclick=function(t){t.stopPropagation();var e=h.preview;this.ignore=()=>e=!1,h.$emit("imgtap",this),e&&i({current:this.i,urls:h.imgList})}),t.onerror=function(){h.$emit("error",{source:"img",target:this})},h.lazyLoad&&this._observer&&t.src&&0!=t.i&&(t.setAttribute("data-src",t.src),t.removeAttribute("src"),this._observer.observe(t));var f=this.rtf.getElementsByTagName("a");for(var m of f)m.onclick=function(t){t.stopPropagation();var e=!0,i=this.getAttribute("href");if(h.$emit("linkpress",{href:i,ignore:()=>e=!1}),e&&i)if("#"==i[0])h.useAnchor&&h.navigateTo({id:i.substr(1)});else{if(0==i.indexOf("http")||0==i.indexOf("//"))return!0;r({url:i})}return!1};var p=this.rtf.getElementsByTagName("video");h.videoContexts=p;for(let t,e=0;t=p[e++];)c(t),t.style.maxWidth="100%",t.onerror=function(){h.$emit("error",{source:"video",target:this})},t.onplay=function(){if(h.autopause)for(let t,e=0;t=h.videoContexts[e++];)t!=this&&t.pause()};var g,v=this.rtf.getElementsByTagName("audio");for(var y of v)c(y),y.onerror=function(){h.$emit("error",{source:"audio",target:this})};if(this.autoscroll){var _=this.rtf.getElementsByTagName("table");for(var x of _){let t=document.createElement("div");t.style.overflow="scroll",x.parentNode.replaceChild(t,x),t.appendChild(x)}}s||this.document.appendChild(this.rtf),this.$nextTick((()=>{this.nodes=[1],this.$emit("load")})),setTimeout((()=>this.showAm=""),500),clearInterval(this._timer),this._timer=setInterval((()=>{this.rect=this.rtf.getBoundingClientRect(),this.rect.height==g&&(this.$emit("ready",this.rect),clearInterval(this._timer)),g=this.rect.height}),350),this.showWithAnimation&&!s&&(this.showAm="animation:_show .5s")}else this.rtf&&!s&&this.rtf.parentNode.removeChild(this.rtf)},getText(t=this.nodes){return this.rtf.innerText},in(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo(t){if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var e=s().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?` #${t.id},${this._in?this._in.selector:"#_top"} .${t.id}`:"")).boundingClientRect();this._in?e.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():e.selectViewport().scrollOffset(),e.exec((e=>{if(!e[0])return t.fail&&t.fail("Label not found");var i=e[1].scrollTop+e[0].top-(e[2]?e[2].top:0)+(t.offset||0);this._in?this._in.page[this._in.scrollTop]=i:o({scrollTop:i,duration:300}),t.success&&t.success()}))},getVideoContext(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml(t,e){if(!e){var i="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var r in g)i+=`${r}{${g[r]}}`;for(r in this.tagStyle)i+=`${r}{${this.tagStyle[r]}}`;t=(i+="</style>")+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(t=>parseFloat(t)*b/750+"px"))),t}}},[["render",function(t,e,i,r,s,o){const p=m;return a(),n(p,null,{default:l((()=>[s.nodes.length?d("v-if",!0):h(t.$slots,"default",{key:0},void 0,!0),c(p,{id:"_top",style:f(s.showAm+(i.selectable?";user-select:text;-webkit-user-select:text":""))},{default:l((()=>[u("div",{id:"rtf"+s.uid},null,8,["id"])])),_:1},8,["style"])])),_:3})}],["__scopeId","data-v-49097824"]]);export{_};
