import React,{ Component } from  'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from '../containers/CommentApp'
import commentsReducer from '../reducers/comments'

const store = createStore(commentsReducer)
class CommentApp3 extends Component {
    render() {
        //将函数传给CommentInput用以传递数据
        return (
            <Provider store={store}>
                <CommentApp />
            </Provider>
        )
    }
}

export default CommentApp3