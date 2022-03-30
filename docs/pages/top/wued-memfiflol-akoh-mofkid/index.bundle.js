zuix.setComponentCache([{componentId:"/news-blog/lib/1.1/components/menu-overlay",controller:((module={}).exports=function(d){let s=!1,l=!1,f,p,u,i,c,o=null,a=0,h="right";function r(){(l?g:m)()}function g(){f.isPlaying()||(l=!1,f.playTransition({classes:"fadeIn fadeOutDown",onEnd:function(){this.hide(),d.trigger("hide")}}))}function m(){f.isPlaying()||(l=!0,f.playTransition("fadeOutDown fadeIn"),f.show(),d.trigger("show"))}function x(){if(!u.isPlaying()){const r="fadeIn";let o="fadeOutDown",a=("right"===h?o="fadeOutRight":"left"===h&&(o="fadeOutLeft"),200/c.length());if(s){if(s){s=!1,d.trigger("close"),l?(p.playTransition({classes:"rotateIn rotateOutLeft",onEnd:p.hide}),f.playTransition("rotateOutRight rotateIn")):p.playTransition({classes:"fadeIn fadeOutDown",onEnd:p.hide}),u.playTransition({classes:"fadeIn fadeOut",holdState:!0,onEnd:function(){this.visibility("hidden")}});let i=a*c.length();"left"!==h&&"right"!==h||(i=0,a*=-1),c.each(function(n,t,e){i-=a,e.playTransition({classes:[r,o],options:{duration:"200ms",delay:i+"ms"},onEnd:e.hide}).show()}),f.show()}}else{s=!0,d.trigger("open"),f.playTransition({classes:"rotateIn rotateOutRight",onEnd:f.hide}),p.playTransition("rotateOutLeft rotateIn").show();let e=0;"left"!==h&&"right"!==h||(e=a*c.length(),a*=-1),u.playTransition("fadeOut fadeIn").visibility(""),c.each(function(n,t){e+=a,this.playTransition({classes:[o,r],options:{duration:"200ms",delay:e+"ms"}}).show()})}}}d.create=function(){h=d.options().position||d.view().attr("data-o-position")||h,f=d.field("menu_button").addClass(h).hide().on("click",x),p=d.field("menu_button_close").addClass(h).hide().on("click",x),u=d.field("menu_overlay").addClass(h).visibility("hidden").on("click",x),i=d.field("items_wrapper").addClass(h);const n=zuix.$(d.model().items).children(),t=(n.each(function(n,t){const e=zuix.$(document.createElement("div")).addClass("menu-item").append(t.observableTarget||t);i.append(e.get())}),c=i.find('div[class*="menu-item"]'),d.view());null!=t.attr("data-o-button-color")&&t.css("background",t.attr("data-o-button-color")),null!=t.attr("data-o-icon-color")&&t.css("fill",t.attr("data-o-icon-color"));var e=t.attr("data-o-scroller");null!=(o=null!=e?zuix.field(e):zuix.$(window))&&o.on("scroll",function(n){var t=o.get()===window?document.documentElement.scrollTop||document.body.scrollTop:o.get().scrollTop;l?a-t<-2&&g():l||2<a-t&&m(),a=t,s&&x()}),d.expose("show",function(){t.show()}),d.expose("hide",function(){t.hide()}),document.body.addEventListener("keyup",function(n){n.defaultPrevented||"Escape"===n.key&&(n.cancelBubble=!0,n.preventDefault(),setTimeout(function(){s?(g(),x()):(l?g:m)()},100))}),d.expose("toggleButton",r),d.expose("showButton",m),d.expose("hideButton",g),d.expose("showing",function(){return l}),e={duration:"0.25s",timingFunction:"ease-in-out"},d.addTransition("fadeIn",{transform:"translateXY(0,0)",opacity:"1"},e),d.addTransition("fadeOut",{transform:"translateXY(0,0)",opacity:"0"},e),d.addTransition("fadeOutUp",{transform:"translateY(-200px)",opacity:"0"},e),d.addTransition("fadeOutDown",{transform:"translateY(200px)",opacity:"0"},e),d.addTransition("fadeOutLeft",{transform:"translateX(-200px)",opacity:0},e),d.addTransition("fadeOutRight",{transform:"translateX(200px)",opacity:0},e),d.addTransition("rotateIn",{transform:"rotate(0)",opacity:1},e),d.addTransition("rotateOutRight",{transform:"rotate(+135deg)",opacity:0},e),d.addTransition("rotateOutLeft",{transform:"rotate(-135deg)",opacity:0},e),setTimeout(function(){l||m()},1e3)}},module.exports),css:'button {\n    background: transparent;\n    outline: transparent;\n    border: none;\n    font-weight: bold;\n    display: inline-flex;\n    align-items: center;\n    gap: 12px;\n    justify-content: center;\n    padding-right: 12px;\n    padding-left: 12px;\n    margin-right: 0;\n}\n.menu-button {\n    z-index: 100; /* topmost */\n    position: fixed;\n    right: calc(50% - 28px);\n    left: calc(50% - 28px);\n    bottom: 24px;\n}\n.menu-button.left {\n    left: 24px;\n    right: unset!important;\n}\n.menu-button.right {\n    right: 24px;\n    left: unset!important;\n}\ndiv[z-field="menu_overlay"] {\n    z-index: 100; /* topmost */\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    padding-top: 80px;\n    padding-bottom: 80px;\n    background: radial-gradient(circle at bottom, white, #ffffffee, #ffffff88, transparent);\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column-reverse;\n}\ndiv[z-field="menu_overlay"].left {\n    background: linear-gradient(230deg, transparent, #ffffff88, #ffffffee, white);\n}\ndiv[z-field="menu_overlay"].right {\n    background: linear-gradient(130deg, transparent, #ffffff88, #ffffffee, white);\n}\ndiv[z-field="items_wrapper"] {\n    text-align: center;\n    margin-top: auto;\n    margin-bottom: 24px;\n}\ndiv[z-field="items_wrapper"].left {\n    padding-left: 24px;\n    text-align: left;\n}\ndiv[z-field="items_wrapper"].right {\n    padding-right: 24px;\n    text-align: right;\n}\n.menu-item {\n    padding-top: 8px;\n    padding-bottom: 8px;\n}\n\n.circle-button {\n    cursor: pointer;\n    border-radius: 50%;\n    width: 56px;\n    height: 56px;\n    background: deeppink;\n    fill: white;\n    color: white;\n    box-shadow: 0 0 10px rgb(0 0 0 / 25%), 0 0 4px rgb(0 0 0 / 25%);\n    font-size: 0;\n    transition: all 0.1s cubic-bezier(.25,.8,.25,1);\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    -webkit-tap-highlight-color: transparent;\n}\n.circle-button:active {\n    transform: scale(97%);\n    transition: 0s;\n}\n\n@media screen and (max-width: 960px), screen and (max-height: 480px) {\n    .menu-button {\n        bottom: 24px;\n    }\n    div[z-field="menu_overlay"] {\n        padding-bottom: 72px;\n    }\n}\n',view:'<div #menu_overlay="">\n    <div #items_wrapper=""></div>\n</div>\n\n\x3c!-- Colored FAB menu button --\x3e\n<div #menu_button="" class="menu-button">\n    <div class="circle-button">\n        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>\n            <path d="M0 0h24v24H0z" fill="none"></path>\n        </svg>\n    </div>\n</div>\n<div #menu_button_close="" class="menu-button">\n    <div class="circle-button">\n        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>\n            <path d="M0 0h24v24H0z" fill="none"></path>\n        </svg>\n    </div>\n</div>\n'}]);