"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[854],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6479:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},s="Module Overview",u={unversionedId:"stopes/module",id:"stopes/module",title:"Module Overview",description:"A module is a python class that extends StopesModule:",source:"@site/docs/stopes/module.md",sourceDirName:"stopes",slug:"/stopes/module",permalink:"/stopes/docs/stopes/module",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/stopes/module.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"quickstartSidebar",previous:{title:"stopes Module Framework",permalink:"/stopes/docs/stopes/"},next:{title:"Composition (aka pipelining)",permalink:"/stopes/docs/stopes/pipelining"}},p={},d=[{value:"Arrays",id:"arrays",level:2},{value:"Gotchas",id:"gotchas",level:2}],m={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"module-overview"},"Module Overview"),(0,a.kt)("p",null,"A module is a python class that extends ",(0,a.kt)("inlineCode",{parentName:"p"},"StopesModule"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from stopes.code.stopes_module import StopesModule\n\nclass MyModule(StopesModule):\n    def __init__(self, config: MyModuleConfig):\n        ...\n\n    def run(\n       self,\n       iteration_value: tp.Optional[tp.Any] = None,\n       iteration_index: int = 0,\n    ):\n        ...\n")),(0,a.kt)("p",null,"You should implement at least the ",(0,a.kt)("inlineCode",{parentName:"p"},"run "),"method, this is what will get executed\nwhen your module is launched. By default, you don't need to worry about the\niteration parameters, see below for details of what these do."),(0,a.kt)("p",null,"If you want to initialize things before the module is run, you can use\n",(0,a.kt)("inlineCode",{parentName:"p"},"__init__.")),(0,a.kt)("p",null,"You can also implement the following methods to give more information about your\nmodule:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requirements")," - if you have specific requirements (gpus, memory, \u2026) for your\nmodule, return a Requirements specification from this method. This will be\ncalled after ",(0,a.kt)("inlineCode",{parentName:"li"},"__init__")," but before ",(0,a.kt)("inlineCode",{parentName:"li"},"run"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name/comment")," - some launchers (see below) might use this to identify/log\nyour module runs. Feel free to implement them if you want, but you don't have\nto and they might not always be used.")),(0,a.kt)("h2",{id:"arrays"},"Arrays"),(0,a.kt)("p",null,"We've observed that in many cases, pipeline steps are repeated on a number of\nshards of data. This is common with large datasets and allows to chunk the data\nprocessing on different machines for faster processing."),(0,a.kt)("p",null,"In this execution case, the goal is to execute the same code with the same\nrequirements on a number of shards, in order to avoid implementing this logic\nfor every module that needs to work on shards in the pipeline driving the\nmodule. The StopesModule system can take care of this for you."),(0,a.kt)("p",null,"If your module implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," method and returns an array of N values to\nprocess, the module will be executed N times separately and the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," method\nwill be called multiple times, independently. Every time the ",(0,a.kt)("inlineCode",{parentName:"p"},"run "),"method is\ncalled for a module with an array, it will be passed two extra parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iteration_value")," that will contain a single value from the array"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iteration_index")," that corresponds the the index of that value in the array")),(0,a.kt)("p",null,"The array method will be called after the module is initialized and in the same\nprocess as the initialization. You can therefore compute the array based on the\nconfig of the module or anything you compute in the ",(0,a.kt)("inlineCode",{parentName:"p"},"__init__")," method."),(0,a.kt)("h2",{id:"gotchas"},"Gotchas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In most cases, the ",(0,a.kt)("inlineCode",{parentName:"li"},"run")," method will be executed in a distributed fashion.\nThat means that:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"run")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"__init__ "),"might not be called with the same machine/process.\nE.g. when launching modules, ",(0,a.kt)("inlineCode",{parentName:"li"},"__init__")," will be called where your pipeline\ndriving script is executed, but ",(0,a.kt)("inlineCode",{parentName:"li"},"run")," will be called in a separate\nprocess/job."),(0,a.kt)("li",{parentName:"ul"},"When using ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),", each separate call to ",(0,a.kt)("inlineCode",{parentName:"li"},"run")," will potentially be called\non a separate machine/process and on a separate copy of your module. That\nmeans that you can share value from ",(0,a.kt)("inlineCode",{parentName:"li"},"__init__")," down to ",(0,a.kt)("inlineCode",{parentName:"li"},"run"),", but you\ncannot share anything in your object between calls of ",(0,a.kt)("inlineCode",{parentName:"li"},"run, "),"you should\nnot modify self inside of",(0,a.kt)("inlineCode",{parentName:"li"}," run"),"."),(0,a.kt)("li",{parentName:"ul"},"When using ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),", there is no guarantee that ",(0,a.kt)("inlineCode",{parentName:"li"},"run")," will be called in the\nsame order as the values in your array. Only rely on the index passed to\nyou and not on an execution order."),(0,a.kt)("li",{parentName:"ul"},"Your ",(0,a.kt)("inlineCode",{parentName:"li"},"run")," method will probably apply side effects (e.g. write files). If\nthis is the case, make sure to return the file path/handle from the run\nmethod so we can keep track of these.")))))}c.isMDXComponent=!0}}]);