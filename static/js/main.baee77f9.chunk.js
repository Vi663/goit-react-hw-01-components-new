(this["webpackJsonpgoit-react-hw-01-components-new"]=this["webpackJsonpgoit-react-hw-01-components-new"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__2mvhK",description:"Profile_description__2382U",avatar:"Profile_avatar__1dm2R",name:"Profile_name__3Blza",stats:"Profile_stats__1vZT0"}},,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,a,t){e.exports={friendList:"FriendList_friendList__17HTx",item:"FriendList_item__2OHV2",avatar:"FriendList_avatar__1PzeN",redLabel:"FriendList_redLabel__2Dpix",greenLabel:"FriendList_greenLabel__2E7ik"}},function(e,a,t){e.exports={statisics:"Statistics_statisics__cVI0F",statList:"Statistics_statList__aQxbE",item:"Statistics_item__35AN8"}},,,,function(e,a,t){e.exports={mainContainer:"MainContainer_mainContainer__1VrKk"}},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports={transactionHistory:"TransactionList_transactionHistory__1fqeU"}},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(2),s=t.n(c),n=t(8),i=t.n(n),r=t(9),l=t.n(r),d=t(0),o=function(e){var a=e.children;return Object(d.jsx)("div",{className:l.a.mainContainer,children:a})},b=t(3),j=t(7),u=t(1),m=t.n(u),p=function(e){var a=e.name,t=e.tag,c=e.location,s=e.avatar;return Object(d.jsxs)("div",{className:m.a.description,children:[Object(d.jsx)("img",{src:s,alt:"user avatar",className:m.a.avatar}),Object(d.jsxs)("p",{className:m.a.name,children:[Object(d.jsx)(j.b,{})," ",a]}),Object(d.jsxs)("p",{className:m.a.tag,children:["@",t]}),Object(d.jsxs)("p",{className:m.a.location,children:[Object(d.jsx)(j.a,{})," ",c]})]})},f=function(e){var a=e.followers,t=e.views,c=e.likes;return Object(d.jsxs)("ul",{className:m.a.stats,children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:m.a.label,children:"Followers"}),Object(d.jsx)("span",{className:m.a.quantity,children:a})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:m.a.label,children:"Views"}),Object(d.jsx)("span",{className:m.a.quantity,children:t})]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:m.a.label,children:"Likes"}),Object(d.jsx)("span",{className:m.a.quantity,children:c})]})]})};function O(){return Object(d.jsxs)("div",{className:m.a.profile,children:[Object(d.jsx)(p,{name:b.name,tag:b.tag,location:b.location,avatar:b.avatar},b.tag),Object(d.jsx)(f,{stats:b.stats,followers:b.stats.followers,views:b.stats.views,likes:b.stats.likes})]})}var x=t(5),v=t.n(x),h=function(e){var a=e.label,t=e.percentage;return Object(d.jsxs)("li",{className:v.a.item,children:[Object(d.jsxs)("span",{className:v.a.label,children:[a," "]}),Object(d.jsxs)("span",{className:v.a.percentage,children:[t,"%"]})]})},y=t(10);function w(){return Object(d.jsxs)("section",{className:v.a.statisics,children:[Object(d.jsx)("h2",{className:v.a.title,children:"Upload stats"}),Object(d.jsx)("ul",{className:v.a.statList,children:y.map((function(e){return Object(d.jsx)(h,{label:e.label,percentage:e.percentage},e.id)}))})]})}var _=t(4),g=t.n(_),N=function(e){var a=e.avatar,t=e.name,c=e.isOnline;return Object(d.jsxs)("li",{className:g.a.item,children:[Object(d.jsxs)("span",{className:g.a.status,children:[c&&Object(d.jsx)("div",{className:g.a.greenLabel}),!c&&Object(d.jsx)("div",{className:g.a.redLabel})]}),Object(d.jsx)("img",{className:g.a.avatar,src:a,alt:t,width:"48"}),Object(d.jsx)("p",{className:g.a.name,children:t})]})},L=t(11);function U(){return Object(d.jsx)("ul",{className:g.a.friendList,children:L.map((function(e){return Object(d.jsx)(N,{isOnline:e.isOnline,avatar:e.avatar,name:e.name},e.id)}))})}var k=function(e){var a=e.type,t=e.amount,c=e.currency;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:a}),Object(d.jsx)("td",{children:t}),Object(d.jsx)("td",{children:c})]})},P=t(12),S=t(13),C=t.n(S);function J(){return Object(d.jsxs)("table",{className:C.a.transactionHistory,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Amount"}),Object(d.jsx)("th",{children:"Currency"})]})}),Object(d.jsx)("tbody",{children:P.map((function(e){return Object(d.jsx)(k,{type:e.type,amount:e.amount,currency:e.currency},e.id)}))})]})}function F(){return Object(d.jsxs)(o,{children:[Object(d.jsx)(O,{}),Object(d.jsx)(w,{}),Object(d.jsx)(U,{}),Object(d.jsx)(J,{})]})}t(19);var H=function(){return Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(F,{})})};i.a.render(Object(d.jsx)(H,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.baee77f9.chunk.js.map