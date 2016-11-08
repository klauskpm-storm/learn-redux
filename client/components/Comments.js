/**
 * Created by klaus on 08/11/16.
 */
import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
    handleSubmit (e) {
        e.preventDefault();

        let postId = this.props.params.postId;
        let author = this.refs.author.value;
        let comment = this.refs.comment.value;

        this.props.addComment(postId, author, comment);

        this.refs.commentForm.reset();
    }

    renderComment (comment, i) {
        return (
            <Comment
                key={i}
                comment={comment}
                i={i}
                {...this.props}/>
        )
    }

    render () {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment.bind(this))}

                <form
                    ref="commentForm"
                    className="comment-form"
                    onSubmit={this.handleSubmit.bind(this)}>

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