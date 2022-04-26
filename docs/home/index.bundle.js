zuix.setComponentCache([{componentId:"/news-blog/lib/1.1/components/context-menu",controller:(module={exports:function(e){let i,t,n,o=!0;function a(){o&&!i.isPlaying()&&(o=!1,n.show(),i.playTransition({onEnd:function(t,n){e.trigger("open")}}),i.css("bottom",0).get().focus(),t.css("opacity",1))}function s(){o||i.isPlaying()||(o=!0,i.playTransition({onEnd:function(){n.hide(),e.trigger("close")}}),t.css("opacity",0),i.css("bottom",-i.position().rect.height+"px"))}e.create=function(){(i=e.field("menu")).css("bottom",-i.position().rect.height+"px"),n=e.view(),t=n.hide().find(".container").on({click:s,keydown:function(t){27===(t=t||window.event).keyCode&&s()}}),zuix.load("@lib/controllers/gesture-helper",{view:n,on:{"gesture:pan":function(t,n){i.hasClass("no-transition")||i.addClass("no-transition"),0<n.shiftY&&i.css("bottom",-n.shiftY+"px")},"gesture:release":function(t,n){i.removeClass("no-transition"),n.velocity<=0&&"up"===n.direction?i.css("bottom",0):"down"===n.direction&&s()}}}),e.expose("show",a),e.expose("hide",s)}}}).exports,css:".container {\n    position: fixed;\n    bottom:0;\n    left:0;\n    right: 0;\n    top: 0;\n    opacity: 0;\n    -ms-touch-action: none;\n    touch-action: none;\n    background: rgba(0,0,0,0.5);\n    z-index: 200;\n    transition: opacity 0.2s ease-in;\n}\n.menu {\n    outline: none !important;\n    margin-left: auto;\n    margin-right: auto;\n    left: 50%;\n    transform: translateX(-50%);\n    position: absolute;\n    width: 100%;\n    max-width: 420px;\n    background: white;\n    border: solid 1px rgba(0,0,0,0.1);\n    border-radius: 16px 16px 0 0;\n    box-shadow: 0 -5px 5px -5px #333;\n    transition: bottom 0.3s ease-in-out;\n}\nbutton {\n    width: 100%;\n    height:48px;\n    padding: 16px;\n    background: none;\n    border: none;\n}\nbutton span {\n    font-family: sans-serif, Helvetica;\n    font-size: 120%;\n    margin-left: 24px;\n}\nbutton i {\n    color: dimgray;\n    font-size: 24px;\n    margin-left: 8px;\n}\nbutton:hover {\n    background: rgba(0,0,0,0.1);\n}\n.no-transition {\n    transition: none;\n}\n",view:'<div class="container">\n    <div #menu="" class="menu" tabindex="0"></div>\n</div>\n'},{componentId:"/news-blog/lib/1.1/controllers/view-pager",controller:((module={}).exports=function(){const a={duration:.3,easing:"ease"},P="cubic-bezier(0.0,0.1,0.35,1.1)",$="cubic-bezier(0.0,0.1,0.35,1.0)",u="horizontal",d="vertical",o=1,W=-1;let s=-1,r=0,e=null,i=3e3,l=o,t=null,c=!1,p=u,h=!1,f=!1,Y=!1,B=!0,D=0,G=!1,g=!1,X=!1,n=!1,x=!1,m={width:0,height:0},v=null,w=null,y=null;const b=new MutationObserver(function(t,n){y=z.view().children(),C()}),z=this;function C(){null!=t&&clearTimeout(t),t=setTimeout(I,250)}function I(t){if(t||!g&&null==v){y.each(function(t,n){this.css({position:"absolute",left:0,top:0})});const o=q(z.view().get());if(0===o.width||0===o.height){if(0===o.height&&z.view().position().visible){let e=0;y.each(function(t,n){n=q(n);n.height>e&&(e=n.height)}),o.height<e&&z.view().css("height",e+"px")}C()}else{m=o;let e=0,i=!1;y.each(function(t,n){n=q(n);if(p===u){let t=(o.height-n.height)/2;t<0&&(t=0),Z(this,a),V(this,e,t),e+=n.width}else{let t=(o.width-n.width)/2;t<0&&(t=0),Z(this,a),V(this,t,e),e+=n.height}("true"===this.attr("data-ui-lazyload,z-lazy")||0<this.find('[data-ui-lazyload="true"],[z-lazy="true"]').length())&&(i=!0)}),n=i,S(s),1<y.length()&&F()}}else C()}function k(){let t=!1,n=parseInt(s)+1;return n>=y.length()&&(n=y.length()-1,t=!0),S(n,a),!t}function T(){let t=!1,n=parseInt(s)-1;return n<0&&(n=0,t=!0),S(n,a),!t}function O(){S(0,a)}function R(){S(y.length()-1,a)}function j(){z.view().position().visible&&S(parseInt(s)+l,a),F()}function F(t){var n;t&&(i=t),L(),!0===h&&(t=z.view().position().visible,e=t?(X||zuix.componentize(z.view()),n=y.eq(s).attr("slide-interval")||i,setTimeout(j,n)):setTimeout(F,500),X=t)}function L(){null!=e&&clearTimeout(e)}function A(r,l){let c=0;return y.each(function(t,n){var e=E(this),t=(c=t,q(n));const i=e.position.x,o=e.position.y,a=t.width,s=t.height;if(p===u&&(i>r||i+a>r)||p===d&&(o>l||o+s>l))return!1}),c}function M(t,n){var e=z.view().position();S(A(t.x-e.x,t.y-e.y),null!=n?n:a)}function S(t,n){r=s,t<0?(l=o,t=0):t>=y.length()?(l=W,t=y.length()-1):t!==s&&(l=s<t?o:W),(s=t)!=r&&(y.eq(s).css("z-index",1),-1!==r&&y.eq(r).css("z-index",0),z.trigger("page:change",{in:s,out:r}));const e=y.eq(t);var t=E(e),i=q(e.get());J({x:(m.width-i.width)/2-t.position.x,y:(m.height-i.height)/2-t.position.y},n),F()}function J(n,e){var i=_(),o=E(y.eq(0));const a=y.eq(y.length()-1);var s=E(a);if(y.each(function(t,n){const e=E(this);var i=_();e.dragStart={x:i.marginLeft+e.position.x,y:i.marginTop+e.position.y}}),p===u){let t=n.x;0<o.position.x+n.x?t=-o.position.x:s.position.x+a.get().offsetWidth+n.x<m.width&&(t=2*-i.marginLeft+m.width-(s.position.x+a.get().offsetWidth)),n.x-t!=0&&null!=e&&(e={duration:e.duration*(t/n.x),easing:P},(!isFinite(e.duration)||e.duration<0)&&(e.duration=.2)),N(t,0,e)}else{let t=n.y;0<o.position.y+n.y?t=-o.position.y:s.position.y+a.get().offsetHeight+n.y<m.height&&(t=2*-i.marginTop+m.height-(s.position.y+a.get().offsetHeight)),n.y-t!=0&&null!=e&&(e={duration:e.duration*(t/n.y),easing:P},(!isFinite(e.duration)||e.duration<0)&&(e.duration=.2)),N(0,t,e)}x=!0}function q(t){var n=t.getBoundingClientRect();return{width:n.width||t.offsetWidth,height:t.offsetHeight||n.height}}function E(t){const n=t.get().data=t.get().data||{};return n.position=n.position||{x:0,y:0},n}function H(){n&&null==w&&clearInterval(v)}function _(){const e={w:0,h:0,marginLeft:0,marginTop:0};return y.each(function(t,n){n=q(n);e.w+=n.width,e.h+=n.height}),p===u&&e.w<m.width?e.marginLeft=(m.width-e.w)/2:p===d&&e.h<m.height&&(e.marginTop=(m.height-e.h)/2),e}function N(i,o,a){null!=a?(n&&(H(),null!=w&&clearTimeout(w),null!=v&&clearInterval(v),v=setInterval(function(){G&&y.each(function(t,n){const e=window.getComputedStyle(n,null),i=parseFloat(e.width.replace("px","")),o=parseFloat(e.height.replace("px",""));var a=parseFloat(e.left.replace("px","")),s=parseFloat(e.top.replace("px",""));if(0<i&&0<o){n=zuix.$(n);const r=-m.width/2,l=1.5*m.width,c=-m.height/2,u=1.5*m.height;a+i<r||s+o<c||a>l||s>u?"hidden"!==n.visibility()&&n.visibility("hidden"):"visible"!==n.visibility()&&n.visibility("visible")}}),zuix.componentize(z.view())},10)),w=setTimeout(function(){w=null,H()},1e3*a.duration),a=a.duration+"s "+a.easing):n&&zuix.componentize(z.view()),y.each(function(t,n){var e=E(this);Z(this,a),V(this,e.dragStart.x+i,e.dragStart.y+o)})}function K(t,n){var e;g&&n.scrollIntent()&&!n.done&&(!c&&("left"!==n.direction&&"right"!==n.direction||p!==u)&&("up"!==n.direction&&"down"!==n.direction||p!==d)||(c||null!=n.event.touches||z.view().get().addEventListener("click",function(t){c&&(c=!1,t.cancelBubble=!0,t.preventDefault()),z.view().get().removeEventListener("click",this,!0)},!0),c=!0,n.cancel()),e=_(),p===u&&"horizontal"===n.scrollIntent()?N(n.shiftX-e.marginLeft,0):p===d&&"vertical"===n.scrollIntent()&&N(0,n.shiftY-e.marginTop))}function Q(t){return!f||1.25<Math.abs(t.velocity)}function U(t,n){if(tt(n)&&!Q(n))switch(n.direction){case"right":p===u&&T();break;case"left":p===u&&k();break;case"down":p===d&&T();break;case"up":p===d&&k()}}function V(t,n,e){const i=E(t);isNaN(n)||isNaN(e)||(i.position={x:n,y:e},t.css({left:i.position.x+"px",top:i.position.y+"px"})),i}function Z(t,n){t.css({transition:n=null==n?"none":n})}function tt(t){let n=document.elementsFromPoint(t.x,t.y);return(!(0<n.length)||z.view().get().contains(n[0]))&&(0<(n=n.filter(t=>t.attributes["z-load"]&&t.attributes["z-load"].value===z.view().attr("z-load"))).length&&n[0]===z.view().get())}z.init=function(){const t=z.options(),n=z.view();t.html=!1,t.css=!1,f=!0===t.enablePaging||"true"===n.attr("data-o-paging"),h=!0===t.autoSlide||"true"===n.attr("data-o-slide"),B=!1!==t.passive&&"false"!==n.attr("data-o-passive"),Y=!0===t.holdTouch||"true"===n.attr("data-o-hold"),D=t.startGap||n.attr("data-o-startgap"),!0!==t.verticalLayout&&n.attr("data-o-layout")!==d||(p=d),null!=t.slideInterval?i=t.slideInterval:null!=n.attr("data-o-slide-interval")&&(i=parseInt(n.attr("data-o-slide-interval"))),G=!0===t.autohide||"true"===n.attr("data-o-autohide")},z.create=function(){const t=z.view().css({position:"relative",overflow:"hidden"});y=t.children(),t.find("img").each(function(t,n){this.one("load",C)}),zuix.$(window).on("resize",function(){I(!0)}).on("orientationchange",function(){I(!0)}),b.observe(t.get(),{attributes:!1,childList:!0,subtree:!0,characterData:!1}),C();let n=null;zuix.load("@lib/controllers/gesture-helper",{view:t,passive:B,startGap:D,on:{"gesture:touch":function(t,n){tt(n)&&(c=!1,L(),g=!0,x=!1,y.each(function(t,n){const e=E(this);var i=_();const o=window.getComputedStyle(n,null);e.position.x=parseFloat(o.left.replace("px","")),e.position.y=parseFloat(o.top.replace("px","")),this.css("left",e.position.x+"px"),this.css("top",e.position.y+"px"),e.dragStart={x:i.marginLeft+e.position.x,y:i.marginTop+e.position.y}}),Y&&n.cancel())},"gesture:release":function(t,n){if(null!=n&&(n.done=!0,!x&&(p===u&&"horizontal"===n.scrollIntent()||p===d&&"vertical"===n.scrollIntent()))){var e=null,i=Math.exp(Math.abs(n.velocity/(Math.abs(n.velocity)<=1.25?5:2))+1);let t=.99+i/1e3;.999<t&&(t=.999);const s=Math.log(.01/Math.abs(n.velocity))/Math.log(t),r={duration:s/1e3,easing:$},l=n.stepSpeed<1.25?0:i*n.velocity*(1-Math.pow(t,1+s))/(1-t),c={x:l,y:l};if(Q(n)||null==e){var o=n;var a=c;f?(r.duration*=.5,p===u?M({x:o.x-a.x,y:o.y},r):M({x:o.x,y:o.y-a.y},r)):J(a,r)}}H(),g=!1,F()},"gesture:tap":function(t,e){tt(e)&&(null!=n&&clearTimeout(n),n=setTimeout(function(){var t,n;t=e,n=z.view().position(),n=A(t.x-n.x,t.y-n.y),z.trigger("page:tap",n,t),f&&M(t)},50))},"gesture:pan":K,"gesture:swipe":U},ready:function(){I(!0),S(0)}}),z.expose("page",function(t){if(null==t)return parseInt(s);S(t,a)}).expose("get",function(t){return t<y.length()&&0<y.length()?y.eq(t):null}).expose("slide",function(t){!1!==t?F((h=!0)!==t?t:i):L()}).expose("layout",function(t){if(null==t)return p;p=t===d?d:u,C()}).expose("refresh",function(){I(!0)}).expose("next",k).expose("prev",T).expose("last",R).expose("first",O)},z.destroy=function(){null!=b&&b.disconnect()}},module.exports)},{componentId:"/news-blog/lib/1.1/controllers/header-auto-hide",controller:((module={}).exports=function(i){let o,n,a,s,r,l=0,c;function u(){null!=o&&o.hasClass("header-collapse")&&o.removeClass("header-collapse").addClass("header-expand"),null!=n&&n.hasClass("footer-collapse")&&n.removeClass("footer-collapse").addClass("footer-expand"),c&&c.check()}function d(){o.hasClass("header-collapse")||o.removeClass("header-expand").addClass("header-collapse"),null==n||n.hasClass("footer-collapse")||n.removeClass("footer-expand").addClass("footer-collapse")}i.init=function(){i.options().css=!1,i.options().html=!1},i.create=function(){if(a=i.options().showEnd||"true"===i.view().attr("data-o-show-end"),!(o=i.options().header||i.view().attr("data-o-header")))throw new Error("Header element not specified.");if(0===(o=zuix.field(o)).length())throw new Error('Header element not found: "'+o+'".');s=o.position().rect.height;var t=getComputedStyle(o.get()).position;"fixed"!==t&&"absolute"!==t&&(l=s);const e=i.view();zuix.$.appendCss("\n/* Header bar shrink/expand */\n@keyframes header-collapse-anim {\n  from { top: 0; }\n  to { top: -"+s+"px; }\n}\n@keyframes header-expand-anim {\n  from { top: -"+s+"px; }\n  to { top: 0; }\n}\n.header-collapse {\n  animation-fill-mode: forwards;\n  animation-name: header-collapse-anim;\n  animation-duration: 0.5s;\n  top: -"+s+"px;\n}\n.header-expand {\n  animation-fill-mode: forwards;\n  animation-name: header-expand-anim;\n  animation-duration: 0.5s;\n  top: 0px;\n}\n",null,"onscroll_header_hide_show");t=i.options().footer||i.view().attr("data-o-footer");null!=t&&((n=zuix.field(t)).css({position:"fixed",zIndex:1}),r=n.position().rect.height,zuix.$.appendCss("\n/* Footer bar shrink/expand */\n@keyframes footer-collapse-anim {\n  from { bottom: 0; }\n  to { bottom: -"+r+"px; }\n}\n@keyframes footer-expand-anim {\n  from { bottom: -"+r+"px; }\n  to { bottom: 0; }\n}\n.footer-collapse {\n  animation-fill-mode: forwards;\n  animation-name: footer-collapse-anim;\n  animation-duration: 0.5s;\n  bottom: -"+r+"px;\n}\n.footer-expand {\n  animation-fill-mode: forwards;\n  animation-name: footer-expand-anim;\n  animation-duration: 0.5s;\n  bottom: 0;\n}\n",null,"zkit_onscroll_hide_show")),zuix.load("@lib/controllers/scroll-helper",{view:e,on:{"scroll:change":function(t,n){"scroll"===n.event&&n.info.viewport.y<-l?n.info.shift.y<-4?(0<l&&"fixed"!==o.css("position")&&(e.css({paddingTop:s+"px"}),o.hide().css({position:"fixed",zIndex:1})),d()):4<n.info.shift.y&&(o.show(),u()):"hit-bottom"===n.event&&a?(o.show(),u()):0<l&&0===n.info.viewport.y&&(e.css({paddingTop:null}),o.show().css({position:null,zIndex:null})),i.trigger("page:scroll",n)}},ready:function(t){c=t,i.expose("scroll",{get:function(){return c}}),i.trigger("scroll:ready",c)}}),i.expose("show",u),i.expose("hide",d)}},module.exports)}]);