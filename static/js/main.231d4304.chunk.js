(this["webpackJsonppepito-cv"]=this["webpackJsonppepito-cv"]||[]).push([[0],{40:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(6),i=s.n(n),l=(s(40),s(9)),r=s(5),o=s(20),j=s(19),d=s(24),h=s(21),b=s.n(h),m=s(65),p=s(25),x=s(22),O=s.n(x),u=s(26),N=s(27),v=s.n(N),f=s(0),S=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=Object(u.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){if(this.props.data.SPANISH)var e=this.props.data.SPANISH.networks.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:e.url,children:Object(f.jsx)("i",{className:e.className})})},e.name)}));return Object(f.jsxs)("header",{id:"home",children:[Object(f.jsxs)("nav",{id:"nav-wrap",children:[Object(f.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(f.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(f.jsxs)("ul",{id:"nav",className:"nav opaque",children:[Object(f.jsx)("li",{className:"current",children:Object(f.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})})]})]}),Object(f.jsx)("div",{className:"row banner",children:Object(f.jsxs)("div",{className:"banner-text",children:[this.props.data.SPANISH&&console.log("Data typewrite",this.props.data.SPANISH.general),this.props.data.SPANISH&&Object(f.jsx)("h3",{children:Object(f.jsx)(v.a,{textStyle:{color:"white",fontWeight:500,textAlign:"center"},startDelay:1e3,cursorColor:"#0F9095",multiText:["I'm ".concat(this.props.data.SPANISH.general.name),"But you can call me: ".concat(this.props.data.SPANISH.general.shortname),"I'm ".concat(this.props.data.SPANISH.general.city," based."),"I work as a ".concat(this.props.data.SPANISH.general.description),"But I am easily adaptable to all kinds of tasks.","And this is ".concat(this.props.data.SPANISH.general.github,"'s CV")],multiTextDelay:1800,typeSpeed:50})}),Object(f.jsx)("hr",{}),Object(f.jsx)("ul",{className:"social",children:e})]})}),Object(f.jsx)("p",{className:"scrolldown",children:Object(f.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(f.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.a.Component),g=function(e){return Object(f.jsx)("section",{id:"about",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"three columns",children:Object(f.jsx)("img",{className:"profile-pic",src:"images/pic.jpeg",alt:"profilepic"})}),Object(f.jsxs)("div",{className:"nine columns main-col",children:[Object(f.jsx)("h2",{children:"About Me"}),Object(f.jsx)("span",{children:e.data.SPANISH&&e.data.SPANISH.about.description}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"columns contact-details",children:[Object(f.jsx)("h2",{children:"Contact Details"}),Object(f.jsx)("p",{children:"You can request my phone number through my LinkedIn profile"})]})})]})]})})},w=function(e){return Object(f.jsxs)("section",{id:"resume",children:[Object(f.jsxs)("div",{className:"row education",children:[Object(f.jsx)("div",{className:"three columns header-col",children:Object(f.jsx)("h1",{children:Object(f.jsx)("span",{children:"Education"})})}),Object(f.jsx)("div",{className:"nine columns main-col",children:Object(f.jsx)("div",{className:"row item",children:Object(f.jsx)("div",{className:"twelve columns",children:e.data.SPANISH&&e.data.SPANISH.education.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:e.concept}),Object(f.jsxs)("p",{className:"info",children:[e.school,Object(f.jsx)("span",{children:"\u2022"}),Object(f.jsx)("em",{className:"date",children:e.years})]}),Object(f.jsx)("p",{children:e.description}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{})]},e.id)}))})})})]}),Object(f.jsxs)("div",{className:"row work",children:[Object(f.jsx)("div",{className:"three columns header-col",children:Object(f.jsx)("h1",{children:Object(f.jsx)("span",{children:"Work"})})}),Object(f.jsx)("div",{className:"nine columns main-col",children:e.data.SPANISH&&e.data.SPANISH.works.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:e.concept}),Object(f.jsxs)("p",{className:"info",children:[e.school,Object(f.jsx)("span",{children:"\u2022"}),Object(f.jsx)("em",{className:"date",children:e.years})]}),Object(f.jsx)("p",{style:{whiteSpace:"pre-line"},children:e.description}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{})]},e.id)}))})]}),Object(f.jsxs)("div",{className:"row skill",children:[Object(f.jsx)("div",{className:"three columns header-col",children:Object(f.jsx)("h1",{children:Object(f.jsx)("span",{children:"Skills"})})}),Object(f.jsx)("div",{className:"nine columns main-col",children:Object(f.jsx)("div",{className:"bars",children:Object(f.jsx)("ul",{className:"skills",children:e.data.SPANISH&&e.data.SPANISH.skills.map((function(e){return Object(f.jsxs)("li",{children:[Object(f.jsx)("span",{style:{width:e.level},className:"bar-expand "+e.name.toLowerCase()}),Object(f.jsx)("em",{children:e.name})]},e.name)}))})})})]})]})},y=function(e){return Object(f.jsx)("section",{id:"portfolio",children:Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("div",{className:"twelve columns collapsed",children:[Object(f.jsx)("h1",{children:"Some of my open source projects"}),Object(f.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e.data.SPANISH&&e.data.SPANISH.projects.map((function(e){return Object(f.jsx)("div",{className:"columns portfolio-item",children:Object(f.jsx)("div",{className:"item-wrap",children:Object(f.jsxs)("a",{href:e.url,title:e.title,children:[Object(f.jsx)("img",{alt:e.title,src:"images/portfolio/"+e.image}),Object(f.jsx)("div",{className:"overlay",children:Object(f.jsxs)("div",{className:"portfolio-item-meta",children:[Object(f.jsx)("h5",{children:e.title}),Object(f.jsx)("p",{children:e.category})]})}),Object(f.jsx)("div",{className:"link-icon",children:Object(f.jsx)("i",{className:"fa fa-link"})})]})})},e.title)}))})]})})})},I=s(69),P=s(70),k=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(e){var c;return Object(l.a)(this,s),(c=t.call(this,e)).useStyles=Object(m.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),c.generatePDF=function(){c.setState({loading:!0,open:!0});var e=document.getElementById("root");b()(e,{scrollY:-window.scrollY}).then((function(e){var t=e.toDataURL("image/png"),s=190*e.height/e.width,a=s,n=new p.a("pt","mm"),i=0;for(n.addImage(t,"PNG",10,0,190,s+25),a-=290;a>=0;)i=a-s,n.addPage(),n.addImage(t,"PNG",10,i,190,s+25),a-=290;n.save("cv_pepitoenpeligro.pdf"),c.setState({loading:!1,open:!1})}))},c.handleClose=function(){c.setStat({open:!1})},c.state={pepitoResumeData:{},loading:!1,open:!1},c}return Object(r.a)(s,[{key:"componentDidMount",value:function(){console.info("loading data"),this.loadData("mockups/cv_data.json")}},{key:"loadData",value:function(e){d.ajax({url:e,dataType:"json",success:function(e){this.setState({pepitoResumeData:e})}.bind(this),error:function(e,t,s){console.error(s)}})}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(S,{data:this.state.pepitoResumeData}),Object(f.jsx)(g,{data:this.state.pepitoResumeData}),Object(f.jsx)(w,{data:this.state.pepitoResumeData}),Object(f.jsx)(y,{data:this.state.pepitoResumeData}),Object(f.jsx)("div",{className:"footer",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{onClick:this.generatePDF,className:"centering",children:"Generate PDF-CV"}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(I.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(f.jsxs)("div",{className:"modal-custom",children:[Object(f.jsx)("h2",{id:"simple-modal-title",children:"PDF is generating, please wait :)"}),Object(f.jsx)("div",{className:"circularProgress",children:this.state.loading&&Object(f.jsx)(P.a,{})})]})})]})})]})}}]),s}(a.a.Component),A=function(e){e&&e instanceof Function&&s.e(5).then(s.bind(null,459)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),A()}},[[48,1,3]]]);
//# sourceMappingURL=main.231d4304.chunk.js.map