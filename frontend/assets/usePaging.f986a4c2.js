import{M as c}from"./element-plus.f12e93f2.js";import{d,e as m,o as f,c as z,X as P,L as h,u as r,t as S,a1 as y}from"./@vue.a137a740.js";const C={class:"pagination"},x=d({__name:"index",props:{modelValue:{default:()=>({})},pageSizes:{default:()=>[15,20,30,40]},layout:{default:"total, sizes, prev, pager, next, jumper"}},emits:["change","update:modelValue"],setup(n,{emit:o}){const u=n,t=m({get(){return u.modelValue},set(g){o("update:modelValue",g)}}),s=()=>{t.value.page=1,o("change")},p=()=>{o("change")};return(g,e)=>{const i=c;return f(),z("div",C,[P(i,h(u,{"pager-count":5,currentPage:r(t).page,"onUpdate:currentPage":e[0]||(e[0]=l=>r(t).page=l),pageSize:r(t).size,"onUpdate:pageSize":e[1]||(e[1]=l=>r(t).size=l),"page-sizes":n.pageSizes,layout:n.layout,total:r(t).count,"hide-on-single-page":!1,onSizeChange:s,onCurrentChange:p}),null,16,["currentPage","pageSize","page-sizes","layout","total"])])}}});function _(n){const{page:o=1,size:u=15,fetchFun:t,params:s={},firstLoading:p=!1}=n,g=Object.assign({},S(s)),e=y({page:o,size:u,loading:p,count:0,lists:[]}),i=()=>(e.loading=!0,t({pageNo:e.page,pageSize:e.size,...s}).then(a=>(e.count=a==null?void 0:a.count,e.lists=a==null?void 0:a.lists,Promise.resolve(a))).catch(a=>Promise.reject(a)).finally(()=>{e.loading=!1}));return{pager:e,getLists:i,resetParams:()=>{Object.keys(g).forEach(a=>{s[a]=g[a]}),i()},resetPage:()=>{e.page=1,i()}}}export{x as _,_ as u};
