/**
 * Created by klaus on 08/11/16.
 */
import React, { Component } from 'react';

class Comment extends Component {
    render () {
        let comment = this.props.comment;

        return (
            <div className="comment">
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button
                        className="remove-comment"
                        onClick={this.props.removeComment.bind(null, this.props.params.postId, this.props.i)}>
                        &times;
                    </button>
                </p>
            </div>
        )
    }
}

export default Comment;