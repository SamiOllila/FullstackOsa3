(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),l=t.n(c),u=(t(19),t(2)),o=function(e){var n=e.person,t=e.handleDeleteClick,a=n.name,c=n.number;return r.a.createElement("div",null,r.a.createElement("p",null,a," ",c),r.a.createElement("button",{onClick:function(){t(n)},size:"sm"},"delete"))},i=function(e){var n=e.persons,t=e.handleDeleteClick;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement("div",null,r.a.createElement(o,{key:e.name,person:e,handleDeleteClick:t}))})))},m=function(e){var n=e.addName,t=e.newName,a=e.newNumber,c=e.handleNameChange,l=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:c})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:l})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},d=function(e){var n=e.filterInput,t=e.handleFilterInputChange;return r.a.createElement("form",null,r.a.createElement("div",null,"Filter shown with: ",r.a.createElement("input",{value:n,onChange:t})))},s=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"notification"},n)},f=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},h=t(3),p=t.n(h),v="/api/persons",b=function(){return p.a.get(v)},E=function(e){return p.a.post(v,e)},w=function(e){return p.a.delete("".concat(v,"/").concat(e))},g=function(e){return p.a.put("".concat(v,"/").concat(e.id),e)},C=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],l=Object(a.useState)(""),o=Object(u.a)(l,2),h=o[0],p=o[1],v=Object(a.useState)(""),C=Object(u.a)(v,2),j=C[0],N=C[1],O=Object(a.useState)(""),k=Object(u.a)(O,2),S=k[0],y=k[1],D=Object(a.useState)(null),I=Object(u.a)(D,2),T=I[0],F=I[1],U=Object(a.useState)(null),A=Object(u.a)(U,2),B=A[0],J=A[1],R=function(){b().then((function(e){c(e.data)}))};Object(a.useEffect)((function(){R()}),[]);var W=t.filter((function(e){return e.name.toUpperCase().includes(h.toUpperCase())}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(s,{message:T}),r.a.createElement(f,{message:B}),r.a.createElement(d,{filterInput:h,handleFilterInputChange:function(e){p(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(m,{addName:function(e){e.preventDefault();var n={name:j,number:S};if(t.map((function(e){return e.name})).includes(n.name)&&window.confirm("".concat(n.name," is already added to phonebook. Replace the old number with new one?"))){var a={name:j,number:S,id:t.filter((function(e){return e.name===n.name}))[0].id};return N(""),y(""),void g(a).then((function(e){R(),F("Updated ".concat(a.name)),setTimeout((function(){F(null)}),3e3)})).catch((function(e){J("".concat(a.name," has already been removed.")),setTimeout((function(){J(null)}),3e3)}))}E(n).then((function(e){R(),F("Added ".concat(n.name)),c(t.concat(n)),N(""),y(""),setTimeout((function(){F(null)}),3e3)})).catch((function(e){J("".concat(String(e.response.data.error))),setTimeout((function(){J(null)}),5e3)}))},newName:j,newNumber:S,handleNameChange:function(e){N(e.target.value)},handleNumberChange:function(e){y(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(i,{persons:W,handleDeleteClick:function(e){if(window.confirm("Delete ".concat(e.name,"?"))){var n=t.filter((function(n){return n.id!==e.id}));c(n),w(e.id).then((function(e){R()})).catch((function(e){return R()})),F("Removed ".concat(e.name)),setTimeout((function(){F(null)}),3e3)}}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.11f0a18d.chunk.js.map