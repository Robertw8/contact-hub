import{n,B as c,u as i,j as e,a as r,r as a}from"./index-926efa32.js";import{B as l}from"./Background-17370465.js";const x=n.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 20% 0;
	user-select: none;
`,p=n.div`
	display: flex;
	gap: 20px;
	justify-content: center;
	margin-top: 50px;
`,d=n.p`
	color: #fff;
	text-align: center;
	font-size: 48px;
	z-index: 10;
`,o=n(c)`
	width: 150px;
	height: 60px;

	font-size: 18px;
`,u=()=>{const t=i();return e.jsxs(x,{children:[e.jsx(l,{}),e.jsx(d,{children:"Welcome to ContactHub!"}),e.jsxs(p,{children:[e.jsx(o,{type:"primary",onClick:()=>t("/register"),children:"Register"}),e.jsx(o,{type:"default",onClick:()=>t("/login"),children:"Login"})]})]})},h=()=>{const t=i(),{isLoggedIn:s}=r();return a.useEffect(()=>{s&&t("/contacts")},[s,t]),!s&&e.jsx(u,{})};export{h as default};
