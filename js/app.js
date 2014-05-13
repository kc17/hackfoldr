function import$(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function in$(e,t){for(var n=-1,r=t.length>>>0;++n<r;)if(e===t[n])return!0;return!1}require.register("config.jsenv",function(e,t,n){n.exports={BUILD:"git-a5fcbdc",FIREBASE:"https://g0vhub.firebaseio.com",GITHUB_API_PROXY:"http://utcr.org:8080",G0V_LABELS:[{color:"5CC2D6",name:"datainput",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"資料輸入"},{color:"F2800D",name:"translation",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"翻譯"},{color:"C7F53D",name:"OCR",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"OCR/圖文辨識"},{color:"F53D3D",name:"research",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"研究"},{color:"40BF40",name:"drawing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"繪圖"},{color:"2EB88A",name:"parser",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"爬資料"},{color:"FFE14D",name:"bitesized",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"小工作"},{color:"3399CC",name:"doc",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文件（技術）"},{color:"000000",name:"devops",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"維運"},{color:"8040BF",name:"promote",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"宣傳"},{color:"CC66CC",name:"writing",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"文案"},{color:"004C99",name:"design",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"設計"},{color:"A30000",name:"code",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"程式"},{color:"66E6FF",name:"frontend",url:"https://g0v.hackpad.com/g0v-issue-label--L23ntanWnv7",zh:"前端"}],CATEGORIZATION:[{"class":"btn-primary",name:"專案類",tags:["立法院","鄉民關心你"]},{"class":"",name:"議題類",tags:["環保","農業","服貿","通訊","資訊自由"]},{"class":"btn-success",name:"專業類",tags:["法律","設計","文字","程式","新聞","行銷","廣告","繪圖","攝影"]},{"class":"btn-info",name:"特殊技能類",tags:["手沖咖啡","3D printing"]},{"class":"btn-warning",name:"以技能分類",tags:["爬資料","轉換資料"]}],GOOGLE_API_BROWSER_APPLICATION_KEY:"AIzaSyCHm8NgD_p5F_-e7euH8BZiB4wSB8pOZ2A"}}),angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","app.templates","app.controllers","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(e,t,n){return e.state("about",{url:"/about",templateUrl:"partials/about.html"}).state("hack",{url:"/{hackId}",templateUrl:"partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.index",{url:"/__index"}).state("hack.doc",{url:"/{docId}"}),t.otherwise("/congressoccupied"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(e,t,n,r){return e.$state=t,e.$stateParam=n,e.go=function(e){return r.path(e)},e._build=require("config.jsenv").BUILD,e.$on("$stateChangeSuccess",function(e,t){var n;return n=t.name,"undefined"!=typeof window&&null!==window&&"function"==typeof window.ga?window.ga("send","pageview",{page:r.$$url,title:n}):void 0}),e.safeApply=function(e,t){var n;return n=e.$root.$$phase,"$apply"===n||"$digest"===n?"function"==typeof t?t():void 0:e.$apply(t)}})),this.googleOnLoadCallback=function(){return gapi.client.setApiKey(require("config.jsenv").GOOGLE_API_BROWSER_APPLICATION_KEY),gapi.client.load("youtube","v3",function(){return angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})})};var slice$=[].slice,replace$="".replace;angular.module("app.controllers",["ui.state","ngCookies"]).controller({AppCtrl:["$scope","$window","$state","$rootScope","$timeout"].concat(function(e,t,n,r,o){return e.$watch("$state.current.name",function(t){return"irc"===t?e.ircEnabled=!0:void 0}),window.addEventListener("load",function(){return o(function(){return window.scrollTo(0,1)},0)}),o(function(){return r.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$sce","$window","$state","$cookies","HackFolder"].concat(function(e,t,n,r,o,c){var a,l;return import$(e,{hasViewMode:function(e){return null!=e?e.match(/g(doc|present|draw)/):void 0},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:c.iframes,docs:c.docs,tree:c.tree,godoc:function(t){var n;return"_blank"===(null!=(n=t.opts)?n.target:void 0)?(window.open(t.url,t.id),!0):t.url.match(/(https?:)?\/\/[^/]*(github|facebook)\.com/)?(window.open(t.url,t.id),!0):e.go("/"+e.hackId+"/"+decodeURIComponent(t.id))},open:function(e){return window.open(e.url,e.id),!1},activate:function(e){var t;return t=c.activate(e),"hackfoldr"===(null!=t?t.type:void 0)&&"undefined"!=typeof console&&null!==console?console.log("folder!!"):void 0},saveBtn:void 0,saveModalOpts:{dialogFade:!0},saveModalOpen:!1,showSaveModal:function(t,n,r){return e.saveModalOpen=t,r&&(e.saveBtn=$(r.target)),n&&(o.savebtn="consumed",e.saveBtn)?e.saveBtn.fadeOut(1e3):void 0},showSaveBtn:function(){return"consumed"!==o.savebtn},HackFolder:c,barframeSrc:function(e){var n;return n=e.opts.bar.replace(/\{(\w+)\}/g,function(){return e[arguments[1]]}),t.trustAsResourceUrl(n)},iframeCallback:function(t){return null==t&&(t={}),function(n){return e.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,t),t.title&&(document.title=t.title+" – hackfoldr"),t.noiframe="fail"===n?!0:!1,"unsure"===n?t.iframeunsure=!0:void 0})}},debug:function(e){return"undefined"!=typeof console&&null!==console?console.log(e,this):void 0},reload:function(e){return c.getIndex(e,!0,function(){})}}),e.$watch("hackId",function(t){return c.getIndex(t,!1,function(){var n,o;return e.$watch("docId",function(n){var r;return n&&(r=c.activate(n)),"hackfoldr"===(null!=r?r.type:void 0)?(e.showIndex=!0,c.loadRemoteCsv(r.id,function(r,o,a){var l,i,u;return l=function(){var e,t,r,o=[];for(e=0,r=(t=c.tree).length;r>e;++e)l=t[e],l.id===n&&o.push(l);return o}()[0],l.tagFilter=null!=(i=l.tags)&&null!=(u=i[0])?u.content:void 0,l.chidlren||(null==l.children&&(l.children=null!=a?a[0].children:void 0),(i=c.docs).splice.apply(i,[o.length,0].concat(slice$.call(o)))),e.indexDocs=o,e.indexSearch=t.replace(/^g0v-/,"")})):e.showIndex=!1}),e.showIndex="hack.index"===r.current.name,e.showIndex?void 0:!e.docId&&(n=null!=(o=c.docs[0])?o.id:void 0)?r.transitionTo("hack.doc",{docId:n,hackId:e.hackId}):void 0})}),e.collapsed=null!=(a=o.collapsed)?a:n.innerWidth<768,e.$watch("collapsed",function(e){return null!=e?o.collapsed=e:void 0}),e.hackId=(l=r.params.hackId)?l:"congressoccupied",e.$watch("$state.params.docId",function(t){return t?e.docId=encodeURIComponent(encodeURIComponent(t)):void 0}),e.sidebar=!1,e.toggleSidebar=function(){return e.collapsed=!1,e.sidebar=!e.sidebar}})}).directive("resize",["$window"].concat(function(e){return function(t,n){var r;return r=function(){return t.width=e.innerWidth,t.height=e.innerHeight,t.contentHeight=e.innerHeight-$(n).offset().top},angular.element(e).bind("resize",function(){return t.$apply(r)}),r()}})).directive("ngxIframe",["$parse"].concat(function(e){return{link:function(t,n,r){var o,c,a;return o=e(r.ngxIframe)(t),c=function(e,t){var n;return n=!function(){try{return"about:blank"==e.location}catch(t){}}(),o(t&&$.browser.mozilla?"unsure":n?"ok":"fail")},$(n).load(function(){return clearTimeout(a),c(this.contentWindow,!0)}),a=setTimeout(function(){return c(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(e,t){return $(t).click(function(e){return e.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(e){return{link:function(t,n,r){var o,c;return o=e(r.ngxClickMeta),c=navigator.appVersion.match(/Win/)?function(e){return e.ctrlKey}:function(e){return e.metaKey},$(n).click(function(e){return c(e)&&!o(t)?(e.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(e,t){return $(t).click(function(e){return e.stopPropagation()})}}).directive("scrollbar",["$window"].concat(function(e){return function(t){var n;return n=function(){var n;return n=$(".index"),t.hasScrollbar=n.get(0).scrollHeight>e.innerHeight-$(".navbar").height()},angular.element(e).bind("resize",function(){return t.$apply(n)}),t.$watch("docs",n),n()}})).factory({HackFolder:["$http","$sce"].concat(function(e,t){var n,r,o,c,a;return n={},r=[],o=[],a={iframes:n,docs:r,tree:o,activate:function(e,c){function a(e){return e.id}var l,i,u,s,d,p,h,v,g,f,m;for(null==c&&(c=!1),i=function(){var t,n,o,c=[];for(t=0,o=(n=r).length;o>t;++t)l=n[t],l.id===e&&c.push(l);return c}()[0],u=null!=i?i.type:void 0,s=0,p=(d=o).length;p>s;++s)h=d[s],(v=null!=h&&null!=(g=h.children)?g.map(a):void 0)&&in$(e,v)&&(h.expand=!0);return f=c?"edit":"view",m=function(){var t;switch(t=[u],!1){case"gdoc"!==t[0]:return"https://docs.google.com/document/d/"+e+"/"+f+"?pli=1&overridemobile=true";case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"gpresent"!==t[0]:return"https://docs.google.com/presentation/d/"+e+"/"+f;case"gdraw"!==t[0]:return"https://docs.google.com/drawings/d/"+e+"/"+f;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"hackpad"!==t[0]:return"https://"+(null!=(t=i.site)?t:"")+"hackpad.com/"+e;case"ethercalc"!==t[0]:return"https://ethercalc.org/"+e;case"video"!==t[0]:if("youtube"===i.provider)return"https://www.youtube.com/embed/"+e;if("ustream"===i.provider)return"http://www.ustream.tv/embed/"+e+"?v=3";break;case"url"!==t[0]:return decodeURIComponent(decodeURIComponent(e));default:return""}}(),null!=i&&i.hashtag&&(m+=null!=i?i.hashtag:void 0),m&&(m=t.trustAsResourceUrl(m)),"hackfoldr"===(null!=i?i.type:void 0)?i:((v=n[e])?(v.src=m,v.mode=f):n[e]={src:m,doc:i,mode:f},i)},getIndex:function(t,n,o){var a,l,i=this;return c!==t||n?(a=0,(l=function(){return e.get("https://www.ethercalc.org/_/"+t+"/csv").error(function(){return++a>3?void 0:setTimeout(l,1e3)}).success(function(e){return c=t,r.length=0,i.processCsv(e,o)})})()):o(r)},processCsv:function(e,t){return this.loadCsv(e,r,o,function(e,n){return a.folderTitle=e,t(n)})},loadRemoteCsv:function(t,n){var r=this;return e.get("https://www.ethercalc.org/_/"+t+"/csv").success(function(e){var t,o;return t=[],o=[],r.loadCsv(e,t,o,function(e){return n(e,t,o)})})},loadCsv:function(e,t,n,r){function o(){try{return JSON.parse(w.replace(/""/g,'"'))}catch(e){}}function c(){var e;switch(e=[f],!1){case void 0!==e[0]:return i||(m&&(i=m,m=null),w&&(u=w)),{title:m,type:"dummy",id:"dummy"};case!(O=/^\/\/(.*?)(?:\#(.*))?$/.exec(e[0])):return{type:"hackfoldr",id:O[1],tag:O[2]};case!(O=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(e[0])):return{type:"ethercalc",id:O[1]};case!(O=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdoc",id:O[1]};case!(O=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(e[0])):return{type:"gsheet",id:O[1]};case!(O=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdraw",id:O[1]};case!(O=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gpresent",id:O[1]};case!(O=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(e[0])):return{type:"hackpad",site:O[1],id:O[2]};case!(O=/https?:\/\/(?:youtu\.be\/|(?:www\.)?youtube\.com\/(?:embed\/|watch\?v=))([-\w]+)/.exec(e[0])):return{type:"video",provider:"youtube",id:O[1],icon:"http://g.etfv.co/"+f};case!(O=/https?:\/\/(?:www\.)?ustream\.tv\/(?:embed|channel)\/([-\w]+)/.exec(e[0])):return{type:"video",provider:"ustream",id:O[1],icon:"http://g.etfv.co/"+f};case!(O=/^(https?:\/\/[^\/]+)/.exec(e[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(f)),icon:"http://g.etfv.co/"+O[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",f):void 0}}function a(e){return e.length}function l(e){var t,n,r,o,c;return t=e.match(/^(.*?)(?::(.*))?$/),n=t[0],r=t[1],o=t[2],c=slice$.call(t,3),{content:r,"class":null!=o?o:"warning"}}var i,u,s,d,p,h,v,g,f,m,w,b,y,k,I,C,x,F,L,O,R,z,A,S,W,B;for(e=replace$.call(e,/^\"?#.*\n/gm,""),u={},d=[],p=0,v=(h=CSV.parse(e)).length;v>p;++p)g=h[p],f=g[0],m=g[1],w=g[2],b=g[3],y=g[4],k=slice$.call(g,5),m&&(m=replace$.call(m,/^"|"$/g,""),w&&(w=replace$.call(w,/^"|"$/g,"")),w&&(w=o()),null==w&&(w={}),b&&(b=replace$.call(b,/^"|"$/g,"")),I=f.match(/^"?(\s*)(\S+?)?(#\S+?)?\s*"?$/),C=I[0],x=I[1],f=I[2],F=I[3],L=import$({summary:y,hashtag:F,url:f,title:m,indent:x.length,opts:import$(import$({},u),w)},c()),d.push("dummy"!==L.type||null!=(I=L.title)&&I.length?import$(import$({icon:"/img/"+L.type+".png"},L),{tags:(null!=(I=null!=(R=L.opts)?R.tags:void 0)?I:[]).concat((null!=(I=null!=b?b.split(","):void 0)?I:[]).filter(a).map(l))}):null));for(s=d,s.filter(function(e){return null!=e?e.url:void 0}).map(function(e){var t,n,r;return"video"===e.type&&"youtube"===e.provider?(t=gapi.client.youtube.videos.list({id:e.id,part:"snippet"}),t.execute(function(t){var n;return"live"===(null!=(n=t.items)?n[0].snippet.liveBroadcastContent:void 0)?e.tags=e.tags.concat({"class":"warning",content:"LIVE"}):void 0})):(n=e.url.match(/ustream.tv\/embed\/([^?]+)/))?(r=n[1],$.get("http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http%3A%2F%2Fapi.ustream.tv%2Fjson%2Fchannel%2F"+r+"%2FgetValueOf%2Fstatus'&format=json&diagnostics=true&callback=",function(t){var n,r;return"live"===JSON.parse(null!=(n=t.query)&&null!=(r=n.results)&&null!=(n=r.body)?n.p:void 0).results?e.tags=e.tags.concat({"class":"warning",content:"LIVE"}):void 0})):void 0}),t.splice.apply(t,[0,t.length].concat(slice$.call(s.filter(function(e){return null!=e})))),z=0,d=[],p=0,v=t.length;v>p;++p)S=p,L=t[p],S>0&&L.indent?(W=t[z],B=null!=(h=W.children)?h:W.children=[],B.push(L),d.push(null)):(z=S,d.push(L));return A=d,A=A.filter(function(e){return null!=e}),A=A.map(function(e){var t,n;return e.children&&(e.expand=null!=(t=null!=(n=e.opts)?n.expand:void 0)?t:e.children.length<5),e}),n.splice.apply(n,[0,n.length].concat(slice$.call(A))),r(i,t)}}})});