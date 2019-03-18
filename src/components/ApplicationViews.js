import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import Login from "./Auth/Login"
import Colors from "./color/Colors"
import Fonts from "./font/Fonts"
import CurrentKit from "./currentKit/CurrentKit"
import SystemFonts from "./font/SystemFonts";
import kitManager from "../modules/kitManager"
import { withRouter } from 'react-router'
import StyleKits from "./styleKits/StyleKits";

class ApplicationViews extends Component {

  state = {
    fontFamilies: [],
    styleKits: []
  }

  deleteKit = (kitId) => {
    kitManager.delete(kitId)
      .then(kitManager.getAll)
      .then(e => this.setState({ styleKits: e }))
  }

  saveKit = evt => {
    let kitName = "Unnamed Kit"
    const userInput = prompt("Enter a name for your kit");
    if (userInput !== "") {
      kitName = userInput
    }

    const kitObject = {
      name: kitName,
      userId: parseInt(sessionStorage.getItem("credentials")),
      color1: localStorage.getItem("color1"),
      color2: localStorage.getItem("color2"),
      color3: localStorage.getItem("color3"),
      color4: localStorage.getItem("color4"),
      main_font: localStorage.getItem("main_font"),
      secondary_font: localStorage.getItem("secondary_font")
    };

    kitManager.postKit(kitObject)
      .then(kitManager.getAll)
      .then(e => this.setState({ styleKits: e }))
      .then(() => this.props.history.push("/stylekits"))
  };

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
    this.props.setStateToLocalStorage()
  }

  componentDidMount() {
    const newState = {}

    let fontFamilies = SystemFonts
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyB9LGN_4znWzWjBthBGAnxBW7u77rvo6tY`)
      .then(e => e.json())
      .then(e => {
        newState.fontFamilies = fontFamilies.concat(e.items.map(currentFont => currentFont.family))
      })
      .then(kitManager.getAll)
      .then(e => newState.styleKits = e)
      .then(() => this.setState(newState))
  }

  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route exact path="/" render={props => {
          return <Colors saveToLocalStorage={this.saveToLocalStorage} pathname={this.props.pathname} setPathname={this.props.setPathname} />
        }} />
        <Route exact path="/fonts" render={props => {
          return <Fonts fontFamilies={this.state.fontFamilies} saveToLocalStorage={this.saveToLocalStorage} pathname={this.props.pathname} setPathname={this.props.setPathname} />
        }} />
        <Route exact path="/stylekits" render={props => {
          return <StyleKits deleteKit={this.deleteKit} pathname={this.props.pathname} setPathname={this.props.setPathname} styleKits={this.state.styleKits} />
        }} />
        <Route exact path="/currentkit" render={props => {
          return <CurrentKit saveKit={this.saveKit} pathname={this.props.pathname} setPathname={this.props.setPathname} />
        }} />
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationViews)
