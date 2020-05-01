import React, { Component } from 'react';

class CommentDetails extends Component {
    render() {
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={this.props.imgSrc} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {this.props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">
                            {this.props.timeAgo}
                        </span>
                    </div>
                    <div className="text">
                        {this.props.content}
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentDetails;