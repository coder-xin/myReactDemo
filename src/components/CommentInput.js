import React, { Component } from 'react'
import PropTypes from 'prop-types'
class CommentInput extends Component {

    static propTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func
    }

    static defaultProps = {
        username: ''
    }

    constructor (props) {
        super(props)
        this.state = {
            username: props.username, // 从 props 上取 username 字段
            content: ''
        }
    }

    //挂载后获取焦点
    componentDidMount () {
        this.textarea.focus()
    }
    // //挂载前获取用户名
    // componentWillMount () {
    //     this._loadUsername()
    // }
    //
    // //持久化用户名
    // _saveUsername (username) {
    //     localStorage.setItem('username', username)
    // }
    // //获取用户名
    // _loadUsername () {
    //     const username = localStorage.getItem('username')
    //     if (username) {
    //         this.setState({ username })
    //     }
    // }

    //用户名输入框失去焦点 事件，将值通过props.onUserNameInputBlur 传到上层
    handleUsernameBlur (event) {
        if (this.props.onUserNameInputBlur) {
            this.props.onUserNameInputBlur(event.target.value)
    }
    }

    //获取同户名
    handleUsernameChange (event) {
        this.setState({
            username: event.target.value
        })
    }
    //获取评论
    handleContentChange (event) {
        this.setState({
            content: event.target.value
        })
    }
    //发布
    handleSubmit () {
        //判断是否有回调函数，将数据传给CommentApp的回调函数onSubmit
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
        }
        this.setState({ content: '' }) //发布后 清空评论
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input onBlur={this.handleUsernameBlur.bind(this)} value={this.state.username}  onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea}  value={this.state.content} onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput