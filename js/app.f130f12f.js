(function(){"use strict";var t={2980:function(t,n,e){var o=e(7764),r=e(4108);const a={id:"app"};function i(t,n){const e=(0,r.E1)("router-link"),o=(0,r.E1)("router-view");return(0,r.Wz)(),(0,r.An)("div",a,[(0,r.QD)("nav",null,[(0,r.K2)(e,{to:"/"},{default:(0,r.Ql)((()=>[(0,r.mY)("Contact List")])),_:1}),(0,r.mY)(" | "),(0,r.K2)(e,{to:"/edit"},{default:(0,r.Ql)((()=>[(0,r.mY)("Add Contact")])),_:1})]),(0,r.K2)(o)])}var c=e(4100);const u={},l=(0,c.c)(u,[["render",i]]);var d=l,s=e(7464),f=e(9096);const p=(0,r.QD)("h1",null,"Contact List",-1),m=["onClick"];function h(t,n,e,o,a,i){return(0,r.Wz)(),(0,r.An)("div",null,[p,(0,r.QD)("ul",null,[((0,r.Wz)(!0),(0,r.An)(r.ae,null,(0,r.mi)(a.contacts,(t=>((0,r.Wz)(),(0,r.An)("li",{key:t.id},[(0,r.mY)((0,f.WA)(t.name)+" - ",1),(0,r.QD)("button",{onClick:n=>i.viewDetails(t.id)},"View Details",8,m)])))),128))])])}e(3248);var v=e(6852),g={name:"ContactList",data(){return{contacts:[]}},created(){this.contacts=(0,v.i)()},methods:{viewDetails(t){this.$router.push({name:"ContactDetails",params:{id:t}})},deleteContact(t){if(confirm("Are you sure you want to delete this contact?")){const n=this.contacts.filter((n=>n.id!==t));(0,v.f)(n),this.contacts=n}}}};const b=(0,c.c)(g,[["render",h]]);var y=b;const D=(0,r.QD)("h1",null,"Contact Details",-1),C={key:0},Q=(0,r.QD)("h1",null,"Options",-1),w=(0,r.QD)("br",null,null,-1),A=(0,r.QD)("br",null,null,-1),O={key:1},k=(0,r.QD)("p",null,"Contact not found or loading...",-1),W=[k];function S(t,n,e,o,a,i){return(0,r.Wz)(),(0,r.An)("div",null,[D,a.contact?((0,r.Wz)(),(0,r.An)("div",C,[(0,r.QD)("p",null,"Name: "+(0,f.WA)(a.contact.name),1),(0,r.QD)("p",null,"Email: "+(0,f.WA)(a.contact.email),1),(0,r.QD)("p",null,"Address: "+(0,f.WA)(a.contact.address),1),(0,r.QD)("p",null,"Phone: "+(0,f.WA)(a.contact.phone),1),(0,r.QD)("p",null,"Category: "+(0,f.WA)(a.contact.category),1),Q,(0,r.QD)("button",{onClick:n[0]||(n[0]=(...t)=>i.goToUpdateForm&&i.goToUpdateForm(...t))},"Update Contact"),w,A,(0,r.QD)("button",{onClick:n[1]||(n[1]=(...t)=>i.deleteContact&&i.deleteContact(...t))},"Delete Contact")])):((0,r.Wz)(),(0,r.An)("div",O,W))])}var j={name:"ContactDetails",data(){return{contact:null}},mounted(){this.loadContact()},methods:{loadContact(){const t=this.$route.params.id,n=(0,v.i)();this.contact=n.find((n=>n.id.toString()===t)),this.contact||(alert("Contact not found!"),this.$router.push("/"))},deleteContact(){if(confirm("Are you sure you want to delete this contact?")){let t=(0,v.i)();t=t.filter((t=>t.id!==this.contact.id)),(0,v.f)(t),this.$router.push("/")}},goToUpdateForm(){this.$router.push({name:"ContactUpdate",params:{id:this.contact.id}})}}};const U=(0,c.c)(j,[["render",S]]);var E=U;const F=(0,r.QD)("label",{for:"name"},"Name:",-1),T=(0,r.QD)("label",{for:"email"},"Email:",-1),z=(0,r.QD)("label",{for:"address"},"Address:",-1),P=(0,r.QD)("label",{for:"phone"},"Phone:",-1),_=(0,r.QD)("label",{for:"category"},"Category:",-1),N=(0,r.QD)("button",{type:"submit"},"Save Contact",-1);function q(t,n,e,a,i,c){return(0,r.Wz)(),(0,r.An)("form",{onSubmit:n[5]||(n[5]=(0,o.Y7)(((...t)=>c.submitForm&&c.submitForm(...t)),["prevent"]))},[(0,r.QD)("div",null,[F,(0,r.wt)((0,r.QD)("input",{id:"name","onUpdate:modelValue":n[0]||(n[0]=t=>i.contact.name=t),type:"text",required:""},null,512),[[o.Og,i.contact.name]])]),(0,r.QD)("div",null,[T,(0,r.wt)((0,r.QD)("input",{id:"email","onUpdate:modelValue":n[1]||(n[1]=t=>i.contact.email=t),type:"email",required:""},null,512),[[o.Og,i.contact.email]])]),(0,r.QD)("div",null,[z,(0,r.wt)((0,r.QD)("input",{id:"address","onUpdate:modelValue":n[2]||(n[2]=t=>i.contact.address=t),type:"address",required:""},null,512),[[o.Og,i.contact.address]])]),(0,r.QD)("div",null,[P,(0,r.wt)((0,r.QD)("input",{id:"phone","onUpdate:modelValue":n[3]||(n[3]=t=>i.contact.phone=t),type:"phone",required:""},null,512),[[o.Og,i.contact.phone]])]),(0,r.QD)("div",null,[_,(0,r.wt)((0,r.QD)("input",{id:"category","onUpdate:modelValue":n[4]||(n[4]=t=>i.contact.category=t),type:"category",required:""},null,512),[[o.Og,i.contact.category]])]),N],32)}var x={name:"ContactForm",props:["id"],data(){return{contact:{id:null,name:"",email:"",phone:"",address:"",category:""}}},mounted(){if(this.id){const t=(0,v.i)();this.contact=t.find((t=>t.id===this.id))||this.contact}},methods:{submitForm(){let t=(0,v.i)();this.contact.id?t=t.map((t=>t.id===this.contact.id?this.contact:t)):(this.contact.id=Date.now().toString(),t.push(this.contact)),(0,v.f)(t),this.$router.push("/")}}};const L=(0,c.c)(x,[["render",q]]);var V=L;const $=[{path:"/",name:"ContactList",component:y},{path:"/contact/:id",name:"ContactDetails",component:E,props:!0},{path:"/edit/:id?",name:"ContactForm",component:V,props:!0},{path:"/update/:id",name:"ContactUpdate",component:()=>e.e(944).then(e.bind(e,4944)),props:!0}],Y=(0,s.gv)({history:(0,s.oz)("/"),routes:$});var K=Y;const M=(0,o.W0)(d);M.use(K),M.mount("#app")},6852:function(t,n,e){e.d(n,{f:function(){return a},i:function(){return r}});const o="contacts",r=()=>{const t=localStorage.getItem(o);return t?JSON.parse(t):[]},a=t=>{localStorage.setItem(o,JSON.stringify(t))}}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return t[o].call(a.exports,a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,a){if(!o){var i=1/0;for(d=0;d<t.length;d++){o=t[d][0],r=t[d][1],a=t[d][2];for(var c=!0,u=0;u<o.length;u++)(!1&a||i>=a)&&Object.keys(e.O).every((function(t){return e.O[t](o[u])}))?o.splice(u--,1):(c=!1,a<i&&(i=a));if(c){t.splice(d--,1);var l=r();void 0!==l&&(n=l)}}return n}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[o,r,a]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.f={},e.e=function(t){return Promise.all(Object.keys(e.f).reduce((function(n,o){return e.f[o](t,n),n}),[]))}}(),function(){e.u=function(t){return"js/"+t+".e61796ef.js"}}(),function(){e.miniCssF=function(t){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={},n="contact-manager:";e.l=function(o,r,a,i){if(t[o])t[o].push(r);else{var c,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var s=l[d];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==n+a){c=s;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,e.nc&&c.setAttribute("nonce",e.nc),c.setAttribute("data-webpack",n+a),c.src=o),t[o]=[r];var f=function(n,e){c.onerror=c.onload=null,clearTimeout(p);var r=t[o];if(delete t[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(t){return t(e)})),n)return n(e)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={524:0};e.f.j=function(n,o){var r=e.o(t,n)?t[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(e,o){r=t[n]=[e,o]}));o.push(r[2]=a);var i=e.p+e.u(n),c=new Error,u=function(o){if(e.o(t,n)&&(r=t[n],0!==r&&(t[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};e.l(i,u,"chunk-"+n,n)}},e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,a,i=o[0],c=o[1],u=o[2],l=0;if(i.some((function(n){return 0!==t[n]}))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(u)var d=u(e)}for(n&&n(o);l<i.length;l++)a=i[l],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(d)},o=self["webpackChunkcontact_manager"]=self["webpackChunkcontact_manager"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[999],(function(){return e(2980)}));o=e.O(o)})();
//# sourceMappingURL=app.f130f12f.js.map