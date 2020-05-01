import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="ui secondary pointing menu">
                <a href="/" className="item">
                    MessageBox
                </a>
                <div className="right menu">
                    <a href="/" className="ui item active">
                        Home
                    </a>
                </div>
            </div>

        );
    }
}

export default Navbar;