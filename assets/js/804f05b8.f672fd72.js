(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[837],{8693:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Connector=void 0;t.Connector=function(e){var t=e.options;this.options=t}},1562:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInstalledInjectedConnectors=t.InjectedConnector=t.Connector=void 0;var r=n(8693);Object.defineProperty(t,"Connector",{enumerable:!0,get:function(){return r.Connector}});var a=n(6917);Object.defineProperty(t,"InjectedConnector",{enumerable:!0,get:function(){return a.InjectedConnector}}),Object.defineProperty(t,"getInstalledInjectedConnectors",{enumerable:!0,get:function(){return a.getInstalledInjectedConnectors}})},6917:function(e,t,n){"use strict";n.r(t);var r=n(9162),a=n(9326),o=n(5647);Object.defineProperty(t,"__esModule",{value:!0}),exports.isWalletObj=exports.getInstalledInjectedConnectors=exports.InjectedConnector=void 0;var c=n(8693),s=n(9122),i=function(e){function t(t){var n=t.options;return e.call(this,{options:n})||this}(0,o.Z)(t,e);var n=t.prototype;return n.available=function(){return this.ensureWallet(),void 0!==this._wallet},n.ready=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.ensureWallet(),this._wallet){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,this._wallet.isPreauthorized();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.connect=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.ensureWallet(),this._wallet){e.next=3;break}throw new s.ConnectorNotFoundError;case 3:return e.prev=3,e.next=6,this._wallet.enable();case 6:e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(3),new s.UserRejectedRequestError;case 11:if(this._wallet.isConnected){e.next=13;break}throw new s.UserRejectedRequestError;case 13:return e.abrupt("return",this._wallet.account);case 14:case"end":return e.stop()}}),e,this,[[3,8]])})));return function(){return e.apply(this,arguments)}}(),n.disconnect=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.ensureWallet(),this.available()){e.next=3;break}throw new s.ConnectorNotFoundError;case 3:if(null!=(t=this._wallet)&&t.isConnected){e.next=5;break}throw new s.UserNotConnectedError;case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.account=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.ensureWallet(),this._wallet){e.next=3;break}throw new s.ConnectorNotConnectedError;case 3:if(this._wallet.account){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",this._wallet.account);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.id=function(){if(this.ensureWallet(),!this._wallet)throw new s.ConnectorNotConnectedError;return this._wallet.id},n.name=function(){if(this.ensureWallet(),!this._wallet)throw new s.ConnectorNotConnectedError;return this._wallet.name},n.ensureWallet=function(){var e=u()[this.options.id];e&&(this._wallet=e)},t}(c.Connector);function u(){return"undefined"==typeof window?{}:Object.getOwnPropertyNames(window).reduce((function(e,t){if(t.startsWith("starknet")){var n=window[t];(0,exports.isWalletObj)(t,n)&&!e[n.id]&&(e[n.id]=n)}return e}),{})}exports.InjectedConnector=i,exports.getInstalledInjectedConnectors=function(){var e=Object.keys(u());return l(e).map((function(e){return new i({options:{id:e}})}))};exports.isWalletObj=function(e,t){try{if(t&&["request","isConnected","provider","enable","isPreauthorized","on","off","version"].every((function(e){return e in t})))return"starknet"!==e||t.id&&t.name&&t.icon||(t.name="Argent X",t.icon=""),["id","name","icon"].every((function(e){return e in t}))}catch(n){}return!1};var l=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e}},9122:function(e,t,n){"use strict";n.r(t);var r=n(5647),a=n(5628);Object.defineProperty(t,"__esModule",{value:!0}),exports.UserNotConnectedError=exports.UserRejectedRequestError=exports.ConnectorNotFoundError=exports.ConnectorNotConnectedError=exports.ConnectorAlreadyConnectedError=void 0;var o=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).name="ConnectorAlreadyConnectedError",t.message="Connector already connected",t}return(0,r.Z)(t,e),t}((0,a.Z)(Error));exports.ConnectorAlreadyConnectedError=o;var c=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).name="ConnectorNotConnectedError",t.message="Connector not connected",t}return(0,r.Z)(t,e),t}((0,a.Z)(Error));exports.ConnectorNotConnectedError=c;var s=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).name="ConnectorNotFoundError",t.message="Connector not found",t}return(0,r.Z)(t,e),t}((0,a.Z)(Error));exports.ConnectorNotFoundError=s;var i=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).name="UserRejectedRequestError",t.message="User rejected request",t}return(0,r.Z)(t,e),t}((0,a.Z)(Error));exports.UserRejectedRequestError=i;var u=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).name="UserNotConnectedError",t.message="User not connected",t}return(0,r.Z)(t,e),t}((0,a.Z)(Error));exports.UserNotConnectedError=u},1341:function(e,t,n){"use strict";n.r(t);var r=n(9162),a=n(9326);Object.defineProperty(t,"__esModule",{value:!0}),exports.useStarknetCall=void 0;var o=n(8855),c=n(4191);function s(e,t){return"set_call_response"===t.type?Object.assign({},e,{data:t.data,error:void 0,loading:!1}):"set_call_error"===t.type?Object.assign({},e,{error:t.error,loading:!1}):"set_last_updated_at"===t.type?Object.assign({},e,{loading:!1,lastUpdatedAt:t.blockHash}):e}exports.useStarknetCall=function(e){var t=e.contract,n=e.method,i=e.args,u=e.options,l=(0,o.useReducer)(s,{loading:!0,lastUpdatedAt:""}),d=l[0],f=l[1],p=(0,c.useStarknetBlock)().data,v=void 0===(null==u?void 0:u.watch)||u.watch,b=(null==u?void 0:u.blockIdentifier)||"pending",k=(0,o.useCallback)((0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t&&n&&i)){e.next=4;break}return e.next=3,t.call(n,i,{blockIdentifier:b});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),[t,n,JSON.stringify(i)]),h=(0,o.useCallback)((function(){k().then((function(e){e&&f({type:"set_call_response",data:e})})).catch((function(e){e.message?f({type:"set_call_error",error:e.message}):f({type:"set_call_error",error:"call failed"})}))}),[k]);return(0,o.useEffect)((function(){if(null!=p&&p.block_hash){if((null==p?void 0:p.block_hash)==d.lastUpdatedAt)return;if(!v&&""!==d.lastUpdatedAt)return;h(),f({type:"set_last_updated_at",blockHash:p.block_hash})}}),[null==p?void 0:p.block_hash,d.lastUpdatedAt,h,v]),(0,o.useEffect)((function(){h()}),[null==t?void 0:t.address,n,JSON.stringify(i)]),{data:d.data,loading:d.loading,error:d.error,refresh:h}}},9634:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useContract=void 0;var r=n(8855),a=n(6271),o=n(6196);t.useContract=function(e){var t=e.abi,n=e.address,c=(0,o.useStarknet)().library;return{contract:(0,r.useMemo)((function(){if(t&&n&&c)return new a.Contract(t,n,c)}),[t,n,c])}}},5323:function(e,t,n){"use strict";n.r(t);var r=n(9162),a=n(4930),o=n(9326);Object.defineProperty(t,"__esModule",{value:!0}),exports.useStarknetExecute=void 0;var c=n(8855),s=n(1695);function i(e,t){return"start_execute"===t.type?Object.assign({},e,{loading:!0}):"set_execute_response"===t.type?Object.assign({},e,{data:t.data.transaction_hash,error:void 0,loading:!1}):"set_execute_error"===t.type?Object.assign({},e,{error:t.error,loading:!1}):"reset"===t.type?Object.assign({},e,{data:void 0,error:void 0,loading:!1}):e}exports.useStarknetExecute=function(e){var t=e.calls,n=e.metadata,u=(0,s.useStarknetTransactionManager)().addTransaction,l=(0,c.useReducer)(i,{loading:!1}),d=l[0],f=l[1],p=(0,s.useStarknet)().account,v=(0,s.useConnectors)().available,b=(0,c.useCallback)((function(){f({type:"reset"})}),[f]),k=(0,c.useCallback)((0,o.Z)((0,r.Z)().mark((function e(){var o,c,s,i,l,d,b;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=28;break}e.prev=1,o=null,c=(0,a.Z)(v);case 4:if((s=c()).done){e.next=14;break}return i=s.value,e.next=8,i.account();case 8:if(!(l=e.sent)||l.address!==p){e.next=12;break}return o=l,e.abrupt("break",14);case 12:e.next=4;break;case 14:if(o){e.next=16;break}throw new Error("No connector for address "+p);case 16:return f({type:"start_execute"}),e.next=19,o.execute(t);case 19:d=e.sent,f({type:"set_execute_response",data:d}),u({status:d.code,transactionHash:d.transaction_hash,metadata:n}),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(1),b=e.t0 instanceof Error?e.t0.message:String(e.t0),f({type:"set_execute_error",error:b});case 28:return e.abrupt("return",void 0);case 29:case"end":return e.stop()}}),e,null,[[1,24]])}))),[p,v,u,t,n]);return{data:d.data,loading:d.loading,error:d.error,reset:b,execute:k}}},986:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStarknetExecute=t.useSignTypedData=t.useStarknetInvoke=t.useContract=t.useStarknetCall=void 0;var r=n(1341);Object.defineProperty(t,"useStarknetCall",{enumerable:!0,get:function(){return r.useStarknetCall}});var a=n(9634);Object.defineProperty(t,"useContract",{enumerable:!0,get:function(){return a.useContract}});var o=n(6727);Object.defineProperty(t,"useStarknetInvoke",{enumerable:!0,get:function(){return o.useStarknetInvoke}});var c=n(2355);Object.defineProperty(t,"useSignTypedData",{enumerable:!0,get:function(){return c.useSignTypedData}});var s=n(5323);Object.defineProperty(t,"useStarknetExecute",{enumerable:!0,get:function(){return s.useStarknetExecute}})},6727:function(e,t,n){"use strict";n.r(t);var r=n(9162),a=n(9326);Object.defineProperty(t,"__esModule",{value:!0}),exports.useStarknetInvoke=void 0;var o=n(8855),c=n(1695);function s(e,t){return"start_invoke"===t.type?Object.assign({},e,{loading:!0}):"set_invoke_response"===t.type?Object.assign({},e,{data:t.data.transaction_hash,error:void 0,loading:!1}):"set_invoke_error"===t.type?Object.assign({},e,{error:t.error,loading:!1}):"reset"===t.type?Object.assign({},e,{data:void 0,error:void 0,loading:!1}):e}exports.useStarknetInvoke=function(e){var t=e.contract,n=e.method,i=(0,c.useStarknetTransactionManager)().addTransaction,u=(0,o.useReducer)(s,{loading:!1}),l=u[0],d=u[1],f=(0,o.useCallback)((function(){d({type:"reset"})}),[d]),p=(0,o.useCallback)(function(){var e=(0,a.Z)((0,r.Z)().mark((function e(a){var o,c,s,u,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=a.args,c=a.overrides,s=a.metadata,!(t&&n&&o)){e.next=15;break}return e.prev=2,d({type:"start_invoke"}),e.next=6,t.invoke(n,o,c);case 6:u=e.sent,d({type:"set_invoke_response",data:u}),i({status:u.code,transactionHash:u.transaction_hash,metadata:s}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),l=e.t0 instanceof Error?e.t0.message:String(e.t0),d({type:"set_invoke_error",error:l});case 15:return e.abrupt("return",void 0);case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),[t,n,i]);return{data:l.data,loading:l.loading,error:l.error,reset:f,invoke:p}}},2355:function(e,t,n){"use strict";n.r(t);var r=n(9162),a=n(4930),o=n(9326);Object.defineProperty(t,"__esModule",{value:!0}),exports.useSignTypedData=void 0;var c=n(8855),s=n(6196);function i(e,t){return"start_signing"===t.type?Object.assign({},e,{loading:!0}):"set_signature"===t.type?Object.assign({},e,{data:t.data,loading:!1}):"set_error"===t.type?Object.assign({},e,{error:t.error,loading:!1}):"reset"===t.type?Object.assign({},e,{data:void 0,error:void 0,loading:!1}):e}exports.useSignTypedData=function(e){var t=(0,c.useReducer)(i,{loading:!1}),n=t[0],u=t[1],l=(0,s.useStarknet)().account,d=(0,s.useConnectors)().available,f=(0,c.useCallback)((function(){u({type:"reset"})}),[u]);return{data:n.data,error:n.error,loading:n.loading,signTypedData:(0,c.useCallback)((0,o.Z)((0,r.Z)().mark((function t(){var n,o,c,s,i,f,p;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u({type:"reset"}),u({type:"start_signing"}),t.prev=2,n=null,o=(0,a.Z)(d);case 5:if((c=o()).done){t.next=15;break}return s=c.value,t.next=9,s.account();case 9:if(!(i=t.sent)||i.address!==l){t.next=13;break}return n=i,t.abrupt("break",15);case 13:t.next=5;break;case 15:if(n){t.next=17;break}throw new Error("No connector for address "+l);case 17:return t.next=19,n.signMessage(e);case 19:return f=t.sent,u({type:"set_signature",data:f}),t.abrupt("return",f);case 24:t.prev=24,t.t0=t.catch(2),p=t.t0 instanceof Error?t.t0.message:String(t.t0),u({type:"set_error",error:p}),console.error(t.t0);case 29:case"end":return t.stop()}}),t,null,[[2,24]])}))),[l,d,e]),reset:f}}},1695:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.StarknetProvider=t.useStarknetTransactionManager=t.useConnectors=t.useStarknet=t.useStarknetBlock=void 0;var o=n(4191);Object.defineProperty(t,"useStarknetBlock",{enumerable:!0,get:function(){return o.useStarknetBlock}});var c=n(6196);Object.defineProperty(t,"useStarknet",{enumerable:!0,get:function(){return c.useStarknet}}),Object.defineProperty(t,"useConnectors",{enumerable:!0,get:function(){return c.useConnectors}});var s=n(249);Object.defineProperty(t,"useStarknetTransactionManager",{enumerable:!0,get:function(){return s.useStarknetTransactionManager}});var i=n(4657);Object.defineProperty(t,"StarknetProvider",{enumerable:!0,get:function(){return i.StarknetProvider}}),a(n(986),t),a(n(1562),t),a(n(9122),t)},6376:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStarknetBlock=t.StarknetBlockContext=void 0;var r=n(8855);t.StarknetBlockContext=(0,r.createContext)({}),t.useStarknetBlock=function(){return(0,r.useContext)(t.StarknetBlockContext)}},4191:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(6376),t),a(n(1489),t)},1489:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StarknetBlockProvider=void 0;var r=n(9088),a=n(8855),o=n(6196),c=n(6376);t.StarknetBlockProvider=function(e){var t=e.interval,n=e.children,s=(0,o.useStarknet)().library,i=(0,a.useState)(void 0),u=i[0],l=i[1],d=(0,a.useState)(void 0),f=d[0],p=d[1],v=(0,a.useState)(void 0),b=v[0],k=v[1],h=(0,a.useCallback)((function(){s&&s.getBlock().then((function(e){l((function(t){return(null==t?void 0:t.block_hash)===e.block_hash?t:(k(void 0),e)}))})).catch((function(){k("failed fetching block")})).finally((function(){return p(!1)}))}),[s,p,k,l]);return(0,a.useEffect)((function(){p(!0),h();var e=setInterval((function(){h()}),null!=t?t:5e3);return function(){return clearInterval(e)}}),[h,t]),(0,r.jsx)(c.StarknetBlockContext.Provider,{value:{data:u,loading:f,error:b},children:n})}},4657:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StarknetProvider=void 0;var r=n(9088),a=n(4191),o=n(249),c=n(6196);t.StarknetProvider=function(e){var t=e.children,n=e.defaultProvider,s=e.connectors,i=e.autoConnect;return(0,r.jsx)(c.StarknetLibraryProvider,{defaultProvider:n,autoConnect:i,connectors:s,children:(0,r.jsx)(a.StarknetBlockProvider,{children:(0,r.jsx)(o.StarknetTransactionManagerProvider,{children:t})})})}},7153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useConnectors=void 0;var r=n(8855),a=n(1317);t.useConnectors=function(){var e=(0,a.useStarknet)(),t=e.connectors,n=e.connect,o=e.disconnect;return{available:(0,r.useMemo)((function(){return t.filter((function(e){return e.available()}))}),[t]),connectors:t,connect:n,disconnect:o}}},1317:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStarknet=t.StarknetContext=void 0;var r=n(8855),a=n(964);t.StarknetContext=(0,r.createContext)(a.STARKNET_INITIAL_STATE),t.useStarknet=function(){return(0,r.useContext)(t.StarknetContext)}},6196:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(1317),t),a(n(2360),t),a(n(7153),t)},7314:function(e,t,n){"use strict";n.r(t);var r=n(9162),a=n(9326);Object.defineProperty(t,"__esModule",{value:!0}),exports.useStarknetManager=void 0;var o=n(8855),c=n(6271),s=n(9122);function i(e,t){switch(t.type){case"set_account":return Object.assign({},e,{account:t.account});case"set_provider":var n;return Object.assign({},e,{library:null!=(n=t.provider)?n:c.defaultProvider});case"set_connector":return Object.assign({},e,{connector:t.connector});case"set_error":return Object.assign({},e,{error:t.error});default:return e}}exports.useStarknetManager=function(e){var t=e.defaultProvider,n=e.connectors,u=e.autoConnect,l=null!=n?n:[],d=(0,o.useReducer)(i,{library:t||c.defaultProvider,connectors:l}),f=d[0],p=d[1],v=f.account,b=f.library,k=f.error,h=(0,o.useCallback)((function(e){e.connect().then((function(t){p({type:"set_account",account:t.address}),p({type:"set_provider",provider:t}),p({type:"set_connector",connector:e})}),(function(e){console.error(e),p({type:"set_error",error:new s.ConnectorNotFoundError})}))}),[]),m=(0,o.useCallback)((function(){f.connector&&f.connector.disconnect().then((function(){p({type:"set_account",account:void 0}),p({type:"set_provider",provider:void 0}),p({type:"set_connector",connector:void 0})}),(function(e){console.error(e),p({type:"set_error",error:new s.ConnectorNotFoundError})}))}),[f.connector]);return(0,o.useEffect)((function(){function e(){return e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<t.length)){e.next=22;break}return e.prev=2,a=t[n],e.next=6,a.ready();case 6:if(e.sent){e.next=8;break}return e.abrupt("continue",19);case 8:return e.next=10,a.connect();case 10:return o=e.sent,p({type:"set_account",account:o.address}),p({type:"set_provider",provider:o}),p({type:"set_connector",connector:a}),e.abrupt("return");case 17:e.prev=17,e.t0=e.catch(2);case 19:n++,e.next=1;break;case 22:case"end":return e.stop()}}),e,null,[[2,17]])}))),e.apply(this,arguments)}u&&!v&&function(t){e.apply(this,arguments)}(l)}),[]),{account:v,connect:h,disconnect:m,connectors:l,library:b,error:k}}},964:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.STARKNET_INITIAL_STATE=void 0;var r=n(6271);t.STARKNET_INITIAL_STATE={account:void 0,connect:function(){},disconnect:function(){},library:r.defaultProvider,connectors:[]}},2360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StarknetLibraryProvider=void 0;var r=n(9088),a=n(1317),o=n(7314);t.StarknetLibraryProvider=function(e){var t=e.children,n=e.defaultProvider,c=e.connectors,s=e.autoConnect,i=(0,o.useStarknetManager)({defaultProvider:n,connectors:c,autoConnect:s});return(0,r.jsx)(a.StarknetContext.Provider,{value:i,children:t})}},9552:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStarknetTransactionManager=t.TransactionManagerContext=void 0;var r=n(8855),a=n(7450);t.TransactionManagerContext=(0,r.createContext)(a.TRANSACTION_MANAGER_INITIAL_STATE),t.useStarknetTransactionManager=function(){return(0,r.useContext)(t.TransactionManagerContext)}},249:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(9552),t),a(n(7450),t),a(n(4337),t)},7450:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TRANSACTION_MANAGER_INITIAL_STATE=void 0,t.TRANSACTION_MANAGER_INITIAL_STATE={transactions:[],addTransaction:function(e){},removeTransaction:function(e){},refreshTransaction:function(e){}}},4337:function(e,t,n){"use strict";n.r(t);var r=n(4930),a=n(9162),o=n(9326);Object.defineProperty(t,"__esModule",{value:!0}),exports.StarknetTransactionManagerProvider=void 0;var c=n(9088),s=n(8855),i=n(9203),u=n(6196),l=n(9552),d=n(533);function f(e,t){return"TRANSACTION_RECEIVED"===e.status||"ACCEPTED_ON_L1"!==e.status&&"REJECTED"!==e.status&&("ACCEPTED_ON_L2"===e.status?t-e.lastUpdatedAt>12e4:t-e.lastUpdatedAt>15e3)}exports.StarknetTransactionManagerProvider=function(e){var t=e.children,n=e.interval,p=(0,u.useStarknet)().library,v=(0,s.useReducer)(d.transactionManagerReducer,{transactions:(0,i.List)()}),b=v[0],k=v[1],h=(0,s.useCallback)(function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.getTransaction(t);case 3:n=e.sent,r=Date.now(),k({type:"update_transaction",transactionResponse:n,lastUpdatedAt:r,transactionHash:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[p,k]),m=(0,s.useCallback)((function(){for(var e,t=Date.now(),n=(0,r.Z)(b.transactions);!(e=n()).done;){var a=e.value;f(a,t)&&h(a.transactionHash)}}),[b.transactions,h]),_=(0,s.useCallback)((function(e){k({type:"add_transaction",transaction:e})}),[k]),g=(0,s.useCallback)((function(e){k({type:"remove_transaction",transactionHash:e})}),[k]),y=(0,s.useCallback)((function(e){h(e)}),[h]);return(0,s.useEffect)((function(){m();var e=setInterval((function(){m()}),null!=n?n:5e3);return function(){return clearInterval(e)}}),[n,m]),(0,c.jsx)(l.TransactionManagerContext.Provider,{value:{transactions:b.transactions.toArray(),addTransaction:_,removeTransaction:g,refreshTransaction:y},children:t})}},533:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.transactionManagerReducer=void 0,t.transactionManagerReducer=function(e,t){if("add_transaction"===t.type)return Object.assign({},e,{transactions:e.transactions.push(t.transaction)});if("remove_transaction"===t.type)return Object.assign({},e,{transactions:e.transactions.filter((function(e){return e.transactionHash!==t.transactionHash}))});if("update_transaction"===t.type){if("NOT_RECEIVED"===t.transactionResponse.status)return e;var n=e.transactions.findEntry((function(e){return e.transactionHash===t.transactionHash}));if(!n)return e;var r=n[0],a=n[1],o={status:t.transactionResponse.status,transaction:t.transactionResponse.transaction,transactionHash:t.transactionHash,lastUpdatedAt:t.lastUpdatedAt,metadata:a.metadata};return Object.assign({},e,{transactions:e.transactions.set(r,o)})}return e}},8653:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return P},contentTitle:function(){return j},default:function(){return M},frontMatter:function(){return w},metadata:function(){return O},toc:function(){return T}});var r=n(1528),a=n(2854),o=n(8855),c=n(8044),s=n(4184),i=n(1533),u=n(1695),l=JSON.parse('[{"inputs":[{"name":"amount","type":"felt"}],"name":"incrementCounter","outputs":[{"name":"prev_count","type":"felt"},{"name":"new_count","type":"felt"}],"type":"function"},{"inputs":[],"name":"counter","outputs":[{"name":"count","type":"felt"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastCaller","outputs":[{"name":"address","type":"felt"}],"stateMutability":"view","type":"function"}]'),d=(0,s.zo)("div",{display:"flex",flexDirection:"column"}),f=(0,s.zo)("div",{paddingBottom:"2rem"}),p=(0,s.zo)("h3",{}),v=(0,s.zo)("div",{display:"flex",justifyContent:"flex-start",gap:"4rem",marginBottom:"2rem"}),b=(0,s.zo)("button",{background:"transparent",border:"1px solid var(--ifm-color-primary)",padding:"1rem",borderRadius:"10px",cursor:"pointer","&:hover":{boxShadow:"0px 5px 5px rgba(0, 0, 0, 0.2)"}});function k(){return(0,u.useContract)({abi:l,address:"0x036486801b8f42e950824cba55b2df8cccb0af2497992f807a7e1d9abd2c6ba1"})}function h(){var e=(0,u.useStarknet)().account,t=(0,u.useConnectors)(),n=t.connect,r=t.disconnect,a=t.connectors;return o.createElement(f,null,o.createElement(p,null,"Account"),e?o.createElement("div",null,o.createElement("p",null,"Connected Account: ",e),o.createElement(b,{onClick:r},"Disconnect")):o.createElement("div",{style:{display:"flex",gap:"2rem"}},a.map((function(e){return e.available()?o.createElement(v,{key:e.id()},o.createElement(b,{key:e.id(),onClick:function(){return n(e)}},"Connect ",e.name())):null}))))}function m(){var e=(0,u.useStarknetBlock)(),t=e.data,n=e.error,r=(0,o.useMemo)((function(){if(null==t||!t.timestamp)return"";var e=Number(t.timestamp);return new Date(1e3*e).toLocaleString()}),[null==t?void 0:t.timestamp]);return o.createElement(f,null,o.createElement(p,null,"Block Data"),t?o.createElement("div",null,o.createElement("p",null,"Block Hash: ",t.block_hash),o.createElement("p",null,"Block Timestamp: ",r)):n?o.createElement("p",null,"'Error loading block data'"):o.createElement("p",null,"'Loading'"))}function _(){var e=k().contract,t=(0,u.useStarknetCall)({contract:e,method:"counter",args:[]}),n=t.data,r=t.error;return o.createElement(f,null,o.createElement(p,null,"Contract Call"),n?o.createElement("div",null,o.createElement("p",null,"Counter Value: ",(0,i.toBN)(n[0]).toString())):r?o.createElement("p",null,"'Error loading counter'"):o.createElement("p",null,"'Loading'"))}function g(){var e=k().contract,t=(0,u.useStarknetInvoke)({contract:e,method:"incrementCounter"}),n=t.data,r=t.loading,a=t.error,c=t.reset,s=t.invoke;return o.createElement(f,null,o.createElement(p,null,"Invoke Contract Method"),o.createElement("div",null,n&&o.createElement("div",null,o.createElement("p",null,"Transaction Hash: ",n))),o.createElement("div",null,o.createElement("p",null,"Submitting: ",r?"Submitting":"Not Submitting"),o.createElement("p",null,"Error: ",a||"No error")),o.createElement(v,null,o.createElement(b,{onClick:function(){return s({args:["0x1"]})}},"Invoke Method"),o.createElement(b,{onClick:function(){return c()}},"Reset State")))}function y(e){var t=e.transaction,n=e.onClick;return o.createElement("div",null,t.status,": ",t.transactionHash," ",o.createElement("button",{onClick:n},"remove"))}function C(){var e=(0,u.useStarknetTransactionManager)(),t=e.transactions,n=e.removeTransaction;return o.createElement(f,null,o.createElement(p,null,"Transaction Manager"),o.createElement("div",null,0===t.length?"No transactions":t.map((function(e,t){return o.createElement(y,{key:t,transaction:e,onClick:function(){return n(e.transactionHash)}})}))))}function x(){return o.createElement(d,null,o.createElement(h,null),o.createElement(m,null),o.createElement(_,null),o.createElement(g,null),o.createElement(C,null))}function E(){var e=(0,u.getInstalledInjectedConnectors)();return o.createElement(u.StarknetProvider,{autoConnect:!0,connectors:e},o.createElement(x,null))}var S=["components"],w={},j="StarkNet React Demo",O={unversionedId:"demo",id:"demo",title:"StarkNet React Demo",description:"This demo shows how to combine the hooks provided by StarkNet React to",source:"@site/docs/demo.mdx",sourceDirName:".",slug:"/demo",permalink:"/starknet-react/demo",draft:!1,editUrl:"https://github.com/apibara/starknet-react/tree/main/website/docs/demo.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"StarkNet React",permalink:"/starknet-react/"},next:{title:"useStarknet",permalink:"/starknet-react/hooks/starknet"}},P={},T=[],N={toc:T};function M(e){var t=e.components,n=(0,a.Z)(e,S);return(0,c.kt)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"starknet-react-demo"},"StarkNet React Demo"),(0,c.kt)("p",null,"This demo shows how to combine the hooks provided by StarkNet React to\nbuild React applications."),(0,c.kt)("p",null,"The demo interacts with a simple smart contract deployed on StarkNet G\xf6rli Testnet.\nYou can find the contract ",(0,c.kt)("a",{parentName:"p",href:"https://goerli.voyager.online/contract/0x036486801b8f42e950824cba55b2df8cccb0af2497992f807a7e1d9abd2c6ba1"},"on Voyager"),"."),(0,c.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,c.kt)("div",{parentName:"div",className:"admonition-heading"},(0,c.kt)("h5",{parentName:"div"},(0,c.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,c.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,c.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,c.kt)("div",{parentName:"div",className:"admonition-content"},(0,c.kt)("p",{parentName:"div"},"If you try to invoke the ",(0,c.kt)("inlineCode",{parentName:"p"},"incrementCounter")," method without first connecting a StarkNet wallet,\nthe transaction will fail instantly."))),(0,c.kt)(E,{mdxType:"Demo"}))}M.isMDXComponent=!0},40:function(){},4712:function(){},2465:function(){}}]);