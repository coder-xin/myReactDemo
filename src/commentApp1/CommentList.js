import React, { Component } from 'react'
import Comment from './Comment'
class CommentList extends Component {

    static defaultProps = {
        comments: []
    }

    render() {

        // const comments = [
        //     {username: '贱人', content: 'Hello'},
        //     {username: '哈皮', content: 'World'},
        //     {username: '二楞', content: 'tonight go happy,right?'}
        // ]

        return (
            <div>
                {this.props.comments.map((comment, i) => <Comment comment={comment} key={i} />)}
            </div>
        )
    }
}

export default CommentList