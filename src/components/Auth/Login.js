import React, { Component } from "react"
import "./login.css"
import UserManager from "../../modules/UserManager"

export default class Login extends Component {
    // Set initial state
    state = {
        password: "",
        username: ""
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
            username: this.state.username,
            password: this.state.password
        }
        if (this.state.username && this.state.password) {
            UserManager.searchUsername(this.state.username).then(users => {
                if (users.length) {
                    alert(`Username ${this.state.username} already exits`)
                } else {
                    UserManager.addUser(newUser).then(user => {
                        sessionStorage.setItem("credentials", parseInt(user.id))
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
        if (this.state.username && this.state.password) {
            UserManager.searchUP(this.state.username, this.state.password).then(
                user => {
                    if (!user.length) {
                        alert("Wrong username or password")
                    } else {
                        sessionStorage.setItem("credentials", parseInt(user[0].id))
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
                        <input
                            onChange={this.handleFieldChange}
                            spellCheck="false"
                            type="password"
                            id="password"
                            placeholder={`password`}
                            required=""
                        />
                        <button type="submit" onClick={this.handleLogin}>Sign in</button>
                        <button type="submit" onClick={this.handleRegister}>Register</button>
                    </div>
                </form>
            </section>
        )
    }
}
