(window.webpackJsonpcontactlist=window.webpackJsonpcontactlist||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){e.exports=a(23)},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a(3),i=a(5),o=a(2),s=a.n(o),m=a(7),d=a(6),u=(a(10),a(11),a(13)),p=(a(20),function(e){var t=e.contact,a=e.deleteClickHandler,n="exampleModal"+t.id;return r.a.createElement("div",{className:"modal fade",id:n,tabIndex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Delete confirmation"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},"Are you sure want to delete ",r.a.createElement("b",null,t.name)," from contact list?"),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"No,close"),r.a.createElement("button",{type:"button",data:t.id,onClick:a,"data-dismiss":"modal",className:"btn btn-danger"},"Yes,delete")))))}),f=a(4);function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var E=function(e){var t=e.deleteClickHandler,a=Object(u.a)(e,["deleteClickHandler"]),c=Object(n.useState)({isEditing:!1,contact:a.contact}),l=Object(d.a)(c,2),i=l[0],o=l[1],b=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("http://testtask123123.dx.am/src/api/edit.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){if(i.isEditing){var t=y({},i.contact);t.name=document.getElementById("name-input"+a.contact.id).value,t.phone=document.getElementById("phone-input"+a.contact.id).value,t.info=document.getElementById("info-input"+a.contact.id).value,""!==t.name&&""!==t.phone&&(o(y({},i,{contact:t,isEditing:!i.isEditing})),b(t))}else o(y({},i,{isEditing:!i.isEditing}))},g=Object(f.b)(i.isEditing,null,{from:{opacity:0,position:"absolute"},enter:{opacity:1,position:"relative"},leave:{position:"absolute",opacity:0}}),v=i.contact;return g.map((function(e){var a=e.item,n=e.key,c=e.props;return r.a.createElement("div",{key:n,className:" mr-4 contact-wrapper position-relative"},a?r.a.createElement(f.a.div,{style:c,className:" pt-2 px-4 my-3 mr-5 d-flex flex-column contact-wrapper justify-content-center align-items-between main-wrapper w-100"},r.a.createElement("div",{className:"d-flex flex-row  justify-content-between "},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{alt:"contact avatar",src:"/images/".concat(v.imgurl)})),r.a.createElement("div",{className:"contactInfo  d-flex align-items-center"},r.a.createElement("div",{className:"d-flex  flex-column"},r.a.createElement("div",{className:"text-center name"},r.a.createElement("input",{type:"text",id:"name-input"+v.id,required:!0,defaultValue:v.name})),r.a.createElement("div",{className:"text-center phone"},r.a.createElement("input",{type:"text",id:"phone-input"+v.id,required:!0,defaultValue:v.phone})))),r.a.createElement("div",{className:"actions d-flex pr-3 align-items-center justify-content-center"},r.a.createElement("button",{className:"mr-3 btn btn-success",index:1,onClick:E},"Save"))),r.a.createElement("div",{className:"additionalInfo d-flex  justify-content-center align-items-between"},r.a.createElement("textarea",{type:"text",id:"info-input"+v.id,placeholder:"Info",defaultValue:v.info}))):r.a.createElement(f.a.div,{style:c,className:"pt-2 px-4 my-3 mr-5 contact-wrapper  d-flex flex-column justify-content-center align-items-between main-wrapper  w-100"},r.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-between "},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{alt:"contact avatar",src:"/images/".concat(v.imgurl)})),r.a.createElement("div",{className:"contactInfo  d-flex align-items-center"},r.a.createElement("div",{className:"d-flex  flex-column"},r.a.createElement("div",{className:"text-center name"},v.name),r.a.createElement("div",{className:"text-center phone"},v.phone))),r.a.createElement("div",{className:"actions d-flex pr-3 align-items-center justify-content-center"},r.a.createElement("button",{className:"mr-3 btn btn-info",onClick:function(e){return E()}},"Edit"),r.a.createElement("button",{"data-target":"#exampleModal"+v.id,"data-toggle":"modal",className:"btn btn-danger",type:"button"},"Delete"),r.a.createElement(p,{deleteClickHandler:t,contact:v}))),r.a.createElement("div",{className:"additionalInfo pt-3 pb-4"},v.info)))}))},g=function(e){var t=e.addClickHandler,a=Object(n.useState)(!1),c=Object(d.a)(a,2),l=c[0],i=c[1],o=Object(f.b)(l,null,{config:{duration:500},from:{height:0,opacity:0},enter:{height:300,opacity:1},leave:{height:0,opacity:0}});return r.a.createElement("div",{id:"header-add",className:"d-flex flex-column"},r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){i((function(e){return!e}))}},"Add new contact ")),o.map((function(e){var a=e.item,n=e.key,c=e.props;return a&&r.a.createElement(f.a.div,{style:c,key:n,className:"d-flex flex-column head-wrapper justify-content-center align-items-center"},r.a.createElement("div",{className:"form-group d-flex align-items-center"},r.a.createElement("label",{className:"pr-3"},"Name",r.a.createElement("span",{className:"text-danger"},"\xa0*")),r.a.createElement("input",{type:"text",id:"add-name",className:"form-control",required:!0,placeholder:"John Doe"})),r.a.createElement("div",{className:"form-group d-flex align-items-center"},r.a.createElement("label",{className:"pr-3"},"Phone",r.a.createElement("span",{className:"text-danger"},"\xa0*")),r.a.createElement("input",{type:"text",id:"add-phone",className:"form-control",required:!0,placeholder:"8-800-555-35-35"})),r.a.createElement("div",{className:"form-group d-flex align-items-center"},r.a.createElement("textarea",{type:"text",id:"add-info",className:"form-control",size:"40",placeholder:"Additional information"})),r.a.createElement("div",{className:"form-group d-flex align-items-center"},r.a.createElement("input",{type:"file",id:"add-img",className:"",accept:"image/*",placeholder:"image"})),r.a.createElement("button",{className:"btn btn-success",onClick:t},"Add contact"))})))},v=a(8),h=a.n(v);function x(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?x(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(e){var t=Object(n.useState)({externalData:null,addNew:!1}),a=Object(d.a)(t,2),c=a[0],l=a[1],o=function(){var e=Object(m.a)(s.a.mark((function e(){var t,a,n,r,c,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("add-name").value,a=document.getElementById("add-phone").value,n=document.getElementById("add-info").value,r=document.getElementById("add-img"),t&&a?(r&&((c=new FormData).append("img",r.files[0]),h.a.ajax({url:"http://testtask123123.dx.am/src/api/uploader.php",method:"POST",data:c,contentType:!1,cache:!1,processData:!1,success:function(){console.log("successfully")}})),l={name:t,phone:a,info:n,imgurl:r.files[0]?r.files[0].name:""},fetch("http://testtask123123.dx.am/src/api/add.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)}).then((function(){return f()})),document.getElementById("add-name").value="",document.getElementById("add-phone").value="",document.getElementById("add-info").value="",document.getElementById("add-img").value=null):alert("Name and phone are required");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(e){var t=Object(i.a)(c.externalData),a=e.target.getAttribute("data");for(var n in t)t[n].id===a&&(t[n].name="");l((function(e){return N({},e,{externalData:t})})),p(a)},p=function(){var e=Object(m.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("http://testtask123123.dx.am/src/api/delete.php",{method:"POST",headers:{"Content-Type":"application/json"},body:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("fetching"),"http://testtask123123.dx.am/src/api/demo.php",fetch("http://testtask123123.dx.am/src/api/demo.php",{method:"GET"}).then((function(e){return e.json()})).then((function(e){l((function(t){return N({},t,{externalData:e.sort((function(e,t){return e.id-t.id})).reverse()})}))}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron "},r.a.createElement(g,{addClickHandler:o})),r.a.createElement("ul",{className:"d-flex flex-row align-items-center justify-content-center flex-wrap"},c.externalData&&c.externalData.map((function(e){return e.name&&r.a.createElement("li",{key:e.id},r.a.createElement(E,{deleteClickHandler:u,contact:e})," ")}))))};Object(c.render)(r.a.createElement(O,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cd8f87b8.chunk.js.map