(this["webpackJsonpplatzi-badges"]=this["webpackJsonpplatzi-badges"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/platziconf-logo.f246f5f1.svg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/badge-header.973f5842.svg"},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.0026b862.svg"},,function(e,t,a){e.exports=a.p+"static/media/astronauts.71addf45.svg"},function(e,t,a){e.exports=a.p+"static/media/twitter.b7cef21b.png"},function(e,t,a){e.exports=a.p+"static/media/not_found.985719aa.svg"},function(e,t,a){e.exports=a(56)},,,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),s=a.n(l),o=(a(33),a(34),a(4)),c=a(1),m=(a(35),a(23)),i=a.n(m);class d extends n.Component{render(){return r.a.createElement("div",{className:"Navbar py-2"},r.a.createElement("div",{className:"container w-100 d-flex justify-content-between align-items-center"},r.a.createElement(o.b,{className:"Navbar__brand",to:"/"},r.a.createElement("img",{className:"Navbar__brand-logo",src:i.a,alt:"Logo"}),r.a.createElement("span",{className:"font-weight-light"},"Platzi"),r.a.createElement("span",{className:"font-weight-bold"},"Conf")),r.a.createElement("div",null,r.a.createElement(o.b,{className:"nav-link dropdown-toggle text-reset font-weight-bold color-white",to:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Badge"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement(o.b,{className:"dropdown-item",to:"/badges"},"List Badges"),r.a.createElement(o.b,{className:"dropdown-item",to:"/badges/new"},"Add Badge")))))}}function u(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),e.children)}a(41);var p=a(9),g=a.n(p),h=a(25),E=a.n(h);class f extends n.Component{render(){return r.a.createElement("div",{className:"Home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"Home__col col-12 col-md-4"},r.a.createElement("img",{src:g.a,alt:"Platzi Conf Logo",className:"img-fluid mb-2"}),r.a.createElement("h1",null,"Badge Management System"),r.a.createElement(o.b,{className:"btn btn-primary",to:"/badges"},"Start")),r.a.createElement("div",{className:"Home__col d-none d-md-block col-md-8"},r.a.createElement("img",{src:E.a,alt:"Astronauts",className:"img-fluid p-4"})))))}}var v=a(2),b=a.n(v),N=a(7),w=a(12),x=a(11),_=a.n(x);a(45);class C extends n.Component{render(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.props.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{className:"form-control",type:"text",name:"firstName",autoFocus:!0,onChange:this.props.onChange,value:this.props.formValues.firstName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{className:"form-control",type:"text",name:"lastName",onChange:this.props.onChange,value:this.props.formValues.lastName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{className:"form-control",type:"email",name:"email",onChange:this.props.onChange,value:this.props.formValues.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Job Title"),r.a.createElement("input",{className:"form-control",type:"text",name:"jobTitle",onChange:this.props.onChange,value:this.props.formValues.jobTitle})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Twitter"),r.a.createElement("input",{className:"form-control",type:"text",name:"twitter",onChange:this.props.onChange,value:this.props.formValues.twitter})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save"),this.props.error&&r.a.createElement("div",{class:"mt-3 alert alert-danger",role:"alert"},r.a.createElement("strong",null,"Ups!!!")," ",this.props.error.message)))}}a(46);var y=a(15),B=a.n(y);function S(e){const t=e.email,a=_()(t);return r.a.createElement("img",{className:e.className,src:"https://www.gravatar.com/avatar/".concat(a,"?d=identicon"),alt:"Avatar"})}class j extends r.a.Component{render(){return r.a.createElement("div",{className:"Badge"},r.a.createElement("div",{className:"Badge__header"},r.a.createElement("img",{src:B.a,alt:"Logo de la conferencia"})),r.a.createElement("div",{className:"Badge__section-name"},r.a.createElement(S,{className:"Badge__avatar",email:this.props.email}),r.a.createElement("h1",null,this.props.firstName," ",r.a.createElement("br",null)," ",this.props.lastName)),r.a.createElement("div",{className:"Badge__section-info"},r.a.createElement("h3",null,this.props.jobTitle),r.a.createElement("div",null,"@",this.props.twitter)),r.a.createElement("div",{className:"Badge__footer"},"#platziconf"))}}var O=j;a(47),a(48);class D extends n.Component{render(){return r.a.createElement("div",{className:"lds-grid"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}}class k extends n.Component{render(){return r.a.createElement("div",{className:"PageLoading"},r.a.createElement(D,null))}}const T="https://api-platzi-badges.vercel.app/api/badges";function F(e){return M.apply(this,arguments)}function M(){return(M=Object(N.a)(b.a.mark((function e(t,a={}){var n,r,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.headers={"Content-Type":"application/json",Accept:"application/json"},n=T+t,e.next=4,fetch(n,a);case 4:return r=e.sent,e.next=7,r.json();case 7:return l=e.sent,e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L={badges:{list:()=>F("/"),create:e=>F("/",{method:"POST",body:JSON.stringify(e)}),read:e=>F("/".concat(e)),update:(e,t)=>F("/".concat(e),{method:"PUT",body:JSON.stringify(t)}),remove:e=>F("/".concat(e),{method:"DELETE"})}};class I extends n.Component{constructor(...e){var t;super(...e),t=this,this.state={loading:!1,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:"",avatarUrl:""}},this.handleChange=e=>{this.setState({form:Object(w.a)(Object(w.a)({},this.state.form),{},{[e.target.name]:e.target.value})})},this.handleSubmit=function(){var e=Object(N.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t.setState({loading:!0,error:null}),e.prev=2,t.state.form.avatarUrl="https://www.gravatar.com/avatar/".concat(_()(t.state.form.email),"?d=identicon"),e.next=6,L.badges.create(t.state.form);case 6:t.setState({loading:!1}),t.props.history.push("/badges"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t.setState({loading:!1,error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}render(){return this.state.loading?r.a.createElement(k,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},r.a.createElement("img",{className:"BadgeNew__hero-image img-fluid",src:g.a,alt:"Logo"}))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-7"},r.a.createElement(O,{firstName:this.state.form.firstName||"FirstName",lastName:this.state.form.lastName||"LastName",twitter:this.state.form.twitter||"my_nickname",jobTitle:this.state.form.jobTitle||"Job Title",email:this.state.form.email||"my_email@gmail.com"})),r.a.createElement("div",{className:"col-sm-12 col-md-5 mt-5 mt-md-0 mb-5"},r.a.createElement("h1",null,"New Attendant"),r.a.createElement(C,{onChange:this.handleChange,formValues:this.state.form,onSubmit:this.handleSubmit,error:this.state.error})))))}}a(49);class z extends n.Component{constructor(...e){var t;super(...e),t=this,this.state={loading:!0,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:"",avatarUrl:""}},this.fetchData=function(){var e=Object(N.a)(b.a.mark((function e(a){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,error:null}),e.prev=1,e.next=4,L.badges.read(t.props.match.params.badgeId);case 4:n=e.sent,t.setState({loading:!1,form:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.handleChange=e=>{this.setState({form:Object(w.a)(Object(w.a)({},this.state.form),{},{[e.target.name]:e.target.value})})},this.handleSubmit=function(){var e=Object(N.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t.setState({loading:!0,error:null}),e.prev=2,t.state.form.avatarUrl="https://www.gravatar.com/avatar/".concat(_()(t.state.form.email),"?d=identicon"),e.next=6,L.badges.update(t.props.match.params.badgeId,t.state.form);case 6:t.setState({loading:!1}),t.props.history.push("/badges"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t.setState({loading:!1,error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}componentDidMount(){this.fetchData()}render(){return this.state.loading?r.a.createElement(k,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeEdit__hero"},r.a.createElement("div",{className:"container-fluid d-flex justify-content-center"},r.a.createElement("img",{className:"BadgeEdit__hero-image img-fluid",src:g.a,alt:"Logo"}))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 col-md-7"},r.a.createElement(O,{firstName:this.state.form.firstName||"FirstName",lastName:this.state.form.lastName||"LastName",twitter:this.state.form.twitter||"my_nickname",jobTitle:this.state.form.jobTitle||"Job Title",email:this.state.form.email||"my_email@gmail.com"})),r.a.createElement("div",{className:"col-sm-12 col-md-5 mt-5 mt-md-0 mb-5"},r.a.createElement("h1",null,"Edit your Badge"),r.a.createElement(C,{onChange:this.handleChange,formValues:this.state.form,onSubmit:this.handleSubmit,error:this.state.error})))))}}a(50);var A=a(19),P=a(26),J=a.n(P);a(51);class U extends n.Component{render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:this.props.badge.avatarUrl,alt:"Avatar",className:"list-img"}),r.a.createElement("div",{className:"list-info"},r.a.createElement("h5",null,this.props.badge.firstName," ",this.props.badge.lastName),r.a.createElement("div",{className:"info-twitter"},r.a.createElement("img",{src:J.a,alt:"Twitter Icon"})," ",r.a.createElement("span",null,"@",this.props.badge.twitter)),r.a.createElement("p",null,this.props.badge.jobTitle)))}}function V(e){const t=function(e){const t=r.a.useState(""),a=Object(A.a)(t,2),n=a[0],l=a[1],s=r.a.useState(e),o=Object(A.a)(s,2),c=o[0],m=o[1];return r.a.useMemo(()=>{const t=e.filter(e=>"".concat(e.firstName," ").concat(e.lastName).toLowerCase().includes(n.toLowerCase()));m(t)},[e,n]),{query:n,setQuery:l,filterBadges:c}}(e.badges.reverse()),a=t.query,n=t.setQuery,l=t.filterBadges;return 0===l.length?r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Filter Badges"),r.a.createElement("input",{type:"text",className:"form-control",autoFocus:!0,value:a,onChange:e=>{n(e.target.value)}})),r.a.createElement("h3",null,"No badges were found"),r.a.createElement(o.b,{className:"btn btn-success",to:"/badges/new"},"Create new badge")):r.a.createElement("div",{className:"BadgesList"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Filter Badges"),r.a.createElement("input",{type:"text",className:"form-control",autoFocus:!0,value:a,onChange:e=>{n(e.target.value)}})),r.a.createElement("ul",{className:"list-unstyled"},l.map(e=>r.a.createElement("li",{key:e.id},r.a.createElement(o.b,{className:"text-reset text-decoration-none",to:"/badges/".concat(e.id)},r.a.createElement("div",{className:"badge-list"},r.a.createElement(U,{badge:e})))))))}a(52);function H(e){return r.a.createElement("div",{className:"PageError"},r.a.createElement("span",null,e.error.message))}class q extends n.Component{constructor(...e){var t;super(...e),t=this,this.state={loading:!0,error:null,data:void 0},this.fetchData=Object(N.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,error:null}),e.prev=1,e.next=4,L.badges.list();case 4:a=e.sent,t.setState({loading:!1,data:a}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.setState({loading:!1,error:e.t0}),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))}componentDidMount(){this.fetchData()}render(){return!0===this.state.loading?r.a.createElement(k,null):this.state.error?r.a.createElement(H,{error:this.state.error}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("img",{className:"Badges_conf-logo",src:B.a,alt:"Conf Logo"})))),r.a.createElement("div",{className:"Badge__container"},r.a.createElement("div",{className:"Badges__buttons container"},r.a.createElement(o.b,{to:"/badges/new",className:"btn btn-primary"},"New Badge")),r.a.createElement("div",{className:"Badges__list"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement(V,{badges:this.state.data})))))}}var Q=a(27),Y=a.n(Q);a(53);function X(){return r.a.createElement("div",{className:"container-notFound"},r.a.createElement("h1",{className:"text-danger"},"Error 404: Not Found"),r.a.createElement("img",{className:"notFound-image",src:Y.a,alt:"Page not found"}))}a(54),a(55);function G(e){return e.isOpen?r.a.createElement("div",null,s.a.createPortal(r.a.createElement("div",{className:"Modal"},r.a.createElement("div",{className:"Modal__container"},r.a.createElement("button",{onClick:e.onClose,className:"Modal__close-button"},"X"),e.children)),document.getElementById("modal"))):null}function K(e){return r.a.createElement(G,{isOpen:e.isOpen,onClose:e.onClose},r.a.createElement("div",{className:"DeleteBadgeModal"},r.a.createElement("h1",null,"Are You Sure?"),r.a.createElement("p",null,"You are about to delete this badge."),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onDeleteBadge,className:"btn btn-danger mr-3"},"Delete"),r.a.createElement("button",{onClick:e.onClose,className:"btn btn-primary"},"Cancel"))))}function R(e){const t=e.badge;return r.a.createElement("div",null,r.a.createElement("div",{className:"BadgeDetails__hero"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("img",{src:g.a,alt:"Logo de la Conferencia"})),r.a.createElement("div",{className:"col BadgeDetails__hero-attendant-name"},r.a.createElement("h1",null,t.firstName," ",t.lastName))))),r.a.createElement("div",{className:"container mb-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement(O,{firstName:t.firstName,lastName:t.lastName,email:t.email,twitter:t.twitter,jobTitle:t.jobTitle})),r.a.createElement("div",{className:"col-4"},r.a.createElement("h2",null,"Actions"),r.a.createElement("div",null,r.a.createElement("div",{className:"mb-3"},r.a.createElement(o.b,{className:"btn btn-info button-width",to:"/badges/".concat(t.id,"/edit")},"Edit")),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onOpenModal,className:"btn btn-danger button-width"},"Delete"),r.a.createElement(K,{isOpen:e.modalIsOpen,onClose:e.onCloseModal,onDeleteBadge:e.onDeleteBadge})))))))}class W extends n.Component{constructor(...e){var t;super(...e),t=this,this.state={loading:!0,error:null,data:void 0,modalIsOpen:!1},this.fetchData=Object(N.a)(b.a.mark((function e(){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,error:null}),e.prev=1,e.next=4,L.badges.read(t.props.match.params.badgeId);case 4:a=e.sent,t.setState({loading:!1,data:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),this.handleOpenModal=e=>{this.setState({modalIsOpen:!0})},this.handleCloseModal=e=>{this.setState({modalIsOpen:!1})},this.handleDeleteBadge=function(){var e=Object(N.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,error:null}),e.prev=1,e.next=4,L.badges.remove(t.props.match.params.badgeId);case 4:t.setState({loading:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.setState({loading:!1,error:e.t0});case 10:t.props.history.push("/badges");case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}componentDidMount(){this.fetchData()}render(){return this.state.loading?r.a.createElement(k,null):this.state.error?r.a.createElement(H,{error:this.state.error}):r.a.createElement(R,{badge:this.state.data,onCloseModal:this.handleCloseModal,onOpenModal:this.handleOpenModal,onDeleteBadge:this.handleDeleteBadge,modalIsOpen:this.state.modalIsOpen})}}function Z(){return r.a.createElement(o.a,null,r.a.createElement(u,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:f}),r.a.createElement(c.a,{exact:!0,path:"/react-platziBadges",component:f}),r.a.createElement(c.a,{exact:!0,path:"/badges",component:q}),r.a.createElement(c.a,{exact:!0,path:"/badges/new",component:I}),r.a.createElement(c.a,{exact:!0,path:"/badges/:badgeId",component:W}),r.a.createElement(c.a,{exact:!0,path:"/badges/:badgeId/edit",component:z}),r.a.createElement(c.a,{component:X}))))}const $=document.getElementById("app");s.a.render(r.a.createElement(Z,null),$)}],[[28,1,2]]]);
//# sourceMappingURL=main.23a55ebc.chunk.js.map