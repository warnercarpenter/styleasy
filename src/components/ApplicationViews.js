import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import Login from "./Auth/Login"
import Colors from "./color/Colors"
import Fonts from "./font/Fonts"

class ApplicationViews extends Component {
  state = {
    events: [],
    news: [],
    tasks: [],
    chat: [],
    expandedFriends: [],
    users: []
  }

  componentDidMount() {

    const newState = {
      events: [],
      news: [],
      tasks: [],
      chat: [],
      expandedFriends: [],
      users: []
    }

    let currentUserId = sessionStorage.getItem("credentials")
  }

  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route exact path="/" render={props => {
          return <Colors pathname={this.props.pathname} setPathname={this.props.setPathname} />
        }} />
        <Route exact path="/fonts" render={props => {
          return <Fonts pathname={this.props.pathname} setPathname={this.props.setPathname} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews
