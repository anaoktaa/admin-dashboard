(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5,39],{1015:function(e,n,t){"use strict";t.r(n);var r=t(19),a=t.n(r)()(!1);a.push([e.i,".appliations-faq-container {\n  display: grid;\n  grid-template-columns: 1.5fr 3fr;\n  border-radius: 5px;\n  overflow: hidden;\n  height: 100%;\n  position: relative;\n}\n.faq-menu-container,\n.faq-menu-container-show {\n  padding: 30px 20px;\n  background-color: #ffffff8f;\n}\n.faq-content-container,\n.faq-content-container-show {\n  background-color: white;\n  padding: 30px 20px;\n  height: 600px;\n  overflow-y: auto;\n}\n.faq-margin-menu-item {\n  margin: 3px 0 !important;\n}\n.tab-text-example-content {\n  display: block;\n  line-height: 2 !important;\n  padding-bottom: 10px !important;\n}\n.app-faq-mobile {\n  display: none;\n}\n@media screen and (max-width: 986px) {\n  .app-faq-mobile {\n    display: block;\n    margin-bottom: 30px;\n  }\n  .close-menu {\n    transition: all 0.6s;\n  }\n  .show-close-menu {\n    animation: allclosemenu 0.6s;\n  }\n  @keyframes allclosemenu {\n    0% {\n      opacity: 0;\n      transform: rotate(0deg) translateX(-100px);\n    }\n    50% {\n      transform: rotate(0deg) translateX(0px);\n    }\n    100% {\n      transform: rotate(180deg) translateX(0px);\n      opacity: 1;\n    }\n  }\n  .appliations-faq-container {\n    display: grid;\n    grid-template-columns: 1.5fr 3fr;\n    box-sizing: border-box;\n    border-radius: 5px;\n    position: relative;\n    overflow-x: scroll;\n    -ms-overflow-style: none;\n    /* Internet Explorer 10+ */\n    scrollbar-width: none;\n    /* Firefox */\n    transition: all 0.6s;\n    height: 800px;\n  }\n  .faq-menu-container {\n    position: relative;\n    transform: translateX(-280px);\n    width: 250px;\n    transition: all 0.12s;\n    padding: 20px;\n    background-color: #ffffff8f;\n  }\n  .faq-menu-container-show {\n    transform: translateX(0px) !important;\n    width: 250px !important;\n    padding: 20px;\n    background-color: #ffffff8f;\n    transition: all 0.12s;\n  }\n  .faq-content-container {\n    position: absolute;\n    width: 100%;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    transition: all 0.6s;\n    background-color: white;\n    padding: 20px;\n    overflow: auto;\n    height: 800px;\n    border-radius: 5px;\n  }\n  .faq-content-container-show {\n    position: relative !important;\n    transform: translateX(0px) !important;\n    width: 500px !important;\n    background-color: white;\n    padding: 20px;\n    overflow: auto;\n    height: 800px;\n  }\n}\n",""]),n.default=a},1043:function(e,n,t){"use strict";var r=t(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},o=t(6),i=function(e,n){return r.createElement(o.a,Object.assign({},e,{ref:n,icon:a}))};i.displayName="CloseOutlined";n.a=r.forwardRef(i)},1054:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(1043),i=t(597),c=t(804),l=t(890),u=t(885),s=t(3),p=t.n(s),f=t(4),d=t.n(f),m=t(5),b=t.n(m),h=t(96),v=t.n(h),y=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function x(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function w(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var E=function(e){function n(){return x(this,n),w(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),y(n,[{key:"shouldComponentUpdate",value:function(e){return this.props.forceRender||!v()(this.props,e)}},{key:"render",value:function(){var e;if(this._isActived=this.props.forceRender||this._isActived||this.props.isActive,!this._isActived)return null;var n=this.props,t=n.prefixCls,r=n.isActive,o=n.children,i=n.destroyInactivePanel,c=n.forceRender,l=n.role,u=b()(t+"-content",(g(e={},t+"-content-active",r),g(e,t+"-content-inactive",!r),e)),s=c||r||!i?a.a.createElement("div",{className:t+"-content-box"},o):null;return a.a.createElement("div",{className:u,role:l},s)}}]),n}(r.Component),k=t(256),O=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function C(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function N(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var P=function(e){function n(){var e,t,r;C(this,n);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=r=N(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(o))),r.handleItemClick=function(){var e=r.props,n=e.onItemClick,t=e.panelKey;"function"==typeof n&&n(t)},r.handleKeyPress=function(e){"Enter"!==e.key&&13!==e.keyCode&&13!==e.which||r.handleItemClick()},N(r,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),O(n,[{key:"shouldComponentUpdate",value:function(e){return!v()(this.props,e)}},{key:"render",value:function(){var e,n=this.props,t=n.className,r=n.id,o=n.style,i=n.prefixCls,c=n.header,l=n.headerClass,u=n.children,s=n.isActive,p=n.showArrow,f=n.destroyInactivePanel,d=n.disabled,m=n.accordion,h=n.forceRender,v=n.expandIcon,y=n.extra,g=b()(i+"-header",j({},l,l)),x=b()((j(e={},i+"-item",!0),j(e,i+"-item-active",s),j(e,i+"-item-disabled",d),e),t),w=a.a.createElement("i",{className:"arrow"});return p&&"function"==typeof v&&(w=v(this.props)),a.a.createElement("div",{className:x,style:o,id:r},a.a.createElement("div",{className:g,onClick:this.handleItemClick,role:m?"tab":"button",tabIndex:d?-1:0,"aria-expanded":""+s,onKeyPress:this.handleKeyPress},p&&w,c,y&&a.a.createElement("div",{className:i+"-extra"},y)),a.a.createElement(k.a,{showProp:"isActive",exclusive:!0,component:"",animation:this.props.openAnimation},a.a.createElement(E,{prefixCls:i,isActive:s,destroyInactivePanel:f,forceRender:h,role:m?"tabpanel":null},u)))}}]),n}(r.Component);P.defaultProps={showArrow:!0,isActive:!1,destroyInactivePanel:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var A=P,I=t(193);function T(e,n,t,r){var a=void 0;return Object(I.a)(e,t,{start:function(){n?(a=e.offsetHeight,e.style.height=0):e.style.height=e.offsetHeight+"px"},active:function(){e.style.height=(n?a:0)+"px"},end:function(){e.style.height="",r()}})}var q=function(e){return{enter:function(n,t){return T(n,!0,e+"-anim",t)},leave:function(n,t){return T(n,!1,e+"-anim",t)}}},S=t(74),_=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R(e){var n=e;return Array.isArray(n)||(n=n?[n]:[]),n.map((function(e){return String(e)}))}var D=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));K.call(t);var r=e.activeKey,a=e.defaultActiveKey;return"activeKey"in e&&(a=r),t.state={openAnimation:e.openAnimation||q(e.prefixCls),activeKey:R(a)},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),_(n,[{key:"shouldComponentUpdate",value:function(e,n){return!v()(this.props,e)||!v()(this.state,n)}},{key:"render",value:function(){var e,n=this.props,t=n.prefixCls,r=n.className,o=n.style,i=n.accordion,c=b()((z(e={},t,!0),z(e,r,!!r),e));return a.a.createElement("div",{className:c,style:o,role:i?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var n={};return"activeKey"in e&&(n.activeKey=R(e.activeKey)),"openAnimation"in e&&(n.openAnimation=e.openAnimation),n.activeKey||n.openAnimation?n:null}}]),n}(r.Component),K=function(){var e=this;this.onClickItem=function(n){var t=e.state.activeKey;if(e.props.accordion)t=t[0]===n?[]:[n];else{var r=(t=[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(t))).indexOf(n);r>-1?t.splice(r,1):t.push(n)}e.setActiveKey(t)},this.getNewChild=function(n,t){if(!n)return null;var r=e.state.activeKey,o=e.props,i=o.prefixCls,c=o.accordion,l=o.destroyInactivePanel,u=o.expandIcon,s=n.key||String(t),p=n.props,f=p.header,d=p.headerClass,m=p.disabled,b={key:s,panelKey:s,header:f,headerClass:d,isActive:c?r[0]===s:r.indexOf(s)>-1,prefixCls:i,destroyInactivePanel:l,openAnimation:e.state.openAnimation,accordion:c,children:n.props.children,onItemClick:m?null:e.onClickItem,expandIcon:u};return"string"==typeof n.type?n:a.a.cloneElement(n,b)},this.getItems=function(){var n=e.props.children,t=Object(S.isFragment)(n)?n.props.children:n,o=r.Children.map(t,e.getNewChild);return Object(S.isFragment)(n)?a.a.createElement(a.a.Fragment,null,o):o},this.setActiveKey=function(n){"activeKey"in e.props||e.setState({activeKey:n}),e.props.onChange(e.props.accordion?n[0]:n)}};D.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},D.Panel=A;var M=D,F=(D.Panel,t(161)),L=t.n(F),X=t(53),H=function(e){var n=r.useContext(X.b).getPrefixCls,t=e.prefixCls,a=e.className,o=void 0===a?"":a,i=e.showArrow,c=void 0===i||i,l=n("collapse",t),u=b()(d()({},"".concat(l,"-no-arrow"),!c),o);return r.createElement(M.Panel,p()({},e,{prefixCls:l,className:u}))},U=t(77),B=t.n(U);function V(e,n,t){var r,a;return Object(I.a)(e,"ant-motion-collapse-legacy",{start:function(){n?(r=e.offsetHeight,e.style.height="0px",e.style.opacity="0"):(e.style.height="".concat(e.offsetHeight,"px"),e.style.opacity="1")},active:function(){a&&B.a.cancel(a),a=B()((function(){e.style.height="".concat(n?r:0,"px"),e.style.opacity=n?"1":"0"}))},end:function(){a&&B.a.cancel(a),e.style.height="",e.style.opacity="",t()}})}var J={enter:function(e,n){return V(e,!0,n)},leave:function(e,n){return V(e,!1,n)},appear:function(e,n){return V(e,!0,n)}},Z=t(40),Q=function(e){var n,t,a=r.useContext(X.b),o=a.getPrefixCls,i=a.direction,c=e.prefixCls,l=e.className,u=void 0===l?"":l,s=e.bordered,f=e.ghost,m=o("collapse",c),h=void 0!==(t=e.expandIconPosition)?t:"rtl"===i?"right":"left",v=b()((n={},d()(n,"".concat(m,"-borderless"),!s),d()(n,"".concat(m,"-icon-position-").concat(h),!0),d()(n,"".concat(m,"-rtl"),"rtl"===i),d()(n,"".concat(m,"-ghost"),!!f),n),u),y=p()(p()({},J),{appear:function(){}});return r.createElement(M,p()({openAnimation:y},e,{expandIcon:function(n){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.expandIcon,a=t?t(n):r.createElement(L.a,{rotate:n.isActive?90:void 0});return Object(Z.a)(a,(function(){return{className:b()(a.props.className,"".concat(m,"-arrow"))}}))}(n)},prefixCls:m,className:v}))};Q.Panel=H,Q.defaultProps={bordered:!0};var $=Q,G=t(571),W=t(910),Y=t(1064),ee=t(620),ne=function(){return a.a.createElement(W.a,{layout:"vertical"},a.a.createElement(W.a.Item,{label:"Email",name:"email",style:{display:"inline-block",width:"calc(50% - 8px)"}},a.a.createElement(Y.a,{placeholder:"Type your email here"})),a.a.createElement(W.a.Item,{label:"Password",name:"password",style:{display:"inline-block",width:"calc(50% - 8px)",marginLeft:"16px"}},a.a.createElement(Y.a,{type:"password",placeholder:"Type your password here"})),a.a.createElement(W.a.Item,{label:"Address",name:"address"},a.a.createElement(Y.a,{placeholder:"1234 Main Street"})),a.a.createElement(W.a.Item,{label:"Address 2",name:"address2"},a.a.createElement(Y.a,{placeholder:"Apartment, floor, or building"})),a.a.createElement(W.a.Item,{label:"City",name:"city",style:{display:"inline-block",width:"calc(50% - 8px)",marginRight:"8px"}},a.a.createElement(Y.a,{placeholder:"City"})),a.a.createElement(W.a.Item,{label:"States",name:"states",style:{display:"inline-block",width:"calc(30% - 16px)",margin:"0 8px"}},a.a.createElement(Y.a,{placeholder:"State"})),a.a.createElement(W.a.Item,{label:"Zip",name:"zip",style:{display:"inline-block",width:"calc(20% - 8px)",marginLeft:"8px"}},a.a.createElement(Y.a,{placeholder:"Zip"})),a.a.createElement(W.a.Item,{className:"padding-top-20",colon:!1},a.a.createElement(ee.a,{color:"primary",variant:"solid"},"Submit")))},te=function(){return a.a.createElement(W.a,{layout:"vertical"},a.a.createElement(W.a.Item,{label:"Input without validation",help:"Example help text that remains unchanged."},a.a.createElement(Y.a,null)),a.a.createElement(W.a.Item,{label:a.a.createElement("span",{className:"success-label"},"Valid input"),hasFeedback:!0,validateStatus:"success",help:a.a.createElement("span",{className:"success-label"},"Sweet. That name is available")},a.a.createElement(Y.a,{className:"success-input"})),a.a.createElement(W.a.Item,{label:a.a.createElement("span",{className:"error-label"},"Inalid input"),hasFeedback:!0,validateStatus:"error",help:a.a.createElement("span",{className:"error-label"},"Oh noes! That name is already taken")},a.a.createElement(Y.a,null)))},re=(t(909),$.Panel),ae=G.a.Title,oe=G.a.Text,ie=function(){var e=[{id:1,title:"Account Information",description:"Enter your informations below",content:a.a.createElement(ne,null)},{id:2,title:"Credit Card Informations",description:"Enter your informations below",content:a.a.createElement(te,null)},{id:3,title:"Personal Details",description:"Enter your informations below",content:a.a.createElement(te,null)}];return a.a.createElement($,null,e.map((function(e){return a.a.createElement(re,{showArrow:!1,style:{backgroundColor:"white"},key:e.id,header:a.a.createElement("div",null,a.a.createElement(ae,{className:"primary-color",level:4},e.title),a.a.createElement(oe,null,e.description))},e.content)})))},ce=G.a.Title,le=G.a.Text,ue=function(){return a.a.createElement("div",null,a.a.createElement(ce,{level:3},"Maecenas tempus, tellus"),a.a.createElement("div",{className:"line"}),a.a.createElement("div",{className:"padding-top-20"},a.a.createElement(le,{className:"tab-text-example-content"},"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."),a.a.createElement(le,{className:"tab-text-example-content"},"No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."),a.a.createElement(le,{className:"tab-text-example-content"},"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure."),a.a.createElement(le,{className:"tab-text-example-content"},"To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?"),a.a.createElement(le,{className:"tab-text-example-content"},"But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"),a.a.createElement(le,{className:"tab-text-example-content"},"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee")))},se=G.a.Title,pe=G.a.Text,fe=function(){return a.a.createElement("div",null,a.a.createElement(se,{level:3},"Maecenas tempus, tellus"),a.a.createElement("div",{className:"line"}),a.a.createElement("div",{className:"padding-top-20"},a.a.createElement(pe,{className:"tab-text-example-content"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."),a.a.createElement(pe,{className:"tab-text-example-content"},"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."),a.a.createElement(pe,{className:"tab-text-example-content"},"Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo."),a.a.createElement(pe,{className:"tab-text-example-content"},"Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus."),a.a.createElement(pe,{className:"tab-text-example-content"},"Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet."),a.a.createElement(pe,{className:"tab-text-example-content"},"Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus."),a.a.createElement(pe,{className:"tab-text-example-content"},"Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem."),a.a.createElement(pe,{className:"tab-text-example-content"},"Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,")))};function de(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return me(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return me(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function me(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}n.default=function(){var e=de(Object(r.useState)({id:"TabExample1",name:"Tab Example 1",content:a.a.createElement(ie,null)}),2),n=e[0],t=e[1],s=[{id:"TabExample1",name:"Tab Example 1",content:a.a.createElement(ie,null)},{id:"TabExample2",name:"Tab Example 2",content:a.a.createElement(ue,null)},{id:"TabExample3",name:"Tab Example 3",content:a.a.createElement(fe,null)}],p=de(Object(r.useState)(!1),2),f=p[0],d=p[1],m=function(){d(!f)};return a.a.createElement("div",{className:"appliations-faq-container"},a.a.createElement("div",{className:"".concat(f?"faq-menu-container-show":"faq-menu-container")},a.a.createElement(l.a,{role:"secondary",pill:!0},a.a.createElement(c.b,null,"Fixed Menu"),s.map((function(e){return a.a.createElement(u.a,{onClick:function(){t(e)},activeColor:"primary",active:e.id===n.id,key:e.id,className:"faq-margin-menu-item"},e.name)})))),a.a.createElement("div",{className:"".concat(f?"faq-content-container-show":"faq-content-container")},a.a.createElement("div",{className:"app-faq-mobile"},f?a.a.createElement(o.a,{onClick:m,style:{fontSize:"20px"},className:"mr-20 close-menu ".concat(f?"show-close-menu":"")}):a.a.createElement(i.a,{onClick:m,style:{fontSize:"20px"},className:"mr-20 close-menu ".concat(f?"":"show-close-menu")})),n.content))}},618:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={primary:"#545cd8",primaryText:"white",primaryDark:"#3d45bf",primaryRgb:"84, 92, 216",secondary:"#6c757d",secondaryText:"white",secondaryDark:"#57626b",secondaryRgb:"108, 117, 125",success:"#3ac47d",successText:"white",successDark:"#31b16f",successRgb:"58, 196, 125",info:"#30b1ff",infoText:"white",infoDark:"#2a9de2",infoRgb:"48, 177, 255",warning:"#f7b924",warningText:"#000",warningDark:"#efad0e",warningRgb:"247, 185, 36",alt:"#83588a",altText:"white",altDark:"#683f6f",altRgb:"131, 88, 138",light:"#d4d4d4",lightText:"black",lightDark:"#dcd6d6",lightRgb:"238, 238, 238",dark:"#343a40",darkText:"white",darkDark:"#23272b",darkRgb:"52, 58, 64",danger:"#d92550",dangerText:"white",dangerDark:"#c32047",dangerRgb:"217, 37, 80",link:"#fff",linkText:"#545cd8",linkDark:"#e9ebf8"}},620:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(82),i=t.n(o),c=t(201),l=t(618);function u(){var e=T(["\n    border: none;\n    outline: none;\n    box-shadow: none;\n    cursor: pointer;\n    height: fit-content;\n    background-color: white;\n    transition: all .3s;\n    text-align: left;\n    ",";\n    ",";\n    ",";\n    ",";\n"]);return u=function(){return e},e}function s(){var e=T(["\n    &:hover  {\n        background-color: #e4f4ff;\n        color: #000;\n    }\n"]);return s=function(){return e},e}function p(){var e=T(["\n    &:hover  {\n        background-color: ",";\n        color: ",";\n    }\n"]);return p=function(){return e},e}function f(){var e=T(["\n    border: none;\n    outline: none;\n    box-shadow: none;\n    cursor: pointer;\n    height: fit-content;\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n    ",";\n"]);return f=function(){return e},e}function d(){var e=T(["\n    box-shadow: 0 0.125rem 0.625rem rgba(",",.4), 0 0.0625rem 0.125rem rgba(",",.5);\n"]);return d=function(){return e},e}function m(){var e=T(["\n    border-radius: 5px;\n"]);return m=function(){return e},e}function b(){var e=T(["\n    border-radius: 0px;\n"]);return b=function(){return e},e}function h(){var e=T(["\n    border-radius: 20px;\n"]);return h=function(){return e},e}function v(){var e=T(["\n    padding-left: ",";\n    padding-right: ",";\n    font-size: 20px;\n"]);return v=function(){return e},e}function y(){var e=T(["\n    padding-left: ",";\n    padding-right: ",";\n    height: ",";\n    width: ",";\n"]);return y=function(){return e},e}function g(){var e=T(["\n    padding-left: ",";\n    padding-right: ",";\n    font-size: 12px;\n"]);return g=function(){return e},e}function x(){var e=T(["\n    padding-top: 8px;\n    padding-bottom: 8px;\n"]);return x=function(){return e},e}function w(){var e=T(["\n    padding-top: 5px;\n    padding-bottom: 5px;\n"]);return w=function(){return e},e}function E(){var e=T(["\n    padding-top: 3px;\n    padding-bottom : 3px;\n"]);return E=function(){return e},e}function k(){var e=T(["\n    display: block;\n    width: 100%;\n"]);return k=function(){return e},e}function O(){var e=T(["\n    background-color: white;\n    color:  ",";\n\n    &:hover {\n        background-color: ",";\n        color: ",";\n        text-decoration:  ",";\n        box-shadow: none;\n    }\n"]);return O=function(){return e},e}function j(){var e=T(["\n    ",";\n    &:hover {\n        background-color: ",";\n        color: ",";\n        text-decoration:  ",";\n        box-shadow: none;\n    }\n"]);return j=function(){return e},e}function C(){var e=T(["\n    ",";\n    opacity: .6;\n    cursor: default;\n"]);return C=function(){return e},e}function N(){var e=T(["\n    background-color: white;\n    border : "," \n            ","  \n            ",";\n    color:  ",";\n"]);return N=function(){return e},e}function P(){var e=T(["\n    ",";\n    opacity: .75;\n    cursor: default;\n"]);return P=function(){return e},e}function A(){var e=T(["\n    ",";\n    &:hover {\n        background-color: ",";\n        text-decoration:  ",";\n        box-shadow: none;\n    }\n"]);return A=function(){return e},e}function I(){var e=T(["\n    background-color: ",";\n    color: ",";\n    border: 1px solid ",";\n"]);return I=function(){return e},e}function T(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var q=Object(c.a)(I(),(function(e){var n=e.color;return n?l.a[n]:"#ededed"}),(function(e){var n=e.color;return n?l.a[n+"Text"]:"#000"}),(function(e){var n=e.color;return n?l.a[n]:"#ededed"})),S=Object(c.a)(A(),q,(function(e){var n=e.color;return n?l.a[n+"Dark"]:"#ededed"}),(function(e){return"link"!==e.color||e.icon?"none":"underline"})),_=Object(c.a)(P(),q),z=Object(c.a)(N(),(function(e){var n=e.variant;return"outlined"===n||"dashed"===n?"1px":"2px"}),(function(e){var n=e.variant;return"outlined"===n||"outlined-2x"===n?"solid":"dashed"}),(function(e){var n=e.color;return n?l.a[n]:"#ededed"}),(function(e){var n=e.color;return"link"!==n?l.a[n]:l.a[n+"Text"]})),R=Object(c.a)(C(),z),D=Object(c.a)(j(),z,(function(e){var n=e.color;return n?l.a[n]:"#ededed"}),(function(e){var n=e.color;return n?l.a[n+"Text"]:"#000"}),(function(e){return"link"===e.color?"underline":"none"})),K=Object(c.a)(O(),(function(e){var n=e.color;return"link"!==n?l.a[n]:"grey"}),(function(e){var n=e.color;return"link"!==n?l.a[n]:l.a.linkDark}),(function(e){var n=e.color;return n?l.a[n+"Text"]:"#000"}),(function(e){return"link"!==e.color||e.icon?"none":"underline"})),M=Object(c.a)(k()),F=Object(c.a)(E()),L=Object(c.a)(w()),X=Object(c.a)(x()),H=Object(c.a)(g(),(function(e){return e.icon?"5px":"10px"}),(function(e){return e.icon?"5px":"10px"})),U=Object(c.a)(y(),(function(e){return e.icon?"15px":"20px"}),(function(e){return e.icon?"15px":"20px"}),(function(e){return"vertical"===e.iconType?"95px":"fit-content"}),(function(e){return"vertical"===e.iconType?"100px":"fit-content"})),B=Object(c.a)(v(),(function(e){return e.icon?"25px":"30px"}),(function(e){return e.icon?"25px":"30px"})),V=Object(c.a)(h()),J=Object(c.a)(b()),Z=Object(c.a)(m()),Q=function(e){return"small"===e.size?F:"large"===e.size?X:L},$=function(e){return"small"===e.wide?H:"large"===e.wide?B:U},G=Object(c.a)(d(),(function(e){var n=e.color;return n?l.a[n+"Rgb"]:"255,255,255"}),(function(e){var n=e.color;return n?l.a[n+"Rgb"]:"255,255,255"})),W=c.b.button(f(),$,Q,(function(e){return"solid"===e.variant?e.disabled?_:S:"outlined"===e.variant||"outlined-2x"===e.variant||"dashed"===e.variant?e.disabled?R:e.active?q:D:"no-outlined"===e.variant?K:void 0}),(function(e){return e.block?M:null}),(function(e){return e.pill?V:e.square?J:Z}),(function(e){if(e.shadow)return G})),Y=Object(c.a)(p(),l.a.primary,l.a.primaryText),ee=Object(c.a)(s());c.b.button(u(),$,Q,(function(e){return e.block?M:null}),(function(e){return"primary"===e.color?Y:"secondary"===e.color?ee:void 0})),t(623);function ne(){return(ne=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function te(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var re=function(e){var n=e.variant,t=e.color,r=e.className,o=e.children,i=e.pill,c=e.square,l=e.shadow,u=e.icon,s=e.block,p=e.iconPosition,f=e.iconType,d=e.size,m=e.wide,b=(e.role,e.active,te(e,["variant","color","className","children","pill","square","shadow","icon","block","iconPosition","iconType","size","wide","role","active"]));return u?a.a.createElement(W,ne({size:d,wide:m,shadow:l,pill:i,square:c,variant:n,color:t,className:r,block:s,icon:u,iconType:f},b),a.a.createElement("div",{className:"".concat("vertical"===f?"custom-button-icon-container-vertical":"custom-button-icon-container")},p&&"left"!==p?null:a.a.createElement("span",{className:"\n                            ".concat(o?"icon-span-container":"icon-span-only-container","\n                            ").concat("vertical"===f?"icon-block":"","\n                            ")},u),o,p&&"right"===p?a.a.createElement("span",{className:"\n                            ".concat(o?"icon-span-container":"icon-span-only-container","\n                            ").concat("vertical"===f?"icon-block":"","\n                            ")},u):null)):a.a.createElement(W,ne({size:d,wide:m,shadow:l,pill:i,square:c,variant:n,color:t,className:r,block:s},b),o)};re.propTypes={variant:i.a.oneOf(["solid","outlined","outlined-2x","dashed","no-outlined"]),color:i.a.oneOf(["primary","secondary","warning","success","danger","info","alt","dark","light","link"]),pill:i.a.bool,square:i.a.bool,shadow:i.a.bool,block:i.a.bool,icon:i.a.element,iconType:i.a.oneOf(["horizontal","vertical"]),iconPosition:i.a.oneOf(["left","right"]),size:i.a.oneOf(["large","normal","small"]),wide:i.a.oneOf(["large","normal","small"])},re.defaultProps={variant:"no-outlined",color:"primary",pill:!1,square:!1,shadow:!1,block:!1,size:"normal",wide:"normal"};n.a=re},623:function(e,n,t){var r=t(46),a=t(624);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},624:function(e,n,t){"use strict";t.r(n);var r=t(19),a=t.n(r)()(!1);a.push([e.i,".icon-span-container {\n  display: inline-block;\n  padding: 0 5px;\n}\n.icon-span-only-container {\n  padding: 0;\n}\n.icon-block {\n  display: block;\n}\n.custom-button-icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.custom-button-icon-container-vertical {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.custom-button-icon-container-vertical .icon-block {\n  font-size: 150%;\n}\n",""]),n.default=a},804:function(e,n,t){"use strict";t.d(n,"c",(function(){return w})),t.d(n,"b",(function(){return E})),t.d(n,"a",(function(){return k}));var r=t(201),a=t(618);function o(){var e=m(["\n    height: 1px;\n    border-bottom: 1px solid #dadada;\n    margin: 5px 0 18px;\n    width: 100%;\n"]);return o=function(){return e},e}function i(){var e=m(["\n    text-transform: uppercase;\n    font-size: 13px;\n    color: ",";\n    font-weight: 700;\n    margin-bottom: 13px;\n    padding-left: 20px;\n"]);return i=function(){return e},e}function c(){var e=m(["\n    width: 100%;\n    cursor: pointer;\n    display: flex;\n    transition: all .3s;\n    padding: 7px 0 7px 20px;\n    display: block;\n    ",";\n    border-bottom: ",";\n    border-radius: ",";\n    ",";\n"]);return c=function(){return e},e}function l(){var e=m(["\n    color: "," !important;\n    &:hover {\n        color: "," !important; \n    }\n"]);return l=function(){return e},e}function u(){var e=m(["\n    background-color: #e4f4ff !important;\n    color: "," !important;\n    &:hover {\n        background-color: #e4f4ff !important;\n        color: "," !important;\n    }\n"]);return u=function(){return e},e}function s(){var e=m(["\n    background-color: "," !important;\n    color: white !important;\n    &:hover  {\n        background-color: "," !important;\n        color: white !important;\n    }\n"]);return s=function(){return e},e}function p(){var e=m(["\n    &:hover {\n        background-color: #e4f4ff;\n        color: "," !important;\n    }\n"]);return p=function(){return e},e}function f(){var e=m(["\n    &:hover {\n        background-color: ",";\n        color: white !important;\n    }\n"]);return f=function(){return e},e}function d(){var e=m(["\n    &:hover {\n        color: "," !important;\n    }\n"]);return d=function(){return e},e}function m(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var b=Object(r.a)(d(),a.a.primary),h=Object(r.a)(f(),a.a.primary),v=Object(r.a)(p(),a.a.primary),y=Object(r.a)(s(),a.a.primary,a.a.primary),g=Object(r.a)(u(),a.a.primary,a.a.primary),x=Object(r.a)(l(),a.a.primary,a.a.primary),w=r.b.li(c(),(function(e){return"primary"===e.role?h:"secondary"===e.role?v:b}),(function(e){return e.border?"1px solid #dadada":"none"}),(function(e){return e.pill?"20px":"0px"}),(function(e){if(e.active)return e.activeColor?"primary"===e.activeColor?y:"secondary"===e.activeColor?g:x:"primary"===e.role?y:"secondary"===e.role?g:x})),E=r.b.h6(i(),a.a.primary),k=r.b.div(o())},885:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(804);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.a=function(e){var n=e.active,t=e.activeColor,r=e.children,l=c(e,["active","activeColor","children"]);return a.a.createElement(o.c,i({active:n,activeColor:t},l),r)}},890:function(e,n,t){"use strict";var r=t(0),a=t.n(r);function o(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    display: flex;\n    flex-wrap: wrap;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n    width: 100%;\n"]);return o=function(){return e},e}var i=t(201).b.ul(o());function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}n.a=function(e){var n=e.pill,t=e.role,r=e.border,o=e.children,l=c(e,["pill","role","border","children"]),u=a.a.Children.map(o,(function(e){var o={role:t,pill:n,border:r};return a.a.isValidElement(e)?"CustomMenuItem"===e.type.name?a.a.cloneElement(e,o):a.a.cloneElement(e):e}));return a.a.createElement(i,l,u)}},909:function(e,n,t){var r=t(46),a=t(1015);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}}}]);