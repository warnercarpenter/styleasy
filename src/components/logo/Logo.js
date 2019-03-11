import React, { Component } from 'react'
import "./Logo.css"
import Nav from '../Nav/Nav';


class Logo extends Component {
    render() {
        return (
            <div>
            <div className="logo">
                <span>styl</span><span style={{ color: "var(--color-medium-dark)" }}>easy</span>
            </div>
            {(this.props.isAuthenticated()) ? (<Nav pathname={this.props.pathname} />) : ("")}
            </div>

        )
    }
}

export default Logo