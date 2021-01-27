(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{23:function(n,e,t){},25:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(1),a=t.n(i),c=t(12),o=t.n(c),s=(t(23),t(3)),l=t(9),d=t.n(l),u=t(13),f=t(2),b=t(5),p=t(4);t(25);function h(){var n=Object(s.a)(["\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: calc(3vmin + 10px)\n"]);return h=function(){return n},n}var x=p.a.div(h()),j=function(){return Object(r.jsx)(x,{children:"Error"})};function g(){var n=Object(s.a)(["\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: calc(3vmin + 10px)\n"]);return g=function(){return n},n}var m=p.a.div(g()),v=function(){return Object(r.jsx)(m,{children:"Loading..."})},O=t(17),w="no_filter",k="filter_pmt_method_cc",y="filter_pmt_method_check",C="filter_pmt_method_paypal",P="no_filter_pmt",N="filter_gender_male",L="filter_gender_female",_="no_filter_gender",F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w,t=Object(i.useState)(n),r=Object(f.a)(t,2),a=r[0],c=r[1];Object(i.useEffect)((function(){}),[]),Object(i.useEffect)((function(){if(e===w)c(n);else{console.log(e,"params");var t,r=n,i=Object(O.a)(e);try{for(i.s();!(t=i.n()).done;){var a=t.value;a.includes("gender")&&(r=o(r,a)),a.includes("pmt")&&(r=s(r,a))}}catch(l){i.e(l)}finally{i.f()}c(r)}}),[e,n]);var o=function(n,e){return e===N?n.filter((function(n){return"Male"===n.Gender})):e===L?n.filter((function(n){return"Female"===n.Gender})):n},s=function(n,e){return e===k?n.filter((function(n){return"cc"===n.PaymentMethod})):e===y?n.filter((function(n){return"check"===n.PaymentMethod})):e===C?n.filter((function(n){return"paypal"===n.PaymentMethod})):n};return[a]},S=t.p+"static/media/male.a5141d2c.svg",B=t.p+"static/media/female.9fbeb7a3.svg",E=t.p+"static/media/genderless.c3ce3db4.svg";function M(){var n=Object(s.a)(["\n    padding: 1.6rem .7rem;\n    border-bottom: 1px #eee solid;\n\n    &:hover {\n        background: rgba(13, 13, 13, 0.03);\n        cursor: pointer;\n    }\n\n    .name {\n        font-size: 20px;\n        display: flex;\n        align-items: center;\n\n        span {\n            margin-left: 10px;\n            img {\n                width: 20px;\n            }\n        }\n    }\n\n    .extras {\n        font-size: 14px;\n        color: #898989;\n        display: flex;\n        align-items: center;\n\n        & > span:nth-child(2) {\n            width: 4px;\n            height: 4px;\n            border-radius: 50%;\n            background: #999;\n            margin: 0 10px;\n        }\n    }\n"]);return M=function(){return n},n}var T=p.a.div(M()),z=function(n){var e,t=n.item,i=n.onAction;return Object(r.jsxs)(T,{onClick:i,children:[Object(r.jsxs)("div",{className:"name",children:["".concat(t.FirstName," ").concat(t.LastName)," ",Object(r.jsx)("span",{children:Object(r.jsx)("img",{src:(e=t.Gender,"Male"===e?S:"Female"===e?B:E)})})," "]}),Object(r.jsxs)("div",{className:"extras",children:[Object(r.jsx)("span",{children:t.Email}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{children:t.PhoneNumber})]})]})},G=t.p+"static/media/close.518b0934.svg";function R(){var n=Object(s.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: rgba(13, 13, 13, .5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    .content {\n        position: relative;\n        background: white;\n        max-width: calc(100vw - 20px);\n        max-height: calc(100vh - 10px);\n        width: 500px;\n        height: 500px;\n        min-height: 400px;\n        border-radius: 13px;\n        padding: .56rem 1rem;\n        display: flex;\n        flex-flow: nowrap column;\n\n        .close {\n            width: 30px;\n            height: 30px;\n            position: absolute;\n            right: 10px;\n            top: 10px;\n            background: #ff4172;\n            color: white;\n            padding: 1rem;\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            transition: all ease-in-out 300ms;\n\n            img {\n                width: 20px;\n            }\n\n            &:hover {\n                box-shadow: 0px 1px 5px #aaa;\n            }\n        }\n\n        hr {\n            width: 100%;\n            height: 1px;\n\n            border-color: rgba(13, 13, 13, .1);\n        }\n\n        section {\n            flex: 1;\n            width: 100%;\n            overflow: hidden;\n            & > div {\n                width: 100%;\n                height: 100%;\n                overflow: auto;\n                padding-right: 5px;\n\n                &::-webkit-scrollbar {\n                    width: 5px;\n                    height: 100%;\n                }\n\n                &::-webkit-scrollbar-track {\n                    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n                    border-radius:10px;\n                }\n                &::-webkit-scrollbar-thumb {\n                    background-color: dodgerblue;\n                    border-radius:10px;\n                }\n\n                table {\n                    width: 100%;\n                    border-collapse: collapse;\n                    td { padding: 10px; text-align: left }\n                    tr:nth-child(even) {background-color: #f2f2f2}\n                }\n            }\n        }\n    }\n"]);return R=function(){return n},n}var I=p.a.div(R()),A=function(n){var e=n.open,t=n.profile,i=n.onClose;return e?Object(r.jsx)(I,{children:Object(r.jsxs)("section",{className:"content",children:[Object(r.jsx)("span",{className:"close",onClick:i,children:Object(r.jsx)("img",{src:G,alt:"close"})}),Object(r.jsx)("h2",{children:t.FirstName}),Object(r.jsx)("hr",{}),Object(r.jsx)("section",{children:Object(r.jsx)("div",{children:Object(r.jsx)("table",{children:Object.keys(t).map((function(n){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:n}),Object(r.jsx)("td",{children:t[n]})]})}))})})})]})}):null};function D(){var n=Object(s.a)(["\n    display: flex;\n    margin: 1.2rem auto;\n    padding: 5px 10px;\n    padding-top: 0;\n    overflow-x: auto;\n\n    &::-webkit-scrollbar {\n        width: 100%;\n        height: 3px;\n    }\n\n    &::-webkit-scrollbar-track {\n        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n        border-radius:10px;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: rgba(30, 143, 255, 0.549);\n        border-radius:10px;\n    }\n\n    & > div {\n        flex-shrink: 0;\n        padding: .3rem .7rem;\n        margin-right: 10px;\n        background: rgba(30, 143, 255, 0.249);\n        border-radius: .345rem;\n        cursor: pointer;\n\n        & > span {\n            margin-left: 3px;\n            border-left: thin #eee solid;\n            padding-left: 5px;\n        }\n\n        &.active {\n            background: dodgerblue;\n            color: white;\n        }\n    }\n"]);return D=function(){return n},n}function J(){var n=Object(s.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: rgba(13, 13, 13, .5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    .content {\n        position: relative;\n        background: white;\n        max-width: calc(100vw - 20px);\n        max-height: calc(100vh - 10px);\n        min-height: 300px;\n        min-width: 300px;\n        border-radius: 13px;\n        padding: .56rem 1rem;\n        display: flex;\n        flex-flow: nowrap column;\n        padding-top: 3.8rem;\n\n        div {\n            padding: .78rem .3rem;\n            border-bottom: thin solid #eee;\n            cursor: pointer;\n\n            &:hover {\n                background: rgba(13, 13, 13, .05)\n            }\n\n            &.active {\n                background: dodgerblue;\n            }\n        }\n\n        .close {\n            width: 30px;\n            height: 30px;\n            position: absolute;\n            right: 10px;\n            top: 10px;\n            background: #ff4172;\n            color: white;\n            padding: 1rem;\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            cursor: pointer;\n            transition: all ease-in-out 300ms;\n\n            img {\n                width: 20px;\n            }\n\n            &:hover {\n                box-shadow: 0px 1px 5px #aaa;\n            }\n        }\n    }\n"]);return J=function(){return n},n}var U=p.a.div(J()),q=p.a.div(D()),H=function(n){var e=n.filterBasedOnParams,t=n.filterTerm,a=Object(i.useState)(null),c=Object(f.a)(a,2),o=c[0],s=c[1],l={"Payment Method":{CC:function(){return e(k)},Check:function(){return e(y)},PayPal:function(){return e(C)},"Remove this Filter":function(){return e(P)}},Gender:{Male:function(){return e(N)},Female:function(){return e(L)},"Remove this Filter":function(){return e(_)}}},d=function(){return t&&t!==w?Boolean(t.find((function(n){return n===L})))?"Female":Boolean(t.find((function(n){return n===N})))?"Male":null:null},u=function(){return t&&t!==w?Boolean(t.find((function(n){return n===k})))?"CC":Boolean(t.find((function(n){return n===y})))?"Check":Boolean(t.find((function(n){return n===C})))?"PayPal":null:null};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{style:{padding:"0 10px"},children:"Filters"}),Object(r.jsxs)(q,{children:[Object(r.jsx)("div",{className:t===w&&"active",onClick:function(){return e()},children:"None"}),Object(r.jsxs)("div",{className:u()&&"active",onClick:function(){return s(l["Payment Method"])},children:["Payment Method ",u()&&Object(r.jsx)("span",{children:u()})]}),Object(r.jsxs)("div",{className:null!==d()?"active":"",onClick:function(){return s(l.Gender)},children:[" Gender ",d()&&Object(r.jsx)("span",{children:d()})," "]})]}),o?Object(r.jsx)(U,{children:Object(r.jsxs)("section",{className:"content",children:[Object(r.jsx)("span",{className:"close",onClick:function(){return s(null)},children:Object(r.jsx)("img",{src:G,alt:"close"})}),Object.keys(o).map((function(n){return Object(r.jsx)("div",{onClick:function(){o[n](),s(null)},children:n})}))]})}):null]})};function K(){var n=Object(s.a)(["\n    width: 700px;\n    max-width: calc(100% - 10px);\n    margin: auto;\n\n    header {\n        padding: 5px 10px;\n        h2 {\n            font-size: calc(5vmin + 10px);\n            color: dodgerblue;\n        }\n        div {\n            input {\n                width: 100%;\n                outline: none;\n                border: none;\n                border-radius: 50px;\n                background: rgba(13, 13, 13, 0.1);\n                padding: 10px 13px;\n                font-size: 16px;\n            }\n        }\n    }\n\n    .no-field {\n        min-height: 300px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 26px;\n    }\n\n    .pagination {\n        width: 100%;\n        overflow-x: auto;\n        padding: 10px 0;\n        margin: 10px 0;\n        margin-bottom: 4rem;\n\n        &::-webkit-scrollbar {\n            height: 7px;\n            width: 100%;\n        }\n\n        &::-webkit-scrollbar-track {\n            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n            border-radius:10px;\n        }\n        &::-webkit-scrollbar-thumb {\n            background-color: blueviolet;\n            border-radius:10px;\n        }\n\n        & > div {\n            display: flex;\n            flex-wrap: no-wrap;\n\n            span {\n                flex-shrink: 0;\n                flex-grow: 0;\n                padding: .67rem 1rem;\n                margin-right: 10px;\n                cursor: pointer;\n                background: rgba(30, 143, 255, 0.249);\n\n                &.active {\n                    background: rgba(30, 143, 255, 0.849);\n                }\n            }\n        }\n    }\n"]);return K=function(){return n},n}var Q=p.a.div(K()),V=function(n){var e=n.data,t=n.page,a=n.pageNumbers,c=n.navigateToPage,o=n.onSearch,s=n.filterBasedOnParams,l=n.filterTerm,d=void 0===l?w:l,u=Object(i.useState)(null),b=Object(f.a)(u,2),p=b[0],h=b[1];return Object(r.jsxs)(Q,{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("h2",{children:"Profiles"}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{onChange:o,placeholder:"Search for a record here..."})})]}),Object(r.jsx)(H,{filterTerm:d,filterBasedOnParams:s}),0===e.length&&Object(r.jsx)("div",{className:"no-field",children:"No Record"}),e.map((function(n,e){return Object(r.jsx)(z,{item:n,onAction:function(){return h(n)}},"list-item-".concat(e))})),Object(r.jsx)("div",{className:"pagination",children:Object(r.jsx)("div",{children:a?a.map((function(n){return Object(r.jsx)("span",{className:n===t?"active":"",onClick:function(){return c(n)},children:n},"page-num-".concat(n))})):Object(r.jsx)(r.Fragment,{})})}),Object(r.jsx)(A,{profile:p,open:Boolean(p),onClose:function(){return h(null)}})]})},W=function(n,e,t){var r=Object(i.useState)([]),a=Object(f.a)(r,2),c=a[0],o=a[1],s=Object(i.useState)([]),l=Object(f.a)(s,2),d=l[0],u=l[1];return Object(i.useEffect)((function(){if(n){var r=e*t,i=r-t,a=n.slice(i,r);o(a);for(var c=[],s=1;s<=Math.ceil(n.length/t);s++)c.push(s);u(c)}}),[n,e,t]),[c,d]},X=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=Object(i.useState)(n),r=Object(f.a)(t,2),a=r[0],c=r[1];return Object(i.useEffect)((function(){var t=n.filter((function(n){return n.FirstName.toLowerCase().includes(e.toLowerCase())||n.LastName.toLowerCase().includes(e.toLowerCase())||n.Email.toLowerCase().includes(e.toLowerCase())||n.PhoneNumber.toLowerCase().includes(e.toLowerCase())||n.URL.toLowerCase().includes(e.toLowerCase())||n.UserName.toLowerCase().includes(e.toLowerCase())||n.DomainName.toLowerCase().includes(e.toLowerCase())}));c(t)}),[e,n]),[a]};function Y(){var n=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  overflow-y: scroll;\n"]);return Y=function(){return n},n}var Z={loading:!1,error:!1,data:[]},$=function(n,e){switch(e.type){case"PagePending":return Object(b.a)(Object(b.a)({},n),{},{loading:!0,error:!1});case"PageError":return Object(b.a)(Object(b.a)({},n),{},{loading:!1,error:!0});case"PageLoaded":return Object(b.a)(Object(b.a)({},n),{},{loading:!1,data:e.payload});default:return Z}},nn=p.a.div(Y()),en=function(){var n=Object(i.useReducer)($,Z),e=Object(f.a)(n,2),t=e[0],a=e[1],c=Object(i.useState)(""),o=Object(f.a)(c,2),s=o[0],l=o[1],b=Object(i.useState)(w),p=Object(f.a)(b,2),h=p[0],x=p[1],g=F(t.data.profiles,h),m=Object(f.a)(g,1)[0],O=X(m,s),S=Object(f.a)(O,1)[0],B=Object(i.useState)(1),E=Object(f.a)(B,2),M=E[0],T=E[1],z=W(S,M,20),G=Object(f.a)(z,2),R=G[0],I=G[1],A=function(){var n=Object(u.a)(d.a.mark((function n(){var e,t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:"PagePending"}),n.next=4,fetch("https://api.enye.tech/v1/challenge/records");case 4:return e=n.sent,n.next=7,e.json();case 7:t=n.sent,a({type:"PageLoaded",payload:t.records}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),a({type:"PageError"});case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();return Object(i.useEffect)((function(){A()}),[]),Object(i.useEffect)((function(){0===R.length&&T(1)}),[S]),Object(r.jsx)(nn,{children:t.error?Object(r.jsx)(j,{}):t.loading?Object(r.jsx)(v,{}):Object(r.jsx)(V,{data:R,page:M,pageNumbers:I,navigateToPage:function(n){return T(parseInt(n))},filterBasedOnParams:function(n){switch(n){case L:var e=h===w?[]:h;return(e=e.filter((function(n){return n!==N}))).push(L),x(e);case N:var t=h===w?[]:h;return(t=t.filter((function(n){return n!==L}))).push(N),x(t);case _:var r=h===w?[]:h;return r=r.filter((function(n){return n!==N&&n!==L})),x(0===r.length?w:r);case k:var i=h===w?[]:h;return(i=i.filter((function(n){return n!==y&&n!==C}))).push(k),x(i);case y:var a=h===w?[]:h;return(a=a.filter((function(n){return n!==k&&n!==C}))).push(y),x(a);case C:var c=h===w?[]:h;return(c=c.filter((function(n){return n!==k&&n!==y}))).push(C),x(c);case P:var o=h===w?[]:h;return o=o.filter((function(n){return n!==k&&n!==y&&n!==C})),x(0===o.length?w:o);case w:default:x(w)}},filterTerm:h,onSearch:function(n){return l(n.target.value.trim())}})})},tn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,29)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;t(n),r(n),i(n),a(n),c(n)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(en,{})}),document.getElementById("root")),tn()}},[[28,1,2]]]);
//# sourceMappingURL=main.bb8fd935.chunk.js.map