(self.webpackChunkbalm_ui=self.webpackChunkbalm_ui||[]).push([[9074],{43109:function(t,e,o){"use strict";o.d(e,{Z:function(){return C}});var n=o(36202),i=o(20455),s=o.n(i),r=o(70655),a=o(48315),l=o(43800),c={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},p={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},d={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},h=function(t){function e(o){return t.call(this,(0,r.pi)((0,r.pi)({},e.defaultAdapter),o))||this}return(0,r.ZT)(e,t),Object.defineProperty(e,"strings",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(o(85099).K),u=function(t){function e(e){var o=t.call(this,e)||this;return o.wasDocked=!0,o.isDockedShowing=!0,o.currentAppBarOffsetTop=0,o.isCurrentlyBeingResized=!1,o.resizeThrottleId=0,o.resizeDebounceId=0,o.lastScrollPosition=o.adapter.getViewportScrollY(),o.topAppBarHeight=o.adapter.getTopAppBarHeight(),o}return(0,r.ZT)(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),e=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=e,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout((function(){t.resizeThrottleId=0,t.throttledResizeHandler()}),p.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout((function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=0}),p.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,e=this.currentAppBarOffsetTop<0,o=this.currentAppBarOffsetTop>t,n=e&&o;if(n)this.wasDocked=!1;else{if(!this.wasDocked)return this.wasDocked=!0,!0;if(this.isDockedShowing!==o)return this.isDockedShowing=o,!0}return n},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-p.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(h),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.wasScrolled=!1,e}return(0,r.ZT)(e,t),e.prototype.handleTargetScroll=function(){this.adapter.getViewportScrollY()<=0?this.wasScrolled&&(this.adapter.removeClass(c.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(c.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(u),T=function(t){function e(e){var o=t.call(this,e)||this;return o.collapsed=!1,o.isAlwaysCollapsed=!1,o}return(0,r.ZT)(e,t),Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){t.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(c.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(c.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){this.isAlwaysCollapsed||(this.adapter.getViewportScrollY()<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse())},e.prototype.uncollapse=function(){this.adapter.removeClass(c.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(c.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(h),S=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,r.ZT)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t){void 0===t&&(t=function(t){return l.F.attachTo(t)}),this.navIcon=this.root.querySelector(d.NAVIGATION_ICON_SELECTOR);var e=[].slice.call(this.root.querySelectorAll(d.ACTION_ITEM_SELECTOR));this.navIcon&&e.push(this.navIcon),this.iconRipples=e.map((function(e){var o=t(e);return o.unbounded=!0,o})),this.scrollTarget=window},e.prototype.initialSyncWithDOM=function(){this.handleNavigationClick=this.foundation.handleNavigationClick.bind(this.foundation),this.handleWindowResize=this.foundation.handleWindowResize.bind(this.foundation),this.handleTargetScroll=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget.addEventListener("scroll",this.handleTargetScroll),this.navIcon&&this.navIcon.addEventListener("click",this.handleNavigationClick);var t=this.root.classList.contains(c.FIXED_CLASS);this.root.classList.contains(c.SHORT_CLASS)||t||window.addEventListener("resize",this.handleWindowResize)},e.prototype.destroy=function(){var e,o;try{for(var n=(0,r.XA)(this.iconRipples),i=n.next();!i.done;i=n.next()){i.value.destroy()}}catch(a){e={error:a}}finally{try{i&&!i.done&&(o=n.return)&&o.call(n)}finally{if(e)throw e.error}}this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll),this.navIcon&&this.navIcon.removeEventListener("click",this.handleNavigationClick);var s=this.root.classList.contains(c.FIXED_CLASS);this.root.classList.contains(c.SHORT_CLASS)||s||window.removeEventListener("resize",this.handleWindowResize),t.prototype.destroy.call(this)},e.prototype.setScrollTarget=function(t){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll),this.scrollTarget=t,this.handleTargetScroll=this.foundation.handleTargetScroll.bind(this.foundation),this.scrollTarget.addEventListener("scroll",this.handleTargetScroll)},e.prototype.getDefaultFoundation=function(){var t=this,e={hasClass:function(e){return t.root.classList.contains(e)},addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},setStyle:function(e,o){return t.root.style.setProperty(e,o)},getTopAppBarHeight:function(){return t.root.clientHeight},notifyNavigationIconClicked:function(){return t.emit(d.NAVIGATION_EVENT,{})},getViewportScrollY:function(){var e=t.scrollTarget,o=t.scrollTarget;return void 0!==e.pageYOffset?e.pageYOffset:o.scrollTop},getTotalActionItems:function(){return t.root.querySelectorAll(d.ACTION_ITEM_SELECTOR).length}};return this.root.classList.contains(c.SHORT_CLASS)?new T(e):this.root.classList.contains(c.FIXED_CLASS)?new f(e):new u(e)},e}(a.B),A=o(92813),E=o(83757),_=o(36671),m={TYPES:{nonRegular:-1,standard:0,fixed:1,dense:2,prominent:3,prominentDense:4,short:5,shortCollapsed:6},cssClasses:{navIcon:"mdc-top-app-bar__navigation-icon",actionItem:"mdc-top-app-bar__action-item"},FIXED_ADJUST:{STANDARD:"mdc-top-app-bar--fixed-adjust",PROMINENT:"mdc-top-app-bar--prominent-fixed-adjust",DENSE:"mdc-top-app-bar--dense-fixed-adjust",DENSE_PROMINENT:"mdc-top-app-bar--dense-prominent-fixed-adjust",SHORT:"mdc-top-app-bar--short-fixed-adjust"},EVENT:{NAV:"nav",CLOSE:"close"}},C={name:"UiTopAppBar",components:{MdcIconButton:A.Z},mixins:[E.Z,_.Z],props:{contentSelector:{type:String,required:!0},type:{type:[String,Number],default:0},fixed:{type:Boolean,default:!1},dense:{type:Boolean,default:!1},prominent:{type:Boolean,default:!1},prominentDense:{type:Boolean,default:!1},short:{type:Boolean,default:!1},shortCollapsed:{type:Boolean,default:!1},title:{type:String,default:""},navIcon:{type:[String,Boolean],default:"menu"},navId:{type:[String,null],default:null}},emits:[m.EVENT.NAV,m.EVENT.CLOSE],data:function(){return{UI_TOP_APP_BAR:m,$topAppBar:null}},computed:{isNonRegular:function(){return this.checkType(m.TYPES,"nonRegular")},isFixed:function(){return this.checkType(m.TYPES,"fixed")},isDense:function(){return this.checkType(m.TYPES,"dense")},isProminent:function(){return this.checkType(m.TYPES,"prominent")},isProminentDense:function(){return this.dense&&this.prominent||this.checkType(m.TYPES,"prominentDense")},isShort:function(){return this.checkType(m.TYPES,"short")},isShortCollapsed:function(){return this.checkType(m.TYPES,"shortCollapsed")},className:function(){return{"mdc-top-app-bar":!0,"mdc-top-app-bar--fixed":this.isFixed,"mdc-top-app-bar--dense":this.isDense||this.isProminentDense,"mdc-top-app-bar--prominent":this.isProminent||this.isProminentDense,"mdc-top-app-bar--short":this.isShort||this.isShortCollapsed,"mdc-top-app-bar--short-collapsed":this.isShortCollapsed}},defaultNavIcon:function(){return this.isNonRegular?m.EVENT.CLOSE:this.navIcon}},watch:{type:function(){this.init()}},mounted:function(){this.init()},methods:{getFixedAdjustElement:function(t){var e,o=document.createElement("div"),n=t.children[0];n?n.classList.contains("mdc-drawer")?e=t:/^mdc-top-app-bar--([a-z]+-)*fixed-adjust$/.test(n.className)?e=n:(e=o,t.insertBefore(o,t.firstChild)):(e=o,t.insertBefore(o,t.firstChild));return e},createFixedAdjustElement:function(){if(this.contentSelector){var t,e=document.querySelector(this.contentSelector),o=this.getFixedAdjustElement(e);if(o)(t=o.classList).remove.apply(t,(0,n.Z)(s()(m.FIXED_ADJUST))),this.isDense?o.classList.add(m.FIXED_ADJUST.DENSE):this.isProminent?o.classList.add(m.FIXED_ADJUST.PROMINENT):this.isProminentDense?o.classList.add(m.FIXED_ADJUST.DENSE_PROMINENT):this.isShort||this.isShortCollapsed?o.classList.add(m.FIXED_ADJUST.SHORT):o.classList.add(m.FIXED_ADJUST.STANDARD)}else console.warn("[UiTopAppBar]","The 'contentSelector' prop is required")},init:function(){var t=this;this.$topAppBar&&this.$topAppBar.destroy(),this.$nextTick((function(){t.createFixedAdjustElement(),t.$topAppBar=new S(t.el),t.$topAppBar.listen(d.NAVIGATION_EVENT,(function(){t.$emit(t.isNonRegular?m.EVENT.CLOSE:m.EVENT.NAV)}))}))}}}},35036:function(t,e,o){"use strict";o.d(e,{s:function(){return c}});var n=o(73114),i={class:"mdc-top-app-bar__row"},s={class:"mdc-top-app-bar__section mdc-top-app-bar__section--align-start"},r={class:"mdc-top-app-bar__brand"},a={class:"mdc-top-app-bar__title"},l={class:"mdc-top-app-bar__section mdc-top-app-bar__section--align-end",role:"toolbar"};function c(t,e,o,c,p,d){var h=(0,n.resolveComponent)("mdc-icon-button");return(0,n.openBlock)(),(0,n.createBlock)("header",{class:d.className},[(0,n.createVNode)("div",i,[(0,n.createVNode)("section",s,[(0,n.createVNode)("span",r,[(0,n.renderSlot)(t.$slots,"nav-icon",{navIconClass:p.UI_TOP_APP_BAR.cssClasses.navIcon},(function(){return[d.defaultNavIcon?((0,n.openBlock)(),(0,n.createBlock)(h,{key:0,id:o.navId,class:p.UI_TOP_APP_BAR.cssClasses.navIcon,textContent:(0,n.toDisplayString)(d.defaultNavIcon)},null,8,["id","class","textContent"])):(0,n.createCommentVNode)("",!0)]}))]),(0,n.createVNode)("span",a,[(0,n.renderSlot)(t.$slots,"default",{},(function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(o.title),1)]}))])]),(0,n.createVNode)("section",l,[(0,n.renderSlot)(t.$slots,"toolbar",{toolbarItemClass:p.UI_TOP_APP_BAR.cssClasses.actionItem})])])],2)}}}]);