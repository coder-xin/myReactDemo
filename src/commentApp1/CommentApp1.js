import React,{ Component } from  'react'
import CommentInput  from './CommentInput'
import CommentList  from './CommentList'

class CommentApp1 extends Component {

    constructor () {
        super()
        this.state = {
            comments: []
        }
    }

    //接收回调数据
    handleSubmitComment (comment) {
        console.log(comment);
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment);
        this.setState({
            comments: this.state.comments
        })
    }
    render() {
        //将函数传给CommentInput用以传递数据
        return (
            <div className='wrapper'>
                <div className="fenge">评论模块 第一阶段</div>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp1