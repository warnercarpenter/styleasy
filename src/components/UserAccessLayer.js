import React, { Component } from "react"
import ApplicationViews from "./ApplicationViews"
import UserManager from "../modules/UserManager"

export default class UserAccessLayer extends Component {
  state = {
    activeUser: {}
  }

  componentDidMount() {

    UserManager.get(this.activeUserId()).then(activeUser =>
      this.setState({ activeUser: activeUser })
    )
  }
  activeUserId = () => parseInt(sessionStorage.getItem("credentials"))

  render() {
    return (
      <React.Fragment>
        <ApplicationViews
          changePreviewMode={this.props.changePreviewMode}
          previewOption={this.props.previewOption}
          editPreviewOption={this.props.editPreviewOption}
          setStateToSessionStorage={this.props.setStateToSessionStorage}
          pathname={this.props.pathname}
          setPathname={this.props.setPathname}
          activeUserId={this.activeUserId}
          activeUser={this.state.activeUser}
        />
      </React.Fragment>
    )
  }
}
