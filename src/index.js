import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';//基础知识
import CommentApp1 from './commentApp1/CommentApp1';//评论功能 第一阶段
import CommentApp2 from './commentApp2/CommentApp2';//评论功能 第二阶段
import CommentApp3 from './commentApp3/CommentApp3';//评论功能 第二阶段
import Redux from './redux/redux5';//Redux
import ReactReduxApp from "./react-redux/ReactReduxApp";//React-redux

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ReactReduxApp />, document.getElementById('reactredux'));
ReactDOM.render(<CommentApp3 />, document.getElementById('commentsApp'));

serviceWorker.unregister();
