(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{327:function(t,e,n){"use strict";var l={name:"MInstaBlockComponent"},c=n(3),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section--block section--block_info"},[n("h2",{staticClass:"section--title"},[t._v(t._s(t.c.additionalfields.instagram_title))]),n("p",{staticClass:"section--text"},[t._v(t._s(t.c.additionalfields.instagram_text))]),n("a",{staticClass:"button",attrs:{href:t.c.additionalfields.instagram,target:"_blank"}},[n("div",{staticClass:"button--text"},[t._v("Instagram")])]),n("div",{staticClass:"item--image"},[n("img",{attrs:{src:"/"+t.c.additionalfields.instagram_image,alt:t.c.additionalfields.instagram_title}})])])}),[],!1,null,null,null);e.a=component.exports},328:function(t,e,n){"use strict";var l={name:"MInfoBlockComponent",computed:{about:function(){return this.$store.getters["pages/getAboutPage"]}}},c=n(3),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section--block section--block_info"},[n("h2",{staticClass:"section--title"},[t._v(t._s(t.about.additionalfields.info_title))]),n("p",{staticClass:"section--text"},[t._v(t._s(t.about.additionalfields.info_text))]),n("a",{staticClass:"button",attrs:{href:t.about.additionalfields.link_info}},[n("div",{staticClass:"button--text"},[t._v("Подробнее")])]),n("div",{staticClass:"item--image"},[n("img",{attrs:{src:"/"+t.about.additionalfields.info_image,alt:t.about.additionalfields.info_title}})])])}),[],!1,null,null,null);e.a=component.exports},329:function(t,e,n){"use strict";var l=n(328),c=n(327),o={name:"MSectionInfo",components:{mInfoBlock:l.a,mInstaBlock:c.a}},r=n(3),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section",attrs:{id:"section--info"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"section--blocks grid grid--xl-2 grid--md-1"},[e("m-info-block"),e("div",{staticClass:"section--block-divider"}),e("m-insta-block")],1)])])}),[],!1,null,null,null);e.a=component.exports},334:function(t,e,n){"use strict";var l={name:"MSectionPluses",data:function(){return{items:[{title:"Отборная клубника",subtitle:"Мы поставляем клубнику сорта «Солнечный Альбион» из Армении. Ягода экологически чистая и вкусная!",image:"/images/about/slide_1.jpg"},{title:"Контроль качества",subtitle:"Каждый букет проходит проверку после сборки. Вы убедитесь в этом сами - мы пришлем фотографию композиции перед доставкой.",image:"/images/about/slide_2.jpg"},{title:"Соблюдение стандартов",subtitle:"Кондитеры работают в перчатках. А ягода отделяется от цветов специальной прозрачной пленкой. Безопасность на высшем уровне.",image:"/images/about/slide_3.jpg"},{title:"Шоколад из сердца Европы",subtitle:"Мы используем бельгийский шоколад высшего качества - Callebaut. Это лучший продукт на рынке с содержанием не менее 25,9% какао.",image:"/images/about/slide_4.jpg"},{title:"Безупречная сборка",subtitle:"Наши флористы прошли тщательную подготовку и обучение перед вступлением на должность. Ваш букет получится идеальным!",image:"/images/about/slide_5.jpg"},{title:"Срок годности",subtitle:"Клубника в шоколаде - 12 часов. Клубника без шоколада - 24 часа. Ягоду необходимо хранить в холодильнике при температуре +4...+7.",image:"/images/about/slide_6.jpg"}],swiperOption:{slidesPerView:3,spaceBetween:30,centeredSlides:!0,loop:!0,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{1240:{slidesPerView:3},992:{slidesPerView:3},768:{slidesPerView:1},480:{slidesPerView:1}}}}},mounted:function(){var t=this;setTimeout((function(){t.mySwiper.update()}),500)}},c=n(3),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section section--pluses"},[t._m(0),n("div",{staticClass:"section--slider-wrapper"},[n("div",{staticClass:"section--pluses-background-text section--pluses-background-text_top"}),n("div",{staticClass:"section--pluses-background-text section--pluses-background-text_bottom"}),n("div",{staticClass:"section--slider"},[n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[n("div",{staticClass:"swiper-wrapper"},t._l(t.items,(function(e,i){return n("div",{key:i,staticClass:"swiper-slide"},[n("div",{staticClass:"item"},[n("div",{staticClass:"item--image"},[n("img",{attrs:{src:e.image,alt:e.title}})]),n("div",{staticClass:"item--content"},[n("h3",{staticClass:"item--title text_light"},[t._v(t._s(e.title))]),n("p",{staticClass:"text_light"},[t._v(t._s(e.subtitle))])])])])})),0),n("div",{staticClass:"swiper-button-prev swiper-button-nav"},[n("svg",{attrs:{width:"13",height:"38",viewBox:"0 0 13 38",fill:"none"}},[n("path",{attrs:{d:"M12 1L1 19.5L12 37",stroke:"#818181","stroke-width":"1.5"}})])]),n("div",{staticClass:"swiper-button-next swiper-button-nav"},[n("svg",{attrs:{width:"13",height:"38",viewBox:"0 0 13 38",fill:"none"}},[n("path",{attrs:{d:"M1 1L12 19.5L1 37",stroke:"#D7607F","stroke-width":"1.5"}})])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h2",{staticClass:"section--title text--center"},[this._v("Почему у нас лучшие клубничные букеты")])])}],!1,null,null,null);e.a=component.exports},347:function(t,e,n){"use strict";n.r(e);var l=n(329),c=n(334),o={name:"AboutPage",components:{mSectionInfo:l.a,mSectionPluses:c.a},computed:{page:function(){return this.$store.getters["pages/getAboutPage"]}},beforeRouteLeave:function(t,e,n){this.$store.dispatch("fetchMenu",!1),this.$store.dispatch("fetchCityModal",!1),this.$store.dispatch("fetchCallbackModal",!1),n()}},r=n(3),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"page--about"},[this._m(0),this._m(1),e("m-section-pluses"),this._m(2),this._m(3),e("m-section-info")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section section--full-screen section--background",staticStyle:{"background-image":"url('/images/about/about_main_img.jpg')"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"section--block"},[e("h1",{staticClass:"title text_light"},[this._v("Мы Labberry - федеральная сеть клубнично-цветочных магазинов")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section section--about"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section--blocks d-flex"},[e("div",{staticClass:"section--block d-flex f-column justify-center"},[e("div",{staticClass:"section--block-content"},[e("h2",{staticClass:"section--title"},[this._v("Наша миссия")]),e("p",[this._v("Теперь вам не нужно задумываться о подарке — мы подберем самый отличный вариант и сделаем любой ваш день праздником. Конечный продукт нашей работы — вовсе не букеты, а эмоции клиентов.")]),e("p",[this._v("Мы создаем потрясающие композиции из клубники, покрытой бельгийским шоколадом.")]),e("p",{staticClass:"section--text"},[this._v("Миссия нашей компании — показать вам, что делать приятное близким нужно не только по праздникам. Давайте вместе сделаем этот мир чуточку счастливее!")])])]),e("div",{staticClass:"section--block"},[e("div",{staticClass:"item--image"},[e("img",{attrs:{src:"/images/about-img-1.jpg",alt:"Наша миссия"}})])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"section--title text--center"},[this._v("Творческий подход к созданию")]),e("div",{staticClass:"section--media"},[e("div",{staticClass:"item--image"},[e("img",{attrs:{src:"/images/about-img-3.jpg",alt:"Творческий подход к созданию"}})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"section section--about reverse"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section--blocks d-flex"},[e("div",{staticClass:"section--block d-flex f-column justify-center"},[e("div",{staticClass:"section--block-content"},[e("h2",{staticClass:"section--title"},[this._v("Открой labberry в своем городе!")]),e("p",{staticClass:"section--text"},[this._v("Основываясь на нашем опыте, поможем открыть клубничную лабораторию вашей мечты, с чистой прибылью от 200 тыс. рублей! Мы ищем сильных партнеров, чтобы выйти на новый уровень!")]),e("a",{staticClass:"button",attrs:{href:"https://franchise.labberry.shop",target:"_blank"}},[e("div",{staticClass:"button--text"},[this._v("Подробнее")])])])]),e("div",{staticClass:"section--block"},[e("div",{staticClass:"item--image"},[e("img",{attrs:{src:"/images/about-img-2.jpg",alt:"Открой labberry в своем городе!"}})])])])])])}],!1,null,null,null);e.default=component.exports}}]);