(this.webpackJsonpbooktub=this.webpackJsonpbooktub||[]).push([[0],{18:function(e,t,n){e.exports=n(46)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(13),r=n.n(c),i=(n(23),n(14)),s=n(15),l=n(2),u=n(17),h=n(16);n(24),n(25);var m=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"position"},o.a.createElement("div",{className:e.this.state.active?"nav-icon open":"nav-icon",onClick:function(){return e.this.setState({active:!e.this.state.active})}},o.a.createElement("span",null),o.a.createElement("span",null),o.a.createElement("span",null))),o.a.createElement("div",{className:e.this.state.active?"sidebar":"none"}))};n(26);var v=function(e){return o.a.createElement("div",{className:"container"},console.log("hi"),console.log(e.input.state),o.a.createElement("input",{type:"text",placeholder:"search...",value:e.input,onChange:function(t){return e.this.setState({search:t.target.value})},onKeyDown:function(t){"Enter"===t.key&&e.this.onSearchHandler()}}),o.a.createElement("button",{className:"search pulse-grow",type:"submit",onClick:e.this.onSearchHandler,placeholder:"Search"}),console.log(e.this.state.active+" abcd"))};n(27);var b=function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"book",src:e.book.volumeInfo.imageLinks.thumbnail}),o.a.createElement("h1",null,e.book.volumeInfo.title))};n(28);var d=function(e){return o.a.createElement("div",{className:"background"},o.a.createElement("div",{className:"card-list"},e.booktub.map((function(e){return o.a.createElement(b,{key:e.id,book:e})}))))},f=n(3),p=n.n(f),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchHandler=e.onSearchHandler.bind(Object(l.a)(e)),e.state={booktub:[],search:"Harry Potter"},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(this.state.search)).then((function(t){e.setState({booktub:t.data.items}),console.log(e.state.booktub)})).catch((function(e){return console.log(e)}))}},{key:"onSearchHandler",value:function(){var e=this;p.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(this.state.search)).then((function(t){return e.setState({booktub:t.data.items})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,{this:this}),o.a.createElement(v,{input:this.state.search,this:this}),o.a.createElement(d,{booktub:this.state.booktub}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.bc28907f.chunk.js.map