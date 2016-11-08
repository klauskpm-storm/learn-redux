/**
 * Created by klaus on 04/11/16.
 */
import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default class Single extends Component {
    isCurrentPost (post) {
        return post.code === this.props.params.postId;
    }

    render () {
        let i = this.props.posts.findIndex(this.isCurrentPost.bind(this));
        let post = this.props.posts[i];
        let postComments = this.props.comments[post.code] || [];

        return (
            <div className="single-photo">
                <Photo
                    post={post}
                    i={i}
                    {...this.props} />
                <Comments
                    {...this.props}
                    postComments={postComments}/>
            </div>
        )
    }
}