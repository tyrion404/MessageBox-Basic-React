import React, { Component } from 'react';

class ApprovalCard extends Component {
    render() {
        return (
            <div className="ui card">
                <div className="content">
                    {this.props.children}
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <button className="ui green basic button">Approve</button>
                        <button className="ui red basic button">Decline</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApprovalCard;