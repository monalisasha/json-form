(this["webpackJsonpjson-form"]=this["webpackJsonpjson-form"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(6),r=n.n(c),l=(n(11),n(2)),u=(n(12),n(3)),o=n(5);var s=n(0),b=function(e){var t=e.configData,n=void 0===t?[]:t,i=e.handleOnSubmit,c=e.handleOnReset,r=Object(a.useState)({}),b=Object(l.a)(r,2),m=b[0],d=b[1],j=Object(a.useState)(null),h=Object(l.a)(j,2),f=h[0],p=h[1],O=function(e,t){d(Object(o.a)(Object(o.a)({},m),{},Object(u.a)({},e,t)))};return Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=n.filter((function(e){return e.isRequired})).map((function(e){return e.name})),a={};t.forEach((function(e){m[e]||(a[e]="This is required field")})),Object.keys(a).length?p(a):(p(null),i(m))},noValidate:!0,children:[n.map((function(e){var t,n=e.name,a=void 0===n?"":n,i=e.type,c=void 0===i?"text":i,r=e.human_label,l=void 0===r?"":r,u=e.conditional,o=e.isRequired,b=m[a]||"";return"date"===c&&b&&(t=function(e){var t=new Date(e),n=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),a=new Intl.DateTimeFormat("en",{month:"2-digit"}).format(t),i=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t);return"".concat(n,"-").concat(a,"-").concat(i)}(b)),!u||u.show_if(m[u.name])?Object(s.jsxs)("div",{children:[Object(s.jsxs)("label",{children:[l," ",o?"* ":""]}),Object(s.jsx)("br",{}),"checkbox"===c?Object(s.jsx)("input",{checked:b,type:c,name:a,onChange:function(e){return O(a,e.target.checked)}}):Object(s.jsx)("input",{value:t||b,type:c,name:a,onChange:function(e){return O(a,"date"===c?new Date(e.target.value):e.target.value)}}),Object(s.jsx)("span",{className:"error",children:null===f||void 0===f?void 0:f[a]})]},a):null})),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:function(e){e.preventDefault(),d({}),p(null),c()},children:"Reset"}),Object(s.jsx)("button",{type:"submit",children:"Submit"})]})]})})},m=[{tag:"input",name:"first_name",type:"text",human_label:"First Name"},{tag:"input",name:"last_name",type:"text",human_label:"Last Name",isRequired:!0},{tag:"input",name:"email",type:"email",human_label:"Email Address"},{tag:"input",name:"phone_number",type:"text",human_label:"Phone Number",isRequired:!0},{tag:"input",name:"job_title",type:"text",human_label:"Job Title"},{tag:"input",name:"date_of_birth",type:"date",human_label:"Date of Birth"},{tag:"input",name:"parental_consent",type:"checkbox",human_label:"Parental Consent",conditional:{name:"date_of_birth",show_if:function(e){var t=new Date;return e>=new Date(t.getFullYear()-13,t.getMonth(),t.getDate())}}}];var d=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{style:{flex:1},children:Object(s.jsx)(b,{configData:m,handleOnSubmit:function(e){i(JSON.parse(JSON.stringify(e)))},handleOnReset:function(){i(null)}})}),Object(s.jsx)("div",{style:{flex:1},children:n?Object(s.jsx)("pre",{children:JSON.stringify(n,null,"\t")}):null})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),j()}},[[14,1,2]]]);
//# sourceMappingURL=main.1dd6efbf.chunk.js.map