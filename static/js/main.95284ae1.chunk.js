(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),o=(a(32),a(33),a(12));function i(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(o.b,{className:"navbar-brand text-info lead",to:"/"},"FeedNow"))}var s=a(14),m=a(6),u=a(13),d=a(42),p=[{id:2,title:"Second post",authorId:"1342uuiwns2",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",date:Object(d.a)(new Date,{minutes:10}).toISOString(),reactions:{like:10,heart:5,smile:8},currentUserReactions:{liked:!1,hearted:!0,smiled:!1}},{id:1,title:"First post",authorId:"133aff2s31",content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",date:Object(d.a)(new Date,{minutes:100}).toISOString(),reactions:{like:100,heart:69,smile:120},currentUserReactions:{liked:!0,hearted:!1,smiled:!0}}],f=Object(u.b)({name:"posts",initialState:p,reducers:{addPost:{reducer:function(e,t){e.splice(0,0,t.payload)},prepare:function(e,t,a){return{payload:{id:Object(u.c)(),title:e,authorId:t,content:a,date:(new Date).toISOString()}}}},reactButtonClicked:function(e,t){var a=t.payload,n=a.postId,r=a.reactionType,c=a.currentReaction,l=e.find((function(e){return e.id===n}));l.currentUserReactions[r]=!c;var o=r.slice(0,r.length-1);"hearted"===r&&(o="heart"),c?l.reactions[o]-=1:l.reactions[o]+=1},editPost:function(e,t){var a=e.find((function(e){return e.id==t.payload.id}));a.title=t.payload.title,a.content=t.payload.content}}}),b=f.reducer,E=f.actions,v=E.addPost,h=E.editPost,N=E.reactButtonClicked;function g(){var e=Object(m.b)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),u=i[0],d=i[1],p=Object(n.useState)(""),f=Object(s.a)(p,2),b=f[0],E=f[1];var h=Object(m.c)((function(e){return e.authors})).map((function(e){var t=e.id,a=e.name;return r.a.createElement("option",{value:t,key:t},a)}));return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(v(c,u,b)),l(""),d(""),E(""),document.querySelector("#post-Id").selectedIndex=0}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-form-label",htmlFor:"post-title"},"Post Title:"),r.a.createElement("input",{type:"text",className:"form-control",required:!0,placeholder:"Post Title",id:"post-title",value:c,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"post-Id"},"Author"),r.a.createElement("select",{className:"form-control",id:"post-Id",onChange:function(e){return d(e.target.value)}},r.a.createElement("option",{value:""}),h)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"post-content"},"Content:"),r.a.createElement("textarea",{className:"form-control",id:"post-content",rows:"4",required:!0,value:b,onChange:function(e){return E(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-info rounded-pill"},"Add Post")))}var O=a(40),j=a(41),y=function(e){var t=e.timestamp,a="";if(t){var n=Object(O.a)(t),c=Object(j.a)(n);a="".concat(c," ago")}return r.a.createElement("span",{title:t},"\xa0 ",r.a.createElement("i",null,a))};function x(e){var t=e.post,a=Object(m.b)(),n=t.reactions,c=t.currentUserReactions,l=t.id,o=n.heart,i=n.like,s=n.smile,u=c.hearted,d=c.liked,p=c.smiled;function f(e,t,n,c,l,o){return e?r.a.createElement("ion-icon",{class:n,onClick:function(){return a(N({postId:t,reactionType:l,currentReaction:o}))},name:"".concat(c,"-sharp")}):r.a.createElement("ion-icon",{class:n,onClick:function(){return a(N({postId:t,reactionType:l,currentReaction:o}))},name:"".concat(c,"-outline")})}var b=f(d,l,"icon-like","thumbs-up","liked",d),E=f(u,l,"icon-heart","heart","hearted",u),v=f(p,l,"icon-smile","happy","smiled",p);return r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"d-flex flex-column align-items-center"},b,r.a.createElement("p",{className:"lead"},i)),r.a.createElement("div",{className:"d-flex flex-column align-items-center"},E,r.a.createElement("p",{className:"lead"},o)),r.a.createElement("div",{className:"d-flex flex-column align-items-center"},v,r.a.createElement("p",{className:"lead"},s)))}function k(){var e=Object(m.c)((function(e){return e.posts})),t=Object(m.c)((function(e){return e.authors}));return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"display-4 mb-5"},"Posts"),e.map((function(e){var a=e.id,n=e.title,c=e.authorId,l=e.content,i=e.date,s=t.filter((function(e){return e.id===c}));return r.a.createElement("div",{key:a,className:"post p-5 mb-3"},r.a.createElement("h5",null,n),r.a.createElement("cite",{title:"Source Title"},"By ",s[0].name),r.a.createElement("div",{className:"lead"},l),r.a.createElement(o.b,{className:"btn btn-outline-info rounded-pill mt-4",to:"/posts/".concat(a)}," ","View Post"," "),r.a.createElement("hr",null),r.a.createElement(x,{post:e}),r.a.createElement("div",{className:"mt-2"}),r.a.createElement(y,{timestamp:i}))})))}function I(e){var t=Object(m.c)((function(e){return e.posts})),a=Object(m.c)((function(e){return e.authors})),n=t.find((function(t){return t.id==e.match.params.postId}));if(!n)return r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"alert alert-info p-5 my-5 text-center"},r.a.createElement("div",{className:"display-4"},"Requested Page Not Found!")));var c=n.id,l=n.title,i=n.authorId,s=n.content,u=a.filter((function(e){return e.id===i}));return r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("div",{className:"display-4"},l),r.a.createElement("p",{className:"lead"},s),r.a.createElement("span",null," ",r.a.createElement("i",null,"By ",u[0].name)),r.a.createElement("hr",null),r.a.createElement(o.b,{to:"/editPost/".concat(c),className:"btn btn-outline-warning rounded-pill mr-2"},"Edit Post"),r.a.createElement(o.b,{to:"/",className:"btn btn-outline-info rounded-pill"},"Go Back")))}var S=a(4);function w(e){var t=e.match.params.postId,a=Object(S.g)(),c=Object(m.b)(),l=Object(m.c)((function(e){return e.posts})).find((function(e){return e.id==t})),o=Object(n.useState)(l.title),i=Object(s.a)(o,2),u=i[0],d=i[1],p=Object(n.useState)(l.content),f=Object(s.a)(p,2),b=f[0],E=f[1];return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(h({id:t,title:u,content:b})),a.push("/posts/"+t)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"col-form-label",htmlFor:"post-title"},"Post Title:"),r.a.createElement("input",{type:"text",className:"form-control",required:!0,placeholder:"Post Title",id:"post-title",value:u,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleTextarea"},"Content:"),r.a.createElement("textarea",{className:"form-control",id:"exampleTextarea",rows:"4",required:!0,value:b,onChange:function(e){return E(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-info rounded-pill"},"Save Post")))}var P=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(S.d,null,r.a.createElement(S.b,{exact:!0,path:"/"},r.a.createElement(g,null),r.a.createElement(k,null)),r.a.createElement(S.b,{exact:!0,path:"/posts/:postId",component:I}),r.a.createElement(S.b,{exact:!0,path:"/editPost/:postId",component:w}),r.a.createElement(S.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=Object(u.b)({name:"authors",initialState:[{name:"Jashan Gill",id:"133aff2s31"},{name:"Jack",id:"133afdaadk2"},{name:"Jimmy",id:"1342uuiwns2"},{name:"Michael",id:"14822jdah431"}],reducers:{}}).reducer,T=Object(u.a)({reducer:{posts:b,authors:C}});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:T},r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.95284ae1.chunk.js.map