(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[2998],{92998:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return m}});var a=o(73114),l={class:"demo-wrapper"},n={class:"demo"},d={class:"demo-wrapper"},r={class:"demo"},c={class:"demo-wrapper"},i={class:"demo"},s={class:"demo-wrapper"},u={class:"demo"};var p={metaInfo:{titleTemplate:"%s - Pagination"},data:function(){return{page:1,total:100,page1:1,total1:100,page2:1,total2:500,page3:1,total3:100,page4:1,total4:100}},render:function(e,t,o,p,m,V){var g=(0,a.resolveComponent)("ui-pagination"),h=(0,a.resolveComponent)("ui-snippet"),N=(0,a.resolveComponent)("docs-page");return(0,a.openBlock)(),(0,a.createBlock)(N,{name:"pagination","demo-count":"4"},{hero:(0,a.withCtx)((function(){return[(0,a.createVNode)(g,{modelValue:m.page,"onUpdate:modelValue":t[1]||(t[1]=function(e){return m.page=e}),total:m.total,"show-total":"","page-span":!1,"page-size":[10,25,50]},null,8,["modelValue","total"])]})),default:(0,a.withCtx)((function(){return[(0,a.createVNode)("section",l,[(0,a.createVNode)("h6",{class:e.$tt("headline6")},"1.1 Default Usage",2),(0,a.createVNode)("div",n,[(0,a.createVNode)(g,{modelValue:m.page1,"onUpdate:modelValue":t[2]||(t[2]=function(e){return m.page1=e}),total:m.total1,"show-total":"",position:"center"},null,8,["modelValue","total"])]),(0,a.createVNode)(h,{code:e.$store.demos[1]},null,8,["code"])]),(0,a.createVNode)("section",d,[(0,a.createVNode)("h6",{class:e.$tt("headline6")},"1.2 Pagination with page size",2),(0,a.createVNode)("div",r,[(0,a.createVNode)(g,{modelValue:m.page2,"onUpdate:modelValue":t[3]||(t[3]=function(e){return m.page2=e}),total:m.total2,"show-total":"","page-size":[10,25,100],position:"left"},{default:(0,a.withCtx)((function(e){var t=e.currentMinRow,o=e.currentMaxRow;return[(0,a.createTextVNode)((0,a.toDisplayString)(t)+" - "+(0,a.toDisplayString)(o)+" / "+(0,a.toDisplayString)(m.total2),1)]})),_:1},8,["modelValue","total"])]),(0,a.createVNode)(h,{code:e.$store.demos[2]},null,8,["code"])]),(0,a.createVNode)("section",c,[(0,a.createVNode)("h6",{class:e.$tt("headline6")},"1.3 Pagination with jumper",2),(0,a.createVNode)("div",i,[(0,a.createVNode)(g,{modelValue:m.page3,"onUpdate:modelValue":t[4]||(t[4]=function(e){return m.page3=e}),total:m.total3,"show-total":"","show-jumper":""},null,8,["modelValue","total"])]),(0,a.createVNode)(h,{code:e.$store.demos[3]},null,8,["code"])]),(0,a.createVNode)("section",s,[(0,a.createVNode)("h6",{class:e.$tt("headline6")},"1.4 Mini Mode",2),(0,a.createVNode)("div",u,[(0,a.createVNode)(g,{modelValue:m.page4,"onUpdate:modelValue":t[5]||(t[5]=function(e){return m.page4=e}),total:m.total4,"show-total":"",mini:""},null,8,["modelValue","total"])]),(0,a.createVNode)(h,{code:e.$store.demos[4]},null,8,["code"])])]})),_:1})}},m=p}}]);