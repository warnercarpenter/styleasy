import React, { Component } from "react"

class Logout extends Component {

    logout = () => {
        sessionStorage.clear("credentials")
        sessionStorage.clear("color1")
        sessionStorage.clear("color2")
        sessionStorage.clear("color3")
        sessionStorage.clear("color4")
        sessionStorage.clear("colorVariation")
        sessionStorage.clear("main_font")
        sessionStorage.clear("secondary_font")
        sessionStorage.clear("username")
        this.props.history.push("/login")
    }

    render() {
        return (
            <div className="topBar">
                <div>{null}</div>
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

export default Logout