!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{var i=n();for(var r in i)("object"==typeof exports?exports:e)[r]=i[r]}}("undefined"!=typeof self?self:this,function(){return function(e){var n={};function i(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=e,i.c=n,i.d=function(e,n,r){i.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=3)}([function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.initializeGPT=function(){window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],(0,r.appendResource)("script","//www.googletagservices.com/tag/js/gpt.js",!0,!0)},n.refreshSlot=function(e){var n=e.ad,i=e.correlator,r=void 0!==i&&i,t=e.prerender,o=void 0===t?null:t,a=e.info,d=void 0===a?{}:a;new Promise(function(e){if(o)try{o(d).then(function(){e("Prerender function has completed.")})}catch(n){console.warn("ArcAds: Prerender function did not return a promise or there was an error.\n          Documentation: https://github.com/wapopartners/arc-ads/wiki/Utilizing-a-Prerender-Hook"),e("Prerender function did not return a promise or there was an error, ignoring.")}else e("No Prerender function was provided.")}).then(function(){!function e(){if(window.blockArcAdsLoad)return;window.googletag&&googletag.pubadsReady?(console.log("REFRESH SLOT"),window.googletag.pubads().refresh([n],{changeCorrelator:r})):setTimeout(function(){e()},200)}()})},n.queueGoogletagCommand=function(e){window.googletag.cmd.push(e)},n.setTargeting=function(e,n){for(var i in n)n.hasOwnProperty(i)&&n[i]&&e.setTargeting(i,n[i])},n.dfpSettings=function(e){window.googletag.pubads().disableInitialLoad(),window.googletag.pubads().enableSingleRequest(),window.googletag.pubads().enableAsyncRendering(),this.collapseEmptyDivs&&window.googletag.pubads().collapseEmptyDivs();window.googletag.enableServices(),e&&window.googletag.pubads().addEventListener("slotRenderEnded",e)},n.determineSlotName=function(e,n){var i=(0,t.expandQueryString)("adslot");if(i&&(""!==i||null!==i))return"/"+e+"/"+i;return"/"+e+"/"+n};var r=i(5),t=i(6)},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.initializeBiddingServices=function(e){var n=e.prebid,i=void 0!==n&&n,r=e.amazon,o=void 0!==r&&r;window.arcBiddingReady=!1;var a=new Promise(function(e){if(i&&i.enabled){if(!pbjs){var n=n||{};n.que=n.que||[]}e("Prebid has been initialized")}else e("Prebid is not enabled on the wrapper...")}),d=new Promise(function(e){o&&o.enabled&&window.apstag?o.id&&""!==o.id?(0,t.queueAmazonCommand)(function(){window.apstag.init({pubID:o.id,adServer:"googletag"}),e("Amazon scripts have been added onto the page!")}):(console.warn("ArcAds: Missing Amazon account id. \n          Documentation: https://github.com/wapopartners/arc-ads#amazon-tama9"),e("Amazon is not enabled on the wrapper...")):e("Amazon is not enabled on the wrapper...")});Promise.all([a,d]).then(function(){window.arcBiddingReady=!0})},n.fetchBids=function e(n){var i=this;var a=n.ad,d=n.id,s=n.slotName,u=n.dimensions,l=n.wrapper,c=n.bidding,p=n.correlator,f=void 0!==p&&p,g=n.prerender,b=n.breakpoints;console.log("FETCHBIDS CALLED");var m={adUnit:a,adSlot:s,adDimensions:u,adId:d};var v=new Promise(function(e){if(l.prebid&&l.prebid.enabled){var n=l.prebid.timeout||700;r.queuePrebidCommand.bind(i,(0,r.fetchPrebidBids)(a,l.prebid.useSlotForAdUnit?s:d,n,m,g,function(){e("Fetched Prebid ads!")}))}else e("Prebid is not enabled on the wrapper...")});var h=new Promise(function(e){l.amazon&&l.amazon.enabled?(0,t.fetchAmazonBids)(d,s,u,b,function(){e("Fetched Amazon ads!")}):e("Amazon is not enabled on the wrapper...")});window.arcBiddingReady?Promise.all([v,h]).then(function(){console.log("BID HAPPENED"),(0,o.refreshSlot)({ad:a,correlator:f,prerender:g,info:m})}):setTimeout(function(){e({ad:a,id:d,slotName:s,dimensions:u,wrapper:l,bidding:c,correlator:f,prerender:g})},200)};var r=i(2),t=i(7),o=i(0)},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.queuePrebidCommand=function(e){pbjs.que.push(e)},n.fetchPrebidBids=function(e,n,i,t,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;pbjs.requestBids({timeout:i,adUnitCodes:[n],bidsBackHandler:function(){pbjs.setTargetingForGPTAsync([n]),a?a():(0,r.refreshSlot)({ad:e,info:t,prerender:o})}})},n.addUnit=function(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},t={code:e,bids:i};t.mediaTypes={banner:{sizes:n}};var o=r.sizeConfig,a=r.config;if(pbjs.addAdUnits(t),a)return void pbjs.setConfig(a);o&&pbjs.setConfig({sizeConfig:o})};var r=i(0)},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ArcAds=void 0;var r=function(){function e(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,i,r){return i&&e(n.prototype,i),r&&e(n,r),n}}(),t=i(4),o=i(1),a=i(0),d=i(2),s=i(8);function u(e){if(Array.isArray(e)){for(var n=0,i=Array(e.length);n<e.length;n++)i[n]=e[n];return i}return Array.from(e)}n.ArcAds=function(){function e(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),console.log("CONSTRUCTOR ARCADS"),this.dfpId=n.dfp.id||"",this.wrapper=n.bidding||{},this.positions=[],this.collapseEmptyDivs=n.dfp.collapseEmptyDivs,window.isMobile=t.MobileDetection,""===this.dfpId?console.warn("ArcAds: DFP id is missing from the arcads initialization script. \n        Documentation: https://github.com/wapopartners/arc-ads#getting-started"):((0,a.initializeGPT)(),(0,a.queueGoogletagCommand)(a.dfpSettings.bind(this,i)),(0,o.initializeBiddingServices)(this.wrapper))}return r(e,[{key:"registerAd",value:function(e){var n=e.id,i=e.slotName,r=e.dimensions,t=e.adType,o=void 0!==t&&t,s=e.targeting,l=void 0===s?{}:s,c=e.display,p=void 0===c?"all":c,f=e.bidding,g=void 0!==f&&f,b=e.iframeBidders,m=void 0===b?["openx"]:b,v=[],h=!1;r&&void 0!==r&&"number"==typeof r[0]?v.push.apply(v,u(r)):r&&void 0!==r&&r.length>0&&void 0===r[0][0][0]?v.push.apply(v,u(r)):r&&r.forEach(function(e){v.push.apply(v,u(e))});try{if(!(l&&l.hasOwnProperty("position")||!1===o)){var w=this.positions[o]+1||1;this.positions[o]=w;var y=Object.assign(l,{position:w});Object.assign(e,{targeting:y})}if(isMobile.any()&&"mobile"===p||!isMobile.any()&&"desktop"===p||"all"===p){if(g.prebid&&g.prebid.bids&&this.wrapper.prebid&&this.wrapper.prebid.enabled&&v){pbjs&&m.length>0&&pbjs.setConfig({userSync:{iframeEnabled:!0,filterSettings:{iframe:{bidders:m,filter:"include"}}}});var A=this.wrapper.prebid.useSlotForAdUnit?(0,a.determineSlotName)(this.dfpId,i):n;d.queuePrebidCommand.bind(this,(0,d.addUnit)(A,v,g.prebid.bids,this.wrapper.prebid))}(h=this.displayAd.bind(this,e))&&(0,a.queueGoogletagCommand)(h)}}catch(e){console.error("ads error",e)}}},{key:"registerAdCollection",value:function(e){var n=this;e.forEach(function(e){n.registerAd(e)})}},{key:"displayAd",value:function(e){var n=e.id,i=e.slotName,r=e.dimensions,t=e.targeting,d=e.sizemap,u=void 0!==d&&d,l=e.bidding,c=void 0!==l&&l,p=e.prerender,f=void 0===p?null:p,g=(0,a.determineSlotName)(this.dfpId,i),b=r&&!r.length?null:r,m=r?window.googletag.defineSlot(g,b,n):window.googletag.defineOutOfPageSlot(g,n);if(u&&u.breakpoints&&r){var v=(0,s.prepareSizeMaps)(b,u.breakpoints),h=v.mapping,w=v.breakpoints,y=v.correlators;if(!m)return!1;m.defineSizeMapping(h),u.refresh&&(0,s.setResizeListener)({ad:m,slotName:g,breakpoints:w,id:n,mapping:h,correlators:y,bidding:c,wrapper:this.wrapper,prerender:f})}m&&(m.addService(window.googletag.pubads()),(0,a.setTargeting)(m,t));var A=u&&u.breakpoints?u.breakpoints:[];r&&c&&(c.amazon&&c.amazon.enabled||c.prebid&&c.prebid.enabled)?(0,o.fetchBids)({ad:m,id:n,slotName:g,dimensions:b,wrapper:this.wrapper,prerender:f,bidding:c,breakpoints:A}):(console.log("BIDDING = FALSE"),console.log(c),(0,a.refreshSlot)({ad:m,prerender:f,info:{adUnit:m,adSlot:g,adDimensions:b,adId:n}}))}}]),e}()},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,i,r){return i&&e(n.prototype,i),r&&e(n,r),n}}();var t=n.MobileDetection=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"Android",value:function(){return!!navigator.userAgent.match(/Android/i)}},{key:"AndroidOld",value:function(){return!!navigator.userAgent.match(/Android 2.3.3/i)}},{key:"AndroidTablet",value:function(){return!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Mobile/i))}},{key:"Kindle",value:function(){return!!navigator.userAgent.match(/Kindle/i)}},{key:"KindleFire",value:function(){return!!navigator.userAgent.match(/KFOT/i)}},{key:"Silk",value:function(){return!!navigator.userAgent.match(/Silk/i)}},{key:"BlackBerry",value:function(){return!!navigator.userAgent.match(/BlackBerry/i)}},{key:"iOS",value:function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)}},{key:"iPhone",value:function(){return!!navigator.userAgent.match(/iPhone|iPod/i)}},{key:"iPad",value:function(){return!!navigator.userAgent.match(/iPad/i)}},{key:"Windows",value:function(){return!!navigator.userAgent.match(/IEMobile/i)}},{key:"FirefoxOS",value:function(){return!!navigator.userAgent.match(/Mozilla/i)&&!!navigator.userAgent.match(/Mobile/i)}},{key:"Retina",value:function(){return window.retina||window.devicePixelRatio>1}},{key:"any",value:function(){return this.Android()||this.Kindle()||this.KindleFire()||this.Silk()||this.BlackBerry()||this.iOS()||this.Windows()||this.FirefoxOS()}}]),e}();n.default=t},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.appendResource=function(e,n,i,r,t){var o=document.createElement(e);if("script"!==e)return;o.src=n,o.async=i||!1,o.defer=i||r||!1;(document.head||document.documentElement).appendChild(o),t&&t()}},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.expandQueryString=function(e){var n=window.location.href,i=e.replace(/[[\]]/g,"\\$&"),r=new RegExp("[?&]"+i+"(=([^&#]*)|&|#|$)").exec(n);if(!r)return null;if(!r[2])return"";return decodeURIComponent(r[2].replace(/\+/g," "))}},function(e,n,i){"use strict";function r(e){window.apstag&&e()}Object.defineProperty(n,"__esModule",{value:!0}),n.fetchAmazonBids=function(e,n,i,t){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=i;if(t&&void 0!==window.innerWidth&&void 0!==i[0][0][0]){for(var d=window.innerWidth,s=-1,u=t.length,l=0;l<u;l++)if(d>=t[l][0]){s=l;break}a=i[s]}r(function(){var i={slotName:n,slotID:e,sizes:a};window.apstag.fetchBids({slots:[i]},function(){window.apstag.setDisplayBids(),o&&o()})})},n.queueAmazonCommand=r},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.resizeListeners=n.sizemapListeners=void 0,n.prepareSizeMaps=function(e,n){var i=[],r=[],t=[];return(n.length?n:null).forEach(function(n,o){i.push([n,e[o]]),-1===r.indexOf(n[0])&&(r.push(n[0]),t.push(!1))}),r.sort(function(e,n){return e-n}),{mapping:i,breakpoints:r,correlators:t}},n.parseSizeMappings=s,n.runResizeEvents=u,n.setResizeListener=function(e){var n=e.id,i=e.correlators;d[n]=(0,r.debounce)(u(e),250),window.addEventListener("resize",d[n]),a[n]={listener:d[n],correlators:i}};var r=i(9),t=i(1),o=i(0),a=n.sizemapListeners={},d=n.resizeListeners={};function s(e){try{var n=[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight],i=e.filter(function(e){return e[0][0]<=n[0]&&e[0][1]<=n[1]}),r=i.length>0?i[0][1]:[];return r.length>0&&r[0].constructor!==Array&&(r=[r]),r}catch(n){return e[e.length-1][1]}}function u(e){var n=void 0,i=!1;return function(){for(var r=e.ad,d=e.breakpoints,u=e.id,l=e.bidding,c=e.mapping,p=e.slotName,f=e.wrapper,g=e.prerender,b=window.innerWidth,m=void 0,v=void 0,h=0;h<d.length;h++){if(m=d[h],v=d[h+1],b>m&&(b<v||!v)&&n!==m||b===m&&!i){n=m,i=!0;var w=s(c),y={adUnit:r,adSlot:p,adDimensions:w,adId:u};l.prebid&&l.prebid.enabled||l.amazon&&l.amazon.enabled?(0,t.fetchBids)({ad:r,id:u,slotName:p,dimensions:w,bidding:l,wrapper:f,prerender:g,correlator:a[u].correlators[h],breakpoints:d}):(0,o.refreshSlot)({ad:r,correlator:a[u].correlators[h],prerender:g,info:y})}a[u].correlators[h]=!0}}}},function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.debounce=function(e,n){var i=void 0;return function(){for(var r=this,t=arguments.length,o=Array(t),a=0;a<t;a++)o[a]=arguments[a];clearTimeout(i),i=setTimeout(function(){i=null,e.apply(r,o)},n)}}}])});