(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1913:function(e,t,n){},1918:function(e,t,n){},1919:function(e,t,n){},1955:function(e,t,n){},2569:function(e,t,n){"use strict";var i=n(1913);n.n(i).a},2574:function(e,t,n){"use strict";var i=n(1918);n.n(i).a},2575:function(e,t,n){"use strict";var i=n(1919);n.n(i).a},2608:function(e,t,n){"use strict";var i=n(1955);n.n(i).a},3124:function(e,t,n){"use strict";n.r(t);n(33),n(105),n(72),n(15),n(8),n(36),n(24);var i=n(9),r=n(23),c=n(11),a=n(13),o=n(6),l=n(18),s=n(2),u=n(32),d=n(224),f=n(389),p=n(146),h=n(223),v=n(383),b=n(390),y=n(1113),m=n(5),g=n(137),O=n(49),j=n(384),I=n(1111);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(o.a)(e);if(t){var r=Object(o.a)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Object(a.a)(this,n)}}var k=function(e,t,n,i){var r,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(c<3?r(a):c>3?r(t,n,a):r(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},T=function(e){Object(c.a)(n,e);var t=x(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return n}(n(3).default),R=T=k([Object(s.a)({})],T),C=n(12),P=Object(C.a)(R,(function(){var e=this.$createElement;return(this._self._c||e)("div",[this._t("default")],2)}),[],!1,null,null,null).exports;function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(o.a)(e);if(t){var r=Object(o.a)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Object(a.a)(this,n)}}var E=function(e,t,n,i){var r,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(c<3?r(a):c>3?r(t,n,a):r(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},D=function(e){Object(c.a)(n,e);var t=w(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).textTag=u.f.TAG,e.textType=u.f.TYPE,e.textColor=u.f.COLOR,e.textWeight=u.f.WEIGHT,e.headerTag=u.a.TAG,e.headerSize=u.a.SIZE,e.headerColor=u.a.COLOR,e.avatarSize=p.a.SIZE.SM,e.profileType=b.b,e.updatedPublishTimeOnClient=!1,e.updatedUpdatedTimeOnClient=!1,e}return Object(r.a)(n,[{key:"formatPublishTime",value:function(e,t){return this.publishTimeFormat.formatPastDate(e,t)}},{key:"beforeClick",value:function(){var e=this.article,t=e.publisher,n=e.publisherId;this.$tracking.event(this.$createGaEventByModule(this.module,O.a.CLICK,O.c.CP,[0,this.verticalIndex],{id:n,title:t},this.pageInjected.activated))}},{key:"updatedTimeOnClient",get:function(){return this.updatedPublishTimeOnClient&&this.updatedUpdatedTimeOnClient}},{key:"article",get:function(){return this.$pageContent}},{key:"avatarUrl",get:function(){return this.article.publisherIcon?Object(g.b)(this.article.publisherIcon):""}},{key:"formatedPublishTime",get:function(){var e=this.article&&this.article.publishTime?this.article.publishTime:"";return this.updatedPublishTimeOnClient=!0,this.formatPublishTime(this.article.publishTimeUnix,e)}},{key:"formatedUpdatedTime",get:function(){if(this.updatedUpdatedTimeOnClient=!0,this.article.updateTimeUnix)return this.formatPublishTime(this.article.updateTimeUnix,"")}},{key:"publishInfo",get:function(){var e=[];return this.formatedUpdatedTime&&e.push("".concat(this.$t("article.update")," ").concat(this.formatedUpdatedTime)),e.push("".concat(this.$t("article.publish")," ").concat(this.formatedPublishTime)),this.article.author&&e.push(this.article.author),e.join(" • ")}},{key:"enableSubscribe",get:function(){return this.module.subscribable&&this.module.enableSubscribe&&this.module.enableCp}},{key:"displayCpInfo",get:function(){return void 0===this.module.enableCp||this.module.enableCp}},{key:"displayCpLogo",get:function(){return!1!==this.module.enableCpLogo}},{key:"cpComponent",get:function(){return m.a.config.ENABLE_CP_END?j.a:P}},{key:"cpUrl",get:function(){return new I.a(this.article.publisherId)}}]),n}(Object(s.d)(h.a,v.a));E([Object(s.b)("publishTimeFormat")],D.prototype,"publishTimeFormat",void 0),E([Object(s.e)({type:Object})],D.prototype,"module",void 0),E([Object(s.e)({type:Number})],D.prototype,"verticalIndex",void 0);var L=D=E([Object(s.a)({components:{EntityItem:P,GlnAvatar:f.a,GlnImageBackground:d.a,GlnHeader:u.c,TheText:u.k,SubscribeButton:y.a,GlnLink:j.a}})],D),S=(n(2575),Object(C.a)(L,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"tracking",rawName:"v-tracking.visible.once",value:e.$createGaEventByModule(e.module,"imp","publishInfo",[0,e.verticalIndex],void 0,e.pageInjected.activated),expression:"\n    $createGaEventByModule(\n      module,\n      'imp',\n      'publishInfo',\n      [0, verticalIndex],\n      undefined,\n      pageInjected.activated\n    )\n  ",modifiers:{visible:!0,once:!0}}],staticClass:"entityPublishInfo"},[n("div",{staticClass:"entityPublishInfo-details"},[e.displayCpInfo&&e.displayCpLogo?n(e.cpComponent,{tag:"component",staticClass:"entityPublishInfo-avatarLink",attrs:{to:e.cpUrl},on:{beforeClick:e.beforeClick}},[n("gln-avatar",{attrs:{size:e.avatarSize,src:e.avatarUrl,"should-render-in-ssr":!0}})],1):e._e(),e._v(" "),n("div",{staticClass:"entityPublishInfo-meta"},[e.displayCpInfo?n("gln-header",{staticClass:"entityPublishInfo-publisher",attrs:{tag:e.headerTag.H4,size:e.headerSize.SM,ellipsis:1}},[n(e.cpComponent,{tag:"component",attrs:{to:e.cpUrl},on:{beforeClick:e.beforeClick}},[e._v("\n          "+e._s(e.article.publisher)+"\n        ")])],1):e._e(),e._v(" "),n("the-text",{staticClass:"entityPublishInfo-meta-info",class:e.updatedTimeOnClient&&"entityPublishInfo-meta-info--visible",attrs:{tag:e.textTag.SPAN,type:e.textType.F,color:e.textColor.SECONDARY}},[e._v("\n        "+e._s(e.publishInfo)+"\n      ")])],1)],1),e._v(" "),e.enableSubscribe?n("subscribe-button",{staticClass:"entityPublishInfo-subscribeButton",attrs:{id:e.article.publisherId,"entity-type":e.profileType.CP,"entity-name":e.article.publisher,module:e.module,"vertical-index":e.verticalIndex}}):e._e()],1)}),[],!1,null,"3ffa6104",null));t.default=S.exports},3136:function(e,t,n){"use strict";n.r(t);n(26),n(25),n(19),n(66),n(72),n(15),n(30),n(28),n(21);var i=n(0),r=n(3),c=n(42);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){return r.default.component("with-series-article-list",{props:{module:{type:Object,required:!0},verticalIndex:{type:Number,required:!0}},data:function(){return{seriesArticles:[],seriesTitle:""}},fetch:function(){var e=this;if(this.isValidSeriesListingId)return this.fetchSeriesArticle(this.seriesListingId).then((function(t){var n;e.seriesArticles=t.items.map((function(t){return o(o({},t),{},{seriesListingId:e.seriesListingId})})),e.seriesTitle=(null===(n=t.meta)||void 0===n?void 0:n.title)||""}))},computed:{isValidSeriesListingId:function(){return this.verifySeriesListingId(this.seriesListingId)},seriesListingId:function(){var e,t,n,i,r=(null===(e=this.$route.query)||void 0===e?void 0:e[c.l])||"",a=(null===(t=this.module.listing)||void 0===t||null===(n=t[0])||void 0===n||null===(i=n.params)||void 0===i?void 0:i.seriesListingId)||"";return this.verifySeriesListingId(r)?r:this.verifySeriesListingId(a)?a:""}},methods:{fetchSeriesArticle:function(e){return this.$axios.$get("/api/v6/series/listings/".concat(e))},verifySeriesListingId:function(e){return/[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}/.test(e)}},render:function(t){return this.isValidSeriesListingId?t(e,{props:o(o({},this.$props),{},{seriesArticles:this.seriesArticles,seriesTitle:this.seriesTitle})}):t()}})},s=(n(572),n(8),n(36),n(24),n(9)),u=n(23),d=n(11),f=n(13),p=n(6),h=n(18),v=n(2),b=n(32),y=n(1082),m=n(1016),g=n(1026),O=n(971),j=n(1031),I=n(127),x=n(223),k=n(383),T=n(1112),R=n(1137),C=n(1029),P=n(1030);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(p.a)(e);if(t){var r=Object(p.a)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Object(f.a)(this,n)}}var E=function(e,t,n,i){var r,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(c<3?r(a):c>3?r(t,n,a):r(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},D=function(e){Object(d.a)(n,e);var t=w(n);function n(){var e;return Object(s.a)(this,n),(e=t.apply(this,arguments)).isLoading=!0,e.containerStyle=T.a.HEADER,e.cardType=O.a.VERTICAL,e}return Object(u.a)(n,[{key:"generateSeriesNumber",value:function(e){return this.displaySwiper?e<this.currentArticleIndex?e+1:e+2:0===e?2:1}},{key:"checkToIVE",value:function(e){return Object(P.a)(e,this.$checkToIve(e.publisherId))}},{key:"mounted",value:function(){this.isLoading=!1}},{key:"showModule",get:function(){return this.articlesToBeDisplayed.length>0&&this.currentArticleIndex>-1}},{key:"swiperOptions",get:function(){var e=2===this.articlesToBeDisplayed.length;return{initialSlide:this.articleAnchorIndex,freeMode:!0,freeModeMomentumBounce:!1,grabCursor:!0,roundLengths:!0,spaceBetween:12,slidesPerView:1.74,slidesOffsetBefore:16,slidesOffsetAfter:16,breakpoints:{700:{initialSlide:e?0:this.articleAnchorIndex,spaceBetween:24,slidesPerView:2.38,slidesOffsetBefore:32,slidesOffsetAfter:32}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},{key:"displaySwiper",get:function(){return this.articlesToBeDisplayed.length>=2}},{key:"articlesToBeDisplayed",get:function(){var e=this;return this.seriesArticles.filter((function(t){var n;return t.id!==(null===(n=e.$pageInfo)||void 0===n?void 0:n.id)}))}},{key:"currentArticleIndex",get:function(){var e=this;return this.seriesArticles.findIndex((function(t){var n;return t.id===(null===(n=e.$pageInfo)||void 0===n?void 0:n.id)}))}},{key:"articleAnchorIndex",get:function(){return this.currentArticleIndex-1}},{key:"header",get:function(){return{title:this.seriesTitle,subTitle:""}}}]),n}(Object(v.d)(I.a,x.a,k.a,C.a));E([Object(v.e)({type:Object})],D.prototype,"module",void 0),E([Object(v.e)({type:Number})],D.prototype,"verticalIndex",void 0),E([Object(v.e)({type:Array})],D.prototype,"seriesArticles",void 0),E([Object(v.e)({type:String})],D.prototype,"seriesTitle",void 0);var L=D=E([Object(v.a)({components:{ArticleLiteCard:j.a,GlnModule:m.a,ListingContainer:g.a,TheContainer:b.h,GlnSwiperWrapper:y.a,CarouselLoader:R.a}})],D),S=(n(2608),n(12)),A=Object(S.a)(L,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showModule?n("div",[e.isLoading?n("carousel-loader",{attrs:{id:e.module.id}}):n("the-container",[n("gln-module",{attrs:{"container-style":e.containerStyle,header:e.header,"tracker-header-imp":e.$createGaEventByModule(e.module,"imp","article",[null,e.verticalIndex],void 0,e.pageInjected.activated)}},[e.displaySwiper?n("gln-swiper-wrapper",{staticClass:"carousel",attrs:{"custom-swiper-options":e.swiperOptions,"module-id":e.module.id}},e._l(e.articlesToBeDisplayed,(function(t,i){return n("div",{key:i,staticClass:"swiper-slide"},[n("article-lite-card",{directives:[{name:"tracking",rawName:"v-tracking.visible.once",value:e.$createGaEventByModule(e.module,"imp","article",[i,e.verticalIndex],t,e.pageInjected.activated),expression:"\n              $createGaEventByModule(\n                module,\n                'imp',\n                'article',\n                [index, verticalIndex],\n                article,\n                pageInjected.activated\n              )\n            ",modifiers:{visible:!0,once:!0}},{name:"tracking",rawName:"v-tracking.capture",value:e.$createGaEventByModule(e.module,"click","article",[i,e.verticalIndex],t,e.pageInjected.activated),expression:"\n              $createGaEventByModule(\n                module,\n                'click',\n                'article',\n                [index, verticalIndex],\n                article,\n                pageInjected.activated\n              )\n            ",modifiers:{capture:!0}}],staticClass:"carousel-article",attrs:{"card-type":e.cardType,article:t,"coverage-number":e.generateSeriesNumber(i),"to-ive":e.checkToIVE(t)}})],1)})),0):n("article-lite-card",{directives:[{name:"tracking",rawName:"v-tracking.visible.once",value:e.$createGaEventByModule(e.module,"imp","article",[e.index,e.verticalIndex],e.articlesToBeDisplayed[0],e.pageInjected.activated),expression:"\n          $createGaEventByModule(\n            module,\n            'imp',\n            'article',\n            [index, verticalIndex],\n            articlesToBeDisplayed[0],\n            pageInjected.activated\n          )\n        ",modifiers:{visible:!0,once:!0}},{name:"tracking",rawName:"v-tracking.capture",value:e.$createGaEventByModule(e.module,"click","article",[e.index,e.verticalIndex],e.articlesToBeDisplayed[0],e.pageInjected.activated),expression:"\n          $createGaEventByModule(\n            module,\n            'click',\n            'article',\n            [index, verticalIndex],\n            articlesToBeDisplayed[0],\n            pageInjected.activated\n          )\n        ",modifiers:{capture:!0}}],staticClass:"carousel-article",attrs:{article:e.articlesToBeDisplayed[0],"coverage-number":e.generateSeriesNumber(e.currentArticleIndex),"to-ive":e.checkToIVE(e.article)}})],1)],1)],1):e._e()}),[],!1,null,"21aa47ef",null).exports;t.default=l(A)},3194:function(e,t,n){"use strict";n.r(t);n(72),n(15),n(8),n(36),n(24);var i=n(9),r=n(23),c=n(11),a=n(13),o=n(6),l=n(18),s=n(2),u=n(32),d=n(223),f=n(383);function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(o.a)(e);if(t){var r=Object(o.a)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Object(a.a)(this,n)}}var h=function(e,t,n,i){var r,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(c<3?r(a):c>3?r(t,n,a):r(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},v=function(e){Object(c.a)(n,e);var t=p(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"title",get:function(){return this.$pageContent.title||""}}]),n}(Object(s.d)(d.a,f.a));h([Object(s.e)({type:Object})],v.prototype,"module",void 0),h([Object(s.e)({type:Number})],v.prototype,"verticalIndex",void 0);var b=v=h([Object(s.a)({components:{GlnHeader:u.c}})],v),y=(n(2569),n(12)),m=Object(y.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.title?n("gln-header",{directives:[{name:"tracking",rawName:"v-tracking.visible.once",value:e.$createGaEventByModule(e.module,"imp","articleTitle",[0,e.verticalIndex],void 0,e.pageInjected.activated),expression:"\n    $createGaEventByModule(\n      module,\n      'imp',\n      'articleTitle',\n      [0, verticalIndex],\n      undefined,\n      pageInjected.activated\n    )\n  ",modifiers:{visible:!0,once:!0}}],staticClass:"entityTitle designatedMargin"},[e._v("\n  "+e._s(e.title)+"\n")]):e._e()}),[],!1,null,"f8d35852",null);t.default=m.exports},3195:function(e,t,n){"use strict";n.r(t);n(15),n(8),n(36),n(24);var i=n(9),r=n(23),c=n(11),a=n(13),o=n(6),l=n(18),s=n(2),u=n(383),d=n(137),f=n(224);function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(o.a)(e);if(t){var r=Object(o.a)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Object(a.a)(this,n)}}var h=function(e,t,n,i){var r,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(c<3?r(a):c>3?r(t,n,a):r(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},v=function(e){Object(c.a)(n,e);var t=p(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).isLazy=!0,e}return Object(r.a)(n,[{key:"thumbnail",get:function(){return this.$pageContent.thumbnail}},{key:"thumbnailSource",get:function(){return Object(d.b)(this.thumbnail)}},{key:"ageLimit",get:function(){return!!this.$pageContent.ageLimit&&this.$pageContent.ageLimit}}]),n}(Object(s.d)(u.a)),b=v=h([Object(s.a)({components:{GlnImageBackground:f.a}})],v),y=n(12),m=Object(y.a)(b,(function(){var e=this.$createElement,t=this._self._c||e;return this.thumbnail?t("gln-image-background",{staticClass:"articleCard-image",attrs:{"is-lazy":this.isLazy,src:this.thumbnailSource,"age-limit":this.ageLimit}}):this._e()}),[],!1,null,"403a5c5f",null);t.default=m.exports},3196:function(e,t,n){"use strict";n.r(t);n(72),n(15),n(8),n(36),n(24);var i=n(9),r=n(23),c=n(11),a=n(13),o=n(6),l=n(18),s=n(2),u=n(32),d=n(223),f=n(383),p=n(1518);function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(o.a)(e);if(t){var r=Object(o.a)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Object(a.a)(this,n)}}var v=function(e,t,n,i){var r,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"==typeof Reflect?"undefined":Object(l.a)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(c<3?r(a):c>3?r(t,n,a):r(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},b=function(e){Object(c.a)(n,e);var t=h(n);function n(){var e;return Object(i.a)(this,n),(e=t.apply(this,arguments)).textTag=u.f.TAG,e.textType=u.f.TYPE,e.textColor=u.f.COLOR,e.textWeight=u.f.WEIGHT,e}return Object(r.a)(n,[{key:"article",get:function(){return this.$pageContent}},{key:"enableDisplayLite",get:function(){return this.article.isLite&&Object(p.a)(this.module)}},{key:"sourceUrl",get:function(){return this.article.sourceUrl||""}}]),n}(Object(s.d)(d.a,f.a));v([Object(s.e)({type:Object})],b.prototype,"module",void 0),v([Object(s.e)({type:Number})],b.prototype,"verticalIndex",void 0);var y=b=v([Object(s.a)({components:{TheText:u.k}})],b),m=(n(2574),n(12)),g=Object(m.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.sourceUrl?n("a",{directives:[{name:"show",rawName:"v-show",value:!e.enableDisplayLite,expression:"!enableDisplayLite"},{name:"tracking",rawName:"v-tracking.visible.once",value:e.$createGaEventByModule(e.module,"imp","originalLink",[0,e.verticalIndex],void 0,e.pageInjected.activated),expression:"\n    $createGaEventByModule(\n      module,\n      'imp',\n      'originalLink',\n      [0, verticalIndex],\n      undefined,\n      pageInjected.activated\n    )\n  ",modifiers:{visible:!0,once:!0}},{name:"tracking",rawName:"v-tracking.capture",value:e.$createGaEventByModule(e.module,"click","originalLink",[0,e.verticalIndex],void 0,e.pageInjected.activated),expression:"\n    $createGaEventByModule(\n      module,\n      'click',\n      'originalLink',\n      [0, verticalIndex],\n      undefined,\n      pageInjected.activated\n    )\n  ",modifiers:{capture:!0}}],staticClass:"orignalLink",attrs:{href:e.sourceUrl,target:"_blank"}},[n("the-text",{attrs:{tag:e.textTag.SPAN,type:e.textType.D,color:e.textColor.SECONDARY,weight:e.textWeight.MEDIUM,ellipsis:1}},[e._v("\n    "+e._s(e.$t("button.original"))+"\n  ")]),e._v(" "),n("ic-outlined-external-link",{staticClass:"orignalLink-icon",attrs:{size:18}})],1):e._e()}),[],!1,null,"ec141456",null);t.default=g.exports;installComponents(g,{IcOutlinedExternalLink:n(1212).default})},3197:function(e,t,n){"use strict";n.r(t);n(26),n(25),n(19),n(66),n(97),n(72),n(15),n(30),n(28),n(8),n(36),n(24),n(21);var i=n(0),r=n(9),c=n(23),a=n(11),o=n(13),l=n(6),s=n(18),u=n(2),d=n(383),f=n(223),p=n(1084),h=n(1023),v=n(27),b=n(148);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(l.a)(e);if(t){var r=Object(l.a)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return Object(o.a)(this,n)}}var O=function(e,t,n,i){var r,c=arguments.length,a=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"===("undefined"==typeof Reflect?"undefined":Object(s.a)(Reflect))&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(a=(c<3?r(a):c>3?r(t,n,a):r(t,n))||a);return c>3&&a&&Object.defineProperty(t,n,a),a},j=function(e){Object(a.a)(n,e);var t=g(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"created",value:function(){var e=this;this.recommendArticles.forEach((function(t){e.$store.commit("article/set",{article:t})}))}},{key:"recommendArticles",get:function(){var e=this.$pageContent,t=e.id,n=e.publisher,i=e.categoryName,r=e.recommendArticles,c=void 0===r?[]:r;return c.slice(0,Object(p.a)({articlesLength:c.length,shouldDisplayEvenArticle:v.ModuleType.GRID===this.module.style,articleCount:this.module.articleCount})).map((function(e,r){return m(m({},e),{},{publisher:e.publisher||n,categoryName:e.categoryName||i,wrappedId:Object(b.generateWrappedId)({listingId:"EntityCpRelated_".concat(t),articleId:e.id,position:r})})}))}},{key:"hasRecommendedArticles",get:function(){return this.recommendArticles.length>0}}]),n}(Object(u.d)(d.a,f.a));O([Object(u.e)({type:Object})],j.prototype,"module",void 0),O([Object(u.e)({type:Number})],j.prototype,"verticalIndex",void 0);var I=j=O([Object(u.a)({components:{ArticleList:h.a}})],j),x=n(12),k=Object(x.a)(I,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"cpRelated"},[this.hasRecommendedArticles?t("article-list",{attrs:{articles:this.recommendArticles,module:this.module,"vertical-index":this.verticalIndex,"module-style":this.module.style}}):this._e()],1)}),[],!1,null,"b3740338",null);t.default=k.exports}}]);
//# sourceMappingURL=https://line-objects-internal.com/gln-sourcemap/ce43ca23/sourcemap/article.ce43ca23.js.map