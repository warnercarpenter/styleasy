import React, { Component } from "react"
import Login from "./Login"
import UserAccessLayer from "../UserAccessLayer"

class IsAuth extends Component {
  render() {
    return (
      <div className="innerContainer">
        {this.props.isAuthenticated() ? (
          <UserAccessLayer {...this.props} setStateToLocalStorage={this.props.setStateToLocalStorage} pathname={this.props.pathname} setPathname={this.props.setPathname} />
        ) : (
          <Login {...this.props} />
        )}
      </div>
    )
  }
}

export default IsAuth