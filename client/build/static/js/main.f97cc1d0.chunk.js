(this["webpackJsonpnotes-app-fs"]=this["webpackJsonpnotes-app-fs"]||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),a=n(24),r=n.n(a),i=n(15),l=n.n(i),s=n(25),j=n(8),u=n(3),d=n(6),b=n(5),h=n.n(b),O=n(1),p=Object(c.createContext)(void 0),x=function(){return Object(c.useContext)(p)},f=function(e){var t=e.children,n=Object(c.useState)([]),o=Object(u.a)(n,2),a=o[0],r=o[1],i=Object(c.useState)(""),b=Object(u.a)(i,2),x=b[0],f=b[1],m=Object(c.useState)(""),v=Object(u.a)(m,2),g=v[0],N=v[1],C=Object(c.useState)(""),y=Object(u.a)(C,2),S=y[0],T=y[1],k=Object(c.useState)(""),w=Object(u.a)(k,2),E=w[0],A=w[1],L=Object(c.useState)(!1),F=Object(u.a)(L,2),I=F[0],_=F[1],P=Object(c.useState)(!1),R=Object(u.a)(P,2),H=R[0],W=R[1],M=Object(c.useState)(!1),D=Object(u.a)(M,2),J=D[0],B=D[1],U=Object(c.useState)(""),q=Object(u.a)(U,2),z=q[0],G=q[1],K=Object(c.useState)(""),Q=Object(u.a)(K,2),V=Q[0],X=Q[1],Y=Object(c.useState)(null),Z=Object(u.a)(Y,2),$=Z[0],ee=Z[1],te=Object(c.useState)(!1),ne=Object(u.a)(te,2),ce=ne[0],oe=ne[1];Object(c.useEffect)((function(){oe(!0),h.a.get("/api/note").then((function(e){console.log(e.data),r(e.data),oe(!1)})).catch((function(e){return console.log(e)})).finally((function(){return oe(!1)}))}),[]);var ae=function(){var e=new Date,t={id:Object(d.a)(),title:g,text:x,category:S,completed:!!H,date:e.toLocaleDateString()},n=[].concat(Object(j.a)(a),[t]);r(n)},re=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new Date,n={id:Object(d.a)(),title:g,text:x,category:S,completed:!!H,date:t.toLocaleDateString()},x.trim().length>0&&h.a.post("/api/note",n).then((function(e){ae(),r([].concat(Object(j.a)(a),[n])),f(""),N(""),W(!1)})).catch((function(e){console.log(e.message),console.log("ERROR could not create note.")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){!function(e){switch($){case"completed":return void r(a.filter((function(e){return e.complete})));case"uncompleted":return void r(a.filter((function(e){return!e.complete})));default:r(a)}}()}),[$,a]),Object(O.jsx)(p.Provider,{value:{notesArray:a,noteText:x,noteTitle:g,category:S,open:I,complete:H,openEdit:J,id:z,filterCategory:V,searchText:E,isLoading:ce,setIsLoading:oe,setNotesArray:r,setSearchText:A,setNoteText:f,setNoteTitle:N,setCategory:T,setOpen:_,setComplete:W,setOpenEdit:B,setId:G,setFilterCategory:X,saveNote:re,createNote:ae,deleteNote:function(e){h.a.delete("/api/note/".concat(e)).catch((function(e){return console.log(e)})),r((function(t){return t.filter((function(t){return t._id!==e}))}))},completeNote:function(e){var t=Object(j.a)(a);t[e].complete=!t[e].complete,r(t),h.a.put("/api/note/".concat(t[e]._id),t[e]).catch((function(e){return console.log(e)}))},completeNoteStyle:function(e){return Object(j.a)(a)[e].complete?"note note-complete":"note"},editNote:function(e){console.log("edit note function"),G(e),B(!0)},handleTextChange:function(e){200-e.target.value.length>=0&&f(e.target.value)},handleTitleChange:function(e){e.target.value.length>=0&&N(e.target.value)},handleCategorySort:function(e){console.log("category sort"),X(e.target.value)},filterComplete:$,setFilterComplete:ee},children:t})},m=(n(53),n(12)),v=n(26),g=function(e){var t=e.index,n=e.note,c=x(),o=c.deleteNote,a=c.completeNote,r=c.completeNoteStyle,i=c.editNote;return Object(O.jsxs)("article",{className:r(t),children:[Object(O.jsxs)("div",{className:"note-header",children:[Object(O.jsxs)("div",{className:"note-header-title",children:[Object(O.jsx)("h5",{className:n.category,children:n.category}),Object(O.jsx)("h3",{children:n.title})]}),Object(O.jsx)(v.a,{style:{color:"#3cc47c"},onClick:function(){return a(t)},className:"pin-icon complete-container"})]}),Object(O.jsx)("p",{children:n.text}),Object(O.jsxs)("div",{className:"note-footer",children:[Object(O.jsx)("p",{children:n.date}),Object(O.jsxs)("div",{className:"note-footer-icon-container",children:[Object(O.jsx)(m.b,{className:"edit-btn",onClick:function(){return i(n._id)}}),Object(O.jsx)(m.a,{className:"delete-btn",onClick:function(){return o(n._id)}})]})]})]},n._id)},N=n(27),C=function(e){var t=e.handleSearchNote,n=x(),c=n.open,o=n.setOpen,a=n.handleCategorySort,r=n.setFilterComplete;return Object(O.jsx)("div",{className:"note-search",children:Object(O.jsxs)("div",{className:"note-search-container",children:[Object(O.jsxs)("div",{className:"note-search-mobile-header",children:[Object(O.jsx)(N.a,{onClick:c?function(){return o(!1)}:function(){return o(!0)},open:c,className:"burger-icon"}),Object(O.jsx)("h1",{children:"noteflix"})]}),Object(O.jsx)("input",{className:"note-search-input",onChange:function(e){return t(e.target.value)},type:"text",name:"search",id:"note-search",placeholder:"Search Notes..."}),Object(O.jsxs)("select",{onChange:function(e){return r(e.target.value)},className:"note-search-category note-input-select",name:"complete-sort",id:"complete-sort",children:[Object(O.jsx)("option",{value:"",children:"Filter Completed Notes"}),Object(O.jsx)("option",{value:"",children:"Show All"}),Object(O.jsx)("option",{value:"completed",children:"Completed"}),Object(O.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]}),Object(O.jsxs)("select",{onChange:a,className:"note-search-category note-input-select",name:"category-sort",id:"category-sort",children:[Object(O.jsx)("option",{value:"",children:"Filter by Category"}),Object(O.jsx)("option",{value:"",children:"Show All"}),Object(O.jsx)("option",{value:"Important",children:"Important !!"}),Object(O.jsx)("option",{value:"Work",children:"Work"}),Object(O.jsx)("option",{value:"School",children:"School"}),Object(O.jsx)("option",{value:"Home",children:"Home"}),Object(O.jsx)("option",{value:"Personal",children:"Personal"})]})]})})},y=n(28),S=n(13),T=function(){var e=x(),t=e.id,n=e.notesArray,o=e.setNotesArray,a=e.setOpenEdit,r=Object(c.useState)(""),i=Object(u.a)(r,2),l=i[0],s=i[1],j=Object(c.useState)(""),d=Object(u.a)(j,2),b=d[0],p=d[1],f=Object(c.useState)(""),m=Object(u.a)(f,2),v=m[0],g=m[1],N=n.find((function(e){return e._id.toString()===t})),C=Object(c.useRef)(null);Object(c.useEffect)((function(){var e=function(e){var t;(null===(t=C.current)||void 0===t?void 0:t.contains(e.target))||a(!1)};return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}}),[a]),Object(c.useEffect)((function(){N&&(s(N.title),p(N.text),g(N.category))}),[N,s,p]);return Object(O.jsx)("div",{className:"edit-window",children:Object(O.jsx)("div",{ref:C,className:"note-input note-edit",onClick:function(){return a(!0)},children:Object(O.jsxs)("form",{onSubmit:function(e){return function(e){var c={_id:e,title:l,text:b,category:v};h.a.put("/api/note/".concat(t),c).then((function(t){o(n.map((function(n){return n._id===e?Object(y.a)({},t.data):n}))),s(""),p("")})).catch((function(e){console.log(e.message),console.log("ERROR could not create note.")}))}(t)},className:"edit",children:[Object(O.jsx)("button",{className:"edit-modal-close-btn",onClick:function(){return a(!1)},children:"Close"}),Object(O.jsx)("label",{htmlFor:"note-title"}),Object(O.jsx)("input",{onChange:function(e){return s(e.target.value)},value:l,name:"title",id:"noteTitle",type:"text",placeholder:"Title...",autoComplete:"off"}),Object(O.jsx)("textarea",{onChange:function(e){return p(e.target.value)},value:b,name:"text",id:"noteText",rows:"6",cols:"20",placeholder:"Enter note here..."}),Object(O.jsxs)("select",{className:"note-input-select",onChange:function(e){return g(e.target.value)},name:"category",id:"categorySelect",children:[Object(O.jsx)("option",{value:"",children:"Category"}),Object(O.jsx)("option",{value:"Important",children:"Important !"}),Object(O.jsx)("option",{value:"Work",children:"Work"}),Object(O.jsx)("option",{value:"School",children:"School"}),Object(O.jsx)("option",{value:"Home",children:"Home"}),Object(O.jsx)("option",{value:"Personal",children:"Personal"}),Object(O.jsx)("option",{value:"Misc",children:"Misc"})]}),Object(O.jsxs)("button",{type:"submit",className:"save-btn",children:[Object(O.jsx)(S.a,{className:"plus"}),"Save Note"]})]})})})},k=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"main-spinner-container",children:Object(O.jsxs)("div",{className:"lds-default",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})})})},w=function(e){var t=e.notesArray,n=e.handleSearchNote,c=e.filterComplete,o=e.setFilterComplete,a=x(),r=a.handleCategorySort,i=a.open,l=a.setOpen,s=a.openEdit;a.isLoading,a.setIsLoading;return Object(O.jsxs)("section",{className:"notes-list-container",onClick:i?function(){return l(!1)}:null,open:i,children:[Object(O.jsx)(C,{open:i,setOpen:l,handleSearchNote:n,handleCategorySort:r,filterComplete:c,setFilterComplete:o}),s?Object(O.jsx)(T,{}):Object(O.jsx)("div",{className:"notes-list",children:t.map((function(e,t){return Object(O.jsx)(g,{index:t,id:Object(d.a)(),note:e},Object(d.a)())}))})]})},E=function(){var e=x(),t=e.handleTextChange,n=e.handleTitleChange,c=e.noteText,o=e.noteTitle,a=e.setCategory,r=e.saveNote;return Object(O.jsxs)("div",{className:"note-input",children:[Object(O.jsx)("h1",{children:"noteflix"}),Object(O.jsx)("label",{htmlFor:"note-title"}),Object(O.jsx)("input",{onChange:n,value:o,type:"text",id:"note-title",name:"note-title",placeholder:"Title...",autoComplete:"off"}),Object(O.jsx)("textarea",{onChange:t,value:c,rows:"6",cols:"20",placeholder:"Enter note here...",name:"note",id:"note-input",autoFocus:!0}),Object(O.jsxs)("select",{className:"note-input-select",onChange:function(e){a(e.target.value)},name:"category",id:"categorySelect",children:[Object(O.jsx)("option",{value:"",children:"Category"}),Object(O.jsx)("option",{value:"Important",children:"Important !"}),Object(O.jsx)("option",{value:"Work",children:"Work"}),Object(O.jsx)("option",{value:"School",children:"School"}),Object(O.jsx)("option",{value:"Home",children:"Home"}),Object(O.jsx)("option",{value:"Personal",children:"Personal"}),Object(O.jsx)("option",{value:"Misc",children:"Misc"})]}),Object(O.jsxs)("button",{className:"save-btn",onClick:r,children:[Object(O.jsx)(S.a,{className:"plus"}),"Save Note"]})]})},A=function(){var e=x(),t=e.handleTextChange,n=e.handleTitleChange,c=e.noteText,o=e.noteTitle,a=e.setCategory,r=e.saveNote,i=e.open;return Object(O.jsx)("div",{className:i?"sidebar openSidebar":"sidebar",children:Object(O.jsx)(E,{handleTextChange:t,handleTitleChange:n,noteText:c,noteTitle:o,setCategory:a,saveNote:r})})};var L=function(){var e=x(),t=e.notesArray,n=e.filterCategory,o=e.setNotesArray,a=e.isLoading,r=e.setIsLoading,i=Object(c.useState)(""),l=Object(u.a)(i,2),s=l[0],j=l[1];return Object(c.useEffect)((function(){r(!0),h.a.get("api/note").then((function(e){console.log(e.data),o(e.data)})).catch((function(e){return console.log(e)})).finally((function(){return r(!1)}))}),[o]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(A,{}),a?Object(O.jsx)(k,{}):Object(O.jsx)(w,{notesArray:""===n?t.filter((function(e){return e.text.toLowerCase().includes(s)})):t.filter((function(e){return e.text.toLowerCase().includes(s)}))&&t.filter((function(e){return e.category===n})),setNotesArray:o,handleSearchNote:j})]})};r.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(f,{children:Object(O.jsx)(L,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.f97cc1d0.chunk.js.map