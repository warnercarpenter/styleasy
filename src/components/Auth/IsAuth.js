import React, { Component } from "react"
import Login from "./Login"
import UserAccessLayer from "../UserAccessLayer"

class IsAuth extends Component {
  render() {
    return (
      <div className="innerContainer">
        {this.props.isAuthenticated() ? (
          <UserAccessLayer {...this.props} changePreviewMode={this.props.changePreviewMode} previewOption={this.props.previewOption} editPreviewOption={this.props.editPreviewOption} setEditedTrue={this.props.setEditedTrue} setEditedFalse={this.props.setEditedFalse} setStateToSessionStorage={this.props.setStateToSessionStorage} pathname={this.props.pathname} setPathname={this.props.setPathname} />
        ) : (
          <Login {...this.props} />
        )}
      </div>
    )
  }
}

export default IsAuth