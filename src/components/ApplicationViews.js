import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import Login from "./Auth/Login"
import Colors from "./color/Colors"
import Fonts from "./font/Fonts"

class ApplicationViews extends Component {

  saveToLocalStorage = (toSave, type) => {
    if (type === "colors") {
      localStorage.setItem("color1", toSave.color1)
      localStorage.setItem("color2", toSave.color2)
      localStorage.setItem("color3", toSave.color3)
      localStorage.setItem("color4", toSave.color4)
    }
    if (type === "fonts") {
      localStorage.setItem("main_font", toSave.main_font)
      localStorage.setItem("secondary_font", toSave.secondary_font)
    }
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
          return <Colors saveToLocalStorage={this.saveToLocalStorage} pathname={this.props.pathname} setPathname={this.props.setPathname} />
        }} />
        <Route exact path="/fonts" render={props => {
          return <Fonts saveToLocalStorage={this.saveToLocalStorage} pathname={this.props.pathname} setPathname={this.props.setPathname} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews
