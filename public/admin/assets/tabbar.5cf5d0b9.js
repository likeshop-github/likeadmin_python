import{_ as M}from"./index.f485022a.js";import{s as Q,C as T,w as $,x as W,y as X,D as q,F as G,I as H}from"./element-plus.ef27c94c.js";import{d as h,e as K,o as f,c as F,X as e,u as s,k as S,P as t,U as g,a1 as Y,an as Z,a,W as ee,a8 as te,a0 as oe,V as le,R as ae,O as I,T as se,Q as ne,t as ue,b7 as re,b6 as de}from"./@vue.a137a740.js";import{_ as ie}from"./index.2513b1f4.js";import{_ as pe}from"./picker.97c52774.js";import{_ as ce}from"./picker.f2fa7915.js";import{u as me,f as E,b as _e,d as fe}from"./index.43c9f4b3.js";import{b as be,c as xe}from"./decoration.218d0aa9.js";import{D as Fe}from"./vuedraggable.0ebeab5f.js";import"./@vueuse.07613b64.js";import"./@element-plus.3660753f.js";import"./lodash-es.a31ceab4.js";import"./dayjs.4eb0747d.js";import"./axios.317db7a7.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.fd318bfa.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.ed3b9421.js";import"./index.2e74dde9.js";import"./usePaging.c15919e0.js";import"./index.vue_vue_type_script_setup_true_lang.c58ce5d0.js";import"./vue3-video-play.b1eef99b.js";import"./lodash.329a9ebf.js";import"./vue-router.9605b890.js";import"./pinia.9b4180ce.js";import"./css-color-function.32b8b184.js";import"./color.3683ba49.js";import"./clone.a10503d0.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.c50c242d.js";import"./vue-clipboard3.51d666ae.js";import"./clipboard.e9b83688.js";import"./echarts.7e912674.js";import"./zrender.754e8e90.js";import"./tslib.60310f1a.js";import"./highlight.js.7165574c.js";import"./@highlightjs.7fc78ec7.js";import"./vue.de363efb.js";import"./sortablejs.cffe02b4.js";const ge={class:"color-picker flex flex-1"},Ve=h({__name:"index",props:{modelValue:{type:String},defaultColor:{type:String}},emits:["update:modelValue"],setup(p,{emit:V}){const c=p,r=K({get(){return c.modelValue},set(b){V("update:modelValue",b)}}),o=["#409EFF","#28C76F","#EA5455","#FF9F43","#01CFE8","#4A5DFF"],C=()=>{r.value=c.defaultColor};return(b,m)=>{const x=Q,y=T,n=$;return f(),F("div",ge,[e(x,{modelValue:s(r),"onUpdate:modelValue":m[0]||(m[0]=l=>S(r)?r.value=l:null),predefine:o},null,8,["modelValue"]),e(y,{modelValue:s(r),"onUpdate:modelValue":m[1]||(m[1]=l=>S(r)?r.value=l:null),class:"mx-[10px] flex-1",type:"text",readonly:""},null,8,["modelValue"]),e(n,{type:"text",onClick:C},{default:t(()=>[g("\u91CD\u7F6E")]),_:1})])}}}),D=p=>(re("data-v-ca67d846"),p=p(),de(),p),Ce={class:"decoration-tabbar min-w-[800px]"},ye={class:"flex h-full items-start"},ve={class:"pages-preview mx-[30px]"},Ee={class:"tabbar flex"},he=["src"],De={class:"leading-3 text-[12px] mt-[4px]"},ke={class:"flex-1"},Ae=D(()=>a("div",{class:"title flex items-center before:w-[3px] before:h-[14px] before:block before:bg-primary before:mr-2"},[g(" \u5E95\u90E8\u5BFC\u822A\u8BBE\u7F6E "),a("span",{class:"form-tips ml-[10px] !mt-0"}," \u81F3\u5C11\u6DFB\u52A02\u4E2A\u5BFC\u822A\uFF0C\u6700\u591A\u6DFB\u52A05\u4E2A\u5BFC\u822A ")],-1)),Be={class:"mb-[18px]"},we={class:"bg-fill-light w-full p-4 mt-4"},Ue={class:"upload-btn w-[60px] h-[60px]"},Se=D(()=>a("span",{class:"text-xs leading-5"}," \u672A\u9009\u4E2D ",-1)),Ie={class:"upload-btn w-[60px] h-[60px]"},Te=D(()=>a("span",{class:"text-xs leading-5"}," \u9009\u4E2D ",-1)),$e=h({name:"decorationTabbar"}),ze=h({...$e,setup(p){const{getImageUrl:V}=me(),c=5,r=2,o=Y({style:{defaultColor:"",selectedColor:""},list:[{name:"",selected:"",unselected:"",link:{}},{name:"",selected:"",unselected:"",link:{}}]}),C=()=>{var n;((n=o.list)==null?void 0:n.length)<c?o.list.push({name:"",selected:"",unselected:"",link:{}}):E.msgError(`\u6700\u591A\u6DFB\u52A0${c}\u4E2A`)},b=n=>{var l;if(((l=o.list)==null?void 0:l.length)<=r)return E.msgError(`\u6700\u5C11\u4FDD\u7559${r}\u4E2A`);o.list.splice(n,1)},m=n=>n.relatedContext.index!=0,x=async()=>{const n=await be();o.list=n.list.map(l=>({...l,link:JSON.parse(l.link)})),o.style=n.style},y=async()=>{await xe(ue(o)),x(),E.msgSuccess("\u4FDD\u5B58\u6210\u529F")};return x(),(n,l)=>{const k=_e,A=ce,_=q,z=T,N=pe,P=ie,B=$,w=W,U=Ve,R=X,O=G,j=H,J=M,L=Z("perms");return f(),F("div",Ce,[e(j,{shadow:"never",class:"!border-none flex-1","body-style":{height:"100%"}},{default:t(()=>[a("div",ye,[a("div",ve,[a("div",Ee,[(f(!0),F(ee,null,te(s(o).list,(d,u)=>(f(),F("div",{class:"tabbar-item flex flex-col justify-center items-center flex-1",key:u,style:oe({color:s(o).style.defaultColor})},[a("img",{class:"w-[22px] h-[22px]",src:s(V)(d.unselected),alt:""},null,8,he),a("div",De,le(d.name),1)],4))),128))])]),a("div",ke,[Ae,e(O,{"label-width":"70px"},{default:t(()=>[e(R,{"model-value":"content"},{default:t(()=>[e(w,{label:"\u5BFC\u822A\u56FE\u7247",name:"content"},{default:t(()=>{var d;return[a("div",Be,[e(s(Fe),{class:"draggable",modelValue:s(o).list,"onUpdate:modelValue":l[0]||(l[0]=u=>s(o).list=u),animation:"300",draggable:".draggable",move:m},{item:t(({element:u,index:v})=>[e(P,{onClose:i=>b(v),class:ae(["max-w-[400px]",{draggable:v!=0}])},{default:t(()=>[a("div",we,[e(_,{label:"\u5BFC\u822A\u56FE\u6807"},{default:t(()=>[e(A,{modelValue:u.unselected,"onUpdate:modelValue":i=>u.unselected=i,"upload-class":"bg-body",size:"60px"},{upload:t(()=>[a("div",Ue,[e(k,{name:"el-icon-Plus",size:16}),Se])]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(A,{modelValue:u.selected,"onUpdate:modelValue":i=>u.selected=i,"upload-class":"bg-body",size:"60px"},{upload:t(()=>[a("div",Ie,[e(k,{name:"el-icon-Plus",size:16}),Te])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(_,{label:"\u5BFC\u822A\u540D\u79F0"},{default:t(()=>[e(z,{modelValue:u.name,"onUpdate:modelValue":i=>u.name=i,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(_,{label:"\u94FE\u63A5\u5730\u5740"},{default:t(()=>[e(N,{modelValue:u.link,"onUpdate:modelValue":i=>u.link=i,disabled:v==0},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:2},1024)])]),_:2},1032,["onClose","class"])]),_:1},8,["modelValue"])]),((d=s(o).list)==null?void 0:d.length)<c?(f(),I(_,{key:0,"label-width":"0"},{default:t(()=>[e(B,{type:"primary",onClick:C},{default:t(()=>[g(" \u6DFB\u52A0\u5BFC\u822A ")]),_:1})]),_:1})):se("",!0)]}),_:1}),e(w,{label:"\u6837\u5F0F\u8BBE\u7F6E",name:"styles"},{default:t(()=>[e(_,{label:"\u9ED8\u8BA4\u989C\u8272"},{default:t(()=>[e(U,{class:"max-w-[400px]",modelValue:s(o).style.defaultColor,"onUpdate:modelValue":l[1]||(l[1]=d=>s(o).style.defaultColor=d),"default-color":"#999999"},null,8,["modelValue"])]),_:1}),e(_,{label:"\u9009\u4E2D\u989C\u8272"},{default:t(()=>[e(U,{class:"max-w-[400px]",modelValue:s(o).style.selectedColor,"onUpdate:modelValue":l[2]||(l[2]=d=>s(o).style.selectedColor=d),"default-color":"#4173ff"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1}),ne((f(),I(J,{class:"mt-4",fixed:!1},{default:t(()=>[e(B,{type:"primary",onClick:y},{default:t(()=>[g("\u4FDD\u5B58")]),_:1})]),_:1})),[[L,["decorate:tabbar:save"]]])])}}});const At=fe(ze,[["__scopeId","data-v-ca67d846"]]);export{At as default};
