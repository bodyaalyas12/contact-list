(this.webpackJsonpcontactlist=this.webpackJsonpcontactlist||[]).push([[0],{18:function(e,t,a){},22:function(e,t,a){e.exports=a(36)},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(9),o=a(3),r=a(10),i=(a(16),"https://contact-list-api-node.herokuapp.com"),s=a(4),m=a(8),d=a(6),u=function(){return function(e){fetch("".concat(i,"/contacts/getList"),{method:"GET"}).then((function(e){return e.json()})).then((function(t){e({type:"SET_CONTACTS",payload:t.contacts.reverse()})}))}},f=a(5),p=Object(f.b)((function(e,t){return Object(o.a)({},t,{contacts:e.contacts})}),(function(e){return{setContacts:function(){return e(u())}}}))((function(e){var t=e.setContacts,a=Object(n.useState)(!1),l=Object(m.a)(a,2),r=l[0],u=l[1],f=Object(n.useState)({name:"",phone:"",info:"",image:{}}),p=Object(m.a)(f,2),b=p[0],E=p[1],g=Object(d.b)(r,null,{config:{duration:500},from:{height:0,opacity:0},enter:{height:300,opacity:1},leave:{height:0,opacity:0}}),v=function(e){var t=e.target,a=t.name,n=t.value;E(Object(o.a)({},b,Object(s.a)({},a,n)))},h=function(){var e=new FormData(b);e.append("image",b.image),e.append("form",JSON.stringify(b)),fetch("".concat(i,"/contacts/create"),{body:e,method:"POST"}).then((function(e){return e.json()})).then((function(){t()}))},N=function(e){var t=e.target;E(Object(o.a)({},b,{image:t.files[0]}))};return c.a.createElement("div",{id:"header-add",className:"d-flex flex-column"},c.a.createElement("div",{className:"d-flex justify-content-start"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){u((function(e){return!e}))}},"Add new contact"," ")),g.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&c.a.createElement(d.a.div,{style:n,key:a,className:"d-flex flex-column head-wrapper justify-content-center align-items-center"},c.a.createElement("div",{className:"form-group d-flex align-items-center"},c.a.createElement("label",{className:"pr-3"},"Name",c.a.createElement("span",{className:"text-danger"},"\xa0*")),c.a.createElement("input",{type:"text",className:"form-control",value:b.name,name:"name",onChange:v,placeholder:"John Doe"})),c.a.createElement("div",{className:"form-group d-flex align-items-center"},c.a.createElement("label",{className:"pr-3"},"Phone",c.a.createElement("span",{className:"text-danger"},"\xa0*")),c.a.createElement("input",{type:"text",className:"form-control",required:!0,value:b.phone,name:"phone",onChange:v,placeholder:"8-800-555-35-35"})),c.a.createElement("div",{className:"form-group d-flex align-items-center"},c.a.createElement("textarea",{type:"text",className:"form-control",size:"40",value:b.info,name:"info",onChange:v,placeholder:"Additional information"})),c.a.createElement("div",{className:"form-group d-flex align-items-center"},c.a.createElement("input",{type:"file",className:"",accept:"image/*",placeholder:"image",onChange:N})),c.a.createElement("button",{className:"btn btn-success",onClick:h},"Add contact"))})))})),b=a(14),E=a.n(b),g=a(20),v=(a(33),function(e){var t=e.contact,a=e.deleteClickHandler,n="exampleModal"+t.id;return c.a.createElement("div",{className:"modal fade",id:n,tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Delete confirmation"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal-body"},"Are you sure want to delete ",c.a.createElement("b",null,t.name)," from contact list?"),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"No,close"),c.a.createElement("button",{type:"button",onClick:function(e){return a(t._id)},"data-dismiss":"modal",className:"btn btn-danger"},"Yes,delete")))))}),h=(a(18),Object(f.b)((function(e,t){return Object(o.a)({},t,{contacts:e.contacts})}),(function(e){return{setContacts:function(){return e(u())}}}))((function(e){var t=e.deleteClickHandler,a=Object(r.a)(e,["deleteClickHandler"]),l=Object(n.useState)({isEditing:!1,contact:a.contact||{}}),u=Object(m.a)(l,2),f=u[0],p=u[1],b=function(){var e=Object(g.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(i,"/contacts/update/").concat(t._id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e,t){f.isEditing?t.name&&t.phone&&(p(Object(o.a)({},f,{isEditing:!f.isEditing})),b(t)):p(Object(o.a)({},f,{isEditing:!f.isEditing}))},N=function(e){var t=e.target,a=t.name,n=t.value;p(Object(o.a)({},f,{contact:Object(o.a)({},x,Object(s.a)({},a,n))}))},y=Object(d.b)(f.isEditing,null,{from:{opacity:0,position:"absolute"},enter:{opacity:1,position:"relative"},leave:{position:"absolute",opacity:0}}),x=f.contact;return y.map((function(e){var a=e.item,n=e.key,l=e.props;return c.a.createElement("div",{key:n,className:" mr-4 contact-wrapper position-relative"},a?c.a.createElement(d.a.div,{style:l,className:" pt-2 px-4 my-3 mr-5 d-flex flex-column contact-wrapper justify-content-center align-items-between main-wrapper w-100"},c.a.createElement("div",{className:"d-flex flex-row  justify-content-between "},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("img",{alt:"contact avatar",src:"".concat(i,"/").concat(x.image)})),c.a.createElement("div",{className:"contactInfo  d-flex align-items-center"},c.a.createElement("div",{className:"d-flex  flex-column"},c.a.createElement("div",{className:"text-center name"},c.a.createElement("input",{type:"text",id:"name-input"+x.id,name:"name",onChange:N,value:x.name})),c.a.createElement("div",{className:"text-center phone"},c.a.createElement("input",{type:"text",onChange:N,name:"phone",defaultValue:x.phone})))),c.a.createElement("div",{className:"actions d-flex pr-3 align-items-center justify-content-center"},c.a.createElement("button",{className:"mr-3 btn btn-success",onClick:function(e){return h(0,x)}},"Save"))),c.a.createElement("div",{className:"additionalInfo d-flex  justify-content-center align-items-between"},c.a.createElement("textarea",{type:"text",placeholder:"Info",name:"info",onChange:N,value:x.info}))):c.a.createElement(d.a.div,{style:l,className:"pt-2 px-4 my-3 mr-5 contact-wrapper  d-flex flex-column justify-content-center align-items-between main-wrapper  w-100"},c.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-between "},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("img",{alt:"contact avatar",src:"".concat(i,"/").concat(x.image)})),c.a.createElement("div",{className:"contactInfo  d-flex align-items-center"},c.a.createElement("div",{className:"d-flex  flex-column"},c.a.createElement("div",{className:"text-center name"},x.name),c.a.createElement("div",{className:"text-center phone"},x.phone))),c.a.createElement("div",{className:"actions d-flex pr-3 align-items-center justify-content-center"},c.a.createElement("button",{className:"mr-3 btn btn-info",onClick:h},"Edit"),c.a.createElement("button",{"data-target":"#exampleModal"+x.id,"data-toggle":"modal",className:"btn btn-danger",type:"button"},"Delete"),c.a.createElement(v,{deleteClickHandler:t,contact:x}))),c.a.createElement("div",{className:"additionalInfo pt-3 pb-4"},x.info)))}))}))),N=Object(f.b)((function(e,t){return Object(o.a)({},t,{contacts:e.contacts})}),(function(e){return{setContacts:function(){return e(u())}}}))((function(e){var t=e.contacts,a=e.setContacts,l=(Object(r.a)(e,["contacts","setContacts"]),function(e){fetch("".concat(i,"/contacts/delete/").concat(e),{method:"DELETE",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log(e),a()}))});return Object(n.useEffect)((function(){a()}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"jumbotron "},c.a.createElement("div",{className:"container"},c.a.createElement(p,null)," ")),c.a.createElement("div",{className:"container"},c.a.createElement("ul",{className:"d-flex flex-row align-items-center justify-content-center flex-wrap"},t.map((function(e){return e.name&&c.a.createElement("li",{key:e._id},c.a.createElement(h,{deleteClickHandler:l,contact:e})," ")})))))})),y=a(7),x={contacts:[]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CONTACTS":return Object(o.a)({},e,{contacts:t.payload});default:return e}},O=a(21),C=Object(y.c)(j,Object(y.a)(O.a));Object(l.render)(c.a.createElement(f.a,{store:C},c.a.createElement(N,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.499e9a90.chunk.js.map