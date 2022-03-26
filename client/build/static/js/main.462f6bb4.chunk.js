(this["webpackJsonpnotes-app-fs"]=this["webpackJsonpnotes-app-fs"]||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var o=n(2),c=n.n(o),a=n(24),r=n.n(a),l=n(15),s=n.n(l),i=n(25),u=n(8),j=n(3),d=n(6),h=n(5),b=n.n(h),p=n(1),O=Object(o.createContext)(void 0),x=function(){return Object(o.useContext)(O)},f=function(e){var t=e.children,n=Object(o.useState)([]),c=Object(j.a)(n,2),a=c[0],r=c[1],l=Object(o.useState)(""),h=Object(j.a)(l,2),x=h[0],f=h[1],m=Object(o.useState)(""),v=Object(j.a)(m,2),g=v[0],N=v[1],C=Object(o.useState)(""),y=Object(j.a)(C,2),S=y[0],T=y[1],k=Object(o.useState)(""),w=Object(j.a)(k,2),E=w[0],A=w[1],F=Object(o.useState)(!1),I=Object(j.a)(F,2),_=I[0],P=I[1],R=Object(o.useState)(!1),H=Object(j.a)(R,2),L=H[0],W=H[1],M=Object(o.useState)(!1),D=Object(j.a)(M,2),J=D[0],q=D[1],B=Object(o.useState)(""),U=Object(j.a)(B,2),z=U[0],G=U[1],K=Object(o.useState)(""),Q=Object(j.a)(K,2),V=Q[0],X=Q[1],Y=Object(o.useState)(null),Z=Object(j.a)(Y,2),$=Z[0],ee=Z[1];Object(o.useEffect)((function(){b.a.get("/api/note").then((function(e){r(e.data)})).catch((function(e){return console.log(e)}))}),[]);var te=function(){var e=new Date,t={id:Object(d.a)(),title:g,text:x,category:S,completed:!!L,date:e.toLocaleDateString()},n=[].concat(Object(u.a)(a),[t]);r(n)},ne=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new Date,n={id:Object(d.a)(),title:g,text:x,category:S,completed:!!L,date:t.toLocaleDateString()},x.trim().length>0&&b.a.post("/api/note",n).then((function(e){te(),r([].concat(Object(u.a)(a),[n])),f(""),N(""),W(!1)})).catch((function(e){console.log(e.message),console.log("ERROR could not create note.")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){!function(e){switch($){case"completed":return void r(a.filter((function(e){return e.complete})));case"uncompleted":return void r(a.filter((function(e){return!e.complete})));default:r(a)}}()}),[$,a]),Object(p.jsx)(O.Provider,{value:{notesArray:a,noteText:x,noteTitle:g,category:S,open:_,complete:L,openEdit:J,id:z,filterCategory:V,searchText:E,setNotesArray:r,setSearchText:A,setNoteText:f,setNoteTitle:N,setCategory:T,setOpen:P,setComplete:W,setOpenEdit:q,setId:G,setFilterCategory:X,saveNote:ne,createNote:te,deleteNote:function(e){b.a.delete("/api/note/".concat(e)).catch((function(e){return console.log(e)})),r((function(t){return t.filter((function(t){return t._id!==e}))}))},completeNote:function(e){var t=Object(u.a)(a);t[e].complete=!t[e].complete,r(t),b.a.put("/api/note/".concat(t[e]._id),t[e]).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},completeNoteStyle:function(e){return Object(u.a)(a)[e].complete?"note note-complete":"note"},editNote:function(e){G(e),q(!0),console.log("edit note function has been called...")},handleTextChange:function(e){200-e.target.value.length>=0&&f(e.target.value)},handleTitleChange:function(e){e.target.value.length>=0&&N(e.target.value)},handleCategorySort:function(e){console.log("category sort"),X(e.target.value)},filterComplete:$,setFilterComplete:ee},children:t})},m=(n(53),n(12)),v=n(26),g=function(e){var t=e.index,n=e.note,o=x(),c=o.deleteNote,a=o.completeNote,r=o.completeNoteStyle,l=o.editNote;return Object(p.jsxs)("article",{className:r(t),children:[Object(p.jsxs)("div",{className:"note-header",children:[Object(p.jsxs)("div",{className:"note-header-title",children:[Object(p.jsx)("h5",{className:n.category,children:n.category}),Object(p.jsx)("h3",{children:n.title})]}),Object(p.jsx)(v.a,{style:{color:"#3cc47c"},onClick:function(){return a(t)},className:"pin-icon complete-container"})]}),Object(p.jsx)("p",{children:n.text}),Object(p.jsx)("p",{children:n.text.substring(0,50)}),Object(p.jsxs)("div",{className:"note-footer",children:[Object(p.jsx)("p",{children:n.date}),Object(p.jsxs)("div",{className:"note-footer-icon-container",children:[Object(p.jsx)(m.b,{className:"edit-btn",onClick:function(){return l(n._id)}}),Object(p.jsx)(m.a,{className:"delete-btn",onClick:function(){return c(n._id)}})]})]})]},n._id)},N=n(27),C=function(e){var t=e.handleSearchNote,n=x(),o=n.open,c=n.setOpen,a=n.handleCategorySort,r=n.setFilterComplete;return Object(p.jsx)("div",{className:"note-search",children:Object(p.jsxs)("div",{className:"note-search-container",children:[Object(p.jsxs)("div",{className:"note-search-mobile-header",children:[Object(p.jsx)(N.a,{onClick:o?function(){return c(!1)}:function(){return c(!0)},open:o,className:"burger-icon"}),Object(p.jsx)("h1",{children:"noteflix"})]}),Object(p.jsx)("input",{className:"note-search-input",onChange:function(e){return t(e.target.value)},type:"text",name:"search",id:"note-search",placeholder:"Search Notes..."}),Object(p.jsxs)("select",{onChange:function(e){return r(e.target.value)},className:"note-search-category note-input-select",name:"complete-sort",id:"complete-sort",children:[Object(p.jsx)("option",{value:"",children:"Filter Completed Notes"}),Object(p.jsx)("option",{value:"",children:"Show All"}),Object(p.jsx)("option",{value:"completed",children:"Completed"}),Object(p.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]}),Object(p.jsxs)("select",{onChange:a,className:"note-search-category note-input-select",name:"category-sort",id:"category-sort",children:[Object(p.jsx)("option",{value:"",children:"Filter by Category"}),Object(p.jsx)("option",{value:"",children:"Show All"}),Object(p.jsx)("option",{value:"Important",children:"Important !!"}),Object(p.jsx)("option",{value:"Work",children:"Work"}),Object(p.jsx)("option",{value:"School",children:"School"}),Object(p.jsx)("option",{value:"Home",children:"Home"}),Object(p.jsx)("option",{value:"Personal",children:"Personal"})]})]})})},y=n(28),S=n(13),T=function(){var e=x(),t=e.id,n=e.notesArray,c=e.setNotesArray,a=e.setOpenEdit,r=Object(o.useState)(""),l=Object(j.a)(r,2),s=l[0],i=l[1],u=Object(o.useState)(""),d=Object(j.a)(u,2),h=d[0],O=d[1],f=Object(o.useState)(""),m=Object(j.a)(f,2),v=m[0],g=m[1];console.log(n);var N=n.find((function(e){return e._id.toString()===t}));console.log(N);var C=Object(o.useRef)(null);Object(o.useEffect)((function(){var e=function(e){var t;(null===(t=C.current)||void 0===t?void 0:t.contains(e.target))||a(!1)};return window.addEventListener("click",e),function(){return window.removeEventListener("click",e)}}),[a]),Object(o.useEffect)((function(){N&&(i(N.title),O(N.text),g(N.category))}),[N,i,O]);return Object(p.jsx)("div",{className:"edit-window",children:Object(p.jsx)("div",{ref:C,className:"note-input note-edit",onClick:function(){return a(!0)},children:Object(p.jsxs)("form",{onSubmit:function(e){return function(e){console.log(t);var o={_id:e,title:s,text:h,category:v};console.log("edit form submitted..."),b.a.put("http://localhost:8000/api/note/".concat(t),o).then((function(t){c(n.map((function(n){return n._id===e?Object(y.a)({},t.data):n}))),i(""),O(""),console.log("put request successful")})).catch((function(e){console.log(e.message),console.log("ERROR could not create note.")}))}(t)},className:"edit",children:[Object(p.jsx)("label",{htmlFor:"note-title"}),Object(p.jsx)("input",{onChange:function(e){return i(e.target.value)},value:s,name:"title",id:"noteTitle",type:"text",placeholder:"Title...",autoComplete:"off"}),Object(p.jsx)("textarea",{onChange:function(e){return O(e.target.value)},value:h,name:"text",id:"noteText",rows:"6",cols:"20",placeholder:"Enter note here..."}),Object(p.jsxs)("select",{className:"note-input-select",onChange:function(e){return g(e.target.value)},name:"category",id:"categorySelect",children:[Object(p.jsx)("option",{value:"",children:"Category"}),Object(p.jsx)("option",{value:"Important",children:"Important !"}),Object(p.jsx)("option",{value:"Work",children:"Work"}),Object(p.jsx)("option",{value:"School",children:"School"}),Object(p.jsx)("option",{value:"Home",children:"Home"}),Object(p.jsx)("option",{value:"Personal",children:"Personal"}),Object(p.jsx)("option",{value:"Misc",children:"Misc"})]}),Object(p.jsxs)("button",{type:"submit",className:"save-btn",children:[Object(p.jsx)(S.a,{className:"plus"}),"Save Note"]}),Object(p.jsx)("button",{onClick:function(){return a(!1)},children:"close"})]})})})},k=function(e){var t=e.notesArray,n=e.handleSearchNote,o=e.filterComplete,c=e.setFilterComplete,a=x(),r=a.handleCategorySort,l=a.open,s=a.setOpen,i=a.openEdit;return Object(p.jsxs)("section",{className:"notes-list-container",onClick:l?function(){return s(!1)}:null,open:l,children:[Object(p.jsx)(C,{open:l,setOpen:s,handleSearchNote:n,handleCategorySort:r,filterComplete:o,setFilterComplete:c}),i?Object(p.jsx)(T,{}):Object(p.jsx)("div",{className:"notes-list",children:t.map((function(e,t){return Object(p.jsx)(g,{index:t,id:Object(d.a)(),note:e},Object(d.a)())}))})]})},w=function(){var e=x(),t=e.handleTextChange,n=e.handleTitleChange,o=e.noteText,c=e.noteTitle,a=e.setCategory,r=e.saveNote;return Object(p.jsxs)("div",{className:"note-input",children:[Object(p.jsx)("h1",{children:"noteflix"}),Object(p.jsx)("label",{htmlFor:"note-title"}),Object(p.jsx)("input",{onChange:n,value:c,type:"text",id:"note-title",name:"note-title",placeholder:"Title...",autoComplete:"off"}),Object(p.jsx)("textarea",{onChange:t,value:o,rows:"6",cols:"20",placeholder:"Enter note here...",name:"note",id:"note-input",autoFocus:!0}),Object(p.jsxs)("select",{className:"note-input-select",onChange:function(e){a(e.target.value)},name:"category",id:"categorySelect",children:[Object(p.jsx)("option",{value:"",children:"Category"}),Object(p.jsx)("option",{value:"Important",children:"Important !"}),Object(p.jsx)("option",{value:"Work",children:"Work"}),Object(p.jsx)("option",{value:"School",children:"School"}),Object(p.jsx)("option",{value:"Home",children:"Home"}),Object(p.jsx)("option",{value:"Personal",children:"Personal"}),Object(p.jsx)("option",{value:"Misc",children:"Misc"})]}),Object(p.jsxs)("button",{className:"save-btn",onClick:r,children:[Object(p.jsx)(S.a,{className:"plus"}),"Save Note"]})]})},E=function(){var e=x(),t=e.handleTextChange,n=e.handleTitleChange,o=e.noteText,c=e.noteTitle,a=e.setCategory,r=e.saveNote,l=e.open;return Object(p.jsx)("div",{className:l?"sidebar openSidebar":"sidebar",children:Object(p.jsx)(w,{handleTextChange:t,handleTitleChange:n,noteText:o,noteTitle:c,setCategory:a,saveNote:r})})};var A=function(){var e=x(),t=e.notesArray,n=e.filterCategory,c=e.setNotesArray,a=Object(o.useState)(""),r=Object(j.a)(a,2),l=r[0],s=r[1];return Object(o.useEffect)((function(){b.a.get("/api/note").then((function(e){c(e.data)})).catch((function(e){return console.log(e)}))}),[c]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(E,{}),Object(p.jsx)(k,{notesArray:""===n?t.filter((function(e){return e.text.toLowerCase().includes(l)})):t.filter((function(e){return e.text.toLowerCase().includes(l)}))&&t.filter((function(e){return e.category===n})),setNotesArray:c,handleSearchNote:s})]})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(f,{children:Object(p.jsx)(A,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.462f6bb4.chunk.js.map