import{n as e,a as i,j as s,L as o}from"./index-22799fe2.js";import{a}from"./index-9cf74eb6.js";import"./index-eb320e2e.js";const d=e(a)`
  width: 600px;
  margin: 100px auto;
  font-size: 20px;
`,t=e(a.Grid)`
  width: 100% !important;

  &:last-of-type {
    margin-top: 20px;
  }
`,m=()=>{const{user:r,isLoading:n}=i();return s.jsx(d,{title:"User information",children:n?s.jsx(o,{}):s.jsxs(s.Fragment,{children:[s.jsxs(t,{children:["Username: ",s.jsx("span",{children:r.name})]}),s.jsxs(t,{children:["Email: ",s.jsx("span",{children:r.email})]})]})})},c=()=>s.jsx(m,{});export{c as default};
