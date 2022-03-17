zuix.setComponentCache([{componentId:"items_list",controller:((module={}).exports=function(o){let e;o.create=function(){var t=o.options().section;!function(t){zuix.$.ajax({url:t,success:function(t){e=JSON.parse(t);{const n=o.field("list");if(null!=e){let i="";window.__cardOptions=window.__cardOptions||{},window.__cardOptions[o.context.contextId]=window.__cardOptions[o.context.contextId]||[],e.forEach(function(t,n){t={lazyLoad:!0,model:t};const e=zuix.$(document.createElement("div"));n<5?e.attr({"z-load":"items_list/item",self:n<2?"size-1of2 lg-full md-full sm-full":"size-1of3 lg-half md-half sm-full",class:"card-wrapper visible-on-ready"}):e.attr({"z-load":"items_list/item_mini",self:"size-1of4 lg-half md-half sm-full",class:"card-wrapper mini visible-on-ready"}),e.attr({layout:"column stretch-center","z-options":"__cardOptions["+o.context.contextId+"]["+n+"]"}),window.__cardOptions[o.context.contextId][n]=t,i+=e.get().outerHTML}),n.html(i)}return}},error:function(t){}})}(t)}},module.exports),css:".list {\n  margin-top: 96px;\n}\n\n.card-wrapper {\n  margin: 0;\n  padding:8px;\n  max-width: 100%;\n  min-height: 300px;\n  overflow: hidden;\n  font-family: Helvetica, sans-serif !important;\n}\n\n.info {\n  margin-left:4px;\n  margin-right:4px;\n}\n\n.card {\n  width: 100%;\n  position: relative;\n  max-width: 640px;\n  min-height: 300px;\n  padding: 12px 12px 24px;\n}\n.card i {\n  /*color: var(--primary-color);*/\n  font-size: 160%;\n}\n.cover-wrapper {\n  cursor: pointer;\n  width: 100%;\n  border-radius: 12px;\n  padding-top: 75%;\n  position: relative;\n  overflow: hidden;\n  background-size: cover!important;\n  background: #f2f2f2 no-repeat center center;\n}\n.summary {\n  width: 100%;\n}\n.options {\n  color: dimgrey;\n}\n.options span {\n  font-size: 80%;\n}\n.options button {\n  height: 36px;\n  padding-top: 4px;\n  transform: translate(14px, 3px);\n  background: transparent;\n  border: none;\n  border-radius: 42px;\n}\n",view:'<div #list="" self="size-xxlarge center" layout="rows stretch-center" class="list animate__animated animate__fadeIn"></div>\n'},{componentId:"/news-blog/lib/1.1/controllers/view-pager",controller:((module={}).exports=function(){const a={duration:.3,easing:"ease"},$="cubic-bezier(0.0,0.1,0.35,1.1)",D="cubic-bezier(0.0,0.1,0.35,1.0)",d="horizontal",u="vertical",o=1,E=-1;let r=-1,s=0,e=null,i=3e3,l=o,t=null,c=!1,p=d,W=!1,h=!1,B=!1,G=!0,j=0,J=!1,f=!1,P=!1,n=!1,g=!1,x={width:0,height:0},m=null,v=null,w=null;const y=new MutationObserver(function(t,n){w=b.view().children(),z()}),b=this;function z(){null!=t&&clearTimeout(t),t=setTimeout(I,250)}function I(t){if(t||!f&&null==m){w.each(function(t,n){this.css({position:"absolute",left:0,top:0})});const o=F(b.view().get());if(0===o.width||0===o.height){if(0===o.height&&b.view().position().visible){let e=0;w.each(function(t,n){n=F(n);n.height>e&&(e=n.height)}),o.height<e&&b.view().css("height",e+"px")}z()}else{x=o;let e=0,i=!1;w.each(function(t,n){n=F(n);if(p===d){let t=(o.height-n.height)/2;t<0&&(t=0),Z(this,a),H(this,e,t),e+=n.width}else{let t=(o.width-n.width)/2;t<0&&(t=0),Z(this,a),H(this,t,e),e+=n.height}("true"===this.attr("data-ui-lazyload,z-lazy")||0<this.find('[data-ui-lazyload="true"],[z-lazy="true"]').length())&&(i=!0)}),n=i,M(r),1<w.length()&&T()}}else z()}function _(){let t=!1,n=parseInt(r)+1;return n>=w.length()&&(n=w.length()-1,t=!0),M(n,a),!t}function C(){let t=!1,n=parseInt(r)-1;return n<0&&(n=0,t=!0),M(n,a),!t}function R(){M(0,a)}function X(){M(w.length()-1,a)}function Y(){M(parseInt(r)+l,a),T()}function T(t){var n;k(),!0===W&&(n=b.view().position().visible,e=n?(P||zuix.componentize(b.view()),setTimeout(Y,i)):setTimeout(T,500),P=n)}function k(){null!=e&&clearTimeout(e)}function A(s,l){let c=0;return w.each(function(t,n){var e=S(this),t=(c=t,F(n));const i=e.position.x,o=e.position.y,a=t.width,r=t.height;if(p===d&&(i>s||i+a>s)||p===u&&(o>l||o+r>l))return!1}),c}function L(t,n){var e=b.view().position();M(A(t.x-e.x,t.y-e.y),null!=n?n:a)}function M(t,n){s=r,t<0?(l=o,t=0):t>=w.length()?(l=E,t=w.length()-1):t!==r&&(l=r<t?o:E),(r=t)!=s&&(w.eq(r).css("z-index",1),-1!==s&&w.eq(s).css("z-index",0),b.trigger("page:change",{in:r,out:s}));const e=w.eq(t);var t=S(e),i=F(e.get());K({x:(x.width-i.width)/2-t.position.x,y:(x.height-i.height)/2-t.position.y},n),T()}function K(n,e){var i=N(),o=S(w.eq(0));const a=w.eq(w.length()-1);var r=S(a);if(w.each(function(t,n){const e=S(this);var i=N();e.dragStart={x:i.marginLeft+e.position.x,y:i.marginTop+e.position.y}}),p===d){let t=n.x;0<o.position.x+n.x?t=-o.position.x:r.position.x+a.get().offsetWidth+n.x<x.width&&(t=2*-i.marginLeft+x.width-(r.position.x+a.get().offsetWidth)),n.x-t!=0&&null!=e&&(e={duration:e.duration*(t/n.x),easing:$},(!isFinite(e.duration)||e.duration<0)&&(e.duration=.2)),q(t,0,e)}else{let t=n.y;0<o.position.y+n.y?t=-o.position.y:r.position.y+a.get().offsetHeight+n.y<x.height&&(t=2*-i.marginTop+x.height-(r.position.y+a.get().offsetHeight)),n.y-t!=0&&null!=e&&(e={duration:e.duration*(t/n.y),easing:$},(!isFinite(e.duration)||e.duration<0)&&(e.duration=.2)),q(0,t,e)}g=!0}function F(t){var n=t.getBoundingClientRect();return{width:n.width||t.offsetWidth,height:t.offsetHeight||n.height}}function S(t){const n=t.get().data=t.get().data||{};return n.position=n.position||{x:0,y:0},n}function O(){n&&null==v&&clearInterval(m)}function N(){const e={w:0,h:0,marginLeft:0,marginTop:0};return w.each(function(t,n){n=F(n);e.w+=n.width,e.h+=n.height}),p===d&&e.w<x.width?e.marginLeft=(x.width-e.w)/2:p===u&&e.h<x.height&&(e.marginTop=(x.height-e.h)/2),e}function q(i,o,a){null!=a?(n&&(O(),null!=v&&clearTimeout(v),null!=m&&clearInterval(m),m=setInterval(function(){J&&w.each(function(t,n){const e=window.getComputedStyle(n,null),i=parseFloat(e.width.replace("px","")),o=parseFloat(e.height.replace("px",""));var a=parseFloat(e.left.replace("px","")),r=parseFloat(e.top.replace("px",""));if(0<i&&0<o){n=zuix.$(n);const s=-x.width/2,l=1.5*x.width,c=-x.height/2,d=1.5*x.height;a+i<s||r+o<c||a>l||r>d?"hidden"!==n.visibility()&&n.visibility("hidden"):"visible"!==n.visibility()&&n.visibility("visible")}}),zuix.componentize(b.view())},10)),v=setTimeout(function(){v=null,O()},1e3*a.duration),a=a.duration+"s "+a.easing):n&&zuix.componentize(b.view()),w.each(function(t,n){var e=S(this);Z(this,a),H(this,e.dragStart.x+i,e.dragStart.y+o)})}function Q(t,n){var e;n.scrollIntent()&&!n.done&&(!c&&("left"!==n.direction&&"right"!==n.direction||p!==d)&&("up"!==n.direction&&"down"!==n.direction||p!==u)||(c||null!=n.event.touches||b.view().get().addEventListener("click",function(t){c&&(c=!1,t.cancelBubble=!0,t.preventDefault()),b.view().get().removeEventListener("click",this,!0)},!0),c=!0,n.cancel()),e=N(),p===d&&"horizontal"===n.scrollIntent()?q(n.shiftX-e.marginLeft,0):p===u&&"vertical"===n.scrollIntent()&&q(0,n.shiftY-e.marginTop))}function U(t){return!h||1.25<Math.abs(t.velocity)}function V(t,n){if(!U(n))switch(n.direction){case"right":p===d&&C();break;case"left":p===d&&_();break;case"down":p===u&&C();break;case"up":p===u&&_()}}function H(t,n,e){const i=S(t);isNaN(n)||isNaN(e)||(i.position={x:n,y:e},t.css({left:i.position.x+"px",top:i.position.y+"px"})),i}function Z(t,n){t.css({transition:n=null==n?"none":n})}b.init=function(){const t=b.options(),n=b.view();t.html=!1,t.css=!1,h=!0===t.enablePaging||"true"===n.attr("data-o-paging"),W=!0===t.autoSlide||"true"===n.attr("data-o-slide"),G=!1!==t.passive&&"false"!==n.attr("data-o-passive"),B=!0===t.holdTouch||"true"===n.attr("data-o-hold"),j=t.startGap||n.attr("data-o-startgap"),!0!==t.verticalLayout&&n.attr("data-o-layout")!==u||(p=u),null!=t.slideInterval?i=t.slideInterval:null!=n.attr("data-o-slide-interval")&&(i=parseInt(n.attr("data-o-slide-interval"))),J=!0===t.autohide||"true"===n.attr("data-o-autohide")},b.create=function(){const t=b.view().css({position:"relative",overflow:"hidden"});w=t.children(),t.find("img").each(function(t,n){this.one("load",z)}),zuix.$(window).on("resize",function(){I(!0)}).on("orientationchange",function(){I(!0)}),y.observe(t.get(),{attributes:!1,childList:!0,subtree:!0,characterData:!1}),z(),M(0);let n=null;zuix.load("@lib/controllers/gesture-helper",{view:t,passive:G,startGap:j,on:{"gesture:touch":function(t,n){c=!1,k(),f=!0,g=!1,w.each(function(t,n){const e=S(this);var i=N();const o=window.getComputedStyle(n,null);e.position.x=parseFloat(o.left.replace("px","")),e.position.y=parseFloat(o.top.replace("px","")),this.css("left",e.position.x+"px"),this.css("top",e.position.y+"px"),e.dragStart={x:i.marginLeft+e.position.x,y:i.marginTop+e.position.y}}),B&&n.cancel()},"gesture:release":function(t,n){if(null!=n&&(n.done=!0,!g&&(p===d&&"horizontal"===n.scrollIntent()||p===u&&"vertical"===n.scrollIntent()))){var e=null,i=Math.exp(Math.abs(n.velocity/(Math.abs(n.velocity)<=1.25?5:2))+1);let t=.99+i/1e3;.999<t&&(t=.999);const r=Math.log(.01/Math.abs(n.velocity))/Math.log(t),s={duration:r/1e3,easing:D},l=n.stepSpeed<1.25?0:i*n.velocity*(1-Math.pow(t,1+r))/(1-t),c={x:l,y:l};if(U(n)||null==e){var o=n;var a=c;h?(s.duration*=.5,p===d?L({x:o.x-a.x,y:o.y},s):L({x:o.x,y:o.y-a.y},s)):K(a,s)}}O(),f=!1,T()},"gesture:tap":function(t,e){null!=n&&clearTimeout(n),n=setTimeout(function(){var t,n;t=e,n=b.view().position(),n=A(t.x-n.x,t.y-n.y),b.trigger("page:tap",n,t),h&&L(t)},50)},"gesture:pan":Q,"gesture:swipe":V},ready:function(){I(!0)}}),b.expose("page",function(t){if(null==t)return parseInt(r);M(t,a)}).expose("get",function(t){return w.eq(t)}).expose("slide",function(t){(!0===t?T:k)()}).expose("layout",function(t){if(null==t)return p;p=t===u?u:d,z()}).expose("refresh",function(){I(!0)}).expose("next",_).expose("prev",C).expose("last",X).expose("first",R)},b.destroy=function(){null!=y&&y.disconnect()}},module.exports)},{componentId:"/news-blog/lib/1.1/controllers/header-auto-hide",controller:(module={},zuix.controller(function(i){let n,o,a=0,r=0,s;function l(){null!=n&&n.hasClass("header-collapse")&&n.removeClass("header-collapse").addClass("header-expand"),null!=o&&o.hasClass("footer-collapse")&&o.removeClass("footer-collapse").addClass("footer-expand"),s&&s.check()}function c(){null==n||n.hasClass("header-collapse")||(0===a&&0<(a=n.position().rect.height)&&d(),n.removeClass("header-expand").addClass("header-collapse")),null==o||o.hasClass("footer-collapse")||(0===r&&(r=o.position().rect.height,0<a&&u()),o.removeClass("footer-expand").addClass("footer-collapse"))}function d(){zuix.$.appendCss("\n/* Header bar shrink/expand */\n@keyframes header-collapse-anim {\n  from { top: 0; }\n  to { top: -"+a+"px; }\n}\n@keyframes header-expand-anim {\n  from { top: -"+a+"px; }\n  to { top: 0; }\n}\n.header-collapse {\n  animation-fill-mode: forwards;\n  animation-name: header-collapse-anim;\n  animation-duration: 0.5s;\n  top: -"+a+"px;\n}\n.header-expand {\n  animation-fill-mode: forwards;\n  animation-name: header-expand-anim;\n  animation-duration: 0.5s;\n  top: 0px;\n}\n",null,"onscroll_header_hide_show")}function u(){zuix.$.appendCss("\n/* Footer bar shrink/expand */\n@keyframes footer-collapse-anim {\n  from { bottom: 0; }\n  to { bottom: -"+r+"px; }\n}\n@keyframes footer-expand-anim {\n  from { bottom: -"+r+"px; }\n  to { bottom: 0; }\n}\n.footer-collapse {\n  animation-fill-mode: forwards;\n  animation-name: footer-collapse-anim;\n  animation-duration: 0.5s;\n  bottom: -"+r+"px;\n}\n.footer-expand {\n  animation-fill-mode: forwards;\n  animation-name: footer-expand-anim;\n  animation-duration: 0.5s;\n  bottom: 0;\n}\n",null,"zkit_onscroll_hide_show")}i.init=function(){i.options().css=!1,i.options().html=!1},i.create=function(){var t=i.options().header||i.view().attr("data-o-header"),t=(null!=t&&(n=zuix.field(t)).css({position:"fixed",zIndex:1}),i.options().footer||i.view().attr("data-o-footer")),t=(null!=t&&(o=zuix.field(t)).css({position:"fixed",zIndex:1}),i.options().height||i.view().attr("data-o-height"));null==t||isNaN(t)||(a=r=parseInt(t),d(),u());const e=(new Date).getTime();zuix.load("@lib/controllers/scroll-helper",{view:i.view(),on:{"scroll:change":function(t,n){"scroll"===n.event&&1e3<(new Date).getTime()-e&&(n.info.shift.y<0?c():0<n.info.shift.y&&l()),i.trigger("page:scroll",n)}},ready:function(t){s=t,i.expose("scroll",{get:function(){return s}}),i.trigger("scroll:ready",s)}}),i.expose("show",l),i.expose("hide",c)}}),module.exports)}]);