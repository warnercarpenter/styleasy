import React, { Component } from "react"
import "./TopBar.css"
import Switch from "react-switch";
import ReactTooltip from 'react-tooltip'
import { withRouter } from "react-router-dom"

class TopBar extends Component {
    state = {
        previewMode: false
    }

    componentDidUpdate() {
        if (this.props.previewMode === true) {
            this.updatePreview()
        } else {
            this.resetPreview()
        }
    }

    componentWillReceiveProps() {
        if (this.props.previewMode === true) {
            this.updatePreview()
        } else {
            this.resetPreview()
        }
    }

    updatePreview = () => {
        document.documentElement.style.setProperty('--color-light', "#" + sessionStorage.getItem("color1"))
        document.documentElement.style.setProperty('--color-medium-light', "#" + sessionStorage.getItem("color2"))
        document.documentElement.style.setProperty('--color-medium-dark', "#" + sessionStorage.getItem("color3"))
        document.documentElement.style.setProperty('--color-dark', "#" + sessionStorage.getItem("color4"))
        document.documentElement.style.setProperty('--main-font', sessionStorage.getItem("main_font"))
        document.documentElement.style.setProperty('--secondary-font', sessionStorage.getItem("secondary_font"))
    }

    resetPreview = () => {
        document.documentElement.style.setProperty('--color-light', "#ffffff")
        document.documentElement.style.setProperty('--color-medium-light', "#ababab")
        document.documentElement.style.setProperty('--color-medium-dark', "#7d7d7d")
        document.documentElement.style.setProperty('--color-dark', "#151515")
        document.documentElement.style.setProperty('--main-font', sessionStorage.getItem("Helvetica, sans-serif"))
        document.documentElement.style.setProperty('--secondary-font', sessionStorage.getItem("sans-serif"))
    }

    handleChange = (checked) => {
        this.setState({ previewMode: checked });
    }

    logout = () => {
        this.resetPreview()
        sessionStorage.clear("credentials")
        sessionStorage.clear("color1")
        sessionStorage.clear("color2")
        sessionStorage.clear("color3")
        sessionStorage.clear("color4")
        sessionStorage.clear("main_font")
        sessionStorage.clear("secondary_font")
        sessionStorage.clear("username")
        this.props.setAuth()
    }

    render() {
        return (
            <React.Fragment>
                <ReactTooltip multiline={true} place="bottom" type="light" effect="solid"/>
                <div className="topBar">
                {(this.props.previewOption === true) ? (
                    <label className="previewModeButton">
                        <div className="previewKitText">Preview Current Selections <div className="tooltip"
                        data-tip="Default colors and fonts will be used
                        <br/>if none have been selected">?</div></div>
                        <span className="toggle">
                            <Switch
                                onChange={this.handleChange}
                                checked={this.props.changePreviewMode(true)}
                                offColor={"#7d7d7d"}
                                onColor={"#" + sessionStorage.getItem("color3")}
                                boxShadow={"0px 0px 3px black"}
                            />
                        </span>
                    </label>
                ) : (
                    <div>{null}</div>
                )
                }
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
            </React.Fragment>
        )
    }
}

export default withRouter(TopBar)