import{r as u,l as d,h as m,m as g,u as x,o as h,j as e,p as j}from"./index-7cff878b.js";const b=()=>{const[t,n]=u.useState({name:"",email:"",password:""}),r=d(),i=m(g),o=x(),[l]=h();if(i){r("/");return}const c=async s=>{s.preventDefault(),n({name:s.target.elements[0].value,email:s.target.elements[1].value,password:s.target.elements[2].value});try{const p=(await l(t)).data.token;o(j({userData:t,token:p}))}catch(a){console.error("Registration failed: ",a)}s.target.reset()};return e.jsx("div",{className:"container",children:e.jsxs("form",{style:{display:"flex",gap:"40px"},onSubmit:c,children:[e.jsxs("label",{children:["Name",e.jsx("input",{type:"text"})]}),e.jsxs("label",{children:["Email",e.jsx("input",{type:"email"})]}),e.jsxs("label",{children:["Password",e.jsx("input",{type:"password"})]}),e.jsx("button",{type:"submit",children:"Register"})]})})};export{b as default};