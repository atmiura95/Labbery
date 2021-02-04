(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{332:function(e,t,r){"use strict";(function(e){r(53),r(5);var o,n,l,c,d=r(0),v=(r(43),r(107)),h=r(74),m=r(340),_=r(156),f=r(339),y=r(6),C=h.helpers.regex("alpha",/^((\+7|7|8)+(\()+([0-9]){3})+(\))+([0-9]{3})+(-)+([0-9]{2})+(-)+([0-9]{2})$/);t.a={name:"CartPage",components:{Cart:m.a,mModal:_.a,mDopProductsModal:f.a},mixins:[v.validationMixin],data:function(){return{bonusCount:0,hours:["10:00 - 11:00","11:00 - 12:00","12:00 - 13:00","13:00 - 14:00","14:00 - 15:00","16:00 - 17:00","17:00 - 18:00","18:00 - 19:00","19:00 - 20:00","20:00 - 21:00"],is_delivery:!0,is_pickup:!1,delivery_name_disabled:!1,delivery_phone_disabled:!1,step:1,step_1_valid:!1,step_2_valid:!1,step_3_valid:!1,step_4_valid:!1,delivery:{customer_name:{value:"",title:"Ваше имя:",required:!0},customer_phone:{value:"",title:"Телефон:",required:!0},name:{value:"",title:"Имя:",required:!0},phone:{value:"",title:"Телефон:",required:!0},postcard_text:{value:"",title:"Текст открытки:",required:!0},options:{value:"",title:"Опции",required:!0},street:{value:"",title:"Улица:",required:!0},home:{value:"",title:"Дом:",required:!0},apartment:{value:"",title:"Квартира:",required:!1},date:{value:"",title:"Дата:",required:!0},time:{value:"",title:"Время:",required:!0}},isModalDopProducts:!1}},computed:{customer_phone:function(){return this.$store.getters["profile/getProfile"].phone},isOrderCreate:function(){return this.$store.getters["cart/getCart"].products.length>0},customerNameErrors:function(){var e=[];return this.$v.delivery.customer_name.value.$dirty?(!this.$v.delivery.customer_name.value.required&&e.push("Обязательное поле!"),e):e},customerPhoneErrors:function(){var e=[];return this.$v.delivery.customer_phone.value.$dirty?(!this.$v.delivery.customer_phone.value.required&&e.push("Обязательное поле!"),!this.$v.delivery.customer_phone.value.phoneAlpha&&e.push("Номер телефона не валиден! +7(___)___-__-__"),e):e},nameErrors:function(){var e=[];return this.$v.delivery.name.value.$dirty?(!this.$v.delivery.name.value.required&&e.push("Обязательное поле!"),e):e},phoneErrors:function(){var e=[];return this.$v.delivery.phone.value.$dirty?(!this.$v.delivery.phone.value.required&&e.push("Обязательное поле!"),!this.$v.delivery.phone.value.phoneAlpha&&e.push("Номер телефона не валиден! +7(___)___-__-__"),e):e},streetErrors:function(){var e=[];return this.$v.delivery.street.value.$dirty?(!this.$v.delivery.street.value.required&&e.push("Обязательное поле!"),e):e},homeErrors:function(){var e=[];return this.$v.delivery.home.value.$dirty?(!this.$v.delivery.home.value.required&&e.push("Обязательное поле!"),e):e},dateErrors:function(){var e=[];return this.$v.delivery.date.value.$dirty?(!this.$v.delivery.date.value.required&&e.push("Обязательное поле!"),e):e},timeErrors:function(){var e=[];return this.$v.delivery.time.value.$dirty?(!this.$v.delivery.time.value.required&&e.push("Обязательное поле!"),e):e},isModalActive:{get:function(){var e=this.isModalDopProducts,body=document.querySelector("body"),html=document.querySelector("html");return e?body.classList.add("unscroll"):body.classList.remove("unscroll"),e?html.classList.add("unscroll"):html.classList.remove("unscroll"),e},set:function(e){this.isModalDopProducts=e}}},asyncData:(c=Object(d.a)(regeneratorRuntime.mark((function e(t){var r,o,n,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,r=t.store,t.params,o=r.getters.getContext.token,e.next=4,r.dispatch("delivery/findDeliveries",{params:{filter:{where:{title:"Доставка"}}},headers:{"x-api-key":o}});case 4:return n=r.getters["delivery/getDeliveries"],e.next=7,r.dispatch("delivery/findPickups",{params:{filter:{where:{title:"Самовывоз"}}},headers:{"x-api-key":o}});case 7:return l=r.getters["delivery/getPickups"],c={},n.forEach((function(e){e.slug==="".concat(r.getters.getContext.key,"-delivery-default")&&(c=e)})),e.next=12,r.dispatch("dopProducts/fetchCategories",{params:{filter:{where:{slug:"dop-catalog"},include:[{association:"children",include:["productfields"]}]}},headers:{"x-api-key":o}});case 12:return e.next=14,r.getters["dopProducts/getCategories"];case 14:return d=e.sent,e.abrupt("return",{deliveries:n,pickups:l,selectedDelivery:c,dopCatalog:d,xApiKey:o});case 16:case"end":return e.stop()}}),e)}))),function(e){return c.apply(this,arguments)}),validations:{delivery:{customer_name:{value:{required:h.required}},customer_phone:{value:{required:h.required,phoneAlpha:C}},name:{value:{required:h.required}},phone:{value:{required:h.required,phoneAlpha:C}},street:{value:{required:h.required}},home:{value:{required:h.required}},date:{value:{required:h.required}},time:{value:{required:h.required}}}},mounted:(l=Object(d.a)(regeneratorRuntime.mark((function t(){var r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!localStorage.getItem("access_token")){t.next=8;break}return t.next=4,this.$store.dispatch("profile/fetchProfile");case 4:if(!t.sent){t.next=8;break}return t.next=8,this.$store.dispatch("bonus/fetchBonus");case 8:this.calcHours(),window.places({appId:e.env.NUXT_PLACES_APP_ID,apiKey:e.env.NUXT_PLACES_API_KEY,container:document.querySelector("#address-input")}).configure({language:"ru",countries:["ru"],type:"address"}).on("change",(function(e){r.deliveries.forEach((function(e){e.slug==="".concat(r.$store.getters.getContext.slug,"-delivery-default")&&(r.selectedDelivery=e)})),r.deliveries.forEach((function(t){e.suggestion.hit.village&&t.district===e.suggestion.hit.village[0]&&(r.selectedDelivery=t)})),r.delivery.street.value="".concat(e.suggestion.value)})),this.$store.getters["profile/getProfile"].id&&(this.delivery.customer_name.value=this.$store.getters["profile/getProfile"].firstname||"",this.delivery.customer_phone.value=this.$store.getters["profile/getProfile"].phone);case 12:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)}),methods:{changePickup:function(e){var t=this;this.delivery.home.value="0",this.delivery.apartment.value="0",this.delivery.street.value=e.target.value,this.pickups.forEach((function(r){r.fullAddress===e.target.value&&(t.selectedDelivery=r)}))},changeDeliveryType:function(e){var t=this;"delivery"===e?(this.is_pickup=!1,this.is_delivery=!0,this.delivery.street.value="",this.delivery.home.value="",this.delivery.apartment.value="",this.deliveries.forEach((function(e){e.slug==="".concat(t.$store.getters.getContext.key,"-delivery-default")&&(t.selectedDelivery=e)}))):(this.is_delivery=!1,this.is_pickup=!0,this.selectedDelivery=this.pickups[0],this.delivery.street.value=this.selectedDelivery.fullAddress,this.delivery.home.value="0",this.delivery.apartment.value="0")},createOrder:(n=Object(d.a)(regeneratorRuntime.mark((function e(){var t,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$v.$touch(),!this.$v.$error){e.next=3;break}return e.abrupt("return");case 3:for(o in t={products:[],deliveryId:this.selectedDelivery.id,delivery_info:"",managerId:y[localStorage.getItem("subdomain")].id,orderstatusId:1,bonusCount:this.bonusCount},r={},this.delivery)r[o]=this.delivery[o].value;return t.delivery_info=JSON.stringify(r),this.$store.getters["cart/getCart"].products.forEach((function(e){t.products.push({id:e.product.id,quantity:e.quantity})})),e.next=11,this.$store.dispatch("order/createOrder",{order:t,delivery:this.selectedDelivery});case 11:return ym(this.$store.getters.getContext.ya_num,"reachGoal","zakaz"),gtag("event","click",{event_category:"zakaz"}),e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)}),stepChange:function(e){var t=this.$v.delivery;switch(e){case 2:if(t.customer_name.value.$touch(),t.customer_phone.value.$touch(),t.customer_name.$error||t.customer_phone.$error)return;this.step_1_valid=!0;break;case 3:if(t.name.value.$touch(),t.phone.value.$touch(),t.name.$error||t.phone.$error)return;this.step_2_valid=!0;break;case 4:if(t.street.value.$touch(),t.home.value.$touch(),t.street.$error||t.home.$error)return;this.step_3_valid=!0;break;default:return}this.step=e},calcHours:function(){var e=Number(this.$store.getters["pages/getDeliveryPage"].additionalfields.delivery_time_start||10),t=Number(this.$store.getters["pages/getDeliveryPage"].additionalfields.delivery_end_time||21),r=Number(this.$store.getters["pages/getDeliveryPage"].additionalfields.delivery_interval||1),o=(new Date).getDate(),n=(new Date).getHours(),l=[];o===Number(this.delivery.date.value.substr(0,2))&&(e=n+3);for(var c=e,i=e;c<=t-r;i+=r){c+=r;var d="".concat(i,":00 - ").concat(c,":00");l.push(d)}this.hours=l,this.delivery.time.value=l[0]},openModalWithDopProducts:(o=Object(d.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("dopProducts/fetchProducts",{params:{filter:{where:{parentId:t.id},include:["productfields"]}},headers:{"x-api-key":this.xApiKey}});case 2:this.isModalDopProducts=!0;case 3:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},beforeRouteLeave:function(e,t,r){this.$store.dispatch("fetchMenu",!1),this.$store.dispatch("fetchCityModal",!1),this.$store.dispatch("fetchCallbackModal",!1),this.isModalDopProducts=!1,r()}}}).call(this,r(27))},339:function(e,t,r){"use strict";var o={props:{item:{type:Object,default:function(){return{}}}},methods:{addToCart:function(){return this.$store.dispatch("cart/addToCart",this.item),localStorage.setItem("cart",JSON.stringify(this.$store.getters["cart/getCart"])),ym(this.$store.getters.getContext.ya_num,"reachGoal","korzina"),gtag("event","click",{event_category:"korzina"}),this.$emit("closeModalDopProducts"),!0}}},n=r(3),l={components:{mDopProductItem:Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"item--product item--product_additional"},[r("div",{staticClass:"item--product-wrapper"},[r("div",{staticClass:"item--media"},[r("div",{staticClass:"item--image"},[r("img",{staticClass:"item--image-element",attrs:{src:"/"+e.item.productfields.image,alt:e.item.title}})])]),r("div",{staticClass:"item--product-title item--product-title_active"},[r("h3",[e._v(e._s(e.item.productfields.title))])]),r("div",{staticClass:"item--content"},[r("div",{staticClass:"item--product-price item--product-price_active"},[e._v(e._s(e.item.price)+" ₽")])]),r("div",{staticClass:"item--product-actions"},[r("button",{staticClass:"button button_brand",on:{click:e.addToCart}},[r("div",{staticClass:"button--text",on:{click:function(t){return e.$emit("addProduct")}}},[e._v("Добавить")])])])])])}),[],!1,null,null,null).exports},computed:{items:function(){return this.$store.getters["dopProducts/getProducts"]}},methods:{closeModalDopProducts:function(){this.$emit("closeModalDopProducts")}}},c=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal--dop-products-inner"},[e._m(0),r("div",{staticClass:"container"},[r("div",{staticClass:"grid grid--xl-4 grid--sm-2"},e._l(e.items,(function(t,i){return r("mDopProductItem",{key:i,attrs:{item:t},on:{closeModalDopProducts:e.closeModalDopProducts}})})),1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("h2",{staticClass:"section--title text--center"},[this._v("Выберите приятное"),t("br"),t("span",[this._v("дополнение к заказу")])])])}],!1,null,null,null);t.a=c.exports},340:function(e,t,r){"use strict";r(53);var o={name:"MCartComponent",props:{deliveryCost:{type:Number,default:0}},data:function(){return{isInputBonus:!1,bonusCount:0,bonusErrors:[]}},computed:{onetimegift:function(){return this.$store.getters["onetimegift/getOnetimegift"]},cart:function(){return this.$store.getters["cart/getCart"]},bonus:function(){return this.$store.getters["bonus/getBonus"]}},methods:{changeQuantity:function(e,t){"-"===e&&t.quantity-1==0||(this.$store.dispatch("cart/changeQuantity",{item:t,operator:e}),localStorage.setItem("cart",JSON.stringify(this.$store.getters["cart/getCart"])))},removeItem:function(e){var t=JSON.parse(localStorage.getItem("cart"));t.products.length||(t.price=0,localStorage.setItem("cart",JSON.stringify(t))),this.$store.dispatch("cart/removeItem",e),localStorage.setItem("cart",JSON.stringify(this.$store.getters["cart/getCart"]))},validBonusCount:function(e){e<=Math.ceil(this.cart.price/2)&&e<=this.bonus.count?(this.bonusCount=e,this.bonusErrors=[]):this.bonusErrors.push("Количество бонусов не должно превышать 50% от суммы заказа"),this.$emit("bonusCount",this.bonusCount)},applyBonus:function(){this.bonus.count<Math.ceil(this.cart.price/2)?this.bonusCount=this.bonus.count:this.bonusCount=Math.ceil(this.cart.price/2),this.isInputBonus=!0,this.$emit("bonusCount",this.bonusCount)}}},n=r(3),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cart"},[r("div",{staticClass:"cart--inner"},[e._t("default"),r("div",{staticClass:"cart--wrapper"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.cart.products.length>0,expression:"cart.products.length > 0"}],staticClass:"cart--items"},e._l(e.cart.products,(function(t){return r("div",{key:t.id,staticClass:"cart--item d-flex"},[r("nuxt-link",{staticClass:"cart--item-media",attrs:{to:"/catalog/"+t.product.categorySlug+"/"+t.product.slug}},[r("div",{staticClass:"item--image"},[r("img",{attrs:{src:t.product.productfields.image,alt:t.product.productfields.title}})])]),r("div",{staticClass:"cart--item-content"},[r("nuxt-link",{attrs:{to:"/catalog/"+t.product.categorySlug+"/"+t.product.slug}},[r("h3",{staticClass:"cart--item-title"},[e._v(e._s(t.product.productfields.title)),r("span",[e._v(" "+e._s(t.product.size))])])]),r("div",{staticClass:"cart--item-controls"},[r("div",{staticClass:"cart--minus operator",on:{click:function(r){return e.changeQuantity("-",t)}}}),r("div",{staticClass:"cart--item-quantity"},[e._v(e._s(t.quantity))]),r("div",{staticClass:"cart--plus operator",on:{click:function(r){return e.changeQuantity("+",t)}}})])],1),r("div",{staticClass:"cart--item-actions"},[r("div",{staticClass:"cart--item-price"},[e._v(e._s(t.product.price*t.quantity)+" ₽")]),r("div",{staticClass:"operator",on:{click:function(r){return e.removeItem(t)}}},[e._v("Удалить")])])],1)})),0),r("div",{directives:[{name:"show",rawName:"v-show",value:e.cart.products.length>0,expression:"cart.products.length > 0"}],staticClass:"cart--footer"},[r("div",{staticClass:"cart--footer-content"},[r("div",{staticClass:"cart--footer-item"},[r("div",{staticClass:"cart--footer-item-label"},[e._v("Товары")]),r("div",{staticClass:"cart--footer--item-price"},[e._v(e._s(e.cart.price)+" ₽")])]),r("div",{staticClass:"cart--footer-item"},[r("div",{staticClass:"cart--footer-item-label"},[e._v("Доставка")]),r("div",{staticClass:"cart--footer--item-price"},[e._v(e._s(e.deliveryCost)+" ₽")])]),e.profile.id?r("div",{staticClass:"cart--footer-item"},[r("div",{staticClass:"cart--footer-item-label"},[e._v("Бонусы ("+e._s(e.bonus.count)+")")]),r("div",{staticClass:"cart--footer--item-price d-flex align-center"},[e.isInputBonus?e._e():r("div",{staticClass:"operator",on:{click:e.applyBonus}},[e._v("Применить")]),e.isInputBonus?r("m-input",{class:{"input--error":e.bonusErrors.length>0},attrs:{placeholder:"",value:e.bonusCount,required:!0,type:"number"},on:{input:function(t){e.validBonusCount(Number(t))},change:function(t){e.validBonusCount(Number(t))}}}):e._e(),e.isInputBonus?r("div",{staticClass:"operator operator--bonus-disactive",on:{click:function(t){e.isInputBonus=!1,e.bonusCount=0,e.bonusErrors=[],e.$emit("bonusCount",e.bonusCount)}}},[r("div",{staticClass:"close"})]):e._e()],1)]):e._e(),r("div",{staticClass:"cart--footer-item-label cart--footer-item-label_error"},[e._v(e._s(e.bonusErrors[0]))]),e.onetimegift.id&&!e.onetimegift.isUsed?r("div",{staticClass:"cart--footer-item-label"},[e._v("При оформлении заказа вы получите подарок")]):e._e()]),r("div",{staticClass:"cart--footer-summary"},[r("div",{staticClass:"cart--label"},[e._v("Итого")]),r("div",{staticClass:"cart--price"},[e._v(e._s(e.cart.price+e.deliveryCost-e.bonusCount)+" ₽")])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.cart.products.length<=0,expression:"cart.products.length <= 0"}],staticClass:"cart--empty d-flex f-column justify-center align-center"},[r("h2",{staticClass:"section--title"},[e._v("Корзина пуста")]),r("nuxt-link",{staticClass:"button--transformer",attrs:{to:"/catalog"}},[e._v("Перейти в каталог"),r("span",{staticClass:"button--transformer-border button--transformer-border_top"}),r("span",{staticClass:"button--transformer-border button--transformer-border_bottom"}),r("span",{staticClass:"button--transformer-border button--transformer-border_left"}),r("span",{staticClass:"button--transformer-border button--transformer-border_right"})])],1)])],2)])}),[],!1,null,null,null);t.a=component.exports},360:function(e,t,r){"use strict";r.r(t);var o=r(332).a,n=r(3),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("section",{staticClass:"section section--first"},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.isOrderCreate,expression:"isOrderCreate"}],staticClass:"container d-flex justify-center text--center"},[r("h1",{staticClass:"section--title"},[e._v("Оформление заказа")])])]),r("section",{staticClass:"section section--order"},[r("div",{staticClass:"container"},[r("div",{staticClass:"grid grid--order grid--lg-1",class:{"grid--xl-1":!e.isOrderCreate,"grid--xl-2":e.isOrderCreate}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.isOrderCreate&&e.online,expression:"isOrderCreate && online"}],staticClass:"form"},[r("div",{staticClass:"form--container grid grid--order-form grid--xl-1"},[r("div",{staticClass:"form--card",class:{"form--card-active":1===e.step}},[r("div",{staticClass:"form--card-header"},[e._m(0),e.step_1_valid?r("div",{staticClass:"form--label",on:{click:function(t){e.step=1,e.step_1_valid=!1,e.step_2_valid=!1,e.step_3_valid=!1,e.step_4_valid=!1}}},[e._v("Изменить")]):e._e()]),r("div",{staticClass:"form--card-content_alternate",class:{"form--card-content_alternate_active":e.step_1_valid}},[r("div",[e._v("Ваше имя: "+e._s(e.delivery.customer_name.value))]),r("div",[e._v("Ваш телефон: "+e._s(e.delivery.customer_phone.value))])]),r("div",{staticClass:"form--card-content"},[r("m-input",{class:{"input--error":e.customerNameErrors.length>0},attrs:{placeholder:e.delivery.customer_name.title,value:e.delivery.customer_name.value,required:!0,footerText:e.customerNameErrors[0]},on:{input:function(t){e.delivery.customer_name.value=t,e.$v.delivery.customer_name.value.$touch()},blur:function(t){return e.$v.delivery.customer_name.value.$touch()}}}),r("m-input",{class:{"input--error":e.customerPhoneErrors.length>0},attrs:{placeholder:"+7(___)___-__-__",value:e.delivery.customer_phone.value,required:!0,mask:"+#(###)###-##-##",footerText:e.customerPhoneErrors[0]},on:{input:function(t){e.delivery.customer_phone.value=t,e.$v.delivery.customer_phone.value.$touch()},blur:function(t){return e.$v.delivery.customer_phone.value.$touch()}}}),r("p",{staticStyle:{"text-align":"center","margin-bottom":"30px"}},[e._v("Текст открытки можно написать далее")]),r("button",{staticClass:"button button_brand",on:{click:function(t){return e.stepChange(2)}}},[r("div",{staticClass:"button--text"},[e._v("Продолжить")])])],1)]),r("div",{staticClass:"form--card",class:{"form--card-active":2===e.step}},[r("div",{staticClass:"form--card-header"},[e._m(1),e.step_2_valid?r("div",{staticClass:"form--label",on:{click:function(t){e.step=2,e.step_2_valid=!1,e.step_3_valid=!1,e.step_4_valid=!1}}},[e._v("Изменить")]):e._e()]),r("div",{staticClass:"form--card-content_alternate",class:{"form--card-content_alternate_active":e.step_2_valid}},[r("div",[e._v("Имя получателя: "+e._s(e.delivery.name.value))]),"+7(000)000-00-00"!==e.delivery.phone.value&&"+7(111)111-11-11"!==e.delivery.phone.value?r("div",[e._v("Телефон получателя: "+e._s(e.delivery.phone.value))]):e._e(),r("div",[e._v("Текст открытки: "+e._s(e.delivery.postcard_text.value))]),r("div",[e._v(e._s(e.delivery.options.value))])]),r("div",{staticClass:"form--card-content"},[r("m-checkbox",{attrs:{inputId:"i-am",text:"Я получатель",name:"iam"},on:{change:function(t){e.delivery_name_disabled=t,e.delivery.name.value=t?e.delivery.customer_name.value:"",e.delivery_phone_disabled=t,e.delivery.phone.value=t?"+7(000)000-00-00":""}}}),r("m-input",{class:{"input--error":e.nameErrors.length>0},attrs:{placeholder:e.delivery.name.title,value:e.delivery.name.value,required:!0,footerText:e.nameErrors[0],disabled:e.delivery_name_disabled},on:{input:function(t){e.delivery.name.value=t,e.$v.delivery.name.value.$touch()},blur:function(t){return e.$v.delivery.name.value.$touch()}}}),"+7(000)000-00-00"!==e.delivery.phone.value?r("m-checkbox",{attrs:{inputId:"phoneunknown",text:"Я не знаю номер получателя",name:"phoneunknown"},on:{change:function(t){e.delivery_phone_disabled=t,e.delivery.phone.value=t?"+7(111)111-11-11":""}}}):e._e(),"+7(000)000-00-00"!==e.delivery.phone.value?r("m-input",{class:{"input--error":e.phoneErrors.length>0},attrs:{placeholder:"+7(___)___-__-__",value:e.delivery.phone.value,required:!0,footerText:e.phoneErrors[0],mask:"+#(###)###-##-##",disabled:e.delivery_phone_disabled},on:{input:function(t){e.delivery.phone.value=t,e.$v.delivery.phone.value.$touch()},blur:function(t){return e.$v.delivery.phone.value.$touch()}}}):e._e(),r("m-textarea",{attrs:{placeholder:e.delivery.postcard_text.title,value:e.delivery.postcard_text.value},on:{input:function(t){e.delivery.postcard_text.value=t}}}),r("m-checkbox",{attrs:{inputId:"check-option-1",text:"Анонимный заказ",name:"check-opiton-1"},on:{change:function(t){e.delivery.options.value=t?"Aнонимный заказ":""}}}),r("button",{staticClass:"button button_brand",on:{click:function(t){return e.stepChange(3)}}},[r("div",{staticClass:"button--text"},[e._v("Продолжить")])])],1)]),r("div",{staticClass:"form--card",class:{"form--card-active":3===e.step}},[r("div",{staticClass:"form--card-header"},[e._m(2),e.step_3_valid?r("div",{staticClass:"form--label",on:{click:function(t){e.step=3,e.step_3_valid=!1,e.step_4_valid=!1}}},[e._v("Изменить")]):e._e()]),r("div",{staticClass:"form--card-content_alternate",class:{"form--card-content_alternate_active":e.step_3_valid}},[r("div",[e._v("Улица: "+e._s(e.delivery.street.value))]),r("div",[e._v("Дом: "+e._s(e.delivery.home.value))]),r("div",[e._v("Квартира: "+e._s(e.delivery.apartment.value))])]),r("div",{staticClass:"form--card-content"},[r("div",{staticClass:"radio--group"},[r("m-radio",{attrs:{inputId:"delivery",text:"Доставка",name:"delivery"},on:{change:function(t){return e.changeDeliveryType("delivery")}}}),r("m-radio",{attrs:{inputId:"pickup",text:"Самовывоз",name:"delivery"},on:{change:function(t){return e.changeDeliveryType("pickup")}}})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.is_delivery,expression:"is_delivery"}]},[r("m-input",{staticClass:"input--search",class:{"input--error":e.streetErrors.length>0},attrs:{type:"search",inputId:"address-input",name:"street",placeholder:e.delivery.street.title,value:e.delivery.street.value,required:!0,footerText:e.streetErrors[0]},on:{input:function(t){e.delivery.street.value=t,e.$v.delivery.street.value.$touch()},blur:function(t){return e.$v.delivery.street.value.$touch()}}}),r("div",{staticClass:"form--group"},[r("m-input",{class:{"input--error":e.homeErrors.length>0},attrs:{placeholder:e.delivery.home.title,value:e.delivery.home.value,required:!0,footerText:e.homeErrors[0]},on:{input:function(t){e.delivery.home.value=t,e.$v.delivery.home.value.$touch()},blur:function(t){return e.$v.delivery.home.value.$touch()}}}),r("m-input",{attrs:{placeholder:e.delivery.apartment.title,value:e.delivery.apartment.value,required:!0},on:{input:function(t){e.delivery.apartment.value=t}}})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.is_pickup,expression:"is_pickup"}]},[r("div",{staticClass:"select"},[r("div",{staticClass:"select--appearance"},[r("svg",{attrs:{width:"15",height:"9",viewBox:"0 0 15 9",fill:"none"}},[r("path",{attrs:{d:"M1 1L7.74074 8L14 1",stroke:"#333333"}})])]),r("select",{on:{change:function(t){return e.changePickup(t)}}},e._l(e.pickups,(function(t,i){return r("option",{key:i},[e._v(e._s(t.fullAddress))])})),0)])]),r("button",{staticClass:"button button_brand",on:{click:function(t){return e.stepChange(4)}}},[r("div",{staticClass:"button--text"},[e._v("Продолжить")])])])]),r("div",{staticClass:"form--card",class:{"form--card-active":4===e.step}},[r("div",{staticClass:"form--card-header"},[e._m(3),e.step_4_valid?r("div",{staticClass:"form--label",on:{click:function(t){e.step=4,e.step_4_valid=!1}}},[e._v("Изменить")]):e._e()]),r("div",{staticClass:"form--card-content_alternate",class:{"form--card-content_alternate_active":e.step_4_valid}},[r("div",[e._v("Дата: "+e._s(e.delivery.date.value))]),r("div",[e._v("Время: "+e._s(e.delivery.time.value))])]),r("div",{staticClass:"form--card-content"},[r("div",{staticClass:"form--group"},[r("m-date-picker",{class:{"input--error":e.dateErrors.length>0},attrs:{placeholder:e.delivery.date.title,required:!0,footerText:e.dateErrors[0]},on:{change:function(t){e.delivery.date.value=t,e.calcHours()},input:function(t){e.delivery.date.value=t,e.$v.delivery.date.value.$touch()},blur:function(t){return e.$v.delivery.date.value.$touch()}}}),r("select",{directives:[{name:"model",rawName:"v-model",value:e.delivery.time.value,expression:"delivery.time.value"}],staticClass:"input",attrs:{disabled:""===e.delivery.date.value},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.delivery.time,"value",t.target.multiple?r:r[0])}}},[r("option",[e._v(e._s(e.hours[0]))]),e._l(e.hours,(function(t,i){return 0!==i?r("option",[e._v(e._s(t))]):e._e()}))],2)],1),r("div",{staticClass:"button button_brand",on:{click:e.createOrder}},[r("div",{staticClass:"button--text"},[e._v("Заказать")])])])])])]),r("cart",{attrs:{deliveryCost:e.selectedDelivery.cost},on:{bonusCount:function(t){e.bonusCount=t}}},[r("div",{staticClass:"items--product_dop grid grid--xl-3"},e._l(e.dopCatalog,(function(t,i){return r("div",{key:i,staticClass:"item--product_dop",on:{click:function(r){return e.openModalWithDopProducts(t)}}},[r("div",{staticClass:"item--image"},[r("img",{attrs:{src:t.productfields.image,alt:t.productfields.title}})]),r("p",{staticClass:"item--title",domProps:{innerHTML:e._s(t.productfields.title)}})])})),0)]),r("m-modal",{staticClass:"modal--dop-products",attrs:{isModalActive:e.isModalActive,transition:"callback-modal"},scopedSlots:e._u([{key:"header",fn:function(){return[r("div",{staticClass:"close close-modal",on:{click:function(t){e.isModalDopProducts=!1}}})]},proxy:!0},{key:"content",fn:function(){return[r("mDopProductsModal",{on:{closeModalDopProducts:function(t){e.isModalDopProducts=!1}}})]},proxy:!0}])})],1)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form--card-header_inner"},[t("div",{staticClass:"link--icon"},[this._v("1")]),t("h3",{staticClass:"form--card-title"},[this._v("Ваши контакты")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form--card-header_inner"},[t("div",{staticClass:"link--icon"},[this._v("2")]),t("h3",{staticClass:"form--card-title"},[this._v("Данные получателя")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form--card-header_inner"},[t("div",{staticClass:"link--icon"},[this._v("3")]),t("h3",{staticClass:"form--card-title"},[this._v("Адрес")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form--card-header_inner"},[t("div",{staticClass:"link--icon"},[this._v("4")]),t("h3",{staticClass:"form--card-title"},[this._v("Дата и время")])])}],!1,null,null,null);t.default=component.exports}}]);