(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(32)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),l=n.n(c),o=(n(16),n(1)),i=n(2),u=n(4),s=n(3),d=n(5),h=(n(18),n(20),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e){return!1}},{key:"render",value:function(){var e=this.props,t=e.color,n=e.onClick,a=e.size,c=e.text,l="button--"+t+" "+("button--"+a);return r.a.createElement("div",{className:l,onClick:n},r.a.createElement("span",null,c))}}]),t}(a.Component));h.defaultProps={color:"teal",size:"medium",text:"",onClick:function(){return null}};var m=h,p=(n(22),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"renderTitleContent",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{alt:"flashpopz-large",src:"flashpopz-large.png",height:"200px"}))}},{key:"renderCardOne",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u9ad8\u6821"),r.a.createElement("h1",null,"High School"),r.a.createElement("h2",null,"\u9ad8\u6821\u751f\u306a\u3089\u3001\u6708\u66dc\u65e5\u304b\u3089\u91d1\u66dc\u65e5\u307e\u3067\u9ad8\u6821\u306b\u884c\u304b\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002"))}},{key:"renderCardTwo",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u65b0\u3057\u3044"),r.a.createElement("h1",null,"New"),r.a.createElement("h2",null,"\u65b0\u3057\u3044\u670d\u3092\u8cb7\u3063\u3066\u5b09\u3057\u3044\u3067\u3059\u3002"))}},{key:"renderContent",value:function(e){switch(e){case 0:return this.renderTitleContent();case 1:return this.renderCardOne();case 2:return this.renderCardTwo();case 3:return null;default:return this.renderTitleContent()}}},{key:"render",value:function(){return r.a.createElement("div",{className:"carousel"},this.renderContent(this.props.cardNumber))}}]),t}(a.Component));p.defaultProps={cardNumber:-1};var v=p,f=(n(24),n(26),n(28),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={cardCount:0},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e){return this.state.cardCount!==e.cardCount}},{key:"handlePrevious",value:function(){this.setState({cardCount:this.state.cardCount-1})}},{key:"handleNext",value:function(){this.setState({cardCount:this.state.cardCount+1})}},{key:"render",value:function(){var e=this.handleNext.bind(this),t=this.handlePrevious.bind(this);return r.a.createElement("div",{className:"card app-container"},r.a.createElement("div",{className:"card__panel"},r.a.createElement("a",{href:"localhost:3000"},r.a.createElement("div",{className:"card__panel__logo"})),r.a.createElement("div",{className:"card__panel__banner"},r.a.createElement("span",null,"Chihayafuru: Lesson 1")),r.a.createElement("div",{className:"card__panel__control-panel"},r.a.createElement("a",{href:"localhost:3000"},r.a.createElement("i",{type:"glyph-cross-soft"})),r.a.createElement("div",{className:"icon icon--cancel"}))),r.a.createElement("div",{className:"card__screens"},r.a.createElement("h2",null,"Season 1 Episode 1: Now the Flower Blooms"),r.a.createElement(v,{cardNumber:this.state.cardCount})),r.a.createElement("div",{className:"card__navigation"},r.a.createElement("div",{className:"card__navigation--left"},r.a.createElement(m,{id:"previous",text:"previous",onClick:t})),r.a.createElement("div",{className:"card__navigation--right"},r.a.createElement(m,{id:"next",text:"next",onClick:e}))))}}]),t}(a.Component)),E=n(7);E.a.initialize("UA-128940867-2"),E.a.pageview(window.location.pathname+window.location.search);var b=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.9dd86071.chunk.js.map