(this["webpackJsonppaws-nyc"]=this["webpackJsonppaws-nyc"]||[]).push([[0],{149:function(e,t,a){},150:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(13),c=a.n(r),i=a(7),s=a.n(i),o=a(10),l=a(12),u=a(14),d=a(20),j=a(185),b=a(187),m=a(61),h=a(188),p=a(189),x=a(190),O=a(86),f=a.n(O),g=a.p+"static/media/Rc581c6e7353273b650a7a415ee5cf34f.7c71dcb2.png",v=a(15),y=a(182),w=Object(y.a)((function(e){return{link:{display:"flex",alignItems:"center",gap:".5rem"},appBar:Object(v.a)({height:"7vh",color:"white",backgroundColor:"#9792E3",boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{color:"white",flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px",height:"20px",width:"20px"},grow:{flexGrow:1},inputRoot:{color:"inherit"},accountCircleIcon:Object(v.a)({display:"flex",alignSelf:"center",color:"white",margin:"3.2px",marginTop:".5rem"},"display","content"),Link:{margin:"3.2px",padding:"3.2px"}}})),k=a(1),N=function(e){var t=e.totalItems,a=w(),n=Object(u.g)();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(j.a,{position:"fixed",className:a.appBar,color:"inherit",children:Object(k.jsxs)(b.a,{children:[Object(k.jsxs)(m.a,{component:d.b,to:"/",variant:"h6",className:a.title,children:[Object(k.jsx)("img",{src:g,alt:"paws-nyc",height:"25px",className:a.image}),"PAWS-NYC"]}),"/"===n.pathname&&Object(k.jsxs)(d.b,{className:a.link,to:"/social",children:[Object(k.jsx)("div",{className:a.grow}),Object(k.jsx)("p",{children:"BLOG"}),Object(k.jsx)(f.a,{className:a.accountCircleIcon})]}),"/shop"===n.pathname&&Object(k.jsx)("div",{className:a.button,children:Object(k.jsx)(h.a,{component:d.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(k.jsx)(p.a,{badgeContent:t,color:"primary",children:Object(k.jsx)(x.a,{})})})})]})})})},_=a(195),C=a(191),S=a(192),I=a(193),B=a(194),T=Object(y.a)((function(){return{root:{display:"flex",flexDirection:"column",width:"100%",height:"fit content"},media:{margin:".5rem",height:"100%",paddingTop:"56.25%"},cardActions:{height:"100%",display:"flex",justifyContent:"flex-end"},cardContent:{height:"100%",padding:".5rem",display:"flex",flexDirection:"column"},cardTitle:{fontSize:".9rem"},cardDescription:{height:"5rem",fontSize:".9rem"}}})),D=function e(t){var a=t.product,n=t.onAddToCart,r=T();return Object(k.jsxs)(C.a,{className:r.root,children:[Object(k.jsx)(S.a,{className:r.media,image:a.media.source,title:e.name}),Object(k.jsxs)("div",{className:r.cardContent,children:[Object(k.jsx)(m.a,{className:r.cardTitle,variant:"body1",gutterBottom:!0,children:a.name}),Object(k.jsx)(m.a,{gutterBottom:!0,variant:"p",children:a.price.formatted_with_symbol}),Object(k.jsx)("br",{}),Object(k.jsx)(m.a,{className:r.cardDescription,dangerouslySetInnerHTML:{__html:a.description},variant:"body2",color:"textSecondary"}),Object(k.jsx)(I.a,{disableSpacing:!0,className:r.cardActions,children:Object(k.jsx)(h.a,{"aria-label":"add to cart",onClick:function(){return n(a.id,1)},children:Object(k.jsx)(B.a,{})})})]})]})},A=Object(y.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,overflow:"scroll",height:"91.8vh",backgroundColor:e.palette.background.default,padding:e.spacing(3)},root:{flexGrow:1}}})),E=function(e){var t=e.products,a=e.onAddToCart,n=A();return Object(k.jsxs)("main",{className:n.content,children:[Object(k.jsx)("div",{className:n.toolbar}),Object(k.jsx)(_.a,{container:!0,justify:"center",spacing:4,children:t.map((function(e){return Object(k.jsx)(_.a,{item:!0,xs:12,small:6,md:4,lg:3,children:Object(k.jsx)(D,{product:e,onAddToCart:a})},t.id)}))})]})},M=a(197),R=a(198),F=Object(y.a)((function(e){var t;return{toolbar:e.mixins.toolbar,title:{marginTop:"2rem"},emptyButton:(t={backgroundColor:"grey",color:"white",minWidth:"150px"},Object(v.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(v.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"6%",width:"100%",justifyContent:"space-between"},container:{height:"91.8vh",overflow:"scroll"}}})),q=a(196),L=Object(y.a)((function(){return{root:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},media:{height:0,margin:".5rem",paddingTop:"56.25%"},cardContent:{display:"flex",flexDirection:"column",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"},itemButton:{backgroundColor:"primary"}}})),z=function(e){var t=e.item,a=e.onUpdateCartQty,n=e.onRemoveFromCart,r=L();return Object(k.jsxs)(C.a,{className:r.root,children:[Object(k.jsx)(S.a,{image:t.media.source,alt:t.name,className:r.media}),Object(k.jsxs)(q.a,{className:r.cardContent,children:[Object(k.jsx)(m.a,{variant:"h6",children:t.name}),Object(k.jsx)(m.a,{variant:"p",children:t.line_total.formatted_with_symbol})]}),Object(k.jsx)(I.a,{className:r.cardActions,children:Object(k.jsxs)("div",{className:r.buttons,children:[Object(k.jsx)(M.a,{type:"button",size:"small",onClick:function(){return a(t.id,t.quantity-1)},children:"-"}),Object(k.jsxs)(m.a,{children:["\xa0",t.quantity,"\xa0"]}),Object(k.jsx)(M.a,{type:"button",size:"small",onClick:function(){return a(t.id,t.quantity+1)},children:"+"}),Object(k.jsx)(M.a,{className:r.itemButton,variant:"contained",type:"button",color:"primary",onClick:function(){return e=t.id,n(e);var e},children:"Remove"})]})})]})},G=function(e){var t=e.cart,a=e.onUpdateCartQty,n=e.onRemoveFromCart,r=e.onEmptyCart,c=F(),i=function(){return Object(k.jsx)(m.a,{variant:"subtitle1",children:"There are no items in your shopping cart"})},s=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(_.a,{container:!0,spacing:3,children:t.line_items.map((function(e){return Object(k.jsx)(_.a,{item:!0,xs:12,sm:4,children:Object(k.jsx)(z,{item:e,onUpdateCartQty:a,onRemoveFromCart:n})},e.id)}))}),Object(k.jsxs)("div",{className:c.cardDetails,children:[Object(k.jsxs)(m.a,{variant:"h4",children:["Subtotal: ",t.subtotal.formatted_with_symbol]}),Object(k.jsxs)("div",{children:[Object(k.jsx)(M.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Empty Cart"}),Object(k.jsx)(M.a,{className:c.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",component:d.b,to:"/checkout",children:"Checkout"})]})]})]})};return t.line_items?Object(k.jsxs)(R.a,{className:c.container,children:[Object(k.jsx)("div",{className:c.toolbar}),Object(k.jsx)(m.a,{className:c.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart"}),t.line_items.length?Object(k.jsx)(s,{}):Object(k.jsx)(i,{})]}):"loading..."},P=Object(y.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(v.a)({height:"83.6vh",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={height:"fitContent",padding:e.spacing(1.5)},Object(v.a)(t,e.breakpoints.down("xs"),{width:"100%"}),Object(v.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{padding:e.spacing(1.5)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),W=a(52),U=a(212),H=a(208),Q=a(202),J=a(48),V=a(210),Y=function(e){var t=e.name,a=e.label,n=e.required,r=Object(J.d)().control;return Object(k.jsx)(_.a,{item:!0,xs:12,sm:6,children:Object(k.jsx)(J.a,{name:t,control:r,required:n,render:function(e){var t=e.field,r=t.onChange;t.value;return Object(k.jsx)(V.a,{defaultValue:"",fullWidth:!0,label:a,required:n,onChange:r})}})})},Z=a(87),K=new(a.n(Z).a)("pk_test_2605245855a0c359ccd96c71edc56fe94b772565cdfcc",!0),X=function(e){var t=e.checkoutToken,a=e.next,r=Object(n.useState)([]),c=Object(l.a)(r,2),i=c[0],u=c[1],j=Object(n.useState)(""),b=Object(l.a)(j,2),h=b[0],p=b[1],x=Object(n.useState)([]),O=Object(l.a)(x,2),f=O[0],g=O[1],v=Object(n.useState)(""),y=Object(l.a)(v,2),w=y[0],N=y[1],C=Object(n.useState)([]),S=Object(l.a)(C,2),I=S[0],B=S[1],T=Object(n.useState)(""),D=Object(l.a)(T,2),A=D[0],E=D[1],R=Object(J.c)(),F=Object.entries(i).map((function(e){var t=Object(l.a)(e,2);return{id:t[0],label:t[1]}})),q=Object.entries(f).map((function(e){var t=Object(l.a)(e,2);return{id:t[0],label:t[1]}})),L=I.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})),z=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.services.localeListShippingCountries(t);case 2:a=e.sent,n=a.countries,u(n),p(Object.keys(n)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.services.localeListSubdivisions(t);case 2:a=e.sent,n=a.subdivisions,g(n),N(Object.keys(n)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(o.a)(s.a.mark((function e(t,a){var n,r,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>2&&void 0!==c[2]?c[2]:null,e.next=3,K.checkout.getShippingOptions(t,{country:a,region:n});case 3:r=e.sent,B(r),E(r[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){z(t.id)}),[]),Object(n.useEffect)((function(){h&&G(h)}),[h]),Object(n.useEffect)((function(){w&&P(t.id,h,w)}),[w]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(m.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(k.jsx)(J.b,Object(W.a)(Object(W.a)({},R),{},{children:Object(k.jsxs)("form",{onSubmit:R.handleSubmit((function(e){console.log(e),a(Object(W.a)(Object(W.a)({},e),{},{shippingCountry:h,shippingSubdivision:w,shippingOption:A}))})),children:[Object(k.jsxs)(_.a,{container:!0,spacing:3,children:[Object(k.jsx)(Y,{name:"firstName",label:"First Name"}),Object(k.jsx)(Y,{name:"lastName",label:"Last Name"}),Object(k.jsx)(Y,{name:"address1",label:"Address"}),Object(k.jsx)(Y,{name:"email",label:"Email"}),Object(k.jsx)(Y,{name:"city",label:"City"}),Object(k.jsx)(Y,{name:"zip",label:"ZIP / Postal code"}),Object(k.jsxs)(_.a,{item:!0,xs:12,sm:6,children:[Object(k.jsx)(U.a,{children:"Shipping Country"}),Object(k.jsx)(H.a,{value:h,fullWidth:!0,onChange:function(e){return p(e.target.value)},children:F.map((function(e){return Object(k.jsx)(Q.a,{value:e.id,children:e.label},e.id)}))})]}),Object(k.jsxs)(_.a,{xs:12,sm:6,children:[Object(k.jsx)(U.a,{children:"Shipping Subdivision"}),Object(k.jsx)(H.a,{value:w,fullWidth:!0,onChange:function(e){return N(e.target.value)},children:q.map((function(e){return Object(k.jsx)(Q.a,{value:e.id,children:e.label},e.id)}))})]}),Object(k.jsxs)(_.a,{xs:12,sm:6,children:[Object(k.jsx)(U.a,{children:"Shipping Options"}),Object(k.jsx)(H.a,{value:A,fullWidth:!0,onChange:function(e){return E(e.target.value)},children:L.map((function(e){return Object(k.jsx)(Q.a,{value:e.id,children:e.label},e.id)}))})]})]}),Object(k.jsx)("br",{}),Object(k.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(k.jsx)(M.a,{component:d.b,to:"/cart",variant:"outlined",children:"Cart"}),Object(k.jsx)(M.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},$=a(204),ee=a(53),te=a(88),ae=a(201),ne=a(153),re=a(203),ce=function(e){var t=e.checkoutToken;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(m.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(k.jsxs)(ae.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(k.jsxs)(ne.a,{style:{padding:"10px 0"},children:[Object(k.jsx)(re.a,{primary:e.name,secondary:"Quantity: ".concat(e.quantity)}),Object(k.jsx)(m.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]},e.name)})),Object(k.jsxs)(ne.a,{style:{padding:"10px 0"},children:[Object(k.jsx)(re.a,{primary:"Total"}),Object(k.jsx)(m.a,{variant:"subtitle1",style:{fontWeight:700},children:t.live.subtotal.formatted_with_symbol})]})]})]})},ie=Object(te.a)("pk_test_51IjX8dBtyO8hlmfDKFtD8gHaCIEcKbHZjBZbqQCgmKuMRXgUkY4gUC43LDOPmvd0HAMZqm5jqIhbTxGVQwFAVfMJ00S80CDVxl"),se=function(e){var t=e.checkoutToken,a=e.backStep,n=e.shippingData,r=e.onCaptureCheckout,c=e.nextStep,i=function(){var e=Object(o.a)(s.a.mark((function e(a,i,o){var l,u,d,j,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),o&&i){e.next=3;break}return e.abrupt("return");case 3:return l=i.getElement(ee.CardElement),e.next=6,o.createPaymentMethod({type:"card",card:l});case 6:u=e.sent,d=u.error,j=u.paymentMethod,d?console.log("[error]",d):(b={line_items:t.live.line_items,customer:{firstname:n.firstName,lastname:n.lastName,email:n.email},shipping:{name:"Primary",street:n.address1,town_city:n.city,county_state:n.shippingSubdivision,postal_zip_code:n.zip,country:n.shippingCountry},fulfillment:{shipping_method:n.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:j.id}}},r(t.id,b),c());case 10:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(ce,{checkoutToken:t}),Object(k.jsx)($.a,{}),Object(k.jsx)(m.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(k.jsx)(ee.Elements,{stripe:ie,children:Object(k.jsx)(ee.ElementsConsumer,{children:function(e){var n=e.elements,r=e.stripe;return Object(k.jsxs)("form",{onSubmit:function(e){return i(e,n,r)},children:[Object(k.jsx)(ee.CardElement,{}),Object(k.jsx)("br",{})," ",Object(k.jsx)("br",{}),Object(k.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(k.jsx)(M.a,{variant:"outlined",onClick:a,children:"Back"}),Object(k.jsxs)(M.a,{type:"submit",variant:"contained",disabled:!r,color:"primary",children:["Pay ",t.live.subtotal.formatted_with_symbol]})]})]})}})})]})},oe=a(205),le=a(206),ue=a(90),de=a(213),je=a(207),be=a(209),me=["Shipping address","Payment details"],he=function(e){var t=e.cart,a=e.onCaptureCheckout,r=e.order,c=e.error,i=Object(n.useState)(null),j=Object(l.a)(i,2),b=j[0],h=j[1],p=Object(n.useState)(0),x=Object(l.a)(p,2),O=x[0],f=x[1],g=Object(n.useState)({}),v=Object(l.a)(g,2),y=v[0],w=v[1],N=P(),_=(Object(u.f)(),function(){return f((function(e){return e+1}))}),C=function(){return f((function(e){return e-1}))};Object(n.useEffect)((function(){(function(){var e=Object(o.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.checkout.generateToken(t.id,{type:"cart"});case 3:a=e.sent,console.log(a),h(a),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);var S=function(e){w(e),_()},I=function(){return r.customer?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{children:[Object(k.jsxs)(m.a,{variant:"h5",children:["Thank you for your purchase, ",r.customer.firstname," ",r.customer.lastname,"!"]}),Object(k.jsx)($.a,{className:N.divider}),Object(k.jsxs)(m.a,{variant:"subtitle2",children:["Order ref: ",r.customer_reference]})]}),Object(k.jsx)("br",{}),Object(k.jsx)(M.a,{component:d.b,variant:"outlined",type:"button",to:"/",children:"Back to home"})]}):Object(k.jsx)("div",{className:N.spinner,children:Object(k.jsx)(oe.a,{})})};c&&(I=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(m.a,{variant:"h5",children:["Error: ",c]}),Object(k.jsx)("br",{}),Object(k.jsx)(M.a,{component:d.b,variant:"outlined",type:"button",to:"/",children:"Back to home"})]})});var B=function(){return 0===O?Object(k.jsx)(X,{checkoutToken:b,next:S}):Object(k.jsx)(se,{next:S,backStep:C,nextStep:_,shippingData:y,checkoutToken:b,onCaptureCheckout:a})};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(le.a,{}),Object(k.jsx)("div",{className:N.toolbar}),Object(k.jsx)("main",{className:N.layout,children:Object(k.jsxs)(ue.a,{className:N.paper,children:[Object(k.jsx)(m.a,{variant:"h4",align:"center",children:"Checkout"}),Object(k.jsx)(de.a,{activeStep:O,className:N.stepper,children:me.map((function(e){return Object(k.jsx)(je.a,{children:Object(k.jsx)(be.a,{children:e})},e)}))}),O===me.length?Object(k.jsx)(I,{}):b&&Object(k.jsx)(B,{})]})})]})};a(149);function pe(e){var t=e.data,a=t.story;return Object(k.jsxs)("div",{className:"card",children:[Object(k.jsx)("div",{className:"card__image-box",children:Object(k.jsx)("img",{src:t.image,alt:"cover",className:"card__image"})}),Object(k.jsxs)("div",{className:"card__footer",children:[Object(k.jsx)("h4",{className:"card__title",children:t.title}),Object(k.jsx)("p",{className:"card__story",children:a<100?a:a.substr(0,100)+"..."}),Object(k.jsx)("p",{className:"card__url",children:t.url})]})]})}var xe=function(e){var t=e.data;return Object(k.jsxs)("span",{className:"post__button post__button--comment",children:[Object(k.jsx)("i",{className:"far fa-comment"}),t.comments]})},Oe=function(e){var t=e.data;return Object(k.jsxs)("span",{className:"post__button post__button--retweet",children:[Object(k.jsx)("i",{className:"fas fa-retweet"}),t.retweets]})},fe=function(e){var t=e.data;return Object(k.jsxs)("span",{className:"post__button post__button--heart",children:[Object(k.jsx)("i",{className:"fas fa-heart"}),t.hearts]})},ge=function(e){var t=e.data;return Object(k.jsxs)("span",{className:"post__button post__button--message",children:[Object(k.jsx)("i",{className:"far fa-envelope"}),t.messages]})};function ve(e){var t=e.data;return Object(k.jsxs)("div",{className:"post",children:[Object(k.jsxs)("div",{className:"post__left",children:[Object(k.jsx)("img",{src:t.avatar,alt:"avatar",className:"post__avatar"}),Object(k.jsxs)("div",{className:"post__header",children:[Object(k.jsx)("p",{className:"post__name",children:t.name}),Object(k.jsx)("p",{className:"post__quote",children:t.quote}),Object(k.jsxs)("p",{className:"post__handle",children:["@",t.handle]})]})]}),Object(k.jsxs)("div",{className:"post__right",children:[Object(k.jsx)(pe,{data:t}),Object(k.jsxs)("div",{className:"post__footer",children:[Object(k.jsx)(xe,{data:t}),Object(k.jsx)(Oe,{data:t}),Object(k.jsx)(fe,{data:t}),Object(k.jsx)(ge,{data:t})]})]})]})}var ye=function(e){var t=e.data.map((function(e){return Object(k.jsx)(ve,{data:e})}));return Object(k.jsx)("div",{className:"con",children:Object(k.jsx)("div",{className:"container",children:t})})},we=a.p+"static/media/Icon-twitter.95f465bc.svg",ke=a.p+"static/media/Icon-facebook.e5321020.svg",Ne=a.p+"static/media/Icon-instagram.8d8c7e5d.svg",_e=Object(y.a)((function(e){return{appBar:{height:"7vh",display:"flex",gap:"1.5rem",color:"white",backgroundColor:"#9792E3",boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},title:{color:"white",flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px",height:"20px",width:"20px"},grow:{flexGrow:1},inputRoot:{color:"inherit"},input:Object(v.a)({padding:".3rem",margin:".2rem",borderRadius:"10px",color:"grey",fontStyle:"italic",fontSize:".7rem",textAlign:"start",transition:e.transitions.create("width")},e.breakpoints.up("md"),{width:"12ch"}),accountCircleIcon:Object(v.a)({display:"flex",alignSelf:"center",color:"white",margin:"3.2px",marginTop:".5rem"},"display","content"),Link:{margin:"3.2px",padding:"3.2px"},icon:{color:"red",height:"2rem",width:"2rem"}}})),Ce=function(){var e=_e();return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(b.a,{position:"fixed",className:e.appBar,color:"inherit",children:[Object(k.jsx)(m.a,{component:d.b,to:"/",variant:"h6",className:e.title,children:"CONTACT US"}),Object(k.jsx)("img",{className:e.icon,src:we,alt:"twitter link",height:"25px"}),Object(k.jsx)("img",{className:e.icon,src:ke,alt:"twitter link",height:"25px"}),Object(k.jsx)("img",{className:e.icon,src:Ne,alt:"twitter link",height:"25px"})]})})},Se=(a(150),a.p+"static/media/logo.7c71dcb2.png");var Ie=function(){return Object(k.jsx)("div",{className:"one",children:Object(k.jsx)("div",{className:"two",children:Object(k.jsx)(d.b,{to:"/shop",children:Object(k.jsx)("div",{children:Object(k.jsxs)("p",{className:"three",children:["SHOP NOW",Object(k.jsx)("img",{className:"icon",src:Se})]})})})})})},Be=a.p+"static/media/img_51367.7c5e7be6.png",Te=a.p+"static/media/air.1cfaa78e.jpeg",De=a.p+"static/media/dunk.9f426c9a.jpeg",Ae=a.p+"static/media/taxi.14f0f7de.jpeg",Ee=a.p+"static/media/Harden.2a657752.png",Me=[{id:Math.random().toString(8).substr(2,9),avatar:Be,name:"Jhonathan Angus",handle:"johnzy916",location:"Miami, FL",image:Te,title:'Nike Air More Uptempo "Bulls"',story:"The \u2018Bulls\u2019 aren\u2019t technically a new drop, they are just coming back in men\u2019s sizes. I must admit that I wasn\u2019t a fan of the Uptempo releases until recently. Don\u2019t get me wrong\u2014I\u2019m all for a bold sneaker, but I never liked the huge \u2018AIR\u2019 lettering engrained across the shoe. That said, these are slowly starting to win me over, and if I had to pick a pair to start my Uptempo collection, it would definitely be the \u2018Bulls.\u2019 Do you guys own a pair? It would be interesting to hear different perspectives.",url:"nike.com",comments:7,retweets:147,hearts:87,messages:4},{id:Math.random().toString(8).substr(2,9),avatar:Be,name:"Bobby Gates",handle:"BobGates",location:"Portland, OR",image:De,title:'Nike Dunk Low WMNS "Green Glow"',story:"Here we go again. Trying to get Dunks is an interesting experience as of late. These have been rumored for a couple of months now, so I expect them to go sellout quickly as usual. Right now I\u2019m a little over Dunks. Not because I don\u2019t like them, but because I can\u2019t get them. I never hit on drop day, and I\u2019m not paying $400 resell, when the retail price was originally $100. I\u2019m not. I\u2019m happy for those that do get Ws though!",url:"nike.com",comments:24,retweets:364,hearts:"2k",messages:6},{id:Math.random().toString(8).substr(2,9),avatar:Be,name:"Bert Stein",handle:"BertBoy",location:"Queens, NY",image:Ae,title:'Nike Air Max "Taxi"',story:"I'm thinking a white contrast would work best. Maybe white joggers with a springtime hoodie or a tank/crop. Or perhaps all-black would do (but it would have to be the right outfit). Either way, these are on my list as a must cop at some point..",url:"nike.com",comments:876,retweets:"4k",hearts:99,messages:12},{id:Math.random().toString(8).substr(2,9),avatar:Be,name:"Stephen Jobs",handle:"stephJobs",location:"Boulder, CO",image:Ee,title:"McDonald\u2019s All-American Harden Vol. 5",story:"I don\u2019t know about you guys, but I like the All-Americans! These have such a nostalgic vibe to them, and they remind me of the McDonald\u2019s play area, and those toys that you get with Happy Meals. Childhood vibes aside, this is a unique sneaker with all of McDonald\u2019s theme colors, and while they may not be for everyday wear, it\u2019s a good collectors item. Actually you know what? These could go with some black joggers, or anything black really..",url:"nike.com",comments:492,retweets:"22k",hearts:"4k",messages:91}],Re=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),i=Object(l.a)(c,2),j=i[0],b=i[1],m=Object(n.useState)({}),h=Object(l.a)(m,2),p=h[0],x=h[1],O=Object(n.useState)(""),f=Object(l.a)(O,2),g=f[0],v=f[1],y=function(){var e=Object(o.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.products.list();case 2:t=e.sent,a=t.data,r(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(o.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b,e.next=3,K.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(o.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.add(t,a);case 2:n=e.sent,b(n.cart);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(s.a.mark((function e(t,a){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.update(t,{quantity:a});case 2:n=e.sent,r=n.cart,b(r);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),S=function(){var e=Object(o.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.remove(t);case 2:a=e.sent,n=a.cart,b(n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(o.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.empty();case 2:t=e.sent,a=t.cart,b(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(a),e.next=4,K.checkout.capture(t,a);case 4:n=e.sent,x(n),T(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),v(e.t0.data.error.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),T=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.cart.refresh();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y(),w()}),[]),Object(k.jsx)(d.a,{children:Object(k.jsxs)("div",{children:[Object(k.jsx)(N,{totalItems:j.total_items}),Object(k.jsxs)(u.c,{children:[Object(k.jsx)(u.a,{exact:!0,path:"/",children:Object(k.jsx)(Ie,{})}),Object(k.jsxs)(u.a,{exact:!0,path:"/shop",children:[" ",Object(k.jsx)(E,{products:a,onAddToCart:_})]}),Object(k.jsx)(u.a,{exact:!0,path:"/cart",children:Object(k.jsx)(G,{cart:j,onUpdateCartQty:C,onRemoveFromCart:S,onEmptyCart:I})}),Object(k.jsx)(u.a,{exact:!0,path:"/checkout",children:Object(k.jsx)(he,{cart:j,order:p,onCaptureCheckout:B,error:g})}),Object(k.jsx)(u.a,{exact:!0,path:"/social",children:Object(k.jsx)(ye,{data:Me})})]}),Object(k.jsx)(Ce,{})]})})};c.a.render(Object(k.jsx)(Re,{}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.5c0cca27.chunk.js.map