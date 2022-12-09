import{C as M,D as Q,w as X,F as H,I as W,J as Y,p as Z,q as ee,r as oe,K as te,L as ne}from"./element-plus.f12e93f2.js";import{u as ae,_ as le}from"./usePaging.f986a4c2.js";import{j as se,f as F,b as ie}from"./index.84673fea.js";import{d as P,a1 as S,r as ue,b0 as de,ag as me,an as re,o as i,c as y,X as e,P as o,u as n,a9 as N,U as d,Q as m,O as b,a as h,k as ce,T as pe}from"./@vue.a137a740.js";import{a as _e,b as fe,d as be,c as ge,e as Ce,s as we}from"./code.9ce74146.js";import{_ as Fe}from"./data-table.vue_vue_type_script_setup_true_lang.b461259d.js";import{_ as ye}from"./code-preview.vue_vue_type_script_setup_true_lang.503ad9d2.js";import"./@vueuse.07613b64.js";import"./@element-plus.3660753f.js";import"./lodash-es.a31ceab4.js";import"./dayjs.b0476e70.js";import"./axios.9640b842.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.3fb3ef02.js";import"./vue-router.9605b890.js";import"./pinia.9b4180ce.js";import"./css-color-function.a13f8320.js";import"./color.7afdf413.js";import"./clone.8bef1d37.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.d3ae6d3f.js";import"./vue-clipboard3.0f0c7a0b.js";import"./clipboard.863e7101.js";import"./echarts.7e912674.js";import"./zrender.754e8e90.js";import"./tslib.60310f1a.js";import"./highlight.js.7165574c.js";import"./@highlightjs.7fc78ec7.js";import"./index.4750317e.js";function he(D,p="\u6587\u4EF6\u540D\u79F0.zip"){const _=new Blob([D],{type:"application/octet-stream;charset=UTF-8"}),f=window.URL.createObjectURL(_),s=document.createElement("a");s.style.display="none",s.href=f,s.setAttribute("download",p),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(f)}const ve={class:"code-generation"},ke={class:"flex"},Ee={class:"mt-4"},De={class:"flex items-center"},Te={class:"flex justify-end mt-4"},Ve=P({name:"codeGenerate"}),po=P({...Ve,setup(D){const p=S({tableName:"",tableComment:""}),_=S({show:!1,loading:!1,code:{}}),{pager:f,getLists:s,resetParams:A,resetPage:v}=ae({fetchFun:Ce,params:p}),C=ue([]),L=a=>{C.value=a},$=async a=>{await F.confirm("\u786E\u5B9A\u8981\u540C\u6B65\u8868\u7ED3\u6784\uFF1F"),await we({id:a}),F.msgSuccess("\u64CD\u4F5C\u6210\u529F")},T=async a=>{a||(a=C.value.map(({id:t})=>t)),await F.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await _e({ids:a}),F.msgSuccess("\u5220\u9664\u6210\u529F"),s()},K=async a=>{const t=await fe({id:a});_.code=t,_.show=!0},V=async a=>{const t=B(a,0),r=B(a,1);if(t){const w=await be({tables:t});he(w,"likeadmin-curd.zip")}r&&(await ge({tables:r}),F.msgSuccess("\u751F\u6210\u6210\u529F"))},B=(a,t)=>a.filter(({genType:r})=>r==t).map(({tableName:r})=>r).join(),R=(a,t)=>{switch(a){case"generate":V([t]);break;case"sync":$(t.id);break;case"delete":T([t.id])}};return de(()=>{s()}),s(),(a,t)=>{const r=M,w=Q,u=X,j=H,x=W,k=ie,g=Y,z=me("router-link"),E=Z,I=ee,O=oe,q=te,G=le,c=re("perms"),J=ne;return i(),y("div",ve,[e(x,{class:"!border-none",shadow:"never"},{default:o(()=>[e(j,{class:"mb-[-16px]",model:n(p),inline:""},{default:o(()=>[e(w,{label:"\u8868\u540D\u79F0"},{default:o(()=>[e(r,{class:"w-[280px]",modelValue:n(p).tableName,"onUpdate:modelValue":t[0]||(t[0]=l=>n(p).tableName=l),clearable:"",onKeyup:N(n(v),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(w,{label:"\u8868\u63CF\u8FF0"},{default:o(()=>[e(r,{class:"w-[280px]",modelValue:n(p).tableComment,"onUpdate:modelValue":t[1]||(t[1]=l=>n(p).tableComment=l),clearable:"",onKeyup:N(n(v),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(w,null,{default:o(()=>[e(u,{type:"primary",onClick:n(v)},{default:o(()=>[d("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(u,{onClick:n(A)},{default:o(()=>[d("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),m((i(),b(x,{class:"!border-none mt-4",shadow:"never"},{default:o(()=>[h("div",ke,[m((i(),b(Fe,{class:"inline-block mr-[10px]",onSuccess:n(s)},{default:o(()=>[e(u,{type:"primary"},{icon:o(()=>[e(k,{name:"el-icon-Plus"})]),default:o(()=>[d(" \u5BFC\u5165\u6570\u636E\u8868 ")]),_:1})]),_:1},8,["onSuccess"])),[[c,["gen:importTable"]]]),m((i(),b(u,{disabled:!n(C).length,onClick:t[2]||(t[2]=l=>T()),type:"danger"},{icon:o(()=>[e(k,{name:"el-icon-Delete"})]),default:o(()=>[d(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[c,["gen:delTable"]]]),m((i(),b(u,{disabled:!n(C).length,onClick:t[3]||(t[3]=l=>V(n(C)))},{default:o(()=>[d(" \u751F\u6210\u4EE3\u7801 ")]),_:1},8,["disabled"])),[[c,["gen:genCode","gen:downloadCode"]]])]),h("div",Ee,[e(q,{data:n(f).lists,size:"large",onSelectionChange:L},{default:o(()=>[e(g,{type:"selection",width:"55"}),e(g,{label:"\u8868\u540D\u79F0",prop:"tableName","min-width":"180"}),e(g,{label:"\u8868\u63CF\u8FF0",prop:"tableComment","min-width":"180"}),e(g,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime","min-width":"180"}),e(g,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"updateTime","min-width":"180"}),e(g,{label:"\u64CD\u4F5C",width:"160",fixed:"right"},{default:o(({row:l})=>[h("div",De,[m((i(),b(u,{type:"primary",link:"",onClick:U=>K(l.id)},{default:o(()=>[d(" \u9884\u89C8 ")]),_:2},1032,["onClick"])),[[c,["gen:previewCode"]]]),m((i(),b(u,{type:"primary",link:""},{default:o(()=>[e(z,{to:{path:n(se)("gen:editTable"),query:{id:l.id}}},{default:o(()=>[d(" \u7F16\u8F91 ")]),_:2},1032,["to"])]),_:2},1024)),[[c,["gen:editTable"]]]),m((i(),b(O,{class:"ml-2",onCommand:U=>R(U,l)},{dropdown:o(()=>[e(I,null,{default:o(()=>[m((i(),y("div",null,[e(E,{command:"generate"},{default:o(()=>[e(u,{type:"primary",link:""},{default:o(()=>[d(" \u751F\u6210\u4EE3\u7801 ")]),_:1})]),_:1})])),[[c,["gen:genCode","gen:downloadCode"]]]),m((i(),y("div",null,[e(E,{command:"sync"},{default:o(()=>[e(u,{type:"primary",link:""},{default:o(()=>[d(" \u540C\u6B65 ")]),_:1})]),_:1})])),[[c,["gen:syncTable"]]]),m((i(),y("div",null,[e(E,{command:"delete"},{default:o(()=>[e(u,{type:"danger",link:""},{default:o(()=>[d(" \u5220\u9664 ")]),_:1})]),_:1})])),[[c,["gen:delTable"]]])]),_:1})]),default:o(()=>[e(u,{type:"primary",link:""},{default:o(()=>[d(" \u66F4\u591A "),e(k,{name:"el-icon-ArrowDown",size:14})]),_:1})]),_:2},1032,["onCommand"])),[[c,["gen:genCode","gen:downloadCode","gen:syncTable","gen:delTable"]]])])]),_:1})]),_:1},8,["data"])]),h("div",Te,[e(G,{modelValue:n(f),"onUpdate:modelValue":t[4]||(t[4]=l=>ce(f)?f.value=l:null),onChange:n(s)},null,8,["modelValue","onChange"])])]),_:1})),[[J,n(f).loading]]),n(_).show?(i(),b(ye,{key:0,modelValue:n(_).show,"onUpdate:modelValue":t[5]||(t[5]=l=>n(_).show=l),code:n(_).code},null,8,["modelValue","code"])):pe("",!0)])}}});export{po as default};
