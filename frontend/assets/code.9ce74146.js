import{r as n}from"./index.84673fea.js";function r(e){return n.get({url:"/gen/list",params:e})}function a(e){return n.get({url:"/gen/db",params:e})}function o(e){return n.post({url:"/gen/importTable",params:e},{isParamsToData:!1})}function s(e){return n.get({url:"/gen/detail",params:e})}function u(e){return n.post({url:"/gen/syncTable",params:e},{isParamsToData:!1})}function l(e){return n.post({url:"/gen/delTable",params:e})}function g(e){return n.post({url:"/gen/editTable",params:e})}function i(e){return n.get({url:"/gen/previewCode",params:e})}function d(e){return n.get({url:"/gen/genCode",params:e})}function f(e){return n.get({responseType:"blob",url:"/gen/downloadCode",params:e},{isTransformResponse:!1})}export{l as a,i as b,d as c,f as d,r as e,o as f,g,a as h,u as s,s as t};
