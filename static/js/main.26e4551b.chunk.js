(this.webpackJsonpminimalismpics_renewed=this.webpackJsonpminimalismpics_renewed||[]).push([[0],{107:function(e,t,n){e.exports={icon:"ScrollButton_icon__24axN"}},112:function(e,t,n){e.exports=n(183)},117:function(e,t,n){},165:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(6),s=n.n(c),i=(n(117),n(33)),r=n(66),l=n.n(r),u=n(15),_=n(83),m=n.n(_),d=n(186),p=n(188),h=function(e){var t=Object(o.useState)(""),n=Object(u.a)(t,2),c=n[0],s=n[1];return a.a.createElement(d.a,{className:m.a.input,onPressEnter:function(t){e.onChange(c)},onChange:function(e){s(e.target.value)},allowClear:!0,placeholder:"Search by word",suffix:a.a.createElement(p.a,{onClick:function(t){e.onChange(c)}})})},f=function(e){return a.a.createElement("header",{className:l.a.header},a.a.createElement("div",{className:l.a.header__title},"minimalispics."),a.a.createElement(h,{onChange:function(t){e.onSearch(t)},delay:1e3}))},b=Object(i.b)(null,(function(e){return{onSearch:function(t){return e(function(e){return{type:"HANDLE_SEARCH",value:e}}(t))}}}))(f),k=n(26),w=n(67),E=n.n(w),g=n(93),O=n(94),v=n.n(O),j=n(52),C=n.n(j),P=n(21),S=n.n(P),N=(n(165),n(185)),x=n(50),y=n(68),M=n.n(y),I=n(187),H=function(e,t,n,o){var a=Object(k.a)(Object(k.a)({},t),{},{liked_by_user:n,likes:o});return e.splice(e.indexOf(t),1,a),e},T=function(e){console.error(e),I.b.error("Something went wrong")},A=function(e){var t;return a.a.createElement("svg",(t={className:"ico",width:"24",height:"24",viewBox:"0 0 24 24"},Object(x.a)(t,"className","".concat(M.a.icon," ").concat(e.liked?M.a.liked:"")),Object(x.a)(t,"onClick",(function(t){t.stopPropagation();try{e.onClick()}catch(n){T(n)}})),t),a.a.createElement("path",{d:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"}))},L=function(e){var t=Object(o.useState)(!1),n=Object(u.a)(t,2),c=n[0],s=n[1],i=Object(o.useState)(!1),r=Object(u.a)(i,2),l=r[0],_=r[1],m=e.post,d=m.liked_by_user,p=window.innerWidth<=960;return Object(o.useEffect)((function(){if(!p){var e=new Image;e.src=m.urls.regular,e.onload=function(){_(!0)}}}),[m.urls.regular]),a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{alt:"",key:m.id+e.index,src:m.urls.thumb,className:S.a.post,onClick:function(){s(!0),p&&_(!0)}}),a.a.createElement(N.a,{visible:c,className:"".concat(S.a.postModal," post"),centered:!0,destroyOnClose:!0,width:820,closable:!1,onCancel:function(){s(!1)},footer:!1},a.a.createElement("div",{onClick:function(){s(!1)},className:S.a.postModal__container},a.a.createElement("img",{alt:"",onClick:function(e){e.stopPropagation()},key:m.id+e.index,src:m.urls.regular,className:S.a.postModal__img}),a.a.createElement("div",{className:l?S.a.footer__visible:S.a.footer,onClick:function(e){e.stopPropagation()}},a.a.createElement("div",{className:S.a.likesContainer},a.a.createElement(A,{liked:d,onClick:function(){var t=window.localStorage.getItem("access_token");t?d?e.dislikePost(m.id,(function(){e.setPost(!1,m.likes-1)}),t):e.likePost(m.id,(function(){e.setPost(!0,m.likes+1)}),t):e.setAuthModalVisible(!0)}}),a.a.createElement("div",{className:"".concat(S.a.likesContainer__count," ").concat(d?S.a.likesContainer__count__liked:"")},m.likes)),a.a.createElement("div",{className:S.a.authorContainer},"by \xa0 ",a.a.createElement("a",{target:"_blank",href:m.links.html},m.user.name)," \xa0 on \xa0 ",a.a.createElement("a",{href:"https://unsplash.com/",target:"_blank"},"Unsplash"))))))},V=n(107),B=n.n(V),D=function(e){return a.a.createElement("div",{className:B.a.icon,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})},q=n(72),z=n.n(q),F=(n(182),function(e){return a.a.createElement(N.a,{visible:e.visible,className:"".concat(z.a.modal," + authModal"),centered:!0,destroyOnClose:!0,closable:!1,onOk:e.onOk,onCancel:e.onCancel,okText:"Go to Unsplash",cancelText:"Decline"},a.a.createElement("div",{className:z.a.modal__text},"If you want to be able to like posts, you need to authorize\xa0on\xa0Unsplash"))}),R=function(e){var t=Object(i.c)((function(e){return e})),n=window.localStorage.getItem("access_token"),c=new v.a({accessKey:"LuPHM_pd_YAH00c9ssorJV5fYEc0rvK9X0ST1oIFV_s",secret:"dt3IVL8Qv1F-V8J8IZqoYcqQCil1FTkBp0cjBqakaVY",callbackUrl:"https://haterzmazdai.github.io/minimalismpicsRenewed/",bearerToken:n||void 0}),s=Object(o.useState)(!1),r=Object(u.a)(s,2),l=r[0],_=r[1],m=Object(o.useState)(!1),d=Object(u.a)(m,2),p=d[0],h=d[1],f=Object(o.useState)(!1),b=Object(u.a)(f,2),w=b[0],O=b[1],j=Object(o.useState)(1),P=Object(u.a)(j,2),S=P[0],N=P[1],x=Object(o.useState)(!1),y=Object(u.a)(x,2),M=y[0],I=y[1],A=Object(o.useState)({posts:[],score:0}),V=Object(u.a)(A,2),B=V[0],q=V[1],z=Object(o.useState)({posts:[],score:0}),R=Object(u.a)(z,2),U=R[0],J=R[1],K=Object(o.useState)({posts:[],score:0}),Y=Object(u.a)(K,2),W=Y[0],X=Y[1],Q=function(e,t){c.auth.setBearerToken(n),c.photos.likePhoto(e).then(t).catch(T)},Z=function(e,t){c.auth.setBearerToken(n),c.photos.unlikePhoto(e).then(t).catch(T)};return Object(o.useEffect)((function(){var e=t,n=e?[e,S,30,"latest"]:[S,30,"lates"];l&&!w||function(){var t=Object(g.a)(E.a.mark((function t(){var o;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(o=c[e?"search":"photos"])[e?"photos":"listPhotos"].apply(o,n).then((function(e){if(e.ok)return e.json();throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430")})).then((function(t){var n=e?t.results:t,o=B.score||0,a=B.posts||[],c=U.score||0,s=U.posts||[],i=W.score||0,r=W.posts||[];n.forEach((function(e){o<i&&o<c||o===i||o===c?(o+=e.height/e.width,a.push(e)):c<o&&c<i||o===i||o===c?(c+=e.height/e.width,s.push(e)):(i+=e.height/e.width,r.push(e))})),q({posts:a,score:o}),J({posts:s,score:c}),X({posts:r,score:i}),N(S+1),l||_(!0),w&&O(!1)})).catch(T);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[l,w]),Object(o.useEffect)((function(){q({posts:[],score:0}),J({posts:[],score:0}),X({posts:[],score:0}),N(1),_(!1)}),[t]),Object(o.useEffect)((function(){var e=window.document.getElementsByTagName("html")[0],t=!1,o=function(){e.scrollTop+e.clientHeight>=e.scrollHeight-800&&O(!0),e.scrollTop>=100&&!t?(I(!0),t=!0):e.scrollTop<100&&t&&(I(!1),t=!1)},a=window.location.search.split("code=")[1];return a&&c.auth.userAuthentication(a).then((function(e){return e.json()})).then((function(e){window.localStorage.setItem("access_token",e.access_token),window.localStorage.removeItem("incognito"),window.location.assign(window.location.origin+window.location.pathname)})).catch(T),window.localStorage.getItem("incognito")||n||a||h(!0),window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[]),a.a.createElement(a.a.Fragment,null,M?a.a.createElement(D,null):"",l?a.a.createElement("div",{className:C.a.main},a.a.createElement("div",{className:C.a.column},B.posts.map((function(e,t){return a.a.createElement(L,{likePost:Q,dislikePost:Z,setPost:function(t,n){q(Object(k.a)(Object(k.a)({},B),{},{posts:H(B.posts,e,t,n)}))},setAuthModalVisible:h,post:e,index:t,key:e.id+t})}))),a.a.createElement("div",{className:C.a.column__center},U.posts.map((function(e,t){return a.a.createElement(L,{likePost:Q,dislikePost:Z,setPost:function(t,n){J(Object(k.a)(Object(k.a)({},U),{},{posts:H(U.posts,e,t,n)}))},setAuthModalVisible:h,post:e,index:t,key:e.id+t})}))),a.a.createElement("div",{className:C.a.column},W.posts.map((function(e,t){return a.a.createElement(L,{likePost:Q,dislikePost:Z,setPost:function(t,n){X(Object(k.a)(Object(k.a)({},W),{},{posts:H(W.posts,e,t,n)}))},setAuthModalVisible:h,post:e,index:t,key:e.id+t})}))),a.a.createElement(F,{visible:p,onOk:function(){var e=c.auth.getAuthenticationUrl(["public","write_likes"]);window.location.assign(e)},onCancel:function(){h(!1),window.localStorage.getItem("incognito")||window.localStorage.setItem("incognito",!0)}})):"")},U=Object(i.b)()(R),J=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null),a.a.createElement(U,null))},K=function(e,t){switch(t.type){case"HANDLE_SEARCH":return t.value;default:return e}},Y=n(53),W=Object(Y.b)(K,"");s.a.render(a.a.createElement(i.a,{store:W},a.a.createElement(J,null)),document.getElementById("root"))},21:function(e,t,n){e.exports={post:"Post_post__1DL5P",postModal:"Post_postModal__2M_0z",postModal__container:"Post_postModal__container__1qxVd",postModal__img:"Post_postModal__img__2Iu0k",footer:"Post_footer__1z51R",footer__visible:"Post_footer__visible__2_mlu",fadein:"Post_fadein__2VO_o",likesContainer:"Post_likesContainer__1jvDh",likesContainer__count:"Post_likesContainer__count__kWW6O",likesContainer__count__liked:"Post_likesContainer__count__liked__3I4X_",authorContainer:"Post_authorContainer__3vKdE"}},52:function(e,t,n){e.exports={main:"Home_main__1pRfO",column:"Home_column__XRaU9",column__center:"Home_column__center__3pqzq",item:"Home_item__3mMC_"}},66:function(e,t,n){e.exports={header:"Header_header__257pi",header__title:"Header_header__title__2j6-0"}},68:function(e,t,n){e.exports={icon:"LikeButton_icon__3Tl2S",liked:"LikeButton_liked__1ECsO"}},72:function(e,t,n){e.exports={modal__text:"AuthModal_modal__text__pK6DP"}},83:function(e,t,n){e.exports={input:"Search_input__2Nj7D"}}},[[112,1,2]]]);
//# sourceMappingURL=main.26e4551b.chunk.js.map