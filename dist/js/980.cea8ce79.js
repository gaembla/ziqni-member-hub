(self["webpackChunkziqni_member_home"]=self["webpackChunkziqni_member_home"]||[]).push([[980],{7066:(e,i,t)=>{"use strict";var s=t(9670);e.exports=function(){var e=s(this),i="";return e.hasIndices&&(i+="d"),e.global&&(i+="g"),e.ignoreCase&&(i+="i"),e.multiline&&(i+="m"),e.dotAll&&(i+="s"),e.unicode&&(i+="u"),e.unicodeSets&&(i+="v"),e.sticky&&(i+="y"),i}},4706:(e,i,t)=>{var s=t(6916),a=t(2597),n=t(7976),o=t(7066),r=RegExp.prototype;e.exports=function(e){var i=e.flags;return void 0!==i||"flags"in r||a(e,"flags")||!n(r,e)?i:s(o,e)}},7152:(e,i,t)=>{var s=t(7854),a=t(2104),n=t(614),o=t(8113),r=t(206),l=t(8053),d=/MSIE .\./.test(o),c=s.Function,m=function(e){return d?function(i,t){var s=l(arguments.length,1)>2,o=n(i)?i:c(i),d=s?r(arguments,2):void 0;return e(s?function(){a(o,this,d)}:o,t)}:e};e.exports={setTimeout:m(s.setTimeout),setInterval:m(s.setInterval)}},3710:(e,i,t)=>{var s=t(1702),a=t(8052),n=Date.prototype,o="Invalid Date",r="toString",l=s(n[r]),d=s(n.getTime);String(new Date(NaN))!=o&&a(n,r,(function(){var e=d(this);return e===e?l(this):o}))},3689:(e,i,t)=>{var s=t(2109),a=t(4758);s({target:"Math",stat:!0},{trunc:a})},9714:(e,i,t)=>{"use strict";var s=t(6530).PROPER,a=t(8052),n=t(9670),o=t(1340),r=t(7293),l=t(4706),d="toString",c=RegExp.prototype,m=c[d],u=r((function(){return"/a/b"!=m.call({source:"a",flags:"b"})})),g=s&&m.name!=d;(u||g)&&a(RegExp.prototype,d,(function(){var e=n(this),i=o(e.source),t=o(l(e));return"/"+i+"/"+t}),{unsafe:!0})},6815:(e,i,t)=>{var s=t(2109),a=t(7854),n=t(7152).setInterval;s({global:!0,bind:!0,forced:a.setInterval!==n},{setInterval:n})},8417:(e,i,t)=>{var s=t(2109),a=t(7854),n=t(7152).setTimeout;s({global:!0,bind:!0,forced:a.setTimeout!==n},{setTimeout:n})},2564:(e,i,t)=>{t(6815),t(8417)},6301:(e,i,t)=>{"use strict";t.d(i,{Z:()=>u});var s=t(4448),a={key:0,class:"indicator__block"},n={class:"indicator__block"},o={class:"indicator__block"},r={class:"indicator__block"};function l(e,i,t,l,d,c){return(0,s.openBlock)(),(0,s.createElementBlock)("div",{class:(0,s.normalizeClass)(["countdown",{"display-row":t.isRow,"display-column":t.isColumn,"space-between":!t.isDetailCard}])},[(0,s.createElementVNode)("span",{class:(0,s.normalizeClass)({"title-big":t.isBigSize,"title-medium":t.isMediumSize,"title-small":t.isSmallSize,"title-x-small":t.isXSmallSize,"detail-card-title":t.isDetailCard})},(0,s.toDisplayString)(t.title),3),(0,s.createElementVNode)("div",{class:(0,s.normalizeClass)(["indicator",{"detail-card-indicator":t.isDetailCard,"space-between":!t.isDetailCard}])},[c.days?((0,s.openBlock)(),(0,s.createElementBlock)("div",a,[(0,s.createElementVNode)("div",{class:(0,s.normalizeClass)({"indicator__digit-big-size":t.isBigSize,"indicator__digit-medium-size":t.isMediumSize,"indicator__digit-small-size":t.isSmallSize,"indicator__digit-x-small-size":t.isXSmallSize,"indicator__digit-detail-card":t.isDetailCard})},(0,s.toDisplayString)(c.days),3),(0,s.createElementVNode)("div",{class:(0,s.normalizeClass)({"indicator__text-big-size":t.isBigSize,"indicator__text-medium-size":t.isMediumSize,"indicator__text-small-size":t.isSmallSize,"indicator__text-x-small-size":t.isXSmallSize,"indicator__text-detail-card":t.isDetailCard})},"Days",2)])):(0,s.createCommentVNode)("",!0),(0,s.createElementVNode)("div",n,[(0,s.createElementVNode)("div",{class:(0,s.normalizeClass)({"indicator__digit-big-size":t.isBigSize,"indicator__digit-medium-size":t.isMediumSize,"indicator__digit-small-size":t.isSmallSize,"indicator__digit-x-small-size":t.isXSmallSize,"indicator__digit-detail-card":t.isDetailCard})},(0,s.toDisplayString)(c.hours),3),(0,s.createElementVNode)("div",{class:(0,s.normalizeClass)({"indicator__text-big-size":t.isBigSize,"indicator__text-medium-size":t.isMediumSize,"indicator__text-small-size":t.isSmallSize,"indicator__text-x-small-size":t.isXSmallSize,"indicator__text-detail-card":t.isDetailCard})},"Hours",2)]),(0,s.createElementVNode)("div",o,[(0,s.createElementVNode)("div",{class:(0,s.normalizeClass)({"indicator__digit-big-size":t.isBigSize,"indicator__digit-medium-size":t.isMediumSize,"indicator__digit-small-size":t.isSmallSize,"indicator__digit-x-small-size":t.isXSmallSize,"indicator__digit-detail-card":t.isDetailCard})},(0,s.toDisplayString)(c.minutes),3),(0,s.createElementVNode)("div",{class:(0,s.normalizeClass)({"indicator__text-big-size":t.isBigSize,"indicator__text-medium-size":t.isMediumSize,"indicator__text-small-size":t.isSmallSize,"indicator__text-x-small-size":t.isXSmallSize,"indicator__text-detail-card":t.isDetailCard})},"Mins",2)]),(0,s.createElementVNode)("div",r,[(0,s.createElementVNode)("div",{class:(0,s.normalizeClass)({"indicator__digit-big-size":t.isBigSize,"indicator__digit-medium-size":t.isMediumSize,"indicator__digit-small-size":t.isSmallSize,"indicator__digit-x-small-size":t.isXSmallSize,"indicator__digit-detail-card":t.isDetailCard})},(0,s.toDisplayString)(c.seconds),3),(0,s.createElementVNode)("div",{class:(0,s.normalizeClass)({"indicator__text-big-size":t.isBigSize,"indicator__text-medium-size":t.isMediumSize,"indicator__text-small-size":t.isSmallSize,"indicator__text-x-small-size":t.isXSmallSize,"indicator__text-detail-card":t.isDetailCard})},"Secs",2)])],2)],2)}t(3689),t(3710),t(2564),t(6647),t(1539),t(9714);const d={name:"Countdown",props:{date:null,title:String,isRow:{type:Boolean,default:!1},isColumn:{type:Boolean,default:!1},isBigSize:{type:Boolean,default:!1},isMediumSize:{type:Boolean,default:!1},isSmallSize:{type:Boolean,default:!1},isXSmallSize:{type:Boolean,default:!1},isDetailCard:{type:Boolean,default:!1}},data:function(){return{now:Math.trunc((new Date).getTime()/1e3),event:this.date,finish:!1}},mounted:function(){var e=this,i=this;window.setInterval((function(){e.now=Math.trunc((new Date).getTime()/1e3),!e.finish&&e.calculatedDate-e.now<=0&&(i.finish=!0,i.$emit("onFinish"))}),1e3)},computed:{secondCount:function(){return this.calculatedDate-this.now},calculatedDate:function(){return Math.trunc(Date.parse(this.event)/1e3)},seconds:function(){return this.secondCount<0?0:this.twoDigits(this.secondCount%60)},minutes:function(){return this.secondCount<0?0:this.twoDigits(Math.trunc(this.secondCount/60)%60)},hours:function(){return this.secondCount<0?0:this.twoDigits(Math.trunc(this.secondCount/60/60)%24)},days:function(){return this.secondCount<0?0:this.twoDigits(Math.trunc(this.secondCount/60/60/24))}},methods:{twoDigits:function(e){return e.toString().length<=1?"0"+e.toString():e.toString()}}};var c=t(3744);const m=(0,c.Z)(d,[["render",l]]),u=m},4580:(e,i,t)=>{"use strict";t.d(i,{Z:()=>o});t(7042);var s=t(4448);const a={__name:"Status",props:{status:String},setup:function(e){var i=e,t=(0,s.computed)((function(){switch(i.status.toLowerCase()){case"active":return"A";case"ready":case"upcoming":return"U";case"closed":case"finalised":return"C"}})),a=(0,s.computed)((function(){switch(i.status.toLowerCase()){case"active":return"active";case"ready":case"upcoming":return"upcoming";case"closed":case"finalised":return"closed"}})),n=(0,s.computed)((function(){var e="ready"===i.status.toLowerCase()?"upcoming":i.status,t=e.charAt(0),s=t.toUpperCase(),a=e.slice(1);return s+a}));return function(e,i){return(0,s.openBlock)(),(0,s.createElementBlock)("div",{class:(0,s.normalizeClass)(["status",(0,s.unref)(a)])},[(0,s.createElementVNode)("div",{class:(0,s.normalizeClass)(["status__icon",(0,s.unref)(a)])},(0,s.toDisplayString)((0,s.unref)(t)),3),(0,s.createElementVNode)("div",{class:(0,s.normalizeClass)(["status__title",(0,s.unref)(a)])},(0,s.toDisplayString)((0,s.unref)(n)),3)],2)}}},n=a,o=n},2410:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>k});var s=t(4448),a=t(7288),n={class:"mission-details-card"},o={class:"mission-details-card__banner"},r=["src"],l={class:"status"},d={class:"mission-data"},c=(0,s.createElementVNode)("h2",{class:"mission-data__title"},"World Cup 2022 🏆",-1),m={class:"mission-data__fund"},u={class:"mission-data__fund__data"},g=["src"],_={class:"mission-data__fund__data"},A=["src"],z={class:"mission-data__countdown"},p={class:"mission-data__progress"},S=(0,s.createElementVNode)("div",{class:"mission-data__terms-and-conditions"},[(0,s.createElementVNode)("span",{class:"mission-data__terms-and-conditions__title"},"Terms & Conditions Apply "),(0,s.createElementVNode)("span",{class:"mission-data__terms-and-conditions__text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero")],-1);function v(e,i,t,a,v,C){var h=(0,s.resolveComponent)("Status"),f=(0,s.resolveComponent)("Countdown"),x=(0,s.resolveComponent)("CProgressBar"),N=(0,s.resolveComponent)("CProgress");return(0,s.openBlock)(),(0,s.createElementBlock)("div",n,[(0,s.createElementVNode)("div",o,[(0,s.createElementVNode)("img",{src:e.$options.banner,alt:""},null,8,r),(0,s.createElementVNode)("div",l,[(0,s.createVNode)(h,{status:"Active"})])]),(0,s.createElementVNode)("div",d,[c,(0,s.createElementVNode)("div",m,[(0,s.createElementVNode)("div",u,[(0,s.createElementVNode)("img",{src:e.$options.peopleIcon,alt:""},null,8,g),(0,s.createTextVNode)(" 100 ")]),(0,s.createElementVNode)("div",_,[(0,s.createElementVNode)("img",{src:e.$options.trophyIcon,alt:""},null,8,A),(0,s.createTextVNode)(" $1000 ")])]),(0,s.createElementVNode)("div",z,[(0,s.createVNode)(f,{date:v.end,title:"Ends in","is-row":!0,"is-big-size":!0,"is-detail-card":!0,onOnFinish:i[0]||(i[0]=function(e){return C.finish()})},null,8,["date"])]),(0,s.createElementVNode)("div",p,[(0,s.createVNode)(N,{height:23},{default:(0,s.withCtx)((function(){return[(0,s.createVNode)(x,{value:25},{default:(0,s.withCtx)((function(){return[(0,s.createTextVNode)("25%")]})),_:1})]})),_:1})]),S])])}t(3710);var C=t(8549),h=t(6301),f=t(4580);const x=t.p+"img/world-cup.481ce1e2.jpg";var N=t(415),B=t(538);const V={name:"MissionDetailsCard",banner:x,peopleIcon:N,trophyIcon:B,components:{CProgress:C.yI,CProgressBar:C.SD,Status:f.Z,Countdown:h.Z},data:function(){return{end:new Date("2023-01-01T00:00:00")}},methods:{finish:function(){console.log("finish")}}};var w=t(3744);const E=(0,w.Z)(V,[["render",v]]),D=E;var b={class:"header"},y=(0,s.createElementVNode)("h1",{class:"title"},(0,s.toDisplayString)("World cup 2022🏆")+" 😝",-1),I=["src"];const R={__name:"MissionDetails",setup:function(e){return function(e,i){return(0,s.openBlock)(),(0,s.createElementBlock)(s.Fragment,null,[(0,s.createElementVNode)("div",b,[y,(0,s.createElementVNode)("img",{class:"share-icon",src:(0,s.unref)(a)},null,8,I)]),(0,s.createVNode)((0,s.unref)(D))],64)}}},M=R,k=M},7288:(e,i,t)=>{"use strict";e.exports=t.p+"img/share-icon.8d2e5ad0.svg"},415:e=>{"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGKSURBVHgB7dI5SwNBGMbx9QARDQmCRiUaxASCgpUiVkGwsbIS7ewsbf0M8bYStLXwiKC1jVHQxkpDiIIoRFDRxoMcBl3/gxOcTDYxddgHfoSZvDsz+84ahh07dioupmm6sYI1DJSoc2IV+whaFTRiDh/mX57RblHbggOlLo1ZvSiANzM/SQzBAY9Uhy5Etdrz3FrV8tcHh7JHFiG8YB1RXGABTszImlxq9RNOaDvG0YMtZJX5L0TgxaEyf6qfsMbIzzueMKjtLuoD8OJKmS945VZtwXo0ImEUJiU3bJBjUbOhL3iGPdzIsehTM+4sFswgCbccRxAzrEIvpmRPLuU3OY2U1t8wXLiW4xjG0JBbpBp+zONRFmWwjTZsKos9IIhReUG5iOd24BMLduDYLMw3htGnzIlNO+VNW2VR3KDfol9phBFHvzLvkv8ty/57tK51F+tlFXqxhIRyAtGKXUyi1ig3FI/jVr62VcRFhdBU7oIn5v+5x4j+bLFjv+LIKJ1P4/d7tGPHTgXmB2GmLYNz3tH/AAAAAElFTkSuQmCC"},538:e=>{"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAoCAYAAAAR87HlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFISURBVHgB7dO7SgNBGIbhfyUIggcURDtBsdBG9A68AgsLCwtbOxXbgKVaC5begZeRQgkYRVAxpvBQGaOshyii4zvsCslmNjNsm/ngYWAO/87Ozor4+Ph0YoJkh1JqkmYHQ2JPiM0gCMqNnTnDxFdMYEbsKZk6u6R5l4Pxg8rilht8x+taw8AsCgjxodyi572jiHnTTrckOqNFHIlbitDFzpE3FR3BMwrYF7fs8ZGOaV/Q1zLK9pdwi23M4cHy6o+Yxi6qWDYV7cYCKjjBlaXoJUq40wXRm/o+DA5gPT78ekrBL5xhA8PiEiYGGI93Xk0UrGENY3qeZAkLV1V0bXSekEeu3RrrkyjQTzOFHtRxwRcPMxel4CjNSlzwP584pPC1ZImKrtdv4kx/cCBZoqLf9lSZc6/H09a2O3B97yqoGcbexMfHxyeRP6HRlAGVeNC8AAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=980.cea8ce79.js.map