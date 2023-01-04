(()=>{var e={7947:(e,t,n)=>{"use strict";n.d(t,{G:()=>r});var o=n(4448),r=function(e){var t=(0,o.ref)(!0);return(0,o.watchEffect)((function(n){var o=window.matchMedia(e);o.matches!==t.value&&(t.value=o.matches);var r=function(){t.value=o.matches};o.addEventListener("change",r),n((function(){o.removeEventListener("change",r)}))})),t}},9791:(e,t,n)=>{"use strict";n(6992),n(8674),n(9601),n(7727);var o=n(4448),r=(n(1539),n(8783),n(3948),n(2201)),a=(n(8309),localStorage.getItem("token"));function i(e,t,n){"Login"===e.name||a?n():n({name:"Login"})}var c=[{path:"/",name:"Home",component:function(){return Promise.resolve().then(n.bind(n,1501))},beforeEnter:i,redirect:"/dashboard",children:[{path:"dashboard",name:"Dashboard",component:function(){return Promise.all([n.e(219),n.e(240),n.e(332)]).then(n.bind(n,3387))}},{path:"tournaments",name:"Tournaments",children:[{path:"",name:"Tournaments",component:function(){return Promise.all([n.e(219),n.e(240),n.e(433)]).then(n.bind(n,7756))}},{path:":id",name:"TournamentDetails",component:function(){return Promise.all([n.e(219),n.e(424)]).then(n.bind(n,7100))}}]},{path:"missions",name:"Missions",children:[{path:"",name:"Missions",component:function(){return n.e(59).then(n.bind(n,6567))}},{path:":id",name:"MissionDetails",component:function(){return n.e(980).then(n.bind(n,2410))}}]},{path:"loyality-Level",name:"LoyalityLevel",component:function(){return n.e(294).then(n.bind(n,9498))}},{path:"instant-rewards",name:"InstantRewards",component:function(){return n.e(702).then(n.bind(n,9697))}},{path:"loyality-store",name:"LoyalityStore",component:function(){return n.e(37).then(n.bind(n,9037))}},{path:"messages",name:"Messages",component:function(){return n.e(506).then(n.bind(n,1506))}},{path:"calendar",name:"Calendar",component:function(){return n.e(946).then(n.bind(n,7946))}},{path:"history",name:"History",component:function(){return n.e(694).then(n.bind(n,9694))}}]},{path:"/login",name:"Login",component:function(){return n.e(759).then(n.bind(n,9759))}},{path:"/:pathMatch(.*)*",component:function(){return n.e(913).then(n.bind(n,8913))}}],s=(0,r.p7)({history:(0,r.r5)(),routes:c});const l=s;function u(e,t,n,r,a,i){var c=(0,o.resolveComponent)("router-view");return(0,o.openBlock)(),(0,o.createBlock)(c)}var m=n(1501);const d={name:"App",components:{AppLayout:m["default"]}};var p=n(3744);const f=(0,p.Z)(d,[["render",u]]),A=f;var v=n(3907),g={memberToken:""},h={getMemberToken:function(e){return e.memberToken}},b={SET_MEMBER_TOKEN:function(e,t){e.memberToken=t}},y={setMemberTokenAction:function(e,t){var n=e.commit;n("SET_MEMBER_TOKEN",t)}};const E={state:g,getters:h,mutations:b,actions:y};var B={apiClient:{}},C={getApiClient:function(e){return e.apiClient}},k={SET_API_CLIENT:function(e,t){e.apiClient=t}},N={setApiClientAction:function(e,t){var n=e.commit;n("SET_API_CLIENT",t)}};const V={state:B,getters:C,mutations:k,actions:N};var S={memberData:{},isLoaded:!1,error:null},w={getMember:function(e){return e.memberData}},U={SET_MEMBER_DATA:function(e,t){e.memberData=t}},I={setMemberAction:function(e,t){var n=e.commit;n("SET_MEMBER_DATA",t)}};const M={state:S,getters:w,mutations:U,actions:I};var T={currentCompetitions:[],isLoaded:!1,error:null},L={getCurrentCompetitions:function(e){return e.currentCompetitions}},F={SET_CURRENT_COMPETITIONS:function(e,t){e.currentCompetitions=t}},x={setCurrentCompetitionsAction:function(e,t){var n=e.commit;n("SET_CURRENT_COMPETITIONS",t)}};const R={state:T,getters:L,mutations:F,actions:x};n(7658),n(7327);var q={notifications:[],isLoaded:!1,error:null},Q={getNotifications:function(e){return e.notifications}},Z={SET_NOTIFICATION_DATA:function(e,t){e.notifications.push(t)},REMOVE_NOTIFICATION:function(e,t){e.notifications=e.notifications.filter((function(e){return e.entityId!==t}))}},D={setNotificationAction:function(e,t){var n=e.commit;n("SET_NOTIFICATION_DATA",t)},removeNotificationAction:function(e,t){var n=e.commit;n("REMOVE_NOTIFICATION",t)}};const X={state:q,getters:Q,mutations:Z,actions:D};var O=(0,v.MT)({modules:{auth:E,apiClient:V,memberData:M,currentCompetitions:R,notifications:X}});const H=O;var j=n(8549);(0,o.createApp)({extends:A}).use(l).use(j.ZP).use(H).component("AppLayout",m["default"]).mount("#app")},1501:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ht});var o=n(6835),r=n(8534),a=(n(7658),n(4448)),i=n(8549);n(8309);const c="data:image/png;base64,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";var s={class:"user-profile"},l={key:0,class:"user-info"},u={class:"user-full-name"},m={class:"full-name"},d=(0,a.createElementVNode)("span",{class:"is-pro"},"pro",-1),p=(0,a.createElementVNode)("div",{class:"is-online"},[(0,a.createElementVNode)("span",{class:"dot"}),(0,a.createElementVNode)("span",{class:"online-text"},"online")],-1),f={key:1,class:"user-info"},A={class:"user-full-name"},v=(0,a.createElementVNode)("span",{class:"is-pro"},"pro",-1),g={class:"full-name"};function h(e,t,n,o,r,i){var c=(0,a.resolveComponent)("CAvatar");return(0,a.openBlock)(),(0,a.createElementBlock)("div",s,[(0,a.createVNode)(c,{class:"profile-img",shape:"rounded"},{default:(0,a.withCtx)((function(){return[(0,a.createTextVNode)("CUI")]})),_:1}),o.isMobile?((0,a.openBlock)(),(0,a.createElementBlock)("div",f,[(0,a.createElementVNode)("div",A,[v,(0,a.createElementVNode)("span",g,(0,a.toDisplayString)(n.name),1)])])):((0,a.openBlock)(),(0,a.createElementBlock)("div",l,[(0,a.createElementVNode)("div",u,[(0,a.createElementVNode)("span",m,(0,a.toDisplayString)(n.name),1),d]),p]))])}var b=n(7947);const y={name:"UserProfile",components:{CAvatar:i.cU},props:{name:String},setup:function(){var e=(0,b.G)("(max-width: 480px)");return{isMobile:e}}};var E=n(3744);const B=(0,E.Z)(y,[["render",h]]),C=B;var k={class:"welcome"};function N(e,t,n,o,r,i){return(0,a.openBlock)(),(0,a.createElementBlock)("div",k,"Hello, "+(0,a.toDisplayString)(n.name),1)}const V={name:"Welcome",props:{name:String}},S=(0,E.Z)(V,[["render",N]]),w=S,U=n.p+"img/hat.c1e90d5c.svg";var I={class:"user-progress"},M=(0,a.createElementVNode)("div",{class:"img-wrapper"},[(0,a.createElementVNode)("img",{class:"img",src:U})],-1),T={key:1,class:"progress-value"};function L(e,t,n,o,r,i){var c=(0,a.resolveComponent)("CProgressBar"),s=(0,a.resolveComponent)("CProgress");return(0,a.openBlock)(),(0,a.createElementBlock)("div",I,[M,o.isMobile?((0,a.openBlock)(),(0,a.createElementBlock)("span",T,"25")):((0,a.openBlock)(),(0,a.createBlock)(s,{key:0,height:7},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)(c,{value:25})]})),_:1}))])}const F={name:"UserProgress",components:{CImage:i.DW,CProgress:i.yI,CProgressBar:i.SD},setup:function(){var e=(0,b.G)("(max-width: 480px)");return{isMobile:e}}},x=(0,E.Z)(F,[["render",L]]),R=x;n(9653);const q=n.p+"img/lightning-icon.255705cf.svg";var Q={class:"user-energy"},Z=(0,a.createElementVNode)("div",{class:"icon-wrapper"},[(0,a.createElementVNode)("img",{src:q,alt:""})],-1),D={class:"energy-value"},X={key:0,class:"increment-energy-value"};const O={__name:"UserEnergy",props:{energyValue:Number,incrementEnergyValue:Number},setup:function(e){var t=(0,b.G)("(max-width: 480px)");return function(n,o){return(0,a.openBlock)(),(0,a.createElementBlock)("div",Q,[Z,(0,a.createElementVNode)("span",D,(0,a.toDisplayString)(e.energyValue),1),(0,a.unref)(t)?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createElementBlock)("span",X,"+"+(0,a.toDisplayString)(e.incrementEnergyValue)+"/hour",1))])}}},H=O,j=H,P=n.p+"img/bell-icon.845e53db.svg",W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABq0lEQVR4nO2WS0oDQRCGv73BlQY1EVGDeheNax8n0MSFxIu4U/EAEo2rGO+hoHgLTdzEZBhp+ANNZ5xHj0EX+WCg6aqu6q7pqmqYMiUby0AdeARegU99ZtwBakCZCVACLoEBECZ8AdAEVn7L+S7QlfE+cAPsAZvAjD4z3pesL12zpprX+YlOFOpUqynWrAF3VjTML/M+eQAMgVOP9Q2tDXwiUbLC7uPc3oSx8QEsZll4bYU9Ly3ZMpc4daoNdZmi/vkRUIyYL0rmsi5bA0U2kbp2bG60y7Fkz84mipoLpePSjJGN0ZGySSsX29FoE1FzLoeSt0nBm5Q3fpC7DpOcozoRqmIm0pNyIUZnHniyqp8xvBCjX5CesZ1I13MDcWk2a6Xj//8Fnb++hLUJpmFUnRijrKLRV2PJW4gqWQuR4Uo7Nl0tL/eydZFl0ZKVDaah+HImG+8JaRpJ1WrHDU/no3a8jSd160HSUmNJomKFPdClzsWOCsjoSWZu9AGwpWJV0Nik2i3wZYXd++Quc8B5ykfpQL0/0wMkLSWl2gPwotre07gtWepUmzLF8A3lSrGRZtYFBAAAAABJRU5ErkJggg==";var K=function(e){return(0,a.pushScopeId)("data-v-13411f51"),e=e(),(0,a.popScopeId)(),e},G={class:"notifications-list"},Y={class:"notifications-list_item__data"},z={class:"notifications-list_item__data_title"},_={class:"notifications-list_item__data_text"},J=["onClick"],$=K((function(){return(0,a.createElementVNode)("img",{src:W,alt:"close"},null,-1)})),ee=[$],te={key:1,class:"empty-notification-list"};const ne={__name:"NotificationsList",props:{notifications:Array},emits:["removeNotification"],setup:function(e,t){var n=t.emit,o=e,r=o.notifications,c=function(e){n("removeNotification",e)};return function(t,n){return(0,a.openBlock)(),(0,a.createElementBlock)("div",G,[e.notifications.length?((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,{key:0},(0,a.renderList)((0,a.unref)(r),(function(e){return(0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(i.Eb),{class:"notifications-list_item"},{default:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("div",Y,[(0,a.createElementVNode)("p",z,(0,a.toDisplayString)(e.entityType),1),(0,a.createElementVNode)("p",_,"ID: "+(0,a.toDisplayString)(e.entityId),1)]),(0,a.createElementVNode)("div",{class:"notifications-list_item__close",onClick:function(t){return c(e.entityId)}},ee,8,J)]})),_:2},1024)})),256)):((0,a.openBlock)(),(0,a.createElementBlock)("div",te,"Notification list is empty"))])}}},oe=(0,E.Z)(ne,[["__scopeId","data-v-13411f51"]]),re=oe;var ae=n(3907),ie=(0,a.createElementVNode)("div",{class:"icon-wrapper"},[(0,a.createElementVNode)("img",{class:"icon",src:P,alt:""})],-1),ce={class:"number-of-notifications"};const se={__name:"Notifications",props:{messages:Array},setup:function(e){var t=(0,ae.oR)(),n=(0,a.ref)([]),o=function(e){for(var t={},n=[],o=0,r=0;r<e.length;r++){var a=e[r],i=a.entityId;t[i]||(t[i]=1,n[o++]=a)}return n};(0,a.watchEffect)((function(){var e=t.getters.getNotifications;n.value=o(e)}));var r=(0,a.ref)(!1),i=function(){r.value=!r.value},c=function(e){t.dispatch("removeNotificationAction",e)};return function(e,t){return(0,a.openBlock)(),(0,a.createElementBlock)("div",{class:"notifications",onClick:i},[ie,(0,a.createElementVNode)("span",ce,(0,a.toDisplayString)(n.value.length),1),r.value?((0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(re),{key:0,notifications:n.value,onRemoveNotification:c},null,8,["notifications"])):(0,a.createCommentVNode)("",!0)])}}},le=se,ue=le;var me={class:"game-mode-switch"},de=(0,a.createElementVNode)("span",{class:"label"},"Dark Mode OFF",-1);function pe(e,t,n,o,r,i){var c=(0,a.resolveComponent)("CFormSwitch");return(0,a.openBlock)(),(0,a.createElementBlock)("div",me,[de,(0,a.createVNode)(c)])}const fe={name:"GameModeSwitch",components:{CFormSwitch:i.kV}},Ae=(0,E.Z)(fe,[["render",pe]]),ve=Ae;var ge={class:"page-header"},he={key:0,class:"page-header__mobile-logo"},be=(0,a.createElementVNode)("img",{src:c,alt:""},null,-1),ye=[be],Ee={class:"page-header__user-data"};const Be={__name:"TheHeader",props:{member:Object},setup:function(e){var t=e,n=(0,b.G)("(max-width: 1280px)"),o=t.member.value,r=(0,ae.oR)(),i=(0,a.ref)(0);return(0,a.watchEffect)((function(){var e=r.getters.getNotifications;i.value=e.length})),function(e,t){var r,c;return(0,a.openBlock)(),(0,a.createElementBlock)("div",ge,[(0,a.unref)(n)?((0,a.openBlock)(),(0,a.createElementBlock)("div",he,ye)):(0,a.createCommentVNode)("",!0),(0,a.createElementVNode)("div",Ee,[(0,a.createVNode)((0,a.unref)(C),{name:null===(r=(0,a.unref)(o))||void 0===r?void 0:r.name},null,8,["name"]),(0,a.unref)(n)?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(w),{key:0,name:null===(c=(0,a.unref)(o))||void 0===c?void 0:c.name},null,8,["name"])),(0,a.createVNode)((0,a.unref)(R)),(0,a.createVNode)((0,a.unref)(j),{"energy-value":1200,"increment-energy-value":5}),(0,a.createVNode)((0,a.unref)(ue),{"number-of-notifications":i.value},null,8,["number-of-notifications"]),(0,a.unref)(n)?(0,a.createCommentVNode)("",!0):((0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(ve),{key:1}))])])}}},Ce=Be,ke=Ce,Ne=n.p+"img/Logo.f0872255.svg",Ve="data:image/png;base64,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",Se=n.p+"img/icon-Siri.0a983687.png";var we=["src","alt"],Ue={class:"link-text"};const Ie={__name:"SidebarItems",props:{navItems:Array},setup:function(e){return function(t,n){var o=(0,a.resolveComponent)("router-link");return(0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(e.navItems,(function(e,t){return(0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(i.U6),{key:t},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)(o,{to:e.to,class:"item-link",style:(0,a.normalizeStyle)({"--itemBg":"url(".concat((0,a.unref)(Ve),")")})},{default:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("div",{class:"icon-wrapper",style:(0,a.normalizeStyle)({"--itemEllipse":"url(".concat((0,a.unref)(Se),")")})},[(0,a.createElementVNode)("img",{class:"icon",src:e.icon,alt:e.name},null,8,we)],4),(0,a.createElementVNode)("span",Ue,(0,a.toDisplayString)(e.name),1)]})),_:2},1032,["to","style"])]})),_:2},1024)})),128)}}},Me=Ie,Te=Me,Le=n.p+"img/dashboard.94da4cf0.svg",Fe=n.p+"img/history.bde2f4bb.svg",xe=n.p+"img/messages.07976221.svg",Re=n.p+"img/tournaments.bcd7d885.svg",qe=n.p+"img/missions.8600cc71.svg",Qe=n.p+"img/loyality-Level.eb4c1aab.svg",Ze=n.p+"img/instant-rewards.ed272680.svg",De=n.p+"img/loyality-store.3b3afc89.svg",Xe=n.p+"img/calendar_icon.f4cb0689.svg";var Oe=[{name:"Dashboard",to:"/dashboard",icon:Le},{name:"Tournaments",to:"/tournaments",icon:Re},{name:"Missions",to:"/missions",icon:qe},{name:"Loyality Level",to:"/loyality-Level",icon:Qe},{name:"Instant Rewards",to:"/instant-rewards",icon:Ze},{name:"Loyality Store",to:"/loyality-store",icon:De},{name:"Messages",to:"/messages",icon:xe},{name:"Calendar",to:"/calendar",icon:Xe},{name:"History",to:"/history",icon:Fe}];const He=Oe;var je=n(2201),Pe=(0,a.createElementVNode)("div",{class:"brand"},[(0,a.createElementVNode)("div",{class:"logo-wrapper"},[(0,a.createElementVNode)("img",{class:"logo",src:Ne,alt:"logo"})])],-1);const We={__name:"TheSidebar",emits:["logOut"],setup:function(e,t){var n=t.emit,o=((0,je.tv)(),function(){return n("logOut")});return function(e,t){return(0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(i.z3),{visible:""},{default:(0,a.withCtx)((function(){return[Pe,(0,a.createVNode)((0,a.unref)(i.Xk),null,{default:(0,a.withCtx)((function(){return[(0,a.createVNode)((0,a.unref)(Te),{"nav-items":(0,a.unref)(He)},null,8,["nav-items"])]})),_:1}),(0,a.createElementVNode)("button",{onClick:o,class:"log-out-btn"},"Log Out")]})),_:1})}}},Ke=We,Ge=Ke;var Ye=n(6145);const ze=n.p+"img/mob-menu-btn.38c25576.png",_e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAChCAYAAAC29vNVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUvSURBVHgB7d1NbttGGAbgb2boLIoW0bK78gZVL1DLJzBhpUBQyLZygrgnsHsCpyewixTdFE3aVZe05UWXzg3qnqDuuianMxNJoSWKf/NRjsX3AQLICWMYr78Zzg81IgIAAAAAAAAAAAAAAABYn8O9yakkYHOwd3WcCjoSBCxsoFroE/saoTLIBmohVE+LgVoI1cPhcHKWEo0X/x6hNhBFce9TFcSCdD/v33H3r+nbb+L+Z1JdrwrUQqg1HAyvXqpUxaZ9h0XXoflXYJv7U6ncGLTK9Qi1xCi6Ggipz8qqMwuhrlC3OrMQag7bd2pyY88eNYBQM1xTV/rYvByQB4RKfGHOdDZU22ea8ebYJLBLTGHOdC5UV5WB3iXtppeN+swyGx+qm1JS0G87yKyNC/V59GcY0H8mRNo2IdqppP3TepBZDx6qraRP6EmoZNI3w5hQSPHUhNGb/nS3OtX/ChK35qvbhf/aM9f3hBBf2NdmLh5qEiGtOcA8aw812xxFqiMtREgbZm2hruMG8bFoPVTuMeBj0FqoXQxzhj1UN6hW6pRythm6gjXU0XASmW94RhveZ5ZhW/m3T2aYQN9SxwO1vCv1eRSHgQreFu3ZdI1XqDbQLVm+Z9M1jUO1u4puEwzNfUmjUBFosdqhItByqs7F7qZE6g/zq/icYKXKlYqbUnVB1Qu3lLKD+pCgVKXBv31ckDo4h2+qtPlPF0ZigsoKK9X2o+6RF6ilsE81/aht9iFBLSub/ygyK07KLZBATSubv5B0StBIbqj7e5MxxqPNLTV/DPL9LVXqExkcIlA/S6Fq0mMCL/dCRV/KY7FSjwm8zUO101FUKY95qGZ+f0jAItv8IwIWLlTX9LE9wsaFiqbPy4WqSeBBCEbCTUuV+ouAjQyUQpUyk6TxDBQ3KYT4koCVvVFhKMXMNH9MTblJzPf54QyVFiDUFiDUFtgb1Q0BK1RqC+zd/x0BK6lT/TcBKztNRaUykypNLghYucd+9oeTfwhrAGxmd/8LAjYu1FTTJQEbF+pWmpwTsHGhnv+2Y0/SuSBgMZ9RmS7gdwIW81CnXcAtgbd5qLYL0Fr/QODt3oJKkKavCLzdC9VVK+kfCbwsLf0FSXpC4GUpVFOtN6hWP7mL1KZa7YnhGAk0lBsqRgJ+Ct+afjC8vMZjlvUV7lHdyfQFQW2Fof78y847U8vfEdRS6WAas4htT6YYEFRSaYtaJckL0vqGoJLKRyhND/m6JihV+WEK17/qBDeuCmo9ofL6zc65Fvp7gkKNDlAcPbs8EVrgzcErND7qE8Gu5nUoLYLN53188mgYR4JU5w/3zmI5PX0cxWEiZUwb+JEdTbA8n2rXYFWafoV12PfYPzzBncNC+rjLVcseqmW7gzsljwSJl9RBrYQ6Mw33xITbqfMEWg11Zh6upu0udAtrCTXLDsHM/THa5IDXHmqWW/lKVN+sJ5gtG/tubt0Tenm8q4W4yX4ttA7NT26uEx/l2PhBQ+XgjskPKHSfC6hln9xb7XUoHnBv7dGHuorpx3t3AfUplQMT9LZY487Fxoa6yIWsbLDt9+edCXXR6Fk8MN3F2ASwy903dzbUGVvBiVQR5yyw86Fmfahev8kKQs3hOxNEqAVs5YpUntXtFhBqBXVX3vB+/wpev/n63KwX71RdL0al1lSlahFqA2XbRwjVw2h4+SpvIR59qoefft0+yntiB5XKYH8vHpNwH2ruprsIlUn2o08RKqNMsMDJrR8AAAAAAAAAAAAAAAAAwOP3P/65fUiM4lWsAAAAAElFTkSuQmCC";var Je=["src","alt"];const $e={__name:"MobileSidebarItems",props:{navItems:Array},setup:function(e){return function(t,n){var o=(0,a.resolveComponent)("router-link");return(0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,null,(0,a.renderList)(e.navItems,(function(e,t){return(0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(i.U6),{key:t,class:"mob-nav-item"},{default:(0,a.withCtx)((function(){return[(0,a.createVNode)(o,{to:e.to,class:"mob-item-link",style:(0,a.normalizeStyle)({"--itemBg":"url(".concat((0,a.unref)(_e),")")})},{default:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("div",{class:"mob-icon-wrapper",style:(0,a.normalizeStyle)({"--itemEllipse":"url(".concat((0,a.unref)(Se),")")})},[(0,a.createElementVNode)("img",{class:"mob-icon",src:e.icon,alt:e.name},null,8,Je)],4)]})),_:2},1032,["to","style"])]})),_:2},1024)})),128)}}},et=(0,E.Z)($e,[["__scopeId","data-v-1134b638"]]),tt=et;var nt={class:"mobile-sidebar"},ot=(0,a.createElementVNode)("img",{src:ze,alt:""},null,-1),rt=[ot];const at={__name:"MobileSidebar",setup:function(e){var t=(0,a.ref)(!1),n=function(){t.value=!t.value};return function(e,o){return(0,a.openBlock)(),(0,a.createElementBlock)("div",nt,[(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)(["mob-sidebar-wrapper",t.value?"mob-sidebar-wrapper__active":""])},[(0,a.createElementVNode)("div",{class:(0,a.normalizeClass)(["sidebar-menu-btn",t.value?"sidebar-menu-btn__active":""]),onClick:n},rt,2),t.value?((0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(tt),{key:0,"nav-items":(0,a.unref)(He)},null,8,["nav-items"])):(0,a.createCommentVNode)("",!0)],2)])}}},it=at,ct=it;var st={class:"alert-message_title"};const lt={__name:"Alert",props:{message:Object},setup:function(e){var t=e,n=(0,a.ref)(null),o=(0,a.ref)(!1);(0,a.watchEffect)((function(){t.message&&(n.value=t.message)}));var r=function(){o.value=!1};return function(e,t){return(0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(i.Gc),{class:"alert-message",color:"info",visible:o.value,dismissible:"",onClose:r},{default:(0,a.withCtx)((function(){return[(0,a.createElementVNode)("h1",st,(0,a.toDisplayString)(n.value.entityType),1),(0,a.createElementVNode)("p",null,"ID: "+(0,a.toDisplayString)(n.value.entityId),1)]})),_:1},8,["visible"])}}},ut=(0,E.Z)(lt,[["__scopeId","data-v-3e6b8653"]]),mt=ut;var dt={key:0,class:"app-layout"},pt={class:"right-part"},ft={class:"page-content"},At={key:1,class:"spinner-wrapper"};const vt={__name:"AppLayout",setup:function(e){var t=(0,ae.oR)(),n=(0,je.tv)(),c=(0,a.ref)(!1),s=(0,b.G)("(max-width: 1280px)"),l=(0,a.reactive)({}),u=(0,a.ref)(null);(0,a.onMounted)((0,r.Z)((0,o.Z)().mark((function e(){var n,a;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ye.V6.instance.connect({token:localStorage.getItem("token")});case 2:n=Ye.Qt.constructFromObject({includeFields:[],includeCustomFields:[],includeMetaDataFields:[]},null),a=new Ye.lx(Ye.V6.instance),a.getMember(n,function(){var e=(0,r.Z)((0,o.Z)().mark((function e(n){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.warn("MEMBER",n.data),e.next=3,n.data;case 3:return l.value=e.sent,e.next=6,t.dispatch("setMemberAction",n.data);case 6:c.value=!0;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ye.V6.instance.sendSys("",{},(function(e,n){u.value=e,t.dispatch("setNotificationAction",e)}));case 6:case"end":return e.stop()}}),e)}))));var m=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Ye.V6.instance.disconnect();case 2:return localStorage.removeItem("token"),e.next=5,n.push({path:"/login"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.watchEffect)((function(){u.value&&console.warn("MESSAGE",u.value)})),function(e,t){var n=(0,a.resolveComponent)("router-view");return c.value?((0,a.openBlock)(),(0,a.createElementBlock)("div",dt,[(0,a.unref)(s)?((0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(ct),{key:1})):((0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(Ge),{key:0,onLogOut:m})),(0,a.createElementVNode)("div",pt,[l?((0,a.openBlock)(),(0,a.createBlock)((0,a.unref)(ke),{key:0,member:l},null,8,["member"])):(0,a.createCommentVNode)("",!0),(0,a.createElementVNode)("div",ft,[(0,a.createVNode)(n)])]),(0,a.createVNode)((0,a.unref)(mt),{message:u.value},null,8,["message"])])):((0,a.openBlock)(),(0,a.createElementBlock)("div",At,[(0,a.createVNode)((0,a.unref)(i.z6),{class:"spinner",color:"secondary"})]))}}},gt=vt,ht=gt},927:()=>{}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,o,r,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,r,a]=e[u],c=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](o[s])))?o.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,o)=>(n.f[o](e,t),t)),[]))})(),(()=>{n.u=e=>"js/"+e+"."+{37:"73ab8ecf",59:"09899637",219:"7b45739d",240:"3dfac6e0",294:"84a1e11c",332:"8a37dce1",424:"66999d93",433:"18abf60a",506:"f0799e33",694:"e185ad9a",702:"5bfb44a0",759:"c8f77a3d",913:"920c4356",946:"ba831c8a",980:"cea8ce79"}[e]+".js"})(),(()=>{n.miniCssF=e=>"css/"+e+"."+{37:"f8dc050b",59:"4b602c15",294:"a3213ed9",332:"8d0994b8",424:"6b1fc101",433:"9f475e27",506:"dba92f42",702:"f6556445",759:"46d659ec",913:"293e1460",946:"6f0af7a2",980:"e10c46a1"}[e]+".css"})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="ziqni-member-home:";n.l=(o,r,a,i)=>{if(e[o])e[o].push(r);else{var c,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var m=l[u];if(m.getAttribute("src")==o||m.getAttribute("data-webpack")==t+a){c=m;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=o),e[o]=[r];var d=(t,n)=>{c.onerror=c.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((e=>e(n))),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),s&&document.head.appendChild(c)}}})(),(()=>{n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{n.p=""})(),(()=>{var e=(e,t,n,o)=>{var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=a=>{if(r.onerror=r.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=c,r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=(e,t)=>{for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=o=>new Promise(((r,a)=>{var i=n.miniCssF(o),c=n.p+i;if(t(i,c))return r();e(o,c,r,a)})),r={143:0};n.f.miniCss=(e,t)=>{var n={37:1,59:1,294:1,332:1,424:1,433:1,506:1,702:1,759:1,913:1,946:1,980:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}})(),(()=>{var e={143:0};n.f.j=(t,o)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise(((n,o)=>r=e[t]=[n,o]));o.push(r[2]=a);var i=n.p+n.u(t),c=new Error,s=o=>{if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,o)=>{var r,a,[i,c,s]=o,l=0;if(i.some((t=>0!==e[t]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var u=s(n)}for(t&&t(o);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkziqni_member_home"]=self["webpackChunkziqni_member_home"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=n.O(void 0,[998],(()=>n(9791)));o=n.O(o)})();
//# sourceMappingURL=app.fd32110a.js.map