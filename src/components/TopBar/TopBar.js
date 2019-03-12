import React, { Component } from "react"
import "./TopBar.css"
import Switch from "react-switch";

class TopBar extends Component {
    state = {
        previewMode: false
    }

    componentDidUpdate() {
        if (this.state.previewMode === true) {
            document.documentElement.style.setProperty('--color-light', "#" + localStorage.getItem("color1"))
            document.documentElement.style.setProperty('--color-medium-light', "#" + localStorage.getItem("color2"))
            document.documentElement.style.setProperty('--color-medium-dark', "#" + localStorage.getItem("color3"))
            document.documentElement.style.setProperty('--color-dark', "#" + localStorage.getItem("color4"))
            document.documentElement.style.setProperty('--main-font', localStorage.getItem("main_font"))
            document.documentElement.style.setProperty('--secondary-font', localStorage.getItem("secondary_font"))
        } else {
            document.documentElement.style.setProperty('--color-light', "#ffffff")
            document.documentElement.style.setProperty('--color-medium-light', "#ababab")
            document.documentElement.style.setProperty('--color-medium-dark', "#7d7d7d")
            document.documentElement.style.setProperty('--color-dark', "#151515")
            document.documentElement.style.setProperty('--main-font', localStorage.getItem("Helvetica, sans-serif"))
            document.documentElement.style.setProperty('--secondary-font', localStorage.getItem("sans-serif"))
        }
    }

    handleChange = (checked) => {
        this.setState({ previewMode: checked });
    }

    logout = () => {
        sessionStorage.clear("credentials")
        this.props.setAuth()
    }

    render() {
        return (
            <div className="topBar">
                <label className="previewModeButton">
                    <span>Preview Mode</span><br />
                    <span className="toggle">
                        <Switch onChange={this.handleChange} checked={this.state.previewMode} />
                    </span>
                </label>
                <div className="logoutSection">
                    Welcome, {sessionStorage.getItem("username")} <br />
                    <button
                        type="button"
                        className="logoutButton"
                        onClick={this.logout}>
                        Sign out
                    </button>
                </div>
            </div>
        )
    }
}

export default TopBar