(this.webpackJsonptokopedia=this.webpackJsonptokopedia||[]).push([[0],{48:function(e,t,a){e.exports=a(82)},53:function(e,t,a){},55:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),o=a.n(r),l=(a(53),a(54),a(12)),m=(a(55),a(36)),i=a(37),s=a(46),u=a(38),E=a(47),d=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-light fixed-top"},c.a.createElement("a",{className:"navbar-brand",href:"/"},c.a.createElement("img",{src:"https://ecs7.tokopedia.net/assets-about-frontend/master/img/Tokopedia_Mascot-36c1015eabb66a26893edeb227db71e0.png",width:"30",height:"30",class:"d-inline-block align-top",alt:"",loading:"lazy"}),"Tokopedia"))}}]),t}(n.Component),p=a(2),b=a(40),g=Object(l.f)((function(e){var t=e.data,a=e.history,n=(e.match,Object(b.a)(e,["data","history","match"])),r=t.name,o=Object(p.c)((function(e){return e.pokemon})).ownedPokemon,l=o.length>0?o.filter((function(e){return e.name===r})):0;l=l.length>0?l.length:"Tidak Ada";return c.a.createElement("div",{className:"col-md-3 col-sm-6 mb-5"},c.a.createElement("div",Object.assign({},n,{onClick:function(){a.push("/detail/".concat(r))}}),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h5",{className:"text-center"},r.toUpperCase())),c.a.createElement("div",{className:"card-body mx-auto"},c.a.createElement("img",{src:"https://img.pokemondb.net/sprites/black-white/anim/normal/".concat(r,".gif"),width:"150",height:"150",alt:"${name}",loading:"lazy"})),c.a.createElement("div",{className:"card-footer text-center"},"List Saya : ",l+" Pokemon"))))})),h=a(14),f=a.n(h),v=a(23),O={FETCH_POKEMONS_START:"FETCH_POKEMONS_START",FETCH_POKEMONS_SUCCESS:"FETCH_POKEMONS_SUCCESS",FETCH_POKEMONS_FAILED:"FETCH_POKEMONS_FAILED",FETCH_POKEMON_START:"FETCH_POKEMON_START",FETCH_POKEMON_SUCCESS:"FETCH_POKEMON_SUCCESS",FETCH_POKEMON_FAILED:"FETCH_POKEMON_FAILED",CATCH_POKEMON:"CATCH_POKEMON",RELEASE_POKEMON:"RELEASE_POKEMON",RELEASE_ALL:"RELEASE_ALL"},N={baseUrl:"https://pokeapi.co/api/v2/pokemon"},k=a(24),y=a.n(k),C=function(){return{type:O.FETCH_POKEMONS_START}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return(function(){var t=Object(v.a)(f.a.mark((function t(a){var n,c,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(C()),t.prev=1,n=e||N.baseUrl,t.next=5,y.a.get(n);case 5:c=t.sent,r=c.data,a({type:O.FETCH_POKEMONS_SUCCESS,payload:r}),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(1);case 12:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}())},_=function(){var e=Object(p.c)((function(e){return e.pokemon})),t=e.pokemons,a=e.nextUrl,n=e.prevUrl,r=e.isFetching,o=Object(p.b)();return c.a.createElement(c.a.Fragment,null,!r&&t?t.map((function(e){return c.a.createElement(g,{data:e,key:e.name})})):null,c.a.createElement("div",null,c.a.createElement("div",{className:"btn-group btn-group-toggle fixed-bottom","data-toggle":"buttons"},c.a.createElement("a",{type:"button",class:"btn btn-light btn-sm",onClick:function(){return o(S(n))}},"Prev"),c.a.createElement("a",{type:"button",class:"btn btn-light btn-sm",href:"/"},"List Pokemon"),c.a.createElement("a",{type:"button",class:"btn btn-light btn-sm",href:"/my-pokemon"},"My Pokemon"),c.a.createElement("a",{type:"button",class:"btn btn-light btn-sm",onClick:function(){return o(S(a))}},"Next"))))},P=function(){var e=Object(p.b)();return Object(n.useEffect)((function(){e(S())})),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement(_,null)))},T=a(4),w=a(25),j=function(e){var t=e.match,a=e.history,r=t.params.name,o=Object(p.c)((function(e){return e.pokemon})),l=o.pokemonSingle,m=o.ownedPokemon,i=Object(n.useState)({isCatch:!1,open:!1,message:"Opsssssssss. Coba Lagi Bos!"}),s=Object(w.a)(i,2),u=s[0],E=s[1],d=Object(n.useState)(""),b=Object(w.a)(d,2),g=b[0],h=b[1],k=Object(p.b)();Object(n.useEffect)((function(){k(function(e){return function(){var t=Object(v.a)(f.a.mark((function t(a){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:O.FETCH_POKEMON_START}),t.prev=1,t.next=4,y.a.get("".concat(N.baseUrl,"/").concat(e));case 4:n=t.sent,c=n.data,200===n.status&&a({type:O.FETCH_POKEMON_SUCCESS,payload:c}),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(1);case 11:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(r)),console.log(l)}),[r,k]);return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"col text-center"},c.a.createElement("div",{className:"card"},l&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card-header"},l.name.toUpperCase()),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"float-left"},c.a.createElement("img",{src:l.sprites.front_default,width:"120",height:"120",alt:"",loading:"lazy"})),c.a.createElement("div",{className:"float-right"},c.a.createElement("img",{src:l.sprites.back_default,width:"120",height:"120",alt:"",loading:"lazy"}))),c.a.createElement("div",{className:"col"},c.a.createElement("div",{type:"button",onClick:function(){return function(){var e;E(Object(T.a)({},u,{open:!0,isCatch:!1})),1===(e=2,Math.floor(Math.random()*Math.floor(e)))&&E(Object(T.a)({},u,{isCatch:!0,open:!1})),setTimeout((function(){E(Object(T.a)({},u,{open:!1}))}),1e4)}()}},c.a.createElement("img",{src:"https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif",width:"90",height:"90",alt:"",loading:"lazy"})," Tangkap!"))),u.isCatch?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{type:"alert",msg:"Excellent Throw! ".concat(l.name," was caught!")}),c.a.createElement("div",null,"Cepat Tangkap!"),c.a.createElement("input",{className:"m-2 border-1",placeholder:"Nama Pokemonmu?",name:"pokeName",onChange:function(e){h(e.target.value)}}),c.a.createElement("div",{type:"button",className:"bg-success border border-primary rounded m-2",onClick:function(){(m.length>0&&m.filter((function(e){return e.ownedName===g}))).length>0?alert("Coba Nama Lain!"):(k(function(e,t){return function(a){a({type:O.CATCH_POKEMON,payload:e,name:t})}}(l,g)),a.push("/my-pokemon"))}},"Tangkap!")):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card-header"},"Detail"),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"float-left"},c.a.createElement("div",null,l.stats.map((function(e){return c.a.createElement("div",{key:e.stat.name},e.stat.name)}))),c.a.createElement("div",null,l.types.map((function(e){return c.a.createElement("div",{key:e},"Types "+e.slot)}))),c.a.createElement("div",null,"Weight"),c.a.createElement("div",null,"Height")),c.a.createElement("div",{className:"float-right"},c.a.createElement("div",null,l.stats.map((function(e){return c.a.createElement("div",{key:e},e.base_stat)}))),c.a.createElement("div",null,l.types.map((function(e){return c.a.createElement("div",{key:e.type.name},e.type.name)}))),c.a.createElement("div",null,l.weight),c.a.createElement("div",null,l.height))),c.a.createElement("div",{className:"card-header"},"Move"),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",null,l.moves.map((function(e){return c.a.createElement("div",{key:e.move.name},e.move.name)}))))),u.open&&alert(u.message),c.a.createElement("div",null,c.a.createElement("div",{className:"btn-group btn-group-toggle fixed-bottom","data-toggle":"buttons"},c.a.createElement("a",{type:"button",class:"btn btn-light btn-sm"},"Prev"),c.a.createElement("a",{type:"button",class:"btn btn-light btn-sm",href:"/"},"List Pokemon"),c.a.createElement("a",{type:"button",class:"btn btn-light btn-sm",href:"/my-pokemon"},"My Pokemon"),c.a.createElement("a",{type:"button",class:"btn btn-light btn-sm"},"Next")))))))},F=function(e){var t=e.data,a=Object(p.b)();return c.a.createElement(c.a.Fragment,null,t.length>0&&c.a.createElement("a",{className:"container button text-center bg-danger p-2 m-3",onClick:function(){return a((function(e){e({type:O.RELEASE_ALL})}))}},"Hapus Semua List Pokemon!"),t.length>0?t.map((function(e){return console.log(t),c.a.createElement("div",{className:"col-md-3 col-sm-6 mb-5"},c.a.createElement("div",null,c.a.createElement("div",{className:"card",key:e.ownedName},c.a.createElement("div",{className:"card-header text-center"},e.ownedName.toUpperCase()),c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("img",{src:e.sprites.front_default,width:"150",height:"150",alt:"",loading:"lazy"}),c.a.createElement("div",null,"Nama Pokemon: ",e.name)),c.a.createElement("div",{className:"card-footer bg-danger text-center",onClick:function(){return a((t=e.ownedName,function(e){e({type:O.RELEASE_POKEMON,payload:t})}));var t}},"Hapus"))))})):c.a.createElement("div",{className:"text-center container bg-danger"},"Opss Belum Ada Pokemon Yang Ditangkap!"),c.a.createElement("div",null,c.a.createElement("div",{className:"btn-group btn-group-toggle fixed-bottom","data-toggle":"buttons"},c.a.createElement("a",{type:"button",class:"btn btn-light btn-sm"},"Prev"),c.a.createElement("a",{type:"button",class:"btn btn-light btn-sm",href:"/"},"List Pokemon"),c.a.createElement("a",{type:"button",class:"btn btn-light btn-sm",href:"/my-pokemon"},"My Pokemon"),c.a.createElement("a",{type:"button",class:"btn btn-light btn-sm"},"Next"))))},M=function(){var e=Object(p.c)((function(e){return e.pokemon})).ownedPokemon;return Object(n.useEffect)((function(){console.log(e)}),[e]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement(F,{data:e})))};var A=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/",render:function(e){return function(e){return c.a.createElement(P,e)}(e)}}),c.a.createElement(l.a,{path:"/detail/:name",component:j}),c.a.createElement(l.a,{path:"/my-pokemon",component:M})))},x=a(17),K=a(42),L=a(7),H=(a(79),a(43)),U=a(18),R=a(44),z=a.n(R),D=a(45),I=function(e,t,a){return[].concat(Object(D.a)(e),[Object(T.a)({},t,{ownedName:a})])},B=function(e,t){return console.log(t,"name"),e.filter((function(e){return e.ownedName!==t}))},W={isFetching:!1,isFetchingSingle:!1,pokemons:null,pokemonSingle:null,ownedPokemon:[],nextUrl:null,prevUrl:null,currentPage:1},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case O.FETCH_POKEMONS_START:return Object(T.a)({},e,{isFetching:!0});case O.FETCH_POKEMON_START:return Object(T.a)({},e,{isFetchingSingle:!0});case O.FETCH_POKEMONS_SUCCESS:return Object(T.a)({},e,{isFetching:!1,pokemons:n.results,nextUrl:n.next,prevUrl:n.previous,total:n.count});case O.FETCH_POKEMON_SUCCESS:return Object(T.a)({},e,{isFetchingSingle:!1,pokemonSingle:n});case O.CATCH_POKEMON:return Object(T.a)({},e,{ownedPokemon:I(e.ownedPokemon,t.payload,t.name)});case O.RELEASE_POKEMON:return Object(T.a)({},e,{ownedPokemon:B(e.ownedPokemon,t.payload)});case O.RELEASE_ALL:return Object(T.a)({},e,{ownedPokemon:[]});default:return e}},$={key:"root",storage:z.a,whiteList:["pokemon"]},Y=Object(L.combineReducers)({pokemon:J}),q=Object(U.a)($,Y),G=[H.a],Q=L.applyMiddleware.apply(void 0,G),V=Object(L.createStore)(q,Q),X=Object(U.b)(V);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(p.a,{store:V},c.a.createElement(x.a,null,c.a.createElement(K.a,{persistor:X},c.a.createElement(A,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.75447b2a.chunk.js.map