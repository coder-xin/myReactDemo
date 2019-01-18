import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Comment extends Component {
    /**
     * 参数验证类型 需要先安装插件 prop-types
     * 设置必传参数 isRequired
     * 可验证类型 array bool func number object string node element
     */
    static propTypes = {
        comment: PropTypes.object.isRequired
    }

    render () {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}

export default Comment