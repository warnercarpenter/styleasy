import React, { Component } from "react"
import "./login.css"
import UserManager from "../../modules/UserManager"
import { withRouter } from "react-router-dom"

class Login extends Component {
    // Set initial state
    state = {
        username: ""
    }

    componentDidMount() {
        if (this.props.pathname !== "/") {
            this.props.history.push("/")
        }
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleRegister = e => {
        e.preventDefault()
        const newUser = {
            username: this.state.username
        }
        if (this.state.username) {
            UserManager.searchUsername(this.state.username).then(users => {
                if (users.length) {
                    alert(`Username ${this.state.username} already exits`)
                } else {
                    UserManager.addUser(newUser).then(user => {
                        sessionStorage.setItem("credentials", parseInt(user.id))
                        sessionStorage.setItem("username", user.username)
                        this.props.setAuth()
                    })
                }
            })
        } else {
            alert("Please fill out form")
        }
    }

    handleLogin = e => {
        e.preventDefault()
        if (this.state.username) {
            UserManager.searchUP(this.state.username).then(
                user => {
                    if (!user.length) {
                        alert("Wrong username")
                    } else {
                        sessionStorage.setItem("credentials", parseInt(user[0].id))
                        sessionStorage.setItem("username", user[0].username)
                        this.props.setAuth()
                    }
                }
            )
        } else {
            alert("Please fill out form")
        }
    }

    render() {
        return (
            <section>
                <div style={{textAlign: "center"}}>
                    Welcome to styleasy!<br/>This application is in the alpha stages of development.<br/>
                    Currently, it is only recommended to view this website on a desktop or laptop.<br/>
                    When viewing styleasy on a mobile device, some features <br/>may not appear or operate as intended.<br/>
                    Stay tuned for the styleasy beta, which will be available soon!
                </div>
                <form className="formBox">
                    <div>
                        <h1>Please sign in</h1>
                        <input
                            onChange={this.handleFieldChange}
                            spellCheck="false"
                            type="username"
                            id="username"
                            placeholder={`username`}
                            required=""
                            autoFocus=""
                            autoComplete="off"
                        />
                        <button type="submit" onClick={this.handleLogin}>Sign in</button>
                        <button type="submit" onClick={this.handleRegister}>Register</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default withRouter(Login)