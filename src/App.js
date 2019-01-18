import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';


class Title extends Component {

    //子组件获取context必须写此验证
    static contextTypes = {
        themeColor: PropTypes.string
    }

    handleClickOnTitle(e) {
        console.log('Click on title.');
        console.log(e.target.innerHTML);
    }

    render() {
        return (
            <div style={{ color: this.context.themeColor }} onClick={this.handleClickOnTitle}>React tx</div>
        )
    }
}

class ContextDemo extends Component {
    //子组件获取context必须写此验证
    static contextTypes = {
        themeColor: PropTypes.string
    }
    render() {
        return (
            <div>
                <Title/>
                <div style={{ color: this.context.themeColor }}>context练习</div>
            </div>
        )
    }
}

//列表渲染 map
const users = [
    {username: 'Jerry', age: 21, gender: 'male'},
    {username: 'Tomy', age: 22, gender: 'male'},
    {username: 'Lily', age: 19, gender: 'female'},
    {username: 'Lucy', age: 20, gender: 'female'}
];
class User extends Component {

    render() {
        const {user} = this.props
        return (
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr/>
            </div>
        )
    }
}
class List extends Component {
    render() {
        return (
            //对于用表达式套数组罗列到页面上的元素，都要为每个元素加上 key 属性，这个 key 必须是每个元素唯一的标识
            //最好使用后台返回的唯一标识id作为key
            <div>
                {users.map((user, i) => <User key={i} user={user}/>)}
            </div>
        )
    }
}


//dom操作 ref属性
class AutoFocusInput extends Component {
    componentDidMount() {
        this.input.focus()
    }

    render() {
        return (
            <input ref={(input) => this.input = input}/>
        )
    }
}

//state setState prop defaultProps
class LikeButton extends Component {
    //设置参数默认值
    static defaultProps = {
        words: {
            likedText: '取消',
            unlikedText: '点赞'
        }
    };

    constructor() {
        super();
        this.state = {isLiked: false, count: 0}
    }

    //点击事件
    handleClickOnLikeButton() {

        this.setState({
            isLiked: !this.state.isLiked
        });
        this.setState((state) => {
            return {count: state.count + 1}
        });
        if (this.props.onclick) {
            this.props.onclick();
        }
    }

    //渲染
    render() {
        // const likedText = this.props.words.likedText || '取消';
        // const unlikedText = this.props.words.unlikedText || '点赞';
        return (
            <div>
                <button onClick={this.handleClickOnLikeButton.bind(this)}>
                    {this.state.isLiked ? this.props.words.likedText + this.state.count : this.props.words.unlikedText + this.state.count} 👍
                </button>
            </div>
        )
    }
}

//嵌套组件 props.children获取
class Card extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-content'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

//dangerouslySetHTML style 属性
class Editor extends Component {
    constructor() {
        super()
        this.state = {
            content: '<h1>React.js 小书</h1>',
            color: 'blue'
        }
    }

    render () {
        return (
            <div style={{fontSize: '12px', color: this.state.color}}
                className='editor-wrapper'
                dangerouslySetInnerHTML={{__html: this.state.content}} />
        )
    }
}

//生命周期
// -> constructor()
// -> componentWillMount()
// -> render()
// // 然后构造 DOM 元素插入页面
// -> componentDidMount()
// // ...
// // 即将从页面中删除
// -> componentWillUnmount()
// // 从页面中删除

//propTypes 参数类型验证 参见commentApp1中comment.js


class App extends Component {
    //验证 getChildContext 返回的对象类型
    static childContextTypes = {
        themeColor: PropTypes.string
    };
    constructor () {
        super()
        this.state = { themeColor: 'red' }
    }

    //设置 context 的过程，它返回的对象就是 context
    getChildContext () {
        return { themeColor: this.state.themeColor }
    }

    render() {
        return (
            <div>
                <h1 style={{fontSize:'20px',textAlign:'center'}}>react.js 学习笔记</h1>
                <div className="fenge">列表</div>
                <List/>
                <div className="fenge">state setState prop defaultProps</div>
                <LikeButton words={{likedText: '盘他', unlikedText: '垃圾'}}/>
                <div className="fenge">dom操作 ref</div>
                <AutoFocusInput/>
                <div className="fenge">嵌套组件 props.children</div>
                <Card>
                    <h4>React.js tx</h4>
                    <div>牛逼</div>
                    订阅：
                    <input/>
                </Card>
                <div className="fenge">dangerouslySetHTML style 属性</div>
                <Editor/>
                <div className="fenge">Context 子组件可以访问父组件的Context</div>
                <ContextDemo/>
            </div>
        )
    }
}


export default App;