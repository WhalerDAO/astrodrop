(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{tzSN:function(e,n,t){"use strict";t.r(n);var r=t("36aJ");function o(e,n,t,r,o,i,u){try{var a=e[i](u),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(r,o)}n.default=function(e){var n,t,i=e.preferred,u=e.iconSrc;return{name:e.label||"Status",iconSrc:u,iconSrcSet:u,svg:e.svg||'\n<svg width="40" height="40" viewBox="0 0 109 109" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M54.7 0C24.7 0 0.400024 24.3 0.400024 54.3C0.400024 84.3 24.7 108.6 54.7 108.6C84.7 108.6 109 84.3 109 54.3C108.9 24.3 84.6 0 54.7 0ZM47.3 77.6C40.4 78 33.4 74 33.1 67.5C32.7 61.1 37.9 56.8 46.5 56.4C49.7 56.2 52.3 56.5 54.8 56.7C57.4 57 60 57.2 63.1 57C64.6 56.9 66.2 56.7 67.8 56.4C67 67.4 58.6 77 47.3 77.6ZM65.3 52.3C61.9 52.5 59.2 52.2 56.5 51.9C53.8 51.6 51 51.3 47.7 51.5C46.1 51.6 44.4 51.8 42.8 52.2C43.8 40.2 52.6 29.7 64.5 29.1C71.8 28.7 79.1 33.1 79.5 40.2C79.9 47.2 74.4 51.8 65.3 52.3Z" fill="#4360DF"/>\n</svg>\n',wallet:(n=regeneratorRuntime.mark(function e(n){var t,r,o,i,u,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.getProviderName,r=n.getAddress,o=n.getBalance,i=n.getNetwork,u=window.ethereum,a=!1,e.abrupt("return",{provider:u,interface:u&&"Status"===t(u)?{connect:function(){return u.request({method:"eth_requestAccounts"}).then(function(){return a=!0})},address:{get:function(){return a?r(u):Promise.resolve(null)}},balance:{get:function(){return a?o(u):Promise.resolve(null)}},network:{get:function(){return i(u)}},name:"Status"}:null});case 4:case"end":return e.stop()}},e)}),t=function(){var e=this,t=arguments;return new Promise(function(r,i){var u=n.apply(e,t);function a(e){o(u,r,i,a,s,"next",e)}function s(e){o(u,r,i,a,s,"throw",e)}a(void 0)})},function(e){return t.apply(this,arguments)}),type:"injected",link:"https://status.im/",installMessage:r.a,mobile:!0,preferred:i}}}}]);