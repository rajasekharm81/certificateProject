(self.webpackChunkodrequest=self.webpackChunkodrequest||[]).push([[41],{6015:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(7462),u=n(3366),o=n(2791),a=n(8182),c=n(3842),i=n(104),l=n(8519),s=n(3459),f=n(184),p=["className","component"];var d=n(5902),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=e.defaultClassName,d=void 0===n?"MuiBox-root":n,v=e.generateClassName,y=e.styleFunctionSx,m=void 0===y?i.Z:y,h=(0,c.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(m),b=o.forwardRef((function(e,n){var o=(0,s.Z)(t),c=(0,l.Z)(e),i=c.className,y=c.component,m=void 0===y?"div":y,b=(0,u.Z)(c,p);return(0,f.jsx)(h,(0,r.Z)({as:m,ref:n,className:(0,a.Z)(i,v?v(d):d),theme:o},b))}));return b}({defaultTheme:(0,n(4360).Z)(),defaultClassName:"MuiBox-root",generateClassName:d.Z.generate}),y=v},7012:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(2791),u=n(7462),o=n(8023),a=n(9598),c="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",i=n(184);var l=function(e){var t=e.children,n=e.theme,l=(0,a.Z)(),s=r.useMemo((function(){var e=null===l?n:function(e,t){return"function"===typeof t?t(e):(0,u.Z)({},e,t)}(l,n);return null!=e&&(e[c]=null!==l),e}),[n,l]);return(0,i.jsx)(o.Z.Provider,{value:s,children:t})},s=n(9886),f=n(3459),p={};function d(e){var t=(0,f.Z)();return(0,i.jsx)(s.T.Provider,{value:"object"===typeof t?t:p,children:e.children})}var v=function(e){var t=e.children,n=e.theme;return(0,i.jsx)(l,{theme:n,children:(0,i.jsx)(d,{children:t})})}},6971:function(e,t,n){var r;window,e.exports=(r=n(2791),function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/otp-input-react/",n(n.s=1)}([function(e,t){e.exports=r},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),u.forEach((function(t){r(e,t,n[t])}))}return e}function o(e,t){if(null==e)return{};var n,r,u=function(e,t){if(null==e)return{};var n,r,u={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(u[n]=e[n]);return u}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(u[n]=e[n])}return u}n.r(t);var a=n(0),c=n.n(a);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,u=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(i){u=!0,o=i}finally{try{r||null==c.return||c.return()}finally{if(u)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(e){var t=e.maxTime,n=e.onTimerComplete,r=e.timeInterval,u=e.onResendClick,o=Object(a.useRef)(),c=i(Object(a.useState)(t),2),l=c[0],s=c[1];return Object(a.useEffect)((function(){return o.current&&0===l?(clearTimeout(o.current),n&&n()):o.current=setTimeout((function(){s((function(e){return e-1}))}),r),function(){clearTimeout(o.current)}}),[n,l,r]),{handelResendClick:function(){u&&u(0===l),s(t)},remainingTime:l}};function s(e){var t=e.renderTime,n=e.renderButton,r=e.style,a=e.className,i=o(e,["renderTime","renderButton","style","className"]),s=l(i),f=s.remainingTime,p=s.handelResendClick;return c.a.createElement("div",{className:a||"","data-testid":"otp-resend-root",style:u({display:"flex",justifyContent:"space-between"},r)},t?t(f):c.a.createElement("span",null,f," sec"),n?n({disabled:0!==f,onClick:p,remainingTime:f}):c.a.createElement("button",{disabled:0!==f,onClick:p,type:"button"},"Resend OTP"))}s.defaultProps={maxTime:60,timeInterval:1e3,style:{}};var f=s,p={width:32,height:32,textAlign:"center",marginRight:20},d=c.a.memo((function(e){var t=e.focus,n=e.autoFocus,r=e.disabled,i=e.value,l=e.onInputFocus,s=e.index,f=e.secure,d=e.inputStyles,v=e.otpType,y=o(e,["focus","autoFocus","disabled","value","onInputFocus","index","secure","inputStyles","otpType"]),m=Object(a.useRef)(null),h=Object(a.useRef)(!1);Object(a.useEffect)((function(){n&&t&&m.current.focus()}),[]),Object(a.useEffect)((function(){h.current&&t&&m.current.focus(),h.current=!0}),[t]);var b="text";return f?b="password":"number"===v&&(b="tel"),c.a.createElement("input",Object.assign({style:u({},p,d),type:b,maxLength:"1",ref:m,disabled:r,onFocus:function(e){return l(s,e)},value:i||""},y))})),v=function(e){var t=e.autoFocus,n=e.value,r=e.otpType,u=e.onChange,o=e.OTPLength,c=i(Object(a.useState)(t?0:-1),2),l=c[0],s=c[1],f=function(){return n?n.toString().split(""):[]},p=function(e){var t=e.join("");u(t)},d=function(){!function(e){var t=Math.max(Math.min(o-1,e),0);s(t)}("next"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next")?l+1:l-1)},v=function(e){var t=i(e,1)[0],n=f();n[l]=t,p(n)},y=function(e){switch(r){case"number":return!(e.charCodeAt(0)>57||e.charCodeAt(0)<48);case"alpha":return!(e.charCodeAt(0)>122||e.charCodeAt(0)<65);case"alphanumeric":return!(e.charCodeAt(0)>122||e.charCodeAt(0)<48);default:return!0}};return{activeInput:l,getOtpValue:f,handleOnChange:function(e){y(e.target.value)&&(v(e.target.value),d("next"))},handleOnKeyDown:function(e){switch(e.key){case"Backspace":e.preventDefault(),v(""),d("prev");break;case"Delete":e.preventDefault(),v("");break;case"ArrowLeft":e.preventDefault(),d("prev");break;case"ArrowRight":e.preventDefault(),d("next")}},handelOnInput:function(e){e.target.value.length>1&&(e.preventDefault(),d("next"))},handleOnPaste:function(e,t){e.preventDefault();for(var n=f(),r=e.clipboardData.getData("text/plain").slice(0,o-l).split(""),u=0;u<o;++u)u>=l&&r.length>0&&(n[u]=r.shift());for(var a=[n.length],c=0,i=0;i<n.length;++i)y(n[i])&&(a[c]=n[i],c++);p(a)},onInputFocus:function(e,t){s(e),t.target.select()}}},y=function(e){var t=e.OTPLength,n=e.disabled,r=e.autoFocus,o=e.value,i=void 0===o?"":o,l=e.onChange,s=e.otpType,f=e.secure,p=e.className,y=e.inputClassName,m=e.inputStyles,h=e.style,b=e.placeholder,O=v({autoFocus:r,value:i,otpType:s,onChange:l,OTPLength:t}),g=O.activeInput,j=O.getOtpValue,x=O.handleOnChange,P=O.handleOnKeyDown,w=O.handelOnInput,T=O.handleOnPaste,C=O.onInputFocus,S=Object(a.useMemo)((function(){for(var e=j(),u=[],o=0;o<t;o++)u.push(c.a.createElement(d,{className:y,inputStyles:m,key:o,focus:g===o,value:e[o],onChange:x,onKeyDown:P,onInput:w,onPaste:T,onInputFocus:C,index:o,disabled:n,autoFocus:r,secure:f,"data-testid":"input",otpType:s,placeholder:b&&b[o]}));return u}),[j,t,y,m,g,x,P,w,T,C,n,r,f,s,b]);return c.a.createElement("div",{style:u({display:"flex"},h),className:"".concat(p),"data-testid":"otp-input-root"},S)};y.defaultProps={className:"",inputClassName:"",OTPLength:4,onChange:function(){},disabled:!1,secure:!1,autoFocus:!1,value:"",otpType:"any",inputStyles:{},style:{},placeholder:void 0};var m=y;n.d(t,"ResendOTP",(function(){return f})),n.d(t,"default",(function(){return m}))}]))},1413:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(4942);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=41.16961127.chunk.js.map