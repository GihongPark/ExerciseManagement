(this.webpackJsonpmanager=this.webpackJsonpmanager||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"a":[{"id":"leg_01","name":"\ub7f0\uc9c0","section":"leg","lately":{"weight":0,"reps":0}},{"id":"leg_02","name":"\ub808\uadf8 \uc775\uc2a4\ud150\uc158","section":"leg","lately":{"weight":0,"reps":0}},{"id":"leg_03","name":"\ub808\uadf8 \uceec","section":"leg","lately":{"weight":0,"reps":0}},{"id":"leg_04","name":"\ub808\uadf8 \ud504\ub808\uc2a4","section":"leg","lately":{"weight":0,"reps":0}},{"id":"leg_05","name":"\uc2a4\ucffc\ud2b8","section":"leg","lately":{"weight":0,"reps":0}},{"id":"chest_01","name":"\ub364\ubca8 \ud504\ub808\uc2a4","section":"chest","lately":{"weight":0,"reps":0}},{"id":"chest_02","name":"\ub364\ubca8 \ud50c\ub77c\uc774","section":"chest","lately":{"weight":0,"reps":0}},{"id":"chest_03","name":"\ubca4\uce58\ud504\ub808\uc2a4","section":"chest","lately":{"weight":0,"reps":0}},{"id":"chest_04","name":"\ucf00\uc774\ube14 \ud06c\ub85c\uc2a4\uc624\ubc84","section":"chest","lately":{"weight":0,"reps":0}},{"id":"chest_05","name":"\ub380\ubca8 \ub85c\uc6b0","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_01","name":"\ub370\ub4dc\ub9ac\ud504\ud2b8","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_02","name":"\ubc14\ubca8 \ub85c\uc6b0","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_03","name":"\uc5b4\uc2dc\uc2a4\ud2f0\ub4dc \uce5c\uc5c5","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_04","name":"\uc5b4\uc2dc\uc2a4\ud2f0\ub4dc \ud480\uc5c5","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_05","name":"\uce5c\uc5c5","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_06","name":"\ucf00\uc774\ube14 \ub85c\uc6b0","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_07","name":"\ud480\ub2e4\uc6b4","section":"back","lately":{"weight":0,"reps":0}},{"id":"back_08","name":"\ud480\uc5c5","section":"back","lately":{"weight":0,"reps":0}},{"id":"shoulder_01","name":"\ub808\ud130\ub7f4 \ub808\uc774\uc988","section":"shoulder","lately":{"weight":0,"reps":0}},{"id":"shoulder_02","name":"\ubc00\ub9ac\ud130\ub9ac \ud504\ub808\uc2a4","section":"shoulder","lately":{"weight":0,"reps":0}},{"id":"shoulder_03","name":"\uc204\ub354 \ub364\ubca8 \ud504\ub808\uc2a4","section":"shoulder","lately":{"weight":0,"reps":0}},{"id":"shoulder_04","name":"\uc5c5\ub77c\uc774\ud2b8 \ub85c\uc6b0","section":"shoulder","lately":{"weight":0,"reps":0}},{"id":"arm_01","name":"\ud574\uba38 \uceec","section":"arm","lately":{"weight":0,"reps":0}},{"id":"arm_02","name":"\ubc14\ubca8 \ubc14\uc774\uc149 \uceec","section":"arm","lately":{"weight":0,"reps":0}},{"id":"arm_03","name":"\ub364\ubca8 \ubc14\uc774\uc149 \uceec","section":"arm","lately":{"weight":0,"reps":0}},{"id":"arm_04","name":"\ud2b8\ub77c\uc774\uc149\uc2a4 \uc775\uc2a4\ud150\uc158","section":"arm","lately":{"weight":0,"reps":0}},{"id":"abs_01","name":"\ub808\uadf8 \ub808\uc774\uc988","section":"abs","lately":{"weight":0,"reps":0}},{"id":"abs_02","name":"\ud06c\ub7f0\uce58","section":"abs","lately":{"weight":0,"reps":0}}]}')},20:function(e,t,a){e.exports=a(37)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),i=(a(25),a(26),a(27),a(2)),o=a(19),s=a(3),u=localStorage.exerciseManager?JSON.parse(localStorage.exerciseManager):[];var d=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"list/ADD_LIST":e=t.concat({id:a.payload.id,title:a.payload.title,date:a.payload.date,records:a.payload.records});break;case"list/REMOVE_LIST":e=t.filter((function(e){return e.id!==a.payload}));break;case"list/UPDATE_TITLE":e=t.map((function(e){return e.id===a.payload.id&&(e=Object(s.a)(Object(s.a)({},e),{},{title:a.payload.title})),e}));break;case"record/ADD_RECORD":e=t.map((function(e){return e.id===a.payload.id&&(e=Object(s.a)(Object(s.a)({},e),{},{records:[].concat(Object(o.a)(e.records),[a.payload.record])})),e}));break;case"record/REMOVE_RECORD":e=t.map((function(e){return e.id===a.payload.id&&(e=Object(s.a)(Object(s.a)({},e),{},{records:e.records.filter((function(e){return e.id!==a.payload.record.id}))})),e}));break;case"record/UPDATE_RECORD":e=t.map((function(e){return e.id===a.payload.id&&(e=Object(s.a)(Object(s.a)({},e),{},{records:e.records.map((function(e){return e.id===a.payload.record.id?a.payload.record:e}))})),e}));break;default:e=t}return localStorage.exerciseManager=JSON.stringify(e),e},m=a(4),p=a(5),E=a(6),b={state:"CLOSE_MODAL"};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"modal/OPEN_ADD_RECORD":case"modal/OPEN_UPDATE_RECORD":return{state:t.payload.state,data:t.payload.data};case"modal/CLOSE_MODAL":return{state:t.payload.state};default:return e}};var y=function(e){var t=e.id,a=e.record,n=Object(i.b)();return r.a.createElement("li",null,r.a.createElement("div",{className:"record-contents"},r.a.createElement("div",null,"\uc6b4\ub3d9 : ",a.exercise),r.a.createElement("div",null,"\ubb34\uac8c : ",a.weight),r.a.createElement("div",null,"\ud69f\uc218 : ",a.reps)),r.a.createElement("div",{className:"record-control"},r.a.createElement("button",{type:"button",onClick:function(){n(function(e,t){return{type:"modal/OPEN_UPDATE_RECORD",payload:{state:"UPDATE_RECORD",data:{id:e,record:t}}}}(t,a))}},r.a.createElement(p.a,{icon:E.a}))))};var h=function(e){var t=e.id,a=e.records,n=Object(i.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"list-contents"},0===a.length?r.a.createElement("li",{className:"isEmpty"},"\uc6b4\ub3d9 \uae30\ub85d\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."):a.map((function(e){return r.a.createElement(y,{key:e.id,id:t,record:e})}))),r.a.createElement("button",{type:"button",className:"list-input",onClick:function(){n(function(e){return{type:"modal/OPEN_ADD_RECORD",payload:{state:"ADD_RECORD",data:{id:e}}}}(t))}},r.a.createElement(p.a,{icon:E.b})," Add Record"))};a(35);var g=function(e){var t=e.list,a=e.onRemoveList,c=e.onUpdateTitle,l=Object(n.useState)(t.title),i=Object(m.a)(l,2),o=i[0],s=i[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){c(t.id,o)}),1e3);return function(){clearTimeout(e)}}),[o]),r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"list-header"},r.a.createElement("div",{className:"list-title"},r.a.createElement("input",{type:"text",onChange:function(e){e.currentTarget.value,s(e.currentTarget.value)},value:o,placeholder:"title",size:1,maxLength:100})),r.a.createElement("button",{type:"button",className:"list-del",onClick:function(){a(t.id)}},r.a.createElement(p.a,{icon:E.d}))),r.a.createElement(h,{id:t.id,records:t.records}))};var v=function(){var e=Object(i.c)((function(e){return e.list})),t=Object(i.b)(),a=Object(n.useRef)(null),c=Object(n.useRef)(0);Object(n.useEffect)((function(){var t;c.current>0&&c.current<e.length&&(null===(t=a.current)||void 0===t||t.scrollTo(0,a.current.scrollHeight));c.current=e.length}),[e]);var l=function(e){t(function(e){return{type:"list/REMOVE_LIST",payload:e}}(e))},o=function(e,a){t(function(e,t){return{type:"list/UPDATE_TITLE",payload:{id:e,title:t}}}(e,a))};return r.a.createElement("div",{className:"list-wrapper",ref:a},e.map((function(e){return r.a.createElement(g,{key:e.id,list:e,onRemoveList:l,onUpdateTitle:o})})),r.a.createElement("button",{type:"button",className:"add_list",onClick:function(){t({type:"list/ADD_LIST",payload:{id:"".concat(Math.floor(9999*Math.random()),"_").concat(Math.floor(9999*Math.random()),"_").concat(Math.floor(9999*Math.random())),title:"",date:new Date,records:[]}})}},"Add list"))},O=a(18),_=localStorage.exerciseKind?JSON.parse(localStorage.exerciseKind):O.a;var D=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"kind/ADD_EXERCISE":e=t.concat({id:a.payload.id,name:a.payload.name,section:a.payload.section,lately:a.payload.lately});break;case"kind/REMOVE_EXERCISE":e=t.filter((function(e){return e.id!==a.payload}));break;case"kind/UPDATE_EXERCISE":e=t.map((function(e){return e.id===a.payload.id&&(e=Object(s.a)(Object(s.a)({},e),{},{name:a.payload.name,section:a.payload.section})),e}));break;default:e=t}return localStorage.exerciseKind=JSON.stringify(e),e};a(36);var w=function(e){var t=e.state,a=e.data,c=e.exercises,l=e.onAddRecord,o=e.onUpdateRecord,s=(e.onRemoveRecord,Object(n.useState)("")),u=Object(m.a)(s,2),d=u[0],b=u[1],f=Object(n.useState)(c),y=Object(m.a)(f,2),h=y[0],g=y[1],v=Object(n.useState)("all"),O=Object(m.a)(v,2),_=O[0],D=O[1],w=Object(n.useState)(0),R=Object(m.a)(w,2),k=R[0],C=R[1],j=Object(n.useState)(0),T=Object(m.a)(j,2),x=T[0],A=T[1],S=Object(n.useState)(""),N=Object(m.a)(S,2),L=N[0],M=N[1],P=Object(n.useState)(""),U=Object(m.a)(P,2),I=U[0],J=U[1],z=Object(n.useRef)(null),F=Object(n.useRef)(null),V=Object(n.useRef)(null),X=Object(i.b)();Object(n.useEffect)((function(){W(_)}),[_,c]),Object(n.useEffect)((function(){if("UPDATE_RECORD"===t){var e=a.record;b(e.exercise),C(e.weight),A(e.reps)}}),[t,a]);var K=function(e){switch(e.currentTarget.dataset.id){case"exercise":return g(c.filter((function(t){return t.name.match(e.currentTarget.value)}))),b(e.currentTarget.value);case"weight":return C(Number(e.currentTarget.value.replace(/[^0-9]/g,"")));case"reps":return A(Number(e.currentTarget.value.replace(/[^0-9]/g,"")))}},B=function(){b(""),C(0),A(0),X({type:"modal/CLOSE_MODAL",payload:{state:"CLOSE_MODAL"}})},H=function(){var e,t;J(""),M(""),null===(e=z.current)||void 0===e||e.classList.toggle("show"),null===(t=F.current)||void 0===t||t.classList.toggle("show")},q=function(e){switch(e.currentTarget.dataset.id){case"section":return M(e.currentTarget.value);case"name":return J(e.currentTarget.value)}},G=function(){if(""===I||""===L)return!1;X(function(e,t){return{type:"kind/ADD_EXERCISE",payload:{id:"".concat(t,"_").concat((new Date).getTime()),name:e,section:t,lately:{weight:0,reps:0}}}}(I,L)),Q()},Q=function(){var e,t;J(""),M(""),null===(e=F.current)||void 0===e||e.classList.add("show"),null===(t=z.current)||void 0===t||t.classList.remove("show")},W=function(e){g(c.filter((function(t){return"all"===e||t.section===e}))),Q()};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-modal"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===d||x<=0||("ADD_RECORD"===t&&l?l(a.id,{id:"",exercise:d,weight:k,reps:x}):"UPDATE_RECORD"===t&&o&&o(a.id,{id:a.record.id,exercise:d,weight:k,reps:x}),B())}},r.a.createElement("div",{className:"input-contents"},r.a.createElement("div",{className:"exercise-wrapper"},r.a.createElement("label",null,"\uc6b4\ub3d9"),r.a.createElement("input",{type:"text","data-id":"exercise",onFocus:function(e){var t;return null===(t=V.current)||void 0===t?void 0:t.classList.add("show")},onChange:K,value:d,size:1}),r.a.createElement("div",{className:"exercise-selector",ref:V},r.a.createElement("div",{className:"section"},r.a.createElement("button",{type:"button",onClick:function(){return D("all")}},"ALL"),r.a.createElement("button",{type:"button",onClick:function(){return D("leg")}},"\ud558\uccb4"),r.a.createElement("button",{type:"button",onClick:function(){return D("chest")}},"\uac00\uc2b4"),r.a.createElement("button",{type:"button",onClick:function(){return D("back")}},"\ub4f1"),r.a.createElement("button",{type:"button",onClick:function(){return D("shoulder")}},"\uc5b4\uae68"),r.a.createElement("button",{type:"button",onClick:function(){return D("arm")}},"\ud314"),r.a.createElement("button",{type:"button",onClick:function(){return D("abs")}},"\ubcf5\uadfc"),r.a.createElement("button",{type:"button",className:"right",onClick:function(){var e;return null===(e=V.current)||void 0===e?void 0:e.classList.remove("show")}},"\ucde8\uc18c")),r.a.createElement("ul",null,function(){var e=h.map((function(e){return r.a.createElement("li",{key:e.id,onClick:function(){var t;b(e.name),C(e.lately.weight),A(e.lately.reps),null===(t=V.current)||void 0===t||t.classList.remove("show")}},e.name)}));return e.push(r.a.createElement("li",{key:"addExercise",className:"addExercise show",ref:F,onClick:H},"+\uc6b4\ub3d9 \ucd94\uac00")),e.push(r.a.createElement("li",{key:"addExerciseInput",className:"addExerciseInput",ref:z},r.a.createElement("select",{"data-id":"section",onChange:q,value:L},r.a.createElement("option",null,"\ubd80\uc704"),r.a.createElement("option",{value:"leg"},"\ud558\uccb4"),r.a.createElement("option",{value:"chest"},"\uac00\uc2b4"),r.a.createElement("option",{value:"back"},"\ub4f1"),r.a.createElement("option",{value:"shoulder"},"\uc5b4\uae68"),r.a.createElement("option",{value:"arm"},"\ud314"),r.a.createElement("option",{value:"abs"},"\ubcf5\uadfc")),r.a.createElement("input",{type:"text","data-id":"name",onChange:q,value:I,placeholder:"\uc6b4\ub3d9 \uc774\ub984",size:1}),r.a.createElement("button",{type:"button",onClick:G},r.a.createElement(p.a,{icon:E.c})))),e}()))),r.a.createElement("div",{className:"record-wrapper"},r.a.createElement("label",null,"\ubb34\uac8c"),r.a.createElement("label",null,"\ud69f\uc218"),r.a.createElement("input",{type:"text","data-id":"weight",onChange:K,value:k,size:1}),r.a.createElement("input",{type:"text","data-id":"reps",onChange:K,value:x,size:1})),r.a.createElement("div",{className:"control-wrapper"},"ADD_RECORD"===t&&r.a.createElement("button",{type:"submit"},"\uc800\uc7a5"),"UPDATE_RECORD"===t&&r.a.createElement("button",{type:"submit"},"\uc218\uc815"),r.a.createElement("button",{type:"reset",onClick:B},"\ucde8\uc18c"))))))};var R=function(){var e=Object(i.c)((function(e){return e.modal})),t=Object(i.c)((function(e){return e.exercise})),a=Object(i.b)();return r.a.createElement(r.a.Fragment,null,"CLOSE_MODAL"!==e.state&&r.a.createElement("div",{className:"modal-wrapper"},"ADD_RECORD"===e.state&&e.data&&r.a.createElement(w,{state:e.state,data:e.data,exercises:t,onAddRecord:function(e,t){a(function(e,t){return{type:"record/ADD_RECORD",payload:{id:e,record:{id:"".concat(e,"_").concat((new Date).getTime()),exercise:t.exercise,weight:t.weight,reps:t.reps}}}}(e,t))}}),"UPDATE_RECORD"===e.state&&e.data&&r.a.createElement(w,{state:e.state,data:e.data,exercises:t,onUpdateRecord:function(e,t){a(function(e,t){return{type:"record/UPDATE_RECORD",payload:{id:e,record:{id:t.id,exercise:t.exercise,weight:t.weight,reps:t.reps}}}}(e,t))},onRemoveRecord:function(e,t){a(function(e,t){return{type:"record/REMOVE_RECORD",payload:{id:e,record:{id:t}}}}(e,t))}})))};var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(R,null))},C=a(7),j=Object(C.b)({list:d,exercise:D,modal:f}),T=Object(C.c)(j);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:T},r.a.createElement(k,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c035a0c6.chunk.js.map