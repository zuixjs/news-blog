zuix.setComponentCache([{componentId:"https://zuixjs.github.io/zkit/lib/1.2/components/context-menu",controller:function(){"use strict";let t={};return t.exports=function(e){let i,t,n,o=!0;function s(){o&&!i.isPlaying()&&(o=!1,n.show(),i.playTransition({onEnd:function(t,n){e.trigger("open")}}),i.css("bottom",0).get().focus(),t.css("opacity",1))}function r(){o||i.isPlaying()||(o=!0,i.playTransition({onEnd:function(){n.hide(),e.trigger("close")}}),t.css("opacity",0),i.css("bottom",-i.position().rect.height+"px"))}e.create=function(){(i=e.field("menu")).css("bottom",-i.position().rect.height+"px"),n=e.view().hide(),t=n.find(".menu-overlay"),n.find(".container").on({click:r,keydown:function(t){27===(t=t||window.event).keyCode&&r()}}),zuix.load("https://zuixjs.github.io/zkit/lib/1.1/controllers/gesture-helper",{view:n,on:{"gesture:pan":function(t,n){i.hasClass("no-transition")||i.addClass("no-transition"),0<n.shiftY&&i.css("bottom",-n.shiftY+"px")},"gesture:release":function(t,n){i.removeClass("no-transition"),n.velocity<=0&&"up"===n.direction?i.css("bottom",0):"down"===n.direction&&r()}}}),e.expose("show",s),e.expose("hide",r)}},t.exports}(),css:".menu-overlay {\n    position: fixed;\n    bottom:0;\n    left:0;\n    right: 0;\n    top: 0;\n    opacity: 0;\n    -ms-touch-action: none;\n    touch-action: none;\n    background: rgba(73,73,73,0.5);\n    z-index: 1001;\n    transition: opacity 0.4s ease-in;\n}\n.container {\n    position: fixed;\n    bottom:0;\n    left:0;\n    right: 0;\n    top: 0;\n    -ms-touch-action: none;\n    touch-action: none;\n    z-index: 1002;\n}\n.menu {\n    outline: none !important;\n    margin-left: auto;\n    margin-right: auto;\n    left: 50%;\n    transform: translateX(-50%);\n    position: absolute;\n    width: 100%;\n    max-width: 420px;\n    background: white;\n    border: solid 1px rgba(0,0,0,0.1);\n    border-radius: 16px 16px 0 0;\n    box-shadow: 0 -5px 5px -5px #333;\n    transition: bottom 0.3s ease-in-out;\n    transition-delay: 0.1s;\n}\nbutton {\n    width: 100%;\n    height:48px;\n    padding: 16px;\n    background: none;\n    border: none;\n}\nbutton span {\n    font-family: sans-serif, Helvetica;\n    font-size: 120%;\n    margin-left: 24px;\n}\nbutton i {\n    color: dimgray;\n    font-size: 24px;\n    margin-left: 8px;\n}\nbutton:hover {\n    background: rgba(0,0,0,0.1);\n}\n.no-transition {\n    transition: none;\n}\n",view:'<div class="menu-overlay"></div>\n<div class="container">\n    <div #menu="" class="menu" tabindex="0"></div>\n</div>\n'},{componentId:"https://zuixjs.github.io/zkit/lib/1.1/controllers/gesture-helper",controller:function(){"use strict";let t={};return t.exports=function(){const e=0,o=1,s=2,i=750;let r=e,a,c=!1,u=!0,l=-1,p,d,h,g=!1,f=(new Date).getTime();Math.sign=Math.sign||function(t){return(0<t)-(t<0)||+t};const m=this;function x(t,n,e){var i=(new Date).getTime();a={event:t,cancel:function(){a.event.cancelBubble=!0,u||a.event.preventDefault()},startX:n,startY:e,startTime:i,shiftX:0,shiftY:0,endTime:0,stepX:0,stepY:0,stepTime:i,velocity:0,x:n,y:e,scrollIntent:function(){switch(r){case o:return"horizontal";case s:return"vertical"}return!1}},h=function(i){let o;function t(){i.stepTime=i.endTime,i.stepX=i.shiftX,i.stepY=i.shiftY,i.stepSpeed=0,i.stepDistance=0}function s(){o=i.direction,r.time=(new Date).getTime(),r.x=i.x,r.y=i.y,i.velocity=0,i.distance=0,t()}const r={time:0,x:0,y:0},a={time:0,x:0,y:0};return s(),{update:function(){var t,n,e;a.time=(new Date).getTime(),a.x=i.x,a.y=i.y,null!=o&&o!==i.direction?s():(null==o&&i.direction!==o&&(o=i.direction),t=a.time-r.time,n={x:a.x-r.x,y:a.y-r.y},e=Math.sqrt(n.x*n.x+n.y*n.y),e=(i.distance=e)/t,i.velocity="left"===i.direction||"up"===i.direction?-e:e,i.stepTime=i.endTime-i.stepTime,n={x:i.shiftX-i.stepX,y:i.shiftY-i.stepY},i.stepDistance=Math.sqrt(n.x*n.x+n.y*n.y),i.stepSpeed=i.stepDistance/i.stepTime)},step:t}}(a),m.trigger("gesture:touch",a)}function n(t,n,e){null!=a&&(a.event=t,a.x=n,a.y=e,a.shiftX=n-a.startX,a.shiftY=e-a.startY,a.endTime=(new Date).getTime(),null!=(t=y())&&!1!==p&&(d=null!=d&&d!==a.direction?(p=!1,"cancel"):(p=t,a.direction)),m.trigger("gesture:pan",a))}function v(t){null!=a&&(h.update(),a.event=t,null!=(p=null==p?y():p)&&!1!==p&&m.trigger(p,a)),m.trigger("gesture:release",a),r=e,d=null,p=null,a=null}function y(){let t=null;h.update();var n=180*Math.atan2(a.shiftY-a.stepY,a.shiftX-a.stepX)/Math.PI;return 0===a.shiftX&&0===a.shiftY&&a.startTime>f+100&&a.stepTime<i?(f=(new Date).getTime(),t="gesture:tap"):(r===e||r===o)&&2<a.stepDistance&&(135<=n&&n<=180||-180<=n&&n<=-135)?(a.direction="left",t="gesture:swipe",r=o):(r===e||r===o)&&2<a.stepDistance&&(0<=n&&n<=45||-45<=n&&n<0)?(a.direction="right",t="gesture:swipe",r=o):(r===e||r===s)&&2<a.stepDistance&&45<n&&n<135?(a.direction="down",t="gesture:swipe",r=s):(r===e||r===s)&&2<a.stepDistance&&-135<n&&n<-45&&(a.direction="up",t="gesture:swipe",r=s),2<a.stepDistance&&h.step(),t}m.init=function(){const t=m.view(),n=m.options();n.html=!1,n.css=!1,u=!1!==n.passive&&"false"!==t.attr("data-o-passive"),l=n.startGap||t.attr("data-o-startgap")},m.create=function(){const t=u?zuix.$(window):m.view();t.on("dragstart",{handler:function(t){c||u||t.preventDefault()},passive:u}).on("mousedown",{handler:function(t){const n=zuix.$(t.target);1===t.which&&0===n.parent('[class*="no-gesture"]').length()&&t.x>l?(g=!0,c=!1,n.get().draggable=!1,x(t,t.x,t.y)):c=!0},passive:u}).on("mousemove",{handler:function(t){!c&&g&&n(t,t.x,t.y)},passive:u}).on("mouseup",function(t){1!==t.which||c||(g=!1,v(t))}).on("touchstart",{handler:function(t){const n=zuix.$(t.target);0===n.parent('[class*="no-gesture"]').length()&&t.touches[0].clientX>l?(c=!1,n.get().draggable=!1,x(t,t.touches[0].clientX,t.touches[0].clientY)):c=!0},passive:u}).on("touchmove",{handler:function(t){c||n(t,t.touches[0].clientX,t.touches[0].clientY)},passive:u}).on("touchend",function(t){c||v(t)})}},t.exports}()}]);