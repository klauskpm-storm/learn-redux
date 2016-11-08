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
                    <button className="remove-comment">&times;</button>
                </p>
            </div>
        )
    }
}

export default Comment;