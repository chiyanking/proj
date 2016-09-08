import React from 'react';
import ReactDOM from 'react-dom';

import {NavBar} from './component/navbar/NavBar.jsx';
import MainContent from './component/test/WebSite.jsx';
import MyButton from './component/test/MyButton.jsx';

let arr = [{name: "企业名称信息", url: "#"}, {name: "设立信息", url: "#"},
    {name: "负责人信息", url: "#"}, {name: "全体合伙人名录及出资情况", url: "#"},
    {name: "委托书信息确认", url: "#"}, {name: "人员认证信息", url: "#"}, {name: "准备材料", url: "@"}];


ReactDOM.render(
    <NavBar data={arr}/>,
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

ReactDOM.render(<MyButton />
    , document.getElementById("container")
);


//ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。

//React 推荐使用内联样式。我们可以使用 camelCase 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。以下实例演示了为 h1 元素添加 myStyle 内联样式：
//注释需要写在花括号中，实例如下：


/*
 数组
 JSX 允许在模板中插入数组，数组会自动展开所有成员：
 var arr = [
 <h1>菜鸟教程</h1>,
 <h2>学的不仅是技术，更是梦想！</h2>,
 ];
 ReactDOM.render(
 <div>{arr}</div>,
 document.getElementById('example')
 );*/
