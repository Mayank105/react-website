(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(4),c=n.n(r),o=n(6),u=n(2);var i=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Keeper"))};var m=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))};var E=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},"DELETE"))},f=n(1),d=n(5);var v=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(u.a)(t,2),r=n[0],c=n[1];function o(e){var t=e.target,n=t.name,a=t.value;c(function(e){return Object(d.a)({},e,Object(f.a)({},n,a))})}return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("input",{onChange:o,value:r.title,name:"title",placeholder:"Title"}),l.a.createElement("textarea",{onChange:o,value:r.content,name:"content",placeholder:"Take a note...",rows:"3"}),l.a.createElement("button",{onClick:function(t){e.onadd(r),c({title:"",content:""}),t.preventDefault()}},"Add")))};var p=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];function c(e){r(function(t){return t.filter(function(t,n){return n!==e})})}return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(v,{onadd:function(e){r(function(t){return[].concat(Object(o.a)(t),[e])})}}),n.map(function(e,t){return l.a.createElement(E,{key:t,id:t,title:e.title,content:e.content,onDelete:c})}),l.a.createElement(m,null))};c.a.render(l.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,2,1]]]);
//# sourceMappingURL=main.5fc901c7.chunk.js.map