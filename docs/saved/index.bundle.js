zuix.setComponentCache([{componentId:"https://zuixjs.github.io/zkit/lib/1.2/components/context-menu",controller:function(){"use strict";let t={};return t.exports=function(n){let i,t,e,o=!0;function s(){o&&!i.isPlaying()&&(o=!1,e.show(),i.playTransition({onEnd:function(t,e){n.trigger("open")}}),i.css("bottom",0).get().focus(),t.css("opacity",1))}function r(){o||i.isPlaying()||(o=!0,i.playTransition({onEnd:function(){e.hide(),n.trigger("close")}}),t.css("opacity",0),i.css("bottom",-i.position().rect.height+"px"))}n.create=function(){(i=n.field("menu")).css("bottom",-i.position().rect.height+"px"),e=n.view().hide(),t=e.find(".menu-overlay"),e.find(".container").on({click:r,keydown:function(t){27===(t=t||window.event).keyCode&&r()}}),zuix.load("https://zuixjs.github.io/zkit/lib/1.1/controllers/gesture-helper",{view:e,on:{"gesture:pan":function(t,e){i.hasClass("no-transition")||i.addClass("no-transition"),0<e.shiftY&&i.css("bottom",-e.shiftY+"px")},"gesture:release":function(t,e){i.removeClass("no-transition"),e.velocity<=0&&"up"===e.direction?i.css("bottom",0):"down"===e.direction&&r()}}}),n.expose("show",s),n.expose("hide",r)}},t.exports}(),css:".menu-overlay {\n    position: fixed;\n    bottom:0;\n    left:0;\n    right: 0;\n    top: 0;\n    opacity: 0;\n    -ms-touch-action: none;\n    touch-action: none;\n    background: rgba(73,73,73,0.5);\n    z-index: 1001;\n    transition: opacity 0.4s ease-in;\n}\n.container {\n    position: fixed;\n    bottom:0;\n    left:0;\n    right: 0;\n    top: 0;\n    -ms-touch-action: none;\n    touch-action: none;\n    z-index: 1002;\n}\n.menu {\n    outline: none !important;\n    margin-left: auto;\n    margin-right: auto;\n    left: 50%;\n    transform: translateX(-50%);\n    position: absolute;\n    width: 100%;\n    max-width: 420px;\n    background: white;\n    border: solid 1px rgba(0,0,0,0.1);\n    border-radius: 16px 16px 0 0;\n    box-shadow: 0 -5px 5px -5px #333;\n    transition: bottom 0.3s ease-in-out;\n    transition-delay: 0.1s;\n}\nbutton {\n    width: 100%;\n    height:48px;\n    padding: 16px;\n    background: none;\n    border: none;\n}\nbutton span {\n    font-family: sans-serif, Helvetica;\n    font-size: 120%;\n    margin-left: 24px;\n}\nbutton i {\n    color: dimgray;\n    font-size: 24px;\n    margin-left: 8px;\n}\nbutton:hover {\n    background: rgba(0,0,0,0.1);\n}\n.no-transition {\n    transition: none;\n}\n",view:'<div class="menu-overlay"></div>\n<div class="container">\n    <div #menu="" class="menu" tabindex="0"></div>\n</div>\n'},{componentId:"https://zuixjs.github.io/zkit/lib/1.2/controllers/list-view",controller:function(){"use strict";let t={};return t.exports=function(){const r=this,a="full",c="paginated",u="incremental";let l=a,p=30;const d={page:{current:0,count:0},items:{current:-1,loaded:0,count:0}};let g;const h=[];function i(){const n=r.model();if(n&&"function"==typeof g){r.trigger("list:busy"),d.page.count=m(),d.items.count=n.length;var e=d.page.current*p;let t=0;for(l===c&&0<e&&(t=e);t<n.length;t++){var i=JSON.parse(JSON.stringify(n[t])),i=g(t,i);if(l===a||l===c&&t>=e&&t<e+p||l===u&&t<e+p)if(h[t]){if(!i.static){const o=zuix.context(h[t]);o&&JSON.stringify(o.model())!==JSON.stringify(i.options.model)&&o.model(i.options.model)}}else{const s=zuix.$(document.createElement("div")).attr("z-lazy","true");null!=i.className?s.addClass(i.className):s.css({minHeight:i.height||"48px"});((t,e)=>{e.one({"component:ready":()=>{d.items.loaded++,(d.items.current=t)===n.length-1?r.trigger("list:end"):t+1===(d.page.current+1)*p&&l===u&&f(d.page.current+1),r.trigger("list:update",d)}})})(t,s),zuix.loadComponent(s,i.componentId,i.type,i.options),h[t]=s,r.view().insert(e+t,h[t])}if(void 0!==h[t]&&(l===c&&t<d.page.current*p||l!==a&&t>(d.page.current+1)*p-1?h[t].hide():h[t].show()),(l===c||l===u)&&t>e+p)break}r.trigger("list:ready"),zuix.componentize(r.view())}else x()}function f(t){if(!isNaN(t)&&0<=t&&t<m()){if(l===c){var e=d.page.current;if(r.model()){var n=e*p;for(let t=n;t<r.model().length&&t<n+p;t++)void 0!==h[t]&&h[t].hide()}}d.page.current=parseInt(t),r.trigger("page:change",d),i()}return d.page.current}function m(){return Math.ceil(r.model().length/p)}function t(t){if(null==t)return{itemsPerPage:p,listMode:l,adapter:g};let e=!1;null!=t.itemsPerPage&&(p=t.itemsPerPage,e=!0),-1!==[a,c,u].indexOf(t.listMode)&&l!==t.listMode&&(l=t.listMode,e=!0),"function"==typeof t.adapter&&(g=t.adapter,e=!0),e&&x(()=>{i(),r.trigger("page:change",d)})}function x(t){r.trigger("list:busy"),setTimeout(()=>{h.forEach(t=>zuix.unload(t)),h.length=0,t&&t(),r.trigger("list:ready")}),d.page.current=0,d.page.count=0,d.items.loaded=0,d.items.count=0,r.view().html("")}r.create=()=>{r.expose({config:t,page:f,prev:()=>f(d.page.current-1),next:()=>f(d.page.current+1),more:()=>{d.page.current++,i()},clear:x}),r.options().itemsPerPage=r.options().itemsPerPage||p,r.options().listMode=r.options().listMode||l,t(r.options())},r.update=()=>i(),r.destroy=()=>x()},t.exports}()},{componentId:"https://zuixjs.github.io/zkit/lib/1.1/controllers/gesture-helper",controller:function(){"use strict";let t={};return t.exports=function(){const n=0,o=1,s=2,i=750;let r=n,a,c=!1,u=!0,l=-1,p,d,g,h=!1,f=(new Date).getTime();Math.sign=Math.sign||function(t){return(0<t)-(t<0)||+t};const m=this;function x(t,e,n){var i=(new Date).getTime();a={event:t,cancel:function(){a.event.cancelBubble=!0,u||a.event.preventDefault()},startX:e,startY:n,startTime:i,shiftX:0,shiftY:0,endTime:0,stepX:0,stepY:0,stepTime:i,velocity:0,x:e,y:n,scrollIntent:function(){switch(r){case o:return"horizontal";case s:return"vertical"}return!1}},g=function(i){let o;function t(){i.stepTime=i.endTime,i.stepX=i.shiftX,i.stepY=i.shiftY,i.stepSpeed=0,i.stepDistance=0}function s(){o=i.direction,r.time=(new Date).getTime(),r.x=i.x,r.y=i.y,i.velocity=0,i.distance=0,t()}const r={time:0,x:0,y:0},a={time:0,x:0,y:0};return s(),{update:function(){var t,e,n;a.time=(new Date).getTime(),a.x=i.x,a.y=i.y,null!=o&&o!==i.direction?s():(null==o&&i.direction!==o&&(o=i.direction),t=a.time-r.time,e={x:a.x-r.x,y:a.y-r.y},n=Math.sqrt(e.x*e.x+e.y*e.y),n=(i.distance=n)/t,i.velocity="left"===i.direction||"up"===i.direction?-n:n,i.stepTime=i.endTime-i.stepTime,e={x:i.shiftX-i.stepX,y:i.shiftY-i.stepY},i.stepDistance=Math.sqrt(e.x*e.x+e.y*e.y),i.stepSpeed=i.stepDistance/i.stepTime)},step:t}}(a),m.trigger("gesture:touch",a)}function e(t,e,n){null!=a&&(a.event=t,a.x=e,a.y=n,a.shiftX=e-a.startX,a.shiftY=n-a.startY,a.endTime=(new Date).getTime(),null!=(t=y())&&!1!==p&&(d=null!=d&&d!==a.direction?(p=!1,"cancel"):(p=t,a.direction)),m.trigger("gesture:pan",a))}function v(t){null!=a&&(g.update(),a.event=t,null!=(p=null==p?y():p)&&!1!==p&&m.trigger(p,a)),m.trigger("gesture:release",a),r=n,d=null,p=null,a=null}function y(){let t=null;g.update();var e=180*Math.atan2(a.shiftY-a.stepY,a.shiftX-a.stepX)/Math.PI;return 0===a.shiftX&&0===a.shiftY&&a.startTime>f+100&&a.stepTime<i?(f=(new Date).getTime(),t="gesture:tap"):(r===n||r===o)&&2<a.stepDistance&&(135<=e&&e<=180||-180<=e&&e<=-135)?(a.direction="left",t="gesture:swipe",r=o):(r===n||r===o)&&2<a.stepDistance&&(0<=e&&e<=45||-45<=e&&e<0)?(a.direction="right",t="gesture:swipe",r=o):(r===n||r===s)&&2<a.stepDistance&&45<e&&e<135?(a.direction="down",t="gesture:swipe",r=s):(r===n||r===s)&&2<a.stepDistance&&-135<e&&e<-45&&(a.direction="up",t="gesture:swipe",r=s),2<a.stepDistance&&g.step(),t}m.init=function(){const t=m.view(),e=m.options();e.html=!1,e.css=!1,u=!1!==e.passive&&"false"!==t.attr("data-o-passive"),l=e.startGap||t.attr("data-o-startgap")},m.create=function(){const t=u?zuix.$(window):m.view();t.on("dragstart",{handler:function(t){c||u||t.preventDefault()},passive:u}).on("mousedown",{handler:function(t){const e=zuix.$(t.target);1===t.which&&0===e.parent('[class*="no-gesture"]').length()&&t.x>l?(h=!0,c=!1,e.get().draggable=!1,x(t,t.x,t.y)):c=!0},passive:u}).on("mousemove",{handler:function(t){!c&&h&&e(t,t.x,t.y)},passive:u}).on("mouseup",function(t){1!==t.which||c||(h=!1,v(t))}).on("touchstart",{handler:function(t){const e=zuix.$(t.target);0===e.parent('[class*="no-gesture"]').length()&&t.touches[0].clientX>l?(c=!1,e.get().draggable=!1,x(t,t.touches[0].clientX,t.touches[0].clientY)):c=!0},passive:u}).on("touchmove",{handler:function(t){c||e(t,t.touches[0].clientX,t.touches[0].clientY)},passive:u}).on("touchend",function(t){c||v(t)})}},t.exports}()}]);