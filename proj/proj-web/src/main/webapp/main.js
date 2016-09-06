import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import NavBar from './NavBar.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<NavBar url="www.baidu.com" name="zhangsan" age="lisi" />, document.getElementById(''));