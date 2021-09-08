import React, { Component } from 'react';

class HeaderComponenent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="nav navbar-expand-md navbar-dark bg-dark">
                        <div><a href="/home" className="navbar-brand">Employee Management App</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponenent;