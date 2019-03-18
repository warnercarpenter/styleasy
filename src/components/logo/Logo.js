import React, { Component } from 'react'
import "./Logo.css"
import Nav from '../Nav/Nav';
import TopBar from '../TopBar/TopBar';


class Logo extends Component {
    render() {
        return (
            <div>
                {(this.props.isAuthenticated()) ? (<TopBar setAuth={this.props.setAuth} />) : (<div style={{height: "30px"}}></div>)}
                <div className="logo">
                    <span>styl</span><span style={{ color: "var(--color-medium-dark)" }}>easy</span>
                </div>
                {(this.props.isAuthenticated()) ? (<Nav pathname={this.props.pathname} />) : ("")}
            </div>

        )
    }
}

export default Logo