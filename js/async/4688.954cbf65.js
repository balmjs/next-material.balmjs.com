(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[4688],{44688:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return V}});var l=o(73114),a={for:"hero-switch"},n={class:"demo-wrapper"},c={class:"demo"},r={for:"basic-switch"},u=(0,l.createVNode)("br",null,null,-1),i={class:"demo"},d={for:"basic-switch-custom"},s={class:"demo-wrapper"},f={class:"demo"},m=(0,l.createVNode)("label",{for:"basic-switch--disabled"},"off/on",-1);var g={metaInfo:{titleTemplate:"%s - Switch"},data:function(){return{toggle:!1,toggle1:0,toggle2:"on"}},mounted:function(){var e=this;setTimeout((function(){e.toggle=!0}),1e3)},render:function(e,t,o,g,V,h){var p=(0,l.resolveComponent)("ui-switch"),w=(0,l.resolveComponent)("ui-form-field"),N=(0,l.resolveComponent)("ui-snippet"),b=(0,l.resolveComponent)("docs-page");return(0,l.openBlock)(),(0,l.createBlock)(b,{name:"switch","demo-count":"1"},{hero:(0,l.withCtx)((function(){return[(0,l.createVNode)(w,null,{default:(0,l.withCtx)((function(){return[(0,l.createVNode)(p,{modelValue:V.toggle,"onUpdate:modelValue":t[1]||(t[1]=function(e){return V.toggle=e}),"input-id":"hero-switch"},null,8,["modelValue"]),(0,l.createVNode)("label",a,(0,l.toDisplayString)(V.toggle),1)]})),_:1})]})),default:(0,l.withCtx)((function(){return[(0,l.createVNode)("section",n,[(0,l.createVNode)("h6",{class:e.$tt("headline6")},"1.1 Enabled",2),(0,l.createVNode)("div",c,[(0,l.createVNode)(w,null,{default:(0,l.withCtx)((function(){return[(0,l.createVNode)(p,{modelValue:V.toggle1,"onUpdate:modelValue":t[2]||(t[2]=function(e){return V.toggle1=e}),"input-id":"basic-switch","true-value":1,"false-value":0},null,8,["modelValue"]),(0,l.createVNode)("label",r,(0,l.toDisplayString)(V.toggle1),1)]})),_:1})]),u,(0,l.createVNode)("div",i,[(0,l.createVNode)(w,null,{default:(0,l.withCtx)((function(){return[(0,l.createVNode)(p,{modelValue:V.toggle2,"onUpdate:modelValue":t[3]||(t[3]=function(e){return V.toggle2=e}),"input-id":"basic-switch-custom",class:"demo-switch--custom","true-value":"on","false-value":"off"},null,8,["modelValue"]),(0,l.createVNode)("label",d,(0,l.toDisplayString)(V.toggle2)+" (custom color)",1)]})),_:1})]),(0,l.createVNode)(N,{code:e.$store.demos[1]},null,8,["code"])]),(0,l.createVNode)("section",s,[(0,l.createVNode)("h6",{class:e.$tt("headline6")},"1.2 Disabled",2),(0,l.createVNode)("div",f,[(0,l.createVNode)(w,null,{default:(0,l.withCtx)((function(){return[(0,l.createVNode)(p,{"input-id":"basic-switch--disabled",disabled:""}),m]})),_:1})])])]})),_:1})}},V=g}}]);