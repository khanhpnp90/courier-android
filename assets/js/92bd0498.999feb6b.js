"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[190],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6018:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],p={},c="Sample App",l={unversionedId:"SampleApp",id:"SampleApp",title:"Sample App",description:"A sample application is added here which makes Courier connection with a HiveMQ public broker. It demonstrates multiple functionalities of Courier like Connect, Disconnect, Publish, Subscribe and Unsubscribe.",source:"@site/docs/SampleApp.md",sourceDirName:".",slug:"/SampleApp",permalink:"/courier-android/docs/SampleApp",draft:!1,editUrl:"https://github.com/gojek/courier-android/edit/main/docs/docs/SampleApp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/courier-android/docs/Installation"},next:{title:"Connection Setup",permalink:"/courier-android/docs/ConnectionSetup"}},u={},s=[{value:"Running sample app",id:"running-sample-app",level:2}],m={toc:s};function d(e){var t=e.components,p=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sample-app"},"Sample App"),(0,i.kt)("p",null,"A sample application is added ",(0,i.kt)("a",{parentName:"p",href:"https://broker.mqttdashboard.com/"},"here")," which makes Courier connection with a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gojek/courier-android/tree/main/app"},"HiveMQ")," public broker. It demonstrates multiple functionalities of Courier like Connect, Disconnect, Publish, Subscribe and Unsubscribe."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image demo",src:n(8870).Z,width:"376",height:"735"})),(0,i.kt)("h2",{id:"running-sample-app"},"Running sample app"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clone the project from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gojek/courier-android"},"GitHub")),(0,i.kt)("li",{parentName:"ul"},"Run command ",(0,i.kt)("inlineCode",{parentName:"li"},"./gradlew :app:installDebug"))))}d.isMDXComponent=!0},8870:function(e,t,n){t.Z=n.p+"assets/images/sample-app-interface-615106e456484de7c9826e40510608d5.png"}}]);