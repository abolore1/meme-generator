(this["webpackJsonpall-app"]=this["webpackJsonpall-app"]||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a(7),c=a.n(s),r=a(2),o=a(3),l=a(5),i=a(4),m=a(0);var h=function(){return Object(m.jsxs)("header",{children:[Object(m.jsx)("img",{src:"http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png",alt:"pix",style:{height:130}}),Object(m.jsx)("h3",{children:Object(m.jsx)("p",{children:"Meme Generator"})})]})},j=a(8),b=(a(14),function(t){Object(l.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},t.handleChange=function(e){var a=e.target,n=a.name,s=a.value;t.setState(Object(j.a)({},n,s))},t.handleSubmit=function(e){e.preventDefault();var a=Math.floor(Math.random()*t.state.allMemeImgs.length),n=t.state.allMemeImgs[a].url;t.setState({randomImg:n}),t.state.topText="",t.state.bottomText=""},t}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.imgflip.com/get_memes").then((function(t){return t.json()})).then((function(e){var a=e.data.memes;t.setState({allMemeImgs:a})}))}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsxs)("form",{className:"form-inline",onSubmit:this.handleSubmit,children:[Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{className:"form-control border border-primary",type:"text",name:"topText",value:this.state.topText,onChange:this.handleChange,placeholder:"Top Text"})}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{className:"form-control border border-primary",type:"text",name:"bottomText",value:this.state.bottomText,onChange:this.handleChange,placeholder:"Bottom Text"})}),Object(m.jsx)("button",{className:"btn btn-success",children:"Gen"})]}),Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)("img",{src:this.state.randomImg,style:{width:"550px",height:"500px"},alt:""}),Object(m.jsxs)("h1",{className:"top-txt",children:[" ",this.state.topText]}),Object(m.jsx)("h1",{className:"bottom-txt",children:this.state.bottomText})]})]})})})}}]),a}(n.Component)),p=(a(15),function(t){Object(l.a)(a,t);var e=Object(i.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(h,{}),Object(m.jsx)(b,{})]})}}]),a}(n.Component));c.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.38e9bce9.chunk.js.map