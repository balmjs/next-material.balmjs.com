(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[9669],{59669:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return se}});var o=l(78580),n=l.n(o),a=l(77766),r=l.n(a),c=l(73114),i={class:"hero-demo"},d={key:0},u=(0,c.createTextVNode)("face"),s=(0,c.createTextVNode)("keyboard_arrow_down"),p=(0,c.createTextVNode)(" Pick a fruit "),m=(0,c.createTextVNode)(" Helper text "),f={key:1},V=(0,c.createTextVNode)("face"),v=(0,c.createTextVNode)(" Pick a fruit "),h=(0,c.createTextVNode)(" Helper text "),b={class:"hero-options"},N=(0,c.createTextVNode)(" Type "),x=(0,c.createVNode)("label",{for:"with-leading-icon"},"Leading Icon",-1),C=(0,c.createVNode)("label",{for:"with-helper-text"},"Helper Text",-1),w=(0,c.createVNode)("label",{for:"with-error-text"},"Error Text",-1),g={class:"demo-wrapper"},y={class:"demo"},O=(0,c.createTextVNode)(" Food Group "),k=(0,c.createTextVNode)(" Currently selected: "),_={id:"currently-selected"},T={class:"button-container"},S=(0,c.createTextVNode)("Set Value to Meat"),U={class:"demo-wrapper"},P={class:"demo"},D=(0,c.createTextVNode)(" Food Group "),B=(0,c.createTextVNode)(" Currently selected: "),F={id:"currently-selected-outline"},$={class:"demo-wrapper"},H={class:"demo"},j=(0,c.createTextVNode)(" Food Group "),M={class:"demo-wrapper"},G={class:"demo"};var I=l(86902),E=l.n(I),L=l(14310),R=l.n(L),z=l(20116),A=l.n(z),X=l(34074),Y=l.n(X),J=l(39649),Z=l.n(J),q=l(71509),K=l(32853);var Q={model:{prop:"controls",event:"change"},props:{idPrefix:{type:String,default:"default"},modelValue:{type:Object,default:function(){return{}}}},emits:["update:modelValue"],data:function(){return{controls:this.modelValue}},watch:{modelValue:function(e){this.controls=e,this.$emit("update:modelValue",e)}},render:function(e,t,l,o,n,a){var r=(0,c.resolveComponent)("ui-checkbox"),i=(0,c.resolveComponent)("ui-form-field"),d=(0,c.resolveComponent)("ui-form");return(0,c.openBlock)(),(0,c.createBlock)(d,null,{default:(0,c.withCtx)((function(){return[(0,c.createVNode)(i,null,{default:(0,c.withCtx)((function(){return[(0,c.createVNode)(r,{modelValue:n.controls.rtl,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.controls.rtl=e}),"input-id":"".concat(l.idPrefix,"-rtl")},null,8,["modelValue","input-id"]),(0,c.createVNode)("label",{for:"".concat(l.idPrefix,"-rtl")},"RTL",8,["for"])]})),_:1}),(0,c.createVNode)(i,null,{default:(0,c.withCtx)((function(){return[(0,c.createVNode)(r,{modelValue:n.controls.customColor,"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.controls.customColor=e}),"input-id":"".concat(l.idPrefix,"-alternate-colors")},null,8,["modelValue","input-id"]),(0,c.createVNode)("label",{for:"".concat(l.idPrefix,"-alternate-colors")},"Alternate Colors",8,["for"])]})),_:1}),(0,c.createVNode)(i,null,{default:(0,c.withCtx)((function(){return[(0,c.createVNode)(r,{modelValue:n.controls.disabled,"onUpdate:modelValue":t[3]||(t[3]=function(e){return n.controls.disabled=e}),"input-id":"".concat(l.idPrefix,"-disabled")},null,8,["modelValue","input-id"]),(0,c.createVNode)("label",{for:"".concat(l.idPrefix,"-disabled")},"Disabled",8,["for"])]})),_:1})]})),_:1})}},W=Q,ee=[{label:"Bread, Cereal, Rice, and Pasta",value:"grains"},{label:"Vegetables",value:"vegetables",disabled:!0},{label:"Fruit",value:"fruit"},{label:"Milk, Yogurt, and Cheese",value:"dairy"},{label:"Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts",value:"meat"},{label:"Fats, Oils, and Sweets",value:"fats"}],te=[{value:1,label:"Beijing"},{value:2,label:"Shanghai"},{value:3,label:"Guangdong"}],le=[[],[{value:11,label:"Haidian"},{value:12,label:"Chao Yang"}],[{value:21,label:"Huangpu"},{value:22,label:"Xuhui"}],[{value:31,label:"Guangzhou"}]];function oe(e,t){var l=E()(e);if(R()){var o=R()(e);t&&(o=A()(o).call(o,(function(t){return Y()(e,t).enumerable}))),l.push.apply(l,o)}return l}var ne=[{label:"Filled",value:0},{label:"Outlined",value:1}],ae=[{label:"Leading icon",value:1},{label:"Helper text",value:2}],re=[{label:"Apple",value:11},{label:"Orange",value:22},{label:"Banana",value:33}],ce=[{label:"Fruit Roll Ups",value:"fruit-roll-ups"},{label:"Candy (cotton)",value:"cotton-candy"},{label:"Vegetables",value:"vegetables"},{label:"Noodles",value:"noodles"}],ie=[{label:"Meats",items:[{label:"Steak",value:"steak"},{label:"Hamburger",value:"hamburger"}]},{label:"Vegetables",items:[{label:"Beet",value:"beet"},{label:"Carrot",value:"carrot"}]}],de=(0,c.reactive)({typeOption:0,selectOption:[],selected:"",selected1:{value:"",index:-1},selected2:{value:"",index:-1},selected3:"fruit-roll-ups",selected4:"steak",options1:[],controls:{rtl:!1,customColor:!1,disabled:!1},formData:{province:"",city:""},provinces:[],cities:[]}),ue={metaInfo:{titleTemplate:"%s - Select"},components:{UiSelectControls:W},setup:function(){var e=(0,K.zX)();return(0,c.onMounted)((function(){setTimeout((function(){de.options1=ee,de.provinces=te}),1e3)})),function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(l),!0).forEach((function(t){(0,q.Z)(e,t,l[t])})):Z()?Object.defineProperties(e,Z()(l)):oe(Object(l)).forEach((function(t){Object.defineProperty(e,t,Y()(l,t))}))}return e}({balmUI:e,TypeOptions:ne,SelectOptions:ae,options:re,options2:ce,options3:ie},(0,c.toRefs)(de))},methods:{onSelected:function(e,t){de["selected".concat(t)].value=e.value,de["selected".concat(t)].index=e.index},onClick:function(){this.balmUI.onChange("selected1.value","meat"),this.balmUI.onChange("selected1.index",4)},onChangeProvince:function(e){de.formData.province=e;var t=e||-1;de.cities=t>-1?le[t]:[],de.formData.city=de.cities.length?de.cities[0].value:""}},render:function(e,t,l,o,a,I){var E=(0,c.resolveComponent)("ui-select-icon"),L=(0,c.resolveComponent)("ui-icon"),R=(0,c.resolveComponent)("ui-select"),z=(0,c.resolveComponent)("ui-select-helper"),A=(0,c.resolveComponent)("ui-checkbox"),X=(0,c.resolveComponent)("ui-form-field"),Y=(0,c.resolveComponent)("ui-form"),J=(0,c.resolveComponent)("ui-select-controls"),Z=(0,c.resolveComponent)("ui-button"),q=(0,c.resolveComponent)("ui-snippet"),K=(0,c.resolveComponent)("docs-page");return(0,c.openBlock)(),(0,c.createBlock)(K,{name:"select","demo-count":"4",apis:["select","select-helper","select-icon"]},{hero:(0,c.withCtx)((function(){var l,a,r,g,y,O,k,_;return[(0,c.createVNode)("div",i,[0===e.typeOption?((0,c.openBlock)(),(0,c.createBlock)("div",d,[(0,c.createVNode)(R,{id:"my-select",modelValue:e.selected,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.selected=t}),options:o.options,"with-leading-icon":n()(l=e.selectOption).call(l,1),"helper-text-id":"my-select-helper"},(0,c.createSlots)({"dropdown-icon":(0,c.withCtx)((function(e){var t=e.iconClass;return[(0,c.createVNode)(L,{class:t},{default:(0,c.withCtx)((function(){return[s]})),_:2},1032,["class"])]})),default:(0,c.withCtx)((function(){return[p]})),_:2},[n()(a=e.selectOption).call(a,1)?{name:"icon",fn:(0,c.withCtx)((function(){return[(0,c.createVNode)(E,null,{default:(0,c.withCtx)((function(){return[u]})),_:1})]}))}:void 0]),1032,["modelValue","options","with-leading-icon"]),(0,c.createVNode)(z,{id:"my-select-helper",visible:n()(r=e.selectOption).call(r,2),"valid-msg":n()(g=e.selectOption).call(g,3)},{default:(0,c.withCtx)((function(){return[m]})),_:1},8,["visible","valid-msg"])])):(0,c.createCommentVNode)("",!0),1===e.typeOption?((0,c.openBlock)(),(0,c.createBlock)("div",f,[(0,c.createVNode)(R,{id:"my-select-outlined",modelValue:e.selected,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.selected=t}),outlined:"",options:o.options,"with-leading-icon":n()(y=e.selectOption).call(y,1),"helper-text-id":"my-select-outlined-helper"},(0,c.createSlots)({default:(0,c.withCtx)((function(){return[v]})),_:2},[n()(O=e.selectOption).call(O,1)?{name:"icon",fn:(0,c.withCtx)((function(){return[(0,c.createVNode)(E,null,{default:(0,c.withCtx)((function(){return[V]})),_:1})]}))}:void 0]),1032,["modelValue","options","with-leading-icon"]),(0,c.createVNode)(z,{id:"my-select-outlined-helper",visible:n()(k=e.selectOption).call(k,2),"valid-msg":n()(_=e.selectOption).call(_,3)},{default:(0,c.withCtx)((function(){return[h]})),_:1},8,["visible","valid-msg"])])):(0,c.createCommentVNode)("",!0)]),(0,c.createVNode)("div",b,[(0,c.createVNode)(R,{modelValue:e.typeOption,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.typeOption=t}),class:"hero-option",options:o.TypeOptions},{default:(0,c.withCtx)((function(){return[N]})),_:1},8,["modelValue","options"]),(0,c.createVNode)(Y,{class:"hero-option"},{default:(0,c.withCtx)((function(){return[(0,c.createVNode)(X,null,{default:(0,c.withCtx)((function(){return[(0,c.createVNode)(A,{modelValue:e.selectOption,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.selectOption=t}),"input-id":"with-leading-icon",value:1},null,8,["modelValue"]),x]})),_:1}),(0,c.createVNode)(X,null,{default:(0,c.withCtx)((function(){return[(0,c.createVNode)(A,{modelValue:e.selectOption,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.selectOption=t}),"input-id":"with-helper-text",value:2},null,8,["modelValue"]),C]})),_:1}),(0,c.createVNode)(X,null,{default:(0,c.withCtx)((function(){return[(0,c.createVNode)(A,{modelValue:e.selectOption,"onUpdate:modelValue":t[6]||(t[6]=function(t){return e.selectOption=t}),"input-id":"with-error-text",value:3},null,8,["modelValue"]),w]})),_:1})]})),_:1})])]})),default:(0,c.withCtx)((function(){var l,n;return[(0,c.createVNode)("section",g,[(0,c.createVNode)("h6",{class:e.$tt("headline6")},"1.1 Fully-Featured JS Component",2),(0,c.createVNode)("div",y,[(0,c.createVNode)("div",{class:"example",dir:e.controls.rtl?"rtl":null},[(0,c.createVNode)(R,{id:"full-func-js-select",modelValue:e.selected1.value,"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.selected1.value=t}),options:e.options1,class:{"demo-select-custom-colors":e.controls.customColor},disabled:e.controls.disabled,onSelected:t[8]||(t[8]=function(e){return I.onSelected(e,1)})},{default:(0,c.withCtx)((function(){return[O]})),_:1},8,["modelValue","options","class","disabled"])],8,["dir"]),(0,c.createVNode)("p",null,[k,(0,c.createVNode)("span",_,(0,c.toDisplayString)(e.selected1.value?r()(l="".concat(e.selected1.value," at index ")).call(l,e.selected1.index):"(none)"),1)]),(0,c.createVNode)(J,{modelValue:e.controls,"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.controls=t})},null,8,["modelValue"]),(0,c.createVNode)("div",T,[(0,c.createVNode)(Z,{id:"set-value-meat-button",raised:"",onClick:I.onClick},{default:(0,c.withCtx)((function(){return[S]})),_:1},8,["onClick"])])]),(0,c.createVNode)(q,{code:e.$store.demos[1]},null,8,["code"])]),(0,c.createVNode)("section",U,[(0,c.createVNode)("h6",{class:e.$tt("headline6")},"1.2 Outlined Select",2),(0,c.createVNode)("div",P,[(0,c.createVNode)("div",{class:"example",dir:e.controls.rtl?"rtl":null},[(0,c.createVNode)(R,{id:"outlined-select",modelValue:e.selected1.value,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.selected1.value=t}),outlined:"",options:e.options1,class:{"demo-select-custom-colors":e.controls.customColor},disabled:e.controls.disabled,onSelected:t[11]||(t[11]=function(e){return I.onSelected(e,1)})},{default:(0,c.withCtx)((function(){return[D]})),_:1},8,["modelValue","options","class","disabled"])],8,["dir"]),(0,c.createVNode)("p",null,[B,(0,c.createVNode)("span",F,(0,c.toDisplayString)(e.selected1.value?r()(n="".concat(e.selected1.value," at index ")).call(n,e.selected1.index):"(none)"),1)]),(0,c.createVNode)(J,{modelValue:e.controls,"onUpdate:modelValue":t[12]||(t[12]=function(t){return e.controls=t}),"id-prefix":"outlined"},null,8,["modelValue"])]),(0,c.createVNode)(q,{code:e.$store.demos[2]},null,8,["code"])]),(0,c.createVNode)("section",$,[(0,c.createVNode)("h6",{class:e.$tt("headline6")},"1.3 Pre-selected option via HTML",2),(0,c.createVNode)("div",H,[(0,c.createVNode)(R,{id:"select-preselected",modelValue:e.selected3,"onUpdate:modelValue":t[13]||(t[13]=function(t){return e.selected3=t}),options:o.options2},{default:(0,c.withCtx)((function(){return[j]})),_:1},8,["modelValue","options"])]),(0,c.createVNode)(q,{code:e.$store.demos[3]},null,8,["code"])]),(0,c.createVNode)("section",M,[(0,c.createVNode)("h6",{class:e.$tt("headline6")},"1.4 Custom Select",2),(0,c.createVNode)("div",G,[(0,c.createVNode)(R,{modelValue:e.formData.province,"onUpdate:modelValue":[t[14]||(t[14]=function(t){return e.formData.province=t}),I.onChangeProvince],options:e.provinces,"default-label":"Province"},null,8,["modelValue","options","onUpdate:modelValue"]),(0,c.createVNode)(R,{modelValue:e.formData.city,"onUpdate:modelValue":t[15]||(t[15]=function(t){return e.formData.city=t}),options:e.cities,"default-label":"City"},null,8,["modelValue","options"]),(0,c.createVNode)("p",null,"Province: "+(0,c.toDisplayString)(e.formData.province)+" - City: "+(0,c.toDisplayString)(e.formData.city),1)]),(0,c.createVNode)(q,{code:e.$store.demos[4]},null,8,["code"])])]})),_:1})}},se=ue}}]);