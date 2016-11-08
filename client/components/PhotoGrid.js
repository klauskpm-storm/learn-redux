/**
 * Created by klaus on 04/11/16.
 */
import React, { Component } from 'react';
import Photo from './Photo';

export default class PhotoGrid extends Component {
    renderPhoto (post, i) {
        return (
            <Photo
                {...this.props}
                key={i}
                post={post}
                i={i} />
        );
    }

    render () {
        return (
            <div className="photo-grid">
                {this.props.posts.map(this.renderPhoto.bind(this))}
            </div>
        )
    }
}