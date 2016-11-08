/**
 * Created by klaus on 08/11/16.
 */
import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
    renderComment (comment, i) {
        return (
            <Comment
                key={i}
                comment={comment}
                i={i}/>
        )
    }

    render () {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment.bind(this))}

                <form
                    ref="commentForm"
                    className="comment-form">

                    <input
                        type="text"
                        ref="author"
                        placeholder="author"/>

                    <input
                        type="text"
                        ref="comment"
                        placeholder="comment"/>

                    <input
                        type="submit"
                        hidden/>

                </form>
            </div>
        )
    }
}

export default Comments;