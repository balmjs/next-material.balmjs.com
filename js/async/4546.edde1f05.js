(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[4546],{24546:function(e,s,t){"use strict";t.r(s);var a=t(4191),n=t(3454);n.Z.render=a.s,s.default=n.Z},3454:function(e,s,t){"use strict";t.d(s,{Z:function(){return a.Z}});var a=t(93708)},4191:function(e,s,t){"use strict";t.d(s,{s:function(){return a.s}});var a=t(8299)},93708:function(e,s){"use strict";var t={cssClasses:{image:"mdc-image-list__image"},EVENT:{CLICK:"click"}};s.Z={name:"UiImageItem",props:{image:{type:[String,null],default:null},bgImage:{type:[String,null],default:null}},emits:[t.EVENT.CLICK],data:function(){return{UI_IMAGE_ITEM:t}},computed:{style:function(){return{"background-image":"url(".concat(this.bgImage,")")}}},created:function(){this.$parent.isMasonry&&this.bgImage&&console.warn("[UiImageItem]","The 'bgImage' prop is not compatible with the masonry image list, you need to set the 'image' prop")},methods:{handleClick:function(e){this.$emit(t.EVENT.CLICK,e)}}}},8299:function(e,s,t){"use strict";t.d(s,{s:function(){return l}});var a=t(73114),n={key:1,class:"mdc-image-list__image-aspect-container"};function l(e,s,t,l,i,c){return(0,a.openBlock)(),(0,a.createBlock)("li",{class:"mdc-image-list__item",onClick:s[1]||(s[1]=function(){return c.handleClick&&c.handleClick.apply(c,arguments)})},[e.$parent.isMasonry?(0,a.renderSlot)(e.$slots,"image",{key:0,imageClass:i.UI_IMAGE_ITEM.cssClasses.image},(function(){return[t.bgImage?((0,a.openBlock)(),(0,a.createBlock)("div",{key:0,class:i.UI_IMAGE_ITEM.cssClasses.image,style:c.style},null,6)):((0,a.openBlock)(),(0,a.createBlock)("img",{key:1,class:i.UI_IMAGE_ITEM.cssClasses.image,src:t.image},null,10,["src"]))]})):((0,a.openBlock)(),(0,a.createBlock)("div",n,[(0,a.renderSlot)(e.$slots,"image",{imageClass:i.UI_IMAGE_ITEM.cssClasses.image},(function(){return[t.bgImage?((0,a.openBlock)(),(0,a.createBlock)("div",{key:0,class:i.UI_IMAGE_ITEM.cssClasses.image,style:c.style},null,6)):((0,a.openBlock)(),(0,a.createBlock)("img",{key:1,class:i.UI_IMAGE_ITEM.cssClasses.image,src:t.image},null,10,["src"]))]}))])),(0,a.renderSlot)(e.$slots,"default")])}}}]);