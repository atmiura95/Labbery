(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{327:function(t,e,n){"use strict";var o={name:"MInstaBlockComponent"},r=n(3),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section--block section--block_info"},[n("h2",{staticClass:"section--title"},[t._v(t._s(t.c.additionalfields.instagram_title))]),n("p",{staticClass:"section--text"},[t._v(t._s(t.c.additionalfields.instagram_text))]),n("a",{staticClass:"button",attrs:{href:t.c.additionalfields.instagram,target:"_blank"}},[n("div",{staticClass:"button--text"},[t._v("Instagram")])]),n("div",{staticClass:"item--image"},[n("img",{attrs:{src:"/"+t.c.additionalfields.instagram_image,alt:t.c.additionalfields.instagram_title}})])])}),[],!1,null,null,null);e.a=component.exports},343:function(t,e,n){"use strict";n.r(e);var o=n(327);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){var n=e.options,o=e.callbacks,a=e.map,i=e.useObjectManager,s=e.objectManagerClusterize,r={},c=[];if(t.forEach((function(t){t.clusterName?r[t.clusterName]=r[t.clusterName]?[].concat(function(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(r[t.clusterName]),[t]):[t]:c.push(t)})),Object.keys(r).forEach((function(t){var e=n[t]||{},c=o[t]||{},l=e.layout||"\n      <div>{{ properties.balloonContentHeader }}</div>\n      <div>{{ properties.balloonContentBody }}</div>\n      <div>{{ properties.balloonContentFooter }}</div>\n    ";e.clusterBalloonItemContentLayout=ymaps.templateLayoutFactory.createClass(l);var u=e.clusterLayout?ymaps.templateLayoutFactory.createClass(e.clusterLayout):e.clusterBalloonContentLayout||"cluster#balloonTwoColumns";e.clusterBalloonContentLayout=u;var p=e.clusterIconContentLayout;if(e.clusterIconContentLayout=p&&ymaps.templateLayoutFactory.createClass(p),i){var d=new ymaps.ObjectManager(Object.assign({clusterize:s},e));Object.keys(c).forEach((function(t){d.clusters.events.add(t,c[t])})),d.add(r[t]),a.geoObjects.add(d)}else{var m=new ymaps.Clusterer(e);Object.keys(c).forEach((function(t){m.events.add(t,c[t])})),e.createCluster&&(m.createCluster=e.createCluster),m.add(r[t]),a.geoObjects.add(m)}})),c.length){var u=i?new ymaps.ObjectManager({clusterize:!1}):new ymaps.GeoObjectCollection;c.forEach((function(t){return u.add(t)})),a.geoObjects.add(u)}}function a(t){return t.charAt(0).toUpperCase()+t.slice(1)}function i(t){return(t.icon.color||"blue")+(t.icon.glyph?a(t.icon.glyph):t.icon.content?"Stretchy":"")}function s(t){return t.map((function(t){return Array.isArray(t)?s(t):+t}))}function m(t,e){var n=[];return function t(e,o){if(e===o)return!0;if(e instanceof Date&&o instanceof Date)return+e==+o;if("object"!==r(e)||"object"!==r(o))return!1;if(function(t,e){for(var o=n.length;o--;)if(!(n[o][0]!==t&&n[o][0]!==e||n[o][1]!==e&&n[o][1]!==t))return!0;return!1}(e,o))return!0;n.push([e,o]);var a=Object.keys(e),i=a.length;if(Object.keys(o).length!==i)return!1;for(;i--;)if(!t(e[a[i]],o[a[i]]))return!1;return!0}(t,e)}var f=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0}var e,n;return e=t,(n=[{key:"$on",value:function(t,e){var n=this;return this.events[t]||(this.events[t]=[]),this.events[t].push(e),function(){n.events[t]=n.events[t].filter((function(t){return e!==t}))}}},{key:"$emit",value:function(t,e){var n=this.events[t];n&&n.forEach((function(t){return t(e)}))}}])&&c(e.prototype,n),t}()),u=["fullscreenControl","geolocationControl","routeEditor","rulerControl","searchControl","trafficControl","typeSelector","zoomControl","routePanelControl"];function p(t){return 0===t.filter((function(t){return![].concat(u,["default"]).includes(t)})).length}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(e,n){if(window.ymaps)return e();var o=document.createElement("SCRIPT"),r=t.apiKey,a=void 0===r?"":r,i=t.lang,s=void 0===i?"ru_RU":i,c=t.version,u=void 0===c?"2.1":c,p=t.coordorder,l=void 0===p?"latlong":p,d=t.debug,m=void 0!==d&&d?"debug":"release",h="lang=".concat(s).concat(a&&"&apikey=".concat(a),"&mode=").concat(m,"&coordorder=").concat(l),y="https://api-maps.yandex.ru/".concat(u,"/?").concat(h);o.setAttribute("src",y),o.setAttribute("async",""),o.setAttribute("defer",""),document.body.appendChild(o),f.scriptIsNotAttached=!1,o.onload=function(){ymaps.ready((function(){f.ymapReady=!0,f.$emit("scriptIsLoaded"),e()}))},o.onerror=n}))}var y=f,k=["actionend","balloonclose","balloonopen","click","contextmenu","dblclick","destroy","hintclose","hintopen","optionschange","sizechange","typechange"],v={pluginOptions:{},provide:function(){var t,e,n=this,o=[],r=[];return{useObjectManager:this.useObjectManager,addMarker:this.addMarker,deleteMarker:function(e){n.myMap.geoObjects&&(o.push(e),t&&clearTimeout(t),t=setTimeout((function(){n.deleteMarkers(o),o=[]}),0))},compareValues:function(t){var o=t.newVal,a=t.oldVal,i=t.marker;m(o,a)||(r.push(i),e&&clearTimeout(e),e=setTimeout((function(){n.setMarkers(r),r=[]}),0))}}},data:function(){return{ymapId:"yandexMap".concat(Math.round(1e5*Math.random())),myMap:{},style:this.ymapClass?"":"width: 100%; height: 100%;",isReady:!1,debounce:null,markers:[]}},props:{coords:{type:Array,required:!0},zoom:{validator:function(t){return!Number.isNaN(t)},default:18},bounds:Array,clusterOptions:{type:Object,default:function(){return{}}},clusterCallbacks:{type:Object,default:function(){return{}}},behaviors:{type:Array,default:function(){return["default"]}},controls:{type:Array,default:function(){return["default"]},validator:function(t){return p(t)}},detailedControls:{type:Object,validator:function(t){return p(Object.keys(t))}},scrollZoom:{type:Boolean,default:!0},mapType:{type:String,default:"map",validator:function(t){return["map","satellite","hybrid"].includes(t)}},placemarks:{type:Array,default:function(){return[]}},useObjectManager:{type:Boolean,default:!1},objectManagerClusterize:{type:Boolean,default:!0},ymapClass:String,initWithoutMarkers:{type:Boolean,default:!0},debug:{type:Boolean,default:!1},settings:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},showAllMarkers:Boolean},computed:{coordinates:function(){return this.coords.map((function(t){return+t}))}},methods:{init:function(){var t=this;window.ymaps&&ymaps.GeoObjectCollection&&(this.initWithoutMarkers||this.$slots.default||this.placemarks.length)&&(this.$emit("map-initialization-started"),this.myMap=new ymaps.Map(this.ymapId,{center:this.coordinates,zoom:+this.zoom,bounds:this.bounds,behaviors:this.behaviors,controls:this.controls,type:"yandex#".concat(this.mapType)},this.options),k.forEach((function(e){return t.myMap.events.add(e,(function(n){return t.$emit(e,n)}))})),this.myMap.events.add("boundschange",(function(e){var n=e.originalEvent,o=n.newZoom,r=n.newCenter,a=n.newBounds;t.$emit("boundschange",e),t.$emit("update:zoom",o),t.$emit("update:coords",r),t.$emit("update:bounds",a)})),this.detailedControls&&Object.keys(this.detailedControls).forEach((function(e){t.myMap.controls.remove(e),t.myMap.controls.add(e,t.detailedControls[e])})),!1===this.scrollZoom&&this.myMap.behaviors.disable("scrollZoom"),this.isReady=!0,this.$emit("map-was-initialized",this.myMap))},addMarker:function(t){var e=this;this.markers.push(t),this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout((function(){e.setMarkers(e.markers)}),0)},setMarkers:function(t){var e=this,n={options:this.clusterOptions,callbacks:this.clusterCallbacks,map:this.myMap,useObjectManager:this.useObjectManager,objectManagerClusterize:this.objectManagerClusterize};if(this.markers!==t){var o=t.map((function(t){return e.useObjectManager?t.id:t.properties.get("markerId")}));this.deleteMarkers(o),d(t,n),this.$emit("markers-was-change",o)}else d(t,n);this.markers=[],this.showAllMarkers&&this.myMap.setBounds(this.myMap.geoObjects.getBounds())},deleteMarkers:function(t){var e=this;this.myMap.geoObjects.each((function(n){var o=[];if(e.useObjectManager)n.remove(t);else{var r,a=function(e){var n=e.properties.get("markerId");t.includes(n)&&o.push(e)};if(n.each)n.each(a),r=n.getLength();else{var i=n.getGeoObjects();i.forEach(a),r=i.length}0===r||r===o.length?e.myMap.geoObjects.remove(n):o.length&&o.forEach((function(t){return n.remove(t)}))}})),this.$emit("markers-was-delete",t)}},watch:{coordinates:function(t){this.myMap.panTo&&this.myMap.panTo(t)},zoom:function(){this.myMap.setZoom(this.zoom)},bounds:function(t){this.myMap.setBounds&&this.myMap.setBounds(t)}},render:function(t){return t("section",{class:"ymap-container",ref:"mapContainer"},[t("div",{attrs:{id:this.ymapId,class:this.ymapClass,style:this.style}}),this.isReady&&t("div",{ref:"markersContainer",attrs:{class:"ymap-markers"}},[this.$slots.default])])},mounted:function(){var t=this;if(this.$attrs["map-link"]||this.$attrs.mapLink)throw new Error("Vue-yandex-maps: Attribute mapLink is not supported. Use settings.");if(this.placemarks&&this.placemarks.length)throw new Error("Vue-yandex-maps: Attribute placemarks is not supported. Use marker component.");this.mapObserver=new MutationObserver((function(){t.myMap.container&&t.myMap.container.fitToViewport()}));var e=this.$refs.mapContainer;if(this.mapObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!1}),y.scriptIsNotAttached){var n=this.debug;h(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){l(t,e,n[e])}))}return t}({},this.$options.pluginOptions,this.settings,{debug:n}))}y.ymapReady?ymaps.ready(this.init):y.$on("scriptIsLoaded",(function(){ymaps.ready(t.init)}))},beforeDestroy:function(){this.myMap.geoObjects&&this.myMap.geoObjects.removeAll()}},C=["placemark","polyline","rectangle","polygon","circle"],b=["balloonclose","balloonopen","click","contextmenu","dblclick","drag","dragend","dragstart","hintclose","hintopen","mouseenter","mouseleave"],O={inject:["useObjectManager","addMarker","deleteMarker","compareValues"],props:{coords:Array,hintContent:String,icon:Object,balloon:Object,markerType:{type:String,validator:function(t){return C.includes(t.toLowerCase())},default:"placemark"},markerFill:Object,markerStroke:Object,clusterName:[String,Number],circleRadius:{validator:function(t){return!Number.isNaN(t)},default:1e3},balloonTemplate:String,markerId:{type:[String,Number],required:!0},properties:Object,options:Object},data:function(){return{unwatchArr:[]}},render:function(){},mounted:function(){var t=this;Object.keys(this.$props).forEach((function(e){t.unwatchArr.push(t.$watch(e,(function(e,n){return t.compareValues({newVal:e,oldVal:n,marker:t.defineMarker()})})))})),this.addMarker(this.defineMarker())},methods:{defineMarker:function(){var t=this,e={};this.balloonTemplate&&(e={balloonContentLayout:ymaps.templateLayoutFactory.createClass(this.balloonTemplate)});var n={markerId:this.markerId,markerType:this.markerType||"placemark",coords:s(this.coords),hintContent:this.hintContent,markerFill:this.markerFill,circleRadius:+this.circleRadius,clusterName:this.clusterName,markerStroke:this.markerStroke,balloon:this.balloon,properties:this.properties,options:this.options,balloonOptions:e};this.icon&&["default#image","default#imageWithContent"].includes(this.icon.layout)?(n.iconContent=this.icon.content,n.iconLayout=this.icon.layout,n.iconImageHref=this.icon.imageHref,n.iconImageSize=this.icon.imageSize,n.iconImageOffset=this.icon.imageOffset,n.iconContentOffset=this.icon.contentOffset,this.icon.contentLayout&&"string"==typeof this.icon.contentLayout&&(n.iconContentLayout=ymaps.templateLayoutFactory.createClass(this.icon.contentLayout))):n.icon=this.icon;var o=function(t,e){var n=a(t);if(!e)return n;switch(n){case"Placemark":return"Point";case"Polyline":return"LineString";default:return n}}(n.markerType,this.useObjectManager),r={hintContent:n.hintContent,iconContent:n.icon?n.icon.content:n.iconContent,markerId:n.markerId},c=n.balloon?{balloonContentHeader:n.balloon.header,balloonContentBody:n.balloon.body,balloonContentFooter:n.balloon.footer}:{},l=Object.assign(r,c,n.properties),u=n.iconLayout?{iconLayout:n.iconLayout,iconImageHref:n.iconImageHref,iconImageSize:n.iconImageSize,iconImageOffset:n.iconImageOffset,iconContentOffset:n.iconContentOffset,iconContentLayout:n.iconContentLayout}:{preset:n.icon&&"islands#".concat(i(n),"Icon")},p=n.markerStroke?{strokeColor:n.markerStroke.color||"0066ffff",strokeOpacity:parseFloat(n.markerStroke.opacity)>=0?parseFloat(n.markerStroke.opacity):1,strokeStyle:n.markerStroke.style,strokeWidth:parseFloat(n.markerStroke.width)>=0?parseFloat(n.markerStroke.width):1}:{},d=n.markerFill?{fill:n.markerFill.enabled||!0,fillColor:n.markerFill.color||"0066ff99",fillOpacity:parseFloat(n.markerFill.opacity)>=0?parseFloat(n.markerFill.opacity):1,fillImageHref:n.markerFill.imageHref||""}:{},m=Object.assign(u,p,d,n.balloonOptions,n.options);"Circle"===o&&(n.coords=[n.coords,n.circleRadius]);var f=function(t,e){var n=e?{type:"Feature",id:t.properties.markerId,geometry:{type:t.markerType,coordinates:t.coords},properties:t.properties,options:t.options}:new ymaps[t.markerType](t.coords,t.properties,t.options);return n.clusterName=t.clusterName,n}({properties:l,options:m,markerType:o,coords:n.coords,clusterName:n.clusterName},this.useObjectManager,this.$emit);return this.useObjectManager||b.forEach((function(e){return f.events.add(e,(function(n){return t.$emit(e,n)}))})),f}},beforeDestroy:function(){this.unwatchArr.forEach((function(t){return t()})),this.deleteMarker(this.markerId)}};v.install=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.installed||(t.installed=!0,v.pluginOptions=n,e.component("yandex-map",v),e.component("ymap-marker",O))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(v);var M={name:"MMapBlock",components:{yandexMap:v,ymapMarker:O},data:function(){return{markerIcon:{layout:"default#imageWithContent",imageHref:"/images/marker.svg",imageSize:[38,54],imageOffset:[-22,-65]}}},computed:{coordinates:function(){return this.c&&this.c.additionalfields&&this.c.additionalfields.coordinates?JSON.parse(this.c.additionalfields.coordinates):[]}}},j=n(3),w=Object(j.a)(M,(function(){var t=this.$createElement,e=this._self._c||t;return e("yandex-map",{staticStyle:{width:"100%",height:"460px"},attrs:{coords:this.coordinates,"scroll-zoom":!1,controls:["zoomControl"]}},[e("ymap-marker",{attrs:{coords:this.coordinates,"marker-id":"123","hint-content":"Labberry",icon:this.markerIcon}})],1)}),[],!1,null,null,null).exports,_={name:"ContactsPage",components:{mInstaBlock:o.a,mMapBlock:w},computed:{page:function(){return this.$store.getters["pages/getIndexPage"]}},head:function(){return{title:this.page.title||"Контакты",htmlAttrs:{lang:this.page.lang||"ru"},meta:[{hid:"description",name:"description",content:this.page.description}]}},methods:{openCallbackModal:function(){this.$store.dispatch("fetchCallbackModal",!0)},phoneClick:function(){return ym(this.$store.getters.getContext.ya_num,"reachGoal","clicktel"),gtag("event","click",{event_category:"tel"}),!0}},beforeRouteLeave:function(t,e,n){this.$store.dispatch("fetchMenu",!1),this.$store.dispatch("fetchCityModal",!1),this.$store.dispatch("fetchCallbackModal",!1),n()}},I=Object(j.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page--contacts"},[n("section",{staticClass:"section section--first"},[t._m(0),n("div",{staticClass:"container"},[n("div",{staticClass:"grid grid--xl-3 grid--md-1"},[n("div",{staticClass:"section--item-address"},[n("h3",{staticClass:"item--title"},[t._v("Адрес")]),n("m-link",{attrs:{link:"tel:"+t.c.additionalfields.phone,text:t.c.additionalfields.phone},nativeOn:{click:function(e){return t.phoneClick(e)}}}),n("m-link",{attrs:{link:t.c.additionalfields.map_link,target:"_blank",text:t.c.additionalfields.address}}),n("div",{staticClass:"link"},[t._v(t._s(t.c.additionalfields.work_time))])],1),n("div",{staticClass:"section--item-address"},[n("h3",{staticClass:"item--title"},[t._v("Франшиза")]),n("m-link",{attrs:{link:"tel:"+t.c.additionalfields.franchize_phone,text:t.c.additionalfields.franchize_phone},nativeOn:{click:function(e){return t.phoneClick(e)}}}),n("m-link",{attrs:{link:"mailto:"+t.c.additionalfields.franchize_email,text:t.c.additionalfields.franchize_email}})],1),n("div",{staticClass:"section--item-address"},[n("h3",{staticClass:"item--title"},[t._v("Вопросы и предложения")]),n("m-link",{attrs:{link:"tel:"+t.c.additionalfields.qa_phone,text:t.c.additionalfields.qa_phone},nativeOn:{click:function(e){return t.phoneClick(e)}}}),n("m-link",{attrs:{link:"mailto:"+t.c.additionalfields.qa_email,text:t.c.additionalfields.qa_email}})],1)])])]),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"section--blocks grid grid--xl-2 grid--md-1"},[n("div",{staticClass:"section--block section--block_inf"},[n("h2",{staticClass:"section--title"},[t._v("Обратная связь")]),n("p",{staticClass:"section--text"},[t._v("Напишите нам о своих предложениях, пожеланиях, или замечаниях к работе магазина.")]),n("div",{staticClass:"button",on:{click:t.openCallbackModal}},[n("div",{staticClass:"button--text"},[t._v("Связаться")])]),n("client-only",[n("m-map-block")],1)],1),n("div",{staticClass:"section--block-divider"}),n("m-insta-block")],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container d-flex justify-center"},[e("h1",{staticClass:"section--title"},[this._v("Контакты")])])}],!1,null,null,null);e.default=I.exports}}]);