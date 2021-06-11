(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[2502],{42502:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return k}});var n=o(73114),l={class:"demo-wrapper"},a=(0,n.createVNode)("label",null,"Vue methods",-1),r=(0,n.createTextVNode)("Show message"),u=(0,n.createTextVNode)("Clear"),c=(0,n.createVNode)("label",null,"balmUI methods",-1),d=(0,n.createTextVNode)(" Show message "),i=(0,n.createTextVNode)(" Clear "),s={class:"demo-wrapper"},f=(0,n.createVNode)("label",null,"Vue methods",-1),V=(0,n.createTextVNode)("Open dialog"),m=(0,n.createVNode)("p",null,"Open dialog: `open = true`",-1),p=(0,n.createVNode)("p",null,"Close dialog: `open = false`",-1),C=(0,n.createTextVNode)("Close dialog"),N=(0,n.createVNode)("label",null,"balmUI methods",-1),h=(0,n.createTextVNode)(" Open dialog "),g=(0,n.createVNode)("p",null,"Open dialog: `balmUI.onShow('open')`",-1),w=(0,n.createVNode)("p",null,"Close dialog: `balmUI.onHide('open')`",-1),x=(0,n.createTextVNode)(" Close dialog ");var _=o(32853),b={metaInfo:{titleTemplate:"%s - Event"},setup:function(){return{balmUI:(0,_.zX)()}},data:function(){return{message1:"No message",message2:"No message",open1:!1,open2:!1}},methods:{showMessage:function(){this.message1="Hello BalmUI"},clearMessage:function(){this.message1=""},openDialog:function(){this.open1=!0},closeDialog:function(){this.open1=!1}},render:function(e,t,o,_,b,k){var v=(0,n.resolveComponent)("ui-button"),U=(0,n.resolveComponent)("ui-snippet"),I=(0,n.resolveComponent)("ui-grid-cell"),T=(0,n.resolveComponent)("ui-grid"),S=(0,n.resolveComponent)("ui-dialog-content"),$=(0,n.resolveComponent)("ui-dialog-actions"),D=(0,n.resolveComponent)("ui-dialog"),H=(0,n.resolveComponent)("docs-page");return(0,n.openBlock)(),(0,n.createBlock)(H,{type:"plugin",name:"event","demo-count":"4","without-css":""},{hero:(0,n.withCtx)((function(){return[(0,n.createVNode)("h1",{class:e.$tt("headline1")},"useEvent();",2)]})),default:(0,n.withCtx)((function(){return[(0,n.createVNode)("section",l,[(0,n.createVNode)("h6",{class:e.$tt("headline6")},"1.1 onChange",2),(0,n.createVNode)(T,null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(I,{columns:"6"},{default:(0,n.withCtx)((function(){return[a,(0,n.createVNode)("p",null,[(0,n.createVNode)(v,{raised:"",onClick:k.showMessage},{default:(0,n.withCtx)((function(){return[r]})),_:1},8,["onClick"]),(0,n.createVNode)(v,{outlined:"",onClick:k.clearMessage},{default:(0,n.withCtx)((function(){return[u]})),_:1},8,["onClick"])]),(0,n.createVNode)("p",null,(0,n.toDisplayString)(b.message1),1),(0,n.createVNode)(U,{code:e.$store.demos[1]},null,8,["code"])]})),_:1}),(0,n.createVNode)(I,{columns:"6"},{default:(0,n.withCtx)((function(){return[c,(0,n.createVNode)("p",null,[(0,n.createVNode)(v,{raised:"",onClick:t[1]||(t[1]=function(e){return _.balmUI.onChange("message2","Hello BalmUI")})},{default:(0,n.withCtx)((function(){return[d]})),_:1}),(0,n.createVNode)(v,{outlined:"",onClick:t[2]||(t[2]=function(e){return _.balmUI.onChange("message2","")})},{default:(0,n.withCtx)((function(){return[i]})),_:1})]),(0,n.createVNode)("p",null,(0,n.toDisplayString)(b.message2),1),(0,n.createVNode)(U,{code:e.$store.demos[2]},null,8,["code"])]})),_:1})]})),_:1})]),(0,n.createVNode)("section",s,[(0,n.createVNode)("h6",{class:e.$tt("headline6")},"1.2 onShow/onHide",2),(0,n.createVNode)(T,null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(I,{columns:"6"},{default:(0,n.withCtx)((function(){return[f,(0,n.createVNode)("p",null,[(0,n.createVNode)(v,{raised:"",onClick:k.openDialog},{default:(0,n.withCtx)((function(){return[V]})),_:1},8,["onClick"])]),(0,n.createVNode)(D,{modelValue:b.open1,"onUpdate:modelValue":t[3]||(t[3]=function(e){return b.open1=e})},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(S,null,{default:(0,n.withCtx)((function(){return[m,p]})),_:1}),(0,n.createVNode)($,null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(v,{onClick:k.closeDialog},{default:(0,n.withCtx)((function(){return[C]})),_:1},8,["onClick"])]})),_:1})]})),_:1},8,["modelValue"]),(0,n.createVNode)(U,{code:e.$store.demos[3]},null,8,["code"])]})),_:1}),(0,n.createVNode)(I,{columns:"6"},{default:(0,n.withCtx)((function(){return[N,(0,n.createVNode)("p",null,[(0,n.createVNode)(v,{raised:"",onClick:t[4]||(t[4]=function(e){return _.balmUI.onShow("open2")})},{default:(0,n.withCtx)((function(){return[h]})),_:1})]),(0,n.createVNode)(D,{modelValue:b.open2,"onUpdate:modelValue":t[6]||(t[6]=function(e){return b.open2=e})},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(S,null,{default:(0,n.withCtx)((function(){return[g,w]})),_:1}),(0,n.createVNode)($,null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(v,{onClick:t[5]||(t[5]=function(e){return _.balmUI.onHide("open2")})},{default:(0,n.withCtx)((function(){return[x]})),_:1})]})),_:1})]})),_:1},8,["modelValue"]),(0,n.createVNode)(U,{code:e.$store.demos[4]},null,8,["code"])]})),_:1})]})),_:1})])]})),_:1})}},k=b}}]);