import React, { Component } from 'react'

class Logo extends Component {
    render() {
        return (
            <div onClick={() => this.props.history.push("/")} className="logo">
                <span>styl</span><span style={{ color: "var(--color-medium-dark)" }}>easy</span>
            </div>
        )
    }
}

export default Logo