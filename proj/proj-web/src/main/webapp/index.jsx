import React from 'react';
import ReactDOM from 'react-dom';


import MainContent from './component/test/WebSite.jsx';

import {BLAffix} from "./component/navbar/BLAffix.jsx";
import {BLTab} from "./component/navbar/BLTab.jsx";
import {MyNavBar} from "./component/navbar/MyNavBar.jsx";


let arr = [{name: "企业名称信息", url: "#"}, {name: "设立信息", url: "#"},
    {name: "负责人信息", url: "#"}, {name: "全体合伙人名录及出资情况", url: "#"},
    {name: "委托书信息确认", url: "#"}, {name: "人员认证信息", url: "#"}, {name: "准备材料", url: "#"}];


ReactDOM.render(
    <MyNavBar data={arr}/>,
    document.getElementById('content'));


ReactDOM.render(
    <MainContent url="www.baidu.com" name="zhangsan" age="lisi" arr={arr}/>,
    document.getElementById('website'));


var names = ['Alice', 'Emily', 'Kate', '李四'];

ReactDOM.render(
    <div>
        {
            names.map(name => <div key={name}>Hello, {name}!</div>)
        }
    </div>,
    document.getElementById('example')
);

let data = [["一级菜单一", arr], ["一级菜单二", arr]];
data = new Map(data);

ReactDOM.render(<BLAffix data={data}/>
    , document.getElementById("affix")
);


ReactDOM.render(<BLTab />
    , document.getElementById("tab")
);
/**

 ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。

 React 推荐使用内联样式。我们可以使用 camelCase 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。以下实例演示了为 h1 元素添加 myStyle 内联样式：
 注释需要写在花括号中，实例如下：



 数组
 JSX 允许在模板中插入数组，数组会自动展开所有成员：
 var arr = [
 <h1>菜鸟教程</h1>,
 <h2>学的不仅是技术，更是梦想！</h2>,
 ];
 ReactDOM.render(
 <div>{arr}</div>,
 document.getElementById('example')
 );




 1,ReactComponent render()
 render() 函数应该是纯粹的，也就是说该函数不修改组件 state，每次调用都返回相同的结果，
 读写 DOM 信息，也不和浏览器交互（例如通过使用 setTimeout）。
 如果需要和浏览器交互，在 componentDidMount() 中或者其它生命周期方法中做这件事。
 保持 render() 纯粹，可以使服务器端渲染更加切实可行，也使组件更容易被理解。

 2,componentDidMount
 在初始化渲染执行之后立刻调用一次，
 仅客户端有效（服务器端不会调用）。
 在生命周期中的这个时间点，组件拥有一个 DOM 展现，你可以通过 this.getDOMNode() 来获取相应 DOM 节点。

 如果想和其它 JavaScript 框架集成，使用 setTimeout 或者 setInterval 来设置定时器，或者发送 AJAX 请求，
 可以在该方法中执行这些操作。


 componentWillReceiveProps(object nextProps)


 下列html元素被支持
 a abbr address area article aside audio b base bdi bdo big blockquote body br
 button canvas caption cite code col colgroup data datalist dd del details dfn
 dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5
 h6 head header hr html i iframe img input ins kbd keygen label legend li link
 main map mark menu menuitem meta meter nav noscript object ol optgroup option
 output p param picture pre progress q rp rt ruby s samp script section select
 small source span strong style sub summary sup table tbody td textarea tfoot th
 thead time title tr track u ul var video wbr


 支持的属性
 React 支持所有 data-* 和 aria-* 属性，也支持下面列出的属性。

 html的属性也被支持
 accept acceptCharset accessKey action allowFullScreen allowTransparency alt
 async autoComplete autoPlay cellPadding cellSpacing charSet checked classID
 className cols colSpan content contentEditable contextMenu controls coords
 crossOrigin data dateTime defer dir disabled download draggable encType form
 formAction formEncType formMethod formNoValidate formTarget frameBorder height
 hidden href hrefLang htmlFor httpEquiv icon id label lang list loop manifest
 marginHeight marginWidth max maxLength media mediaGroup method min multiple
 muted name noValidate open pattern placeholder poster preload radioGroup
 readOnly rel required role rows rowSpan sandbox scope scrolling seamless
 selected shape size sizes span spellCheck src srcDoc srcSet start step style
 tabIndex target title type useMap value width wmode


 组件的生命周期
 Mounting：已插入真实 DOM
 Updating：正在被重新渲染
 Unmounting：已移出真实 DOM

 共计五种处理函数：
 componentWillMount()
 componentDidMount()
 componentWillUpdate(object nextProps, object nextState)
 componentDidUpdate(object prevProps, object prevState)
 componentWillUnmount()

 用此属性来获取真实dom的操作
 this.refs.[refName]
 this.props.children 从ReactDom.render();


 Promise，字面上可以理解为“承诺”，就是说A调用B，B返回一个“承诺”给A，
 然后A就可以在写计划的时候这么写：当B返回结果给我的时候，A执行方案S1，反之如果B因为什么原因没有给到A想要的结果，那么A执行应急方案S2
 这样一来，所有的潜在风险都在A的可控范围之内了。

 */