(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{161:function(e,r,t){"use strict";var a=t(301),s=(t(302),t(303)),n=(t(304),function(){return a.createElement(a.Fragment,{},a.createElement("h1",{id:"registerfieldmiddleware",className:"react-demo-h1"},"registerFieldMiddleware"),a.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),a.createElement("p",{className:"react-demo-p"},"注册一个表单字段包装组件，类似于HOC，但是它是先注册组件层级浅,后注册的组件层级深，所以起名middleware"),a.createElement("h2",{id:"类型描述",className:"react-demo-h2"},"类型描述"),a.createElement(s,{code:"type registerFieldMiddleware(...wrappers : Wrapper)\n\ntype Wrapper(FormComponent : Function) : ReactComponent\n",justCode:!0,lang:"typescript"}),a.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),a.createElement(s,{code:"import {registerFieldMiddleware} from '@uform/react'\n",justCode:!0,lang:"javascript"}),a.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),a.createElement(s,{code:"import {registerFieldMiddleware} from '@uform/react'\n\nregisterFieldMiddleware((Field)=>{\n  return (props)=><div><Field {...props}/></div>\n})\n",justCode:!0,lang:"javascript"}))});n.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=n},323:function(e,r,t){var a={"./bash":237,"./bash.js":237,"./css":238,"./css.js":238,"./htmlbars":239,"./htmlbars.js":239,"./javascript":240,"./javascript.js":240,"./scss":241,"./scss.js":241,"./typescript":242,"./typescript.js":242};function s(e){var r=n(e);return t(r)}function n(e){if(!t.o(a,e)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id=323}}]);
//# sourceMappingURL=bundle.41.04be63d1b0972d2dd7c8.js.map