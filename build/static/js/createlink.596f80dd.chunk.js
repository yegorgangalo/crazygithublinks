(this.webpackJsonpcrazygithublinks=this.webpackJsonpcrazygithublinks||[]).push([[2],{109:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"a",(function(){return u}));var c=n(160),r=n.n(c);function a(e){return r.a.get("users/".concat(e))}function o(e,t){return r.a.get("repos/".concat(e,"/").concat(t))}function i(e,t){return r.a.get("repos/".concat(e,"/").concat(t,"/contributors"))}function s(e){return r.a.get("https://tinyurl.com/api-create.php?url=".concat(e))}function u(e){return r.a.get("https://tinyurl.com/".concat(e))}r.a.defaults.baseURL="https://api.github.com"},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var c=n(113),r=n.n(c),a=n(114),o=n(112),i=n(0),s=n(43),u=n(365),l=n(364),b=n(362),j=n(94),d=n(154),O=n(109),f=n(376),p=n(377),h=n(363),m=n(170),x=n.n(m),g=n(8),v=Object(j.a)((function(){return{accordion:{background:"inherit",boxShadow:"none","&:before":{display:"none"},"&.Mui-expanded":{margin:0}},accordionSummary:{display:"inline-flex",padding:0,minHeight:0,height:20,"&.Mui-expanded":{minHeight:0},"& .MuiIconButton-root":{padding:0}}}})),k=function(e){var t=e.contributors,n=v();return Object(g.jsxs)(f.a,{className:n.accordion,children:[Object(g.jsx)(p.a,{className:n.accordionSummary,expandIcon:Object(g.jsx)(x.a,{}),children:Object(g.jsx)(b.a,{children:"Contributors"})}),Object(g.jsx)(h.a,{children:Object(g.jsx)(l.a,{container:!0,direction:"column",children:t.map((function(e,t){return Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)(b.a,{children:"".concat(t+1," ").concat(e)})},e)}))})})]})},w=Object(i.memo)(k),C=Object(j.a)((function(e){return{card:{width:400,padding:e.spacing(4),borderRadius:e.spacing(3)},desc:{display:"flex",flexDirection:"column",justifyContent:"center"}}})),y=function(e){var t=e.color,n=e.owner,c=e.repo,j=e.icon,f=C(),p=Object(s.b)().enqueueSnackbar,h=Object(i.useState)(""),m=Object(o.a)(h,2),x=m[0],v=m[1],k=Object(i.useState)(""),y=Object(o.a)(k,2),S=y[0],N=y[1],R=Object(i.useState)(""),B=Object(o.a)(R,2),I=B[0],F=B[1],E=Object(i.useState)(null),z=Object(o.a)(E,2),A=z[0],L=z[1],M=Object(i.useState)([]),D=Object(o.a)(M,2),H=D[0],W=D[1],q=Object(i.useRef)(Object(a.a)(r.a.mark((function e(){var t,a,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(O.b)(n,c);case 3:t=e.sent,a=t.data,o=a.map((function(e){return e.login})).slice(0,10),W(o),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),p("Can't get contributors",{variant:"warning"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))),T=Object(i.useCallback)(Object(a.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(O.d)(n,c);case 3:t=e.sent,a=t.data,v(a.owner.login),N(a.name),F(a.description),L(a.stargazers_count),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),p("Author or repository with these names does not exist. ".concat(e.t0.message),{variant:"error"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[n,c,p]);Object(i.useEffect)((function(){T(),q.current()}),[T]);var G=d[j];return Object(g.jsx)(u.a,{className:f.card,style:{background:t},children:Object(g.jsxs)(l.a,{container:!0,spacing:2,children:[Object(g.jsx)(l.a,{item:!0,children:Object(g.jsx)(G,{size:"8em"})}),Object(g.jsxs)(l.a,{item:!0,className:f.desc,children:[Object(g.jsxs)(b.a,{children:["Author: ",x]}),Object(g.jsxs)(b.a,{children:["Repository: ",S]}),Object(g.jsxs)(b.a,{children:["Description: ",I||"no description"]}),Object(g.jsxs)(b.a,{children:["Stars: ",A]}),Object(g.jsx)(w,{contributors:H})]})]})})}},370:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return H}));var c=n(113),r=n.n(c),a=n(114),o=n(112),i=n(0),s=n(43),u=n(375),l=n(369),b=n(364),j=n(368),d=n(362),O=n(366),f=n(371),p=n(94),h=n(154),m=n(361),x=n(365),g=n(8),v=Object(p.a)((function(e){return{card:{padding:e.spacing(1),height:60,width:60,"&:hover":{background:"#B6F3ED"}},margin:{margin:e.spacing(1)},selectedIcon:{background:"#B6F3ED"}}})),k=function(e){var t=e.children,n=e.onClick,c=e.iconName,r=e.selectedIcon,a=v(),o=Object(i.useRef)((function(){return n(c)}));return Object(g.jsx)(b.a,{item:!0,className:a.margin,children:Object(g.jsx)(x.a,{className:"".concat(a.card," ").concat(r&&a.selectedIcon),onClick:o.current,children:Object(g.jsx)(b.a,{container:!0,justifyContent:"center",children:t})})})},w=Object(i.memo)(k),C=Object(p.a)((function(e){return{root:{width:"100%",overflowX:"auto",marginBottom:e.spacing(2)}}})),y=function(e){var t=e.selectedIcon,n=e.handleOnClickIconCard,c=C(),r=Object(i.useMemo)((function(){return Object.keys(h).slice(0,50)}),[]);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{children:"Choose icon"}),Object(g.jsx)(m.a,{className:c.root,children:Object(g.jsx)(b.a,{container:!0,wrap:"nowrap",children:r.map((function(e){var c=h[e];return Object(g.jsx)(w,{selectedIcon:t===e,iconName:e,onClick:n,children:Object(g.jsx)(c,{size:"4em"})},e)}))})})]})},S=Object(i.memo)(y),N=n(344),R=Object(p.a)((function(e){return{marginBottom:{marginBottom:e.spacing(2)},colorButton:{height:50},backdrop:{zIndex:2,position:"fixed",top:0,right:0,bottom:0,left:0}}})),B=function(e){var t=e.color,n=e.handleChangeComplete,c=R(),r=Object(i.useState)(!1),a=Object(o.a)(r,2),s=a[0],u=a[1],j=Object(i.useRef)(null),d=Object(i.useState)(0),f=Object(o.a)(d,2),p=f[0],h=f[1],m=Object(i.useState)(0),x=Object(o.a)(m,2),v=x[0],k=x[1],w=Object(i.useCallback)((function(){if(null===j||void 0===j?void 0:j.current){var e=j.current.getBoundingClientRect(),t=e.left,n=e.top;k(n+j.current.clientHeight),h(t)}u((function(e){return!e}))}),[j]),C=Object(i.useRef)((function(e){e.target===e.currentTarget&&u((function(e){return!e}))}));return Object(g.jsxs)(b.a,{item:!0,className:c.marginBottom,children:[Object(g.jsx)(O.a,{ref:j,onClick:w,variant:"contained",style:{background:t},className:c.colorButton,fullWidth:!0,children:"Pick Color"}),s&&Object(g.jsx)(l.a,{className:c.backdrop,onClick:C.current,children:Object(g.jsx)(l.a,{style:{left:p,top:v,position:"absolute"},children:Object(g.jsx)(N.a,{disableAlpha:!0,color:t,onChangeComplete:n})})})]})},I=n(367),F=n(343),E=n.n(F),z=n(155),A=Object(p.a)((function(e){return{root:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:e.spacing(4),borderRadius:e.spacing(3)},copyInput:{"& input":{cursor:"pointer",caretColor:"transparent",textOverflow:"ellipsis"},marginBottom:e.spacing(4)},mb:{marginBottom:e.spacing(1)}}})),L=function(e){var t=e.color,n=e.owner,c=e.repo,r=e.icon,a=e.link,o=A(),u=Object(s.b)().enqueueSnackbar,l=Object(i.useRef)((function(){navigator.clipboard.writeText(a).then((function(){return u("Link is copied to clipboard",{variant:"success"})})).catch((function(){return u("Link is not copied to clipboard. Try again, please.",{variant:"error"})}))})).current,O=Object(i.useRef)((function(e){"Enter"===e.key&&l()})).current;return Object(g.jsx)(x.a,{className:o.root,children:Object(g.jsxs)(b.a,{container:!0,direction:"column",children:[Object(g.jsx)(d.a,{variant:"subtitle2",className:o.mb,children:"Share this link in social networks"}),Object(g.jsx)(j.a,{value:a,onClick:l,onKeyDown:O,fullWidth:!0,variant:"outlined",className:o.copyInput,InputProps:{startAdornment:Object(g.jsx)(I.a,{position:"start",children:Object(g.jsx)(E.a,{})})}}),Object(g.jsx)(d.a,{variant:"subtitle2",className:o.mb,children:"Card preview"}),Object(g.jsx)(z.a,{color:t,owner:n,repo:c,icon:r})]})})},M=n(109),D=Object(p.a)((function(e){return{root:{borderRadius:e.spacing(2),padding:e.spacing(2),width:400,background:"#F3F3F3"},marginBottom:{marginBottom:e.spacing(2)},margin:{margin:e.spacing(1)},createLinkButton:{height:50},textField:{background:"white","& .MuiInputBase-input.Mui-disabled":{backgroundColor:"rgba(0, 0, 0, 0.12)"}}}})),H=function(){var e=D(),t=Object(s.b)().enqueueSnackbar,n=Object(i.useState)(""),c=Object(o.a)(n,2),p=c[0],h=c[1],m=Object(i.useState)(!1),x=Object(o.a)(m,2),v=x[0],k=x[1],w=Object(i.useRef)((function(e){return h(e.target.value)})),C=Object(u.a)(p,500),y=Object(o.a)(C,1)[0],N=Object(i.useRef)(function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(M.c)(n);case 3:if(c=e.sent,c.data.login===n){e.next=7;break}throw Error("Author ".concat(n," does not exists on GitHub"));case 7:k(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),k(!1),t("Author ".concat(n," does not exists on GitHub"),{variant:"warning"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}());Object(i.useEffect)((function(){y&&N.current(y)}),[y]);var R=Object(i.useState)(""),I=Object(o.a)(R,2),F=I[0],E=I[1],z=Object(i.useState)(!1),A=Object(o.a)(z,2),H=A[0],W=A[1],q=Object(i.useRef)((function(e){return E(e.target.value)})),T=Object(u.a)(F,1e3),G=Object(o.a)(T,1)[0],J=Object(i.useRef)(function(){var e=Object(a.a)(r.a.mark((function e(n,c){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(M.d)(n,c);case 3:if(a=e.sent,a.data.name===c){e.next=7;break}throw Error("Repository ".concat(c," does not exists"));case 7:W(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),W(!1),t("Repository ".concat(c," does not exists"),{variant:"warning"});case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}());Object(i.useEffect)((function(){y&&G&&J.current(y,G)}),[y,G]);var P=Object(i.useState)("#fff"),U=Object(o.a)(P,2),K=U[0],X=U[1],_=Object(i.useRef)((function(e){return X(e.hex)})),Q=Object(i.useState)(""),V=Object(o.a)(Q,2),Y=V[0],Z=V[1],$=Object(i.useRef)((function(e){return Z(e)})),ee=Object(i.useState)(!1),te=Object(o.a)(ee,2),ne=te[0],ce=te[1],re=Object(i.useRef)((function(){return ce((function(e){return!e}))})),ae=Object(i.useState)(""),oe=Object(o.a)(ae,2),ie=oe[0],se=oe[1],ue=Object(i.useCallback)(Object(a.a)(r.a.mark((function e(){var t,n,c,a,o,i,s,u,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.origin,n="?owner=".concat(p,"&repo=").concat(F,"&color=").concat(K,"&icon=").concat(Y),c=btoa(n),a="".concat(t,"/card/").concat(c),e.next=6,Object(M.e)(a);case 6:o=e.sent,i=o.data,s=new URL(i),u=s.pathname,l="".concat(t).concat(u),se(l),re.current();case 12:case"end":return e.stop()}}),e)}))),[K,p,F,Y]),le=!v||!H||!Y;return Object(g.jsxs)(l.a,{p:4,children:[Object(g.jsx)(b.a,{container:!0,justifyContent:"center",alignItems:"center",children:Object(g.jsxs)(b.a,{item:!0,container:!0,direction:"column",className:e.root,children:[Object(g.jsx)(b.a,{item:!0,container:!0,justifyContent:"center",children:Object(g.jsx)(d.a,{className:e.marginBottom,children:"Create link for github repository"})}),Object(g.jsx)(b.a,{item:!0,xs:12,className:e.marginBottom,children:Object(g.jsx)(j.a,{fullWidth:!0,label:"Author",value:p,onChange:w.current,variant:"outlined",size:"small",className:e.textField})}),Object(g.jsx)(b.a,{item:!0,xs:12,className:e.marginBottom,children:Object(g.jsx)(j.a,{fullWidth:!0,label:"Repository",value:F,onChange:q.current,variant:"outlined",size:"small",disabled:!v||!p,className:e.textField})}),Object(g.jsx)(B,{color:K,handleChangeComplete:_.current}),Object(g.jsx)(S,{selectedIcon:Y,handleOnClickIconCard:$.current}),Object(g.jsx)(b.a,{item:!0,className:e.marginBottom,children:Object(g.jsx)(O.a,{onClick:ue,variant:"contained",color:"primary",disabled:le,className:e.createLinkButton,fullWidth:!0,children:"Create Link"})})]})}),Object(g.jsx)(f.a,{open:ne,onClose:re.current,children:Object(g.jsx)(L,{color:K,owner:p,repo:F,icon:Y,link:ie})})]})}},374:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var c=n(113),r=n.n(c),a=n(114),o=n(112),i=n(0),s=n(3),u=n(109),l=n(8),b=function(){var e=Object(s.h)().shorthash,t=Object(i.useState)(!0),n=Object(o.a)(t,2),c=n[0],b=n[1],j=Object(i.useCallback)(Object(a.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(u.a)(e);case 3:t.next=13;break;case 5:if(t.prev=5,t.t0=t.catch(0),n=t.t0.message,!!n.includes("404")){t.next=12;break}return window.location.assign("https://tinyurl.com/".concat(e)),t.abrupt("return");case 12:b(!1);case 13:case"end":return t.stop()}}),t,null,[[0,5]])}))),[e]);return Object(i.useEffect)((function(){j()}),[j]),Object(l.jsx)(l.Fragment,{children:!c&&Object(l.jsx)(s.a,{to:"/"})})}}}]);
//# sourceMappingURL=createlink.596f80dd.chunk.js.map