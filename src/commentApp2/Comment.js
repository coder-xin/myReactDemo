import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }

    constructor() {
        super()
        this.state = {timeString: ''}
    }

    componentWillMount() {
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    //组件销毁后，清除定时器，避免内存泄漏
    componentWillUnmount () {
        clearInterval(this._timer)
    }

    //计算时间
    _updateTimeString() {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    // 前五行 把类似于 <、> 这种内容替换转义一下，防止用户输入 HTML 标签
    // 最后一行 将用``包含的内容用 <code> 包裹起来
    _getProcessedContent (content) {
        return content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    handleDeleteComment () {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    render() {
        const {comment} = this.props
        return (
            <div className='comment'>
                <div className='comment-user'>
                  <span className='comment-username'>
                    {comment.username}
                  </span>：
                </div>
                <p dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(comment.content)
                }} />
                <span className='comment-createdtime'>{this.state.timeString}</span>
                <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>删除</span>
            </div>
        )
    }
}

export default Comment