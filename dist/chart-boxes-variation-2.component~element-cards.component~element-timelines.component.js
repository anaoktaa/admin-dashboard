(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{628:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(140);n(633);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,l=t[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{r||null==l.return||l.return()}finally{if(a)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}e.a=Object(i.a)((function(t){var e=t.actualSize,n=t.children,i=c(t,["actualSize","children"]),s=l(Object(r.useState)(null),2),u=s[0],p=s[1],f=l(Object(r.useState)(0),2),d=f[0],b=f[1],h=l(Object(r.useState)(0),2),y=h[0],m=h[1],v=l(Object(r.useState)(!1),2),g=v[0],w=v[1],O=l(Object(r.useState)(0),2),x=(O[0],O[1]),j=l(Object(r.useState)(0),2),k=j[0],E=j[1],S=Object(r.useRef)(null),N=document.getElementsByClassName("tab-panel"),L=function(t){W.current[t].scrollIntoView({behavior:"smooth",block:"start"}),x(t)},I=function(t,e){for(var n=!1,r=0,a=0;!n;)t[r].classList.length>1&&(x(r),p(r),n=!0),a+=t[r].offsetWidth,r++;m(a-e.offsetWidth)};Object(r.useEffect)((function(){var t=function(){if(e.width!==k&&e.width!==k){E(e.width);for(var t=0,n=0;n<N.length;n++)t+=N[n].offsetWidth;e.width<t?w(!0):w(!1)}};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[e.width]),Object(r.useEffect)((function(){!function(){for(var t=document.getElementsByClassName("tab-panel"),e=null,n=document.getElementById("regular-tabs").dataset.activeKey,r=0;r<t.length;r++)n?t[r].dataset.key===n&&(t[r].classList.add("tab-panel-active"),e=t[r],b(t[r].offsetWidth)):(t[0].classList.add("tab-panel-active"),e=t[0],b(t[0].offsetWidth));L(n?e.dataset.key:t[0].dataset.key),I(t,e)}()}),[]);var W=Object(r.useRef)({});return a.a.createElement("div",{className:"".concat(g?"custom-tabs-wrapper-container-with-padding":"custom-tabs-wrapper-container")},a.a.createElement("ul",o({ref:S,onClick:function(t){var e=t.target.closest("li"),n=document.getElementsByClassName("tab-panel"),r=0;if(e){for(var a=0;a<n.length;a++)n[a].classList.length>1&&n[a].classList.remove("tab-panel-active"),r=n[a].offsetWidth+r;b(e.offsetWidth),e.classList.add("tab-panel-active"),I(n,e)}},id:"regular-tabs",name:"regular-tabs",className:"tabs-container"},i),n.length?n.map((function(t){return a.a.createElement("li",{key:t.props["data-key"],"data-key":t.props["data-key"],className:"tab-panel",ref:function(e){e&&(W.current[t.props["data-key"]]=e)}},t.props.title)})):a.a.createElement("li",{key:n.props["data-key"],"data-key":n.props["data-key"],className:"tab-panel",ref:function(t){return W.current[n.props["data-key"]]=t}},n.props.title),a.a.createElement("div",{style:{width:"".concat(d,"px"),left:"".concat(y,"px")},className:"tab-active-overlay"})),n.length?n.map((function(t,e){if(Number(e)===Number(u))return a.a.createElement("div",{key:e},t.props.children)})):a.a.createElement("div",null,n.props.children))}))},629:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(82),o=n.n(i);n(635);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=function(t){var e=t.title,n=t.children,r=s(t,["title","children"]);return a.a.createElement("li",l({},r,{content:n,className:"tab-panel"}),e)};c.propTypes={"data-key":o.a.string.isRequired,title:o.a.string.isRequired},e.a=c},633:function(t,e,n){var r=n(46),a=n(634);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},634:function(t,e,n){"use strict";n.r(e);var r=n(19),a=n.n(r)()(!1);a.push([t.i,".tabs-container {\n  display: flex;\n  align-items: center;\n  list-style-type: none;\n  color: white;\n  position: relative;\n  top: 0;\n  padding: 0;\n  overflow: scroll;\n  width: 100%;\n  scrollbar-width: none;\n}\n.custom-tabs-wrapper-container,\n.custom-tabs-wrapper-container-with-padding {\n  padding: 0;\n  position: relative;\n  width: 100%;\n}\n/* .custom-tabs-wrapper-container-with-padding {\n    padding: 0 30px;\n} */\n.tab-arrow-icon {\n  font-size: 10px;\n}\n.tabs-previous {\n  left: 0;\n}\n.tabs-left-arrow,\n.tabs-right-arrow {\n  position: absolute;\n  height: 38px;\n  width: 38px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: center;\n}\n.tabs-right-arrow {\n  right: 0;\n}\n.tabs-left-arrow {\n  left: 0;\n  align-items: flex-start;\n}\n.button-arrow {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background-color: #c1c1c1;\n  color: white;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/* Hide scrollbar for Chrome, Safari and Opera */\n.tabs-container::-webkit-scrollbar {\n  display: none;\n}\n.tabs-container li {\n  display: block;\n  white-space: nowrap;\n}\n.tab-active-overlay {\n  position: absolute;\n  transition: all 0.3s;\n  border-radius: 5px;\n  top: 0;\n  background-color: var(--primary-color);\n  height: 100%;\n  box-shadow: 0 16px 26px -10px rgba(84, 92, 216, 0.56), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(84, 92, 216, 0.2);\n}\n",""]),e.default=a},635:function(t,e,n){var r=n(46),a=n(636);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);t.exports=a.locals||{}},636:function(t,e,n){"use strict";n.r(e);var r=n(19),a=n.n(r)()(!1);a.push([t.i,".tab-panel {\n  padding: 8px 20px;\n  color: #30336b;\n  border-radius: 5px;\n  cursor: pointer;\n  /* position: relative;\n    top: 0; */\n  z-index: 100;\n}\n.tab-panel:hover {\n  color: var(--primary-color);\n}\n.tab-panel-active {\n  left: 0;\n  cursor: default;\n  color: white !important;\n}\n",""]),e.default=a}}]);