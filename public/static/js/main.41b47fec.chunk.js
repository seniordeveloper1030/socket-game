(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,n){e.exports=n(94)},54:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},91:function(e,t){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(44),c=n.n(o),s=(n(53),n(6)),i=n(7),l=n(9),u=n(8),m=n(10),d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},"I'M READY TO USE THE BACK END APIS! :-)")}}]),t}(a.Component),h=n(1),b=n(11),k=(n(54),n(27)),v=n.n(k);function p(e){var t=e.title||"1";return r.a.createElement("div",{key:e.keyProp,onClick:e.onClick,className:"VoteBtn btn-light btn"},r.a.createElement("span",{className:"rate"},t))}var f=function(e){function t(e){var n;Object(s.a)(this,t);(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(h.a)(Object(h.a)(n))),n.socket=e.socket,n.unlockScreen=n.unlockScreen.bind(Object(h.a)(Object(h.a)(n)));var a=Object(h.a)(Object(h.a)(n));return n.socket.on("start-round1",function(e){a.round=1,a.unlockScreen()}),n.socket.on("start-round2",function(e){a.round=2,a.unlockScreen()}),n.socket.on("reboot",function(e){a.props.history.push({pathname:"/putname"})}),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"lockScreen",value:function(){v()(".LockingDiv").addClass("LockScreen")}},{key:"unlockScreen",value:function(){v()(".LockingDiv").removeClass("LockScreen")}},{key:"componentDidMount",value:function(){var e=this.props.match.params;this.socket.emit("add-name",e.voteName),this.name=e.voteName}},{key:"handleClick",value:function(e){this.socket.emit("vote-round",this.name+"-"+this.round+"-"+e),this.lockScreen()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"LockingDiv LockScreen"}),r.a.createElement("div",{className:"Vote"},r.a.createElement("h2",{className:"WhiteText"},"VOTE"),r.a.createElement("h4",{className:"WhiteText"},"1: I rather watch, 2: I rather date"),r.a.createElement("div",{className:"VoteBox"},[1,2,3,4,5].map(function(t,n){return r.a.createElement(p,{title:t,key:"rate-"+n,keyProp:"rate-"+n,onClick:function(n){e.handleClick(t)}})}))))}}]),t}(r.a.Component),O=Object(b.d)(f),j=(n(63),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={name:""},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(Object(h.a)(n))),n.handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.history.push({pathname:"/vote/"+this.state.name})}},{key:"render",value:function(){return r.a.createElement("div",{className:"NameBox"},r.a.createElement("h2",null,"Type Your Name"),r.a.createElement("form",{className:"NameForm",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",value:this.state.name,onChange:this.handleChange,placeholder:"",required:!0}))))}}]),t}(r.a.Component)),E=Object(b.d)(j);n(64);function g(e){var t=e.girl;return r.a.createElement("div",{key:e.keyProp,className:"ResultDiv"},r.a.createElement("h2",null,t.name),r.a.createElement("h2",{className:"LeftText"},"Round 1: ",t?t.round1:""),r.a.createElement("h2",{className:"LeftText"},"Round 2: ",t?t.round2:""),t&&t.round1&&t.round2?r.a.createElement("h2",{className:"LeftText"},"Total: ",Number.parseInt(t.round1)+Number.parseInt(t.round2)," Over 10"):null)}var y=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={girls:[]},n.socket=e.socket;var a=Object(h.a)(Object(h.a)(n));return n.socket.on("reboot",function(e){a.setState({girls:[]})}),n.socket.on("add-name",function(e){var t=a.state.girls;t.push({name:e}),a.setState({girls:t})}),n.socket.on("vote-round",function(e){var t=e.split("-"),n=0;a.state.girls.map(function(e,a){if(e.name==t[0])return n=a,a});var r=a.state.girls;r[n]["round"+t[1]]=t[2],a.setState({girls:r})}),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"VoteBox"},this.state.girls.map(function(e,t){return r.a.createElement(g,{girl:e,key:"result-"+t,keyProp:"result-"+t})}))}}]),t}(r.a.Component),N=(n(65),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={round:0},n.startRound1=n.startRound1.bind(Object(h.a)(Object(h.a)(n))),n.startRound2=n.startRound2.bind(Object(h.a)(Object(h.a)(n))),n.reboot=n.reboot.bind(Object(h.a)(Object(h.a)(n))),n.socket=e.socket,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"startRound1",value:function(e){this.setState({round:1}),this.socket.emit("start-round1","1")}},{key:"startRound2",value:function(e){this.setState({round:2}),this.socket.emit("start-round2","2")}},{key:"reboot",value:function(e){this.setState({round:0}),this.socket.emit("reboot","0")}},{key:"render",value:function(){return r.a.createElement("div",{className:"ControllerBox"},r.a.createElement("button",{type:"button",className:"btn btn-outline-warning btn-lg",disabled:0!==this.state.round,onClick:this.startRound1},"Start Round 1"),r.a.createElement("hr",null),r.a.createElement("button",{type:"button",className:"btn btn-outline-warning btn-lg",disabled:1!==this.state.round,onClick:this.startRound2},"Start Round 2"),r.a.createElement("hr",null),r.a.createElement("button",{type:"button",className:"btn btn-outline-warning btn-lg",onClick:this.reboot},"Reboot"))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(20),C=n(47),w=n.n(C)()("http://localhost:8000"),R=r.a.createElement(S.a,null,r.a.createElement("div",null,r.a.createElement(b.a,{exact:!0,path:"/",component:d}),r.a.createElement(b.a,{path:"/putname",component:E}),r.a.createElement(b.a,{path:"/vote/:voteName",render:function(e){return r.a.createElement(O,Object.assign({},e,{socket:w}))}}),r.a.createElement(b.a,{path:"/largescreen",render:function(e){return r.a.createElement(y,Object.assign({},e,{socket:w}))}}),r.a.createElement(b.a,{path:"/controller",render:function(e){return r.a.createElement(N,Object.assign({},e,{socket:w}))}})));c.a.render(R,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.41b47fec.chunk.js.map