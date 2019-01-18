import React,{ Component } from  'react'
import CommentInput  from './CommentInput'
import CommentList  from './CommentList'

class CommentApp2 extends Component {

    constructor () {
        super()
        this.state = {
            comments: []
        }
    }
    //挂载前 获取评论列表数据
    componentWillMount () {
        this._loadComments()
    }

    _loadComments () {
        let comments = localStorage.getItem('comments')
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({ comments })
        }
    }

    _saveComments (comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    //接收发布回调数据，保存到列表数据中
    handleSubmitComment (comment) {
        console.log(comment);
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        comments.push(comment)
        this.setState({ comments })
        this._saveComments(comments)
    }
    //接收删除回调数据，删除数据
    handleDeleteComment (index) {
        console.log(index)
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        this._saveComments(comments)
    }
    render() {
        //将函数传给CommentInput用以传递数据
        return (
            <div className='wrapper'>
                <div className="fenge">评论模块 第二阶段</div>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}

export default CommentApp2