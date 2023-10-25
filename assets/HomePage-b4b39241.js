import{r as f,n as l,u as w,a as v,s as E,g as H,j as o,d as T,b as M,c as q,e as N}from"./index-901462cd.js";import{B as V,a as z,u as U}from"./Background-dd407df1.js";var Y={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function C(t){if(typeof t=="number")return{value:t,unit:"px"};var a,c=(t.match(/^[0-9.]*/)||"").toString();c.includes(".")?a=parseFloat(c):a=parseInt(c,10);var e=(t.match(/[^0-9]*$/)||"").toString();return Y[e]?{value:a,unit:e}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(a,"px.")),{value:a,unit:"px"})}function m(t){var a=C(t);return"".concat(a.value).concat(a.unit)}var L=function(t,a,c){var e="react-spinners-".concat(t,"-").concat(c);if(typeof window>"u"||!window.document)return e;var n=document.createElement("style");document.head.appendChild(n);var p=n.sheet,i=`
    @keyframes `.concat(e,` {
      `).concat(a,`
    }
  `);return p&&p.insertRule(i,0),e},g;(function(t){t.maroon="#800000",t.red="#FF0000",t.orange="#FFA500",t.yellow="#FFFF00",t.olive="#808000",t.green="#008000",t.purple="#800080",t.fuchsia="#FF00FF",t.lime="#00FF00",t.teal="#008080",t.aqua="#00FFFF",t.blue="#0000FF",t.navy="#000080",t.black="#000000",t.gray="#808080",t.silver="#C0C0C0",t.white="#FFFFFF"})(g||(g={}));var $=function(t,a){if(Object.keys(g).includes(t)&&(t=g[t]),t[0]==="#"&&(t=t.slice(1)),t.length===3){var c="";t.split("").forEach(function(n){c+=n,c+=n}),t=c}var e=(t.match(/.{2}/g)||[]).map(function(n){return parseInt(n,16)}).join(", ");return"rgba(".concat(e,", ").concat(a,")")},b=globalThis&&globalThis.__assign||function(){return b=Object.assign||function(t){for(var a,c=1,e=arguments.length;c<e;c++){a=arguments[c];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},b.apply(this,arguments)},G=globalThis&&globalThis.__rest||function(t,a){var c={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(c[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(t);n<e.length;n++)a.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(c[e[n]]=t[e[n]]);return c};function A(t){var a=t.loading,c=a===void 0?!0:a,e=t.color,n=e===void 0?"#000000":e,p=t.speedMultiplier,i=p===void 0?1:p,j=t.cssOverride,W=j===void 0?{}:j,F=t.size,x=F===void 0?50:F,_=G(t,["loading","color","speedMultiplier","cssOverride","size"]),O=C(x),h=O.value,y=O.unit,D=b({display:"inherit",position:"relative",width:m(x),height:m(x),transform:"rotate(165deg)"},W),d=h/5,s=(h-d)/2,r=s-d,u=$(n,.75),I=L("HashLoader","0% {width: ".concat(d,"px; box-shadow: ").concat(s,"px ").concat(-r,"px ").concat(u,", ").concat(-s,"px ").concat(r,"px ").concat(u,`}
    35% {width: `).concat(m(x),"; box-shadow: 0 ").concat(-r,"px ").concat(u,", 0 ").concat(r,"px ").concat(u,`}
    70% {width: `).concat(d,"px; box-shadow: ").concat(-s,"px ").concat(-r,"px ").concat(u,", ").concat(s,"px ").concat(r,"px ").concat(u,`}
    100% {box-shadow: `).concat(s,"px ").concat(-r,"px ").concat(u,", ").concat(-s,"px ").concat(r,"px ").concat(u,"}"),"before"),P=L("HashLoader","0% {height: ".concat(d,"px; box-shadow: ").concat(r,"px ").concat(s,"px ").concat(n,", ").concat(-r,"px ").concat(-s,"px ").concat(n,`}
    35% {height: `).concat(m(x),"; box-shadow: ").concat(r,"px 0 ").concat(n,", ").concat(-r,"px 0 ").concat(n,`}
    70% {height: `).concat(d,"px; box-shadow: ").concat(r,"px ").concat(-s,"px ").concat(n,", ").concat(-r,"px ").concat(s,"px ").concat(n,`}
    100% {box-shadow: `).concat(r,"px ").concat(s,"px ").concat(n,", ").concat(-r,"px ").concat(-s,"px ").concat(n,"}"),"after"),S=function(R){return{position:"absolute",top:"50%",left:"50%",display:"block",width:"".concat(h/5).concat(y),height:"".concat(h/5).concat(y),borderRadius:"".concat(h/10).concat(y),transform:"translate(-50%, -50%)",animationFillMode:"none",animation:"".concat(R===1?I:P," ").concat(2/i,"s infinite")}};return c?f.createElement("span",b({style:D},_),f.createElement("span",{style:S(1)}),f.createElement("span",{style:S(2)})):null}const J=l.ul`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
`,K=l.li`
	margin-top: 20px;
	width: 300px;
	padding: 10px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	box-shadow: 0px 2px 4px 2px #33333333;
`;l(A)`
	position: absolute;
	left: 50%;
	transform: translateY(200%) !important;
`;const Q=t=>t.contacts,X=t=>t.isLoading,Z=()=>{const t=w(),a=v(Q).contacts,c=v(E),e=v(X);f.useEffect(()=>{t(H())},[t]);const n=i=>{t(T(i))},p=a.filter(i=>i.name.toLowerCase().includes(c.toLowerCase())||i.number.includes(c));return o.jsx(J,{children:p?e?o.jsx(A,{}):p.map(i=>o.jsxs(K,{children:[i.name," (",i.number,")",o.jsx("button",{type:"button",onClick:()=>n(i.id),children:"Delete"})]},i.id)):null})},B=l.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	max-width: 40%;
`,tt=()=>{const t=w();f.useState({});const a=async c=>{c.preventDefault();try{const e={name:c.target.elements[0].value,number:c.target.elements[1].value};t(M(e)),c.target.reset()}catch(e){console.warn(e)}};return o.jsx(o.Fragment,{children:o.jsxs(B,{name:"contact",onSubmit:a,children:[o.jsx("input",{id:"outlined",label:"Name",type:"text",name:"name",placeholder:"Enter name...",required:!0,autoComplete:"new-password"}),o.jsx("input",{id:"outlined",label:"Phone",type:"tel",name:"phone",placeholder:"Enter phone number...",required:!0,autoComplete:"new-password"}),o.jsx("button",{color:"info",type:"submit",style:{width:"40%",alignSelf:"flex-end"},children:"Add contact"})]})})},et=l.div`
	width: 25%;
`,nt=()=>{const t=w(),a=v(E),c=({target:e})=>{const n=e.value;t(q(n))};return o.jsx(et,{children:o.jsx("input",{id:"outlined",label:"Search",type:"text",placeholder:"Search contacts...",value:a,onChange:c})})},at=l.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 20% 0;
	user-select: none;
`,ct=l.div`
	display: flex;
	gap: 20px;
	justify-content: center;
	margin-top: 50px;
`,ot=l.p`
	color: #fff;
	text-align: center;
	font-size: 48px;
	z-index: 10;
`,k=l(V)`
	width: 150px;
	height: 60px;

	font-size: 18px;
`,rt=()=>{const t=N();return o.jsxs(at,{children:[o.jsx(z,{}),o.jsx(ot,{children:"Welcome to ContactHub!"}),o.jsxs(ct,{children:[o.jsx(k,{type:"primary",onClick:()=>t("register"),children:"Register"}),o.jsx(k,{type:"default",onClick:()=>t("login"),children:"Login"})]})]})},lt=()=>{const{isLoggedIn:t}=U();return t?o.jsxs("div",{children:[o.jsx(tt,{}),o.jsxs("div",{children:[o.jsx("div",{children:"Contacts"}),o.jsx(nt,{}),o.jsx(Z,{})]})]}):o.jsx(rt,{})};export{lt as default};
