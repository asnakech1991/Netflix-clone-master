(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{22:function(e,t,a){e.exports=a(64)},27:function(e,t,a){},28:function(e,t,a){},46:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),i=a.n(r),o=(a(27),a(28),a(4)),l=a.n(o),s=a(5),m=a(3),u=a(17),d=a.n(u).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(a(46),a(18)),v=a(21),h=a.n(v);var p=function(e){var t=e.title,a=e.fetchUrl,r=e.isLargeRow,i=Object(n.useState)([]),o=Object(m.a)(i,2),u=o[0],v=o[1],p=Object(n.useState)(""),b=Object(m.a)(p,2),_=b[0],g=b[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(a);case 2:return t=e.sent,v(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),c.a.createElement("div",{className:"row"},c.a.createElement("h2",null,t),c.a.createElement("div",{className:"row__posters"},u.map((function(e){return c.a.createElement("img",{key:e.id,onClick:function(){return function(e){_?g(""):h()((null===e||void 0===e?void 0:e.title)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);g(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(r&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),alt:e.name})}))),c.a.createElement("div",{style:{padding:"40px"}},_&&c.a.createElement(f.a,{videoId:_,opts:{heighr:"390",width:"100%",playerVars:{autoplay:1}}})))},b="78187c2aa6f0c5f9fb802a1c2626c9c9",_={fetchTrending:"/trending/all/week?api_key=".concat(b,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(b,"&with_networks=213"),fetchTopRatedMovies:"/movie/top_rated?api_key=".concat(b,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(b,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(b,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(b,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(b,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(b,"&with_genres=99")};a(62);var g=function(){var e,t,a=Object(n.useState)([]),r=Object(m.a)(a,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(_.fetchNetflixOriginals);case 2:return t=e.sent,o(t.data.results[Math.floor(Math.random()*t.data.results.length)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'")'),backgroundPosition:"center center"}},c.a.createElement("div",{className:"banner__contents"},c.a.createElement("h1",{className:"banner__title"},(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||i.original_name),c.a.createElement("div",{className:"banner__buttons"},c.a.createElement("button",{className:"banner__button"},"Play"),c.a.createElement("button",{className:"banner__button"},"My List")),c.a.createElement("h1",{className:"banner__description"},(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),c.a.createElement("div",{className:"banner__fadeBottom"}))};a(63);var w=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?r(!0):r(!1)})),function(){window.removeEventListener("scroll")}}),[]),c.a.createElement("div",{className:"nav ".concat(a&&"nav__black")},c.a.createElement("img",{className:"nav__logo",src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/12c6f684-d447-4457-84fa-12033cfd581e/d9z3o32-2c299a83-49a9-44c2-bc23-b0b5070a546b.png/v1/fill/w_1024,h_512,strp/netflix_logo_background__2_by_sixmonthslate_d9z3o32-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC8xMmM2ZjY4NC1kNDQ3LTQ0NTctODRmYS0xMjAzM2NmZDU4MWVcL2Q5ejNvMzItMmMyOTlhODMtNDlhOS00NGMyLWJjMjMtYjBiNTA3MGE1NDZiLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.WKy-rj_8y7ziLuhhtAES7jddy-eUpz6PQQ331bp7rRI",alt:"Netflix Logo"}),c.a.createElement("img",{className:"nav__avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar logo"}))};var E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(w,null),c.a.createElement(g,null),c.a.createElement(p,{title:"NETFLIX ORIGINALS",fetchUrl:_.fetchNetflixOriginals,isLargeRow:!0}),c.a.createElement(p,{title:"Trending Now",fetchUrl:_.fetchTrending}),c.a.createElement(p,{title:"Top Rated",fetchUrl:_.fetchTopRatedMovies}),c.a.createElement(p,{title:"Action Movies",fetchUrl:_.fetchActionMovies}),c.a.createElement(p,{title:"Comedy Movies",fetchUrl:_.fetchComedyMovies}),c.a.createElement(p,{title:"Horror Movies",fetchUrl:_.fetchHorrorMovies}),c.a.createElement(p,{title:"Romance Movies",fetchUrl:_.fetchRomanceMovies}),c.a.createElement(p,{title:"Documentaries Movies",fetchUrl:_.fetchDocumentaries}))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.49e13fc8.chunk.js.map