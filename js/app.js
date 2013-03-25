(function(){"use strict";var e=typeof window!="undefined"?window:global;if(typeof e.require=="function")return;var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},i=function(e,t){var n=[],r,i;/^\.\.?(\/|$)/.test(t)?r=[e,t].join("/").split("/"):r=t.split("/");for(var s=0,o=r.length;s<o;s++)i=r[s],i===".."?n.pop():i!=="."&&i!==""&&n.push(i);return n.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},o=function(t){return function(n){var r=s(t),o=i(r,n);return e.require(o)}},u=function(e,t){var r={id:e,exports:{}};t(r.exports,o(e),r);var i=n[e]=r.exports;return i},a=function(e){var s=i(e,".");if(r(n,s))return n[s];if(r(t,s))return u(s,t[s]);var o=i(s,"./index");if(r(n,o))return n[o];if(r(t,o))return u(o,t[o]);throw new Error('Cannot find module "'+e+'"')},f=function(e){for(var n in e)r(e,n)&&(t[n]=e[n])};e.require=a,e.require.define=f,e.require.brunch=!0})(),function(){var e;angular.module("scroll",[]).value("$anchorScroll",angular.noop),e=angular.module("app",["ui","ngCookies","ngResource","app.controllers","scroll"]),e.config(["$routeProvider","$locationProvider"].concat(function(e,t,n){return e.when("/:hackId",{templateUrl:"/partials/app/hack.html"}).when("/:hackId/:docId",{templateUrl:"/partials/app/hack.html"}).when("/about",{templateUrl:"/partials/app/about.html"}).otherwise({redirectTo:"/"}),t.html5Mode(!1)})),window.App=e}.call(this),function(){function t(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}var e=[].slice;angular.module("app.controllers",[]).controller({AppCtrl:["$scope","$location","$resource","$rootScope"].concat(function(e,t,n,r){return e.$location=t,e.$watch("$location.path()",function(t){return t||(t="/"),e.activeNavId=t,e}),e.getClass=function(t){return e.activeNavId.substring(0,t.length===t)?"active":""}})}).controller({HackFolderCtrl:["$scope","$routeParams","HackFolder"].concat(function(e,n,r){var i;console.log(n),t(e,{hasViewMode:function(e){return e.match(/g(doc|present|draw)/)},sortableOptions:{update:function(){return console.log("notyetupdated")}},iframes:r.iframes,docs:r.docs,activate:r.activate}),e.$watch("hackId",function(t){return r.getIndex(t,!1,function(){return e.$watch("docId",function(e){return r.activate(e)})})}),e.hackId=(i=n.hackId)?i:"s8r4l008sk",console.log(e.hackId);if(n.docId)return e.docId=n.docId})}).directive("resize",["$window"].concat(function(e){return function(t){return t.width=e.innerWidth,t.height=e.innerHeight,angular.element(e).bind("resize",function(){return t.$apply(function(){return t.width=e.innerWidth,t.height=e.innerHeight})})}})).factory({HackFolder:["$http"].concat(function(t){var n,r,i;return n={},r=[],{iframes:n,docs:r,activate:function(e,t){var i,s,o,u,a,f;return t==null&&(t=!1),s=function(){var t,n,s,o=[];for(t=0,s=(n=r).length;t<s;++t)i=n[t],i.id===e&&o.push(i);return o}()[0],o=s.type,u=t?"edit":"view",a=function(){var t;switch(t=[o],!1){case"gdoc"!==t[0]:return"https://docs.google.com/document/d/"+e+"/"+u;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"gpresent"!==t[0]:return"https://docs.google.com/presentation/d/"+e+"/"+u;case"gdraw"!==t[0]:return"https://docs.google.com/drawings/d/"+e+"/"+u;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"hackpad"!==t[0]:return"https://hackpad.com/"+e;case"ethercalc"!==t[0]:return"http://ethercalc.com/"+e}}(),console.log("activate",e,n[e]),(f=n[e])?(f.src=a,f.mode=u,f):n[e]={src:a,doc:s,mode:u}},getIndex:function(n,s,o){return i===n&&!s?o(r):t.get("http://www.ethercalc.com/_/"+n+"/csv").success(function(t){var s,u,a,f,l,c,h,p,d,v,m;i=n,r.splice(0,-1),u=[];for(a=0,l=(f=t.split(/\n/)).length;a<l;++a){c=f[a];if(c){h=c.split(/,/),p=h[0],d=h[1],v=e.call(h,2);switch(h=[p],!1){case!(m=/^https?:\/\/www\.ethercalc\.com\/(.*)/.exec(h[0])):u.push({type:"ethercalc",id:m[1],title:d});break;case!(m=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(h[0])):u.push({type:"gdoc",id:m[1],title:d});break;case!(m=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(h[0])):u.push({type:"gsheet",id:m[1],title:d});break;case!(m=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(h[0])):u.push({type:"gdraw",id:m[1],title:d});break;case!(m=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(h[0])):u.push({type:"gpresent",id:m[1],title:d});break;case!(m=/https?:\/\/hackpad\.com\/(?:.*?)-([\w]+)(\#.*)?$/.exec(h[0])):u.push({type:"hackpad",id:m[1],title:d});break;default:u.push(console.log("unrecognized",p))}}}return s=u,r.splice.apply(r,[0,-1].concat(e.call(s.filter(function(e){return e!=null})))),o(r)})}}})})}.call(this),function(){angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})}.call(this)