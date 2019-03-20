import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import Login from "./Auth/Login"
import Colors from "./color/Colors"
import EditColors from "./color/EditColors"
import Fonts from "./font/Fonts"
import EditFonts from "./font/EditFonts"
import CurrentKit from "./currentKit/CurrentKit"
import SystemFonts from "./font/SystemFonts";
import kitManager from "../modules/kitManager"
import { withRouter } from 'react-router'
import StyleKits from "./styleKits/StyleKits";
import StyleKitDetails from "./styleKits/StyleKitDetails"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ApplicationViews extends Component {

  state = {
    fontFamilies: [],
    styleKits: []
  }

  savedToCurrentAlert = () => {
    toast("Saved to current kit!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000
    });
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
      color1: sessionStorage.getItem("color1"),
      color2: sessionStorage.getItem("color2"),
      color3: sessionStorage.getItem("color3"),
      color4: sessionStorage.getItem("color4"),
      main_font: sessionStorage.getItem("main_font"),
      secondary_font: sessionStorage.getItem("secondary_font")
    };

    kitManager.postKit(kitObject)
      .then(kitManager.getAll)
      .then(e => this.setState({ styleKits: e }))
      .then(() => this.props.history.push("/stylekits"))
  };

  editKitName = (id) => {
    const newName = window.prompt("Enter a new name")
    if (newName !== null && newName !== "") {
      const newKit = {}
      kitManager.get(id)
        .then(kit => {
          newKit.id = kit.id
          newKit.userId = kit.userId
          newKit.name = newName
          newKit.color1 = kit.color1
          newKit.color2 = kit.color2
          newKit.color3 = kit.color3
          newKit.color4 = kit.color4
          newKit.main_font = kit.main_font
          newKit.secondary_font = kit.secondary_font
        })
        .then(() => kitManager.put(newKit))
        .then(kitManager.getAll)
        .then(e => this.setState({ styleKits: e }))
    }
  }

  editKitColorsOrFonts = (editedKitObject) => {
    kitManager.put(editedKitObject)
      .then(kitManager.getAll)
      .then(e => this.setState({ styleKits: e }))
      .then(() => this.props.history.push("/stylekits"))
  }

  saveToSessionStorage = (toSave, type) => {
    if (type === "colors") {
      sessionStorage.setItem("color1", toSave.color1)
      sessionStorage.setItem("color2", toSave.color2)
      sessionStorage.setItem("color3", toSave.color3)
      sessionStorage.setItem("color4", toSave.color4)
    }
    if (type === "fonts") {
      sessionStorage.setItem("main_font", toSave.main_font)
      sessionStorage.setItem("secondary_font", toSave.secondary_font)
    }
    this.props.setStateToSessionStorage()
  }

  defaultSessionStorage = () => {
    if (sessionStorage.getItem("color1") === null) {
      sessionStorage.setItem("color1", "949df5")
    }
    if (sessionStorage.getItem("color2") === null) {
      sessionStorage.setItem("color2", "606ff0")
    }
    if (sessionStorage.getItem("color3") === null) {
      sessionStorage.setItem("color3", "1122ba")
    }
    if (sessionStorage.getItem("color4") === null) {
      sessionStorage.setItem("color4", "070e4b")
    }
    if (sessionStorage.getItem("main_font") === null) {
      sessionStorage.setItem("main_font", "Helvetica")
    }
    if (sessionStorage.getItem("secondary_font") === null) {
      sessionStorage.setItem("secondary_font", "Arial")
    }
  }

  componentDidMount() {

    this.defaultSessionStorage()

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
          return <Colors savedToCurrentAlert={this.savedToCurrentAlert} saveToSessionStorage={this.saveToSessionStorage} pathname={this.props.pathname} setPathname={this.props.setPathname} />
        }} />
        <Route exact path="/fonts" render={props => {
          return <Fonts savedToCurrentAlert={this.savedToCurrentAlert} fontFamilies={this.state.fontFamilies} saveToSessionStorage={this.saveToSessionStorage} pathname={this.props.pathname} setPathname={this.props.setPathname} />
        }} />
        <Route exact path="/stylekits" render={props => {
          return <StyleKits {...props} editKitName={this.editKitName} deleteKit={this.deleteKit} pathname={this.props.pathname} setPathname={this.props.setPathname} styleKits={this.state.styleKits} />
        }} />
        <Route path="/stylekits/:styleKitId(\d+)/details" render={props => {
          return <StyleKitDetails {...props} pathname={this.props.pathname} setPathname={this.props.setPathname} />
        }} />
        <Route path="/stylekits/:styleKitId(\d+)/editcolors" render={props => {
          return <EditColors {...props} pathname={this.props.pathname} setPathname={this.props.setPathname} editKitColors={this.editKitColorsOrFonts} />
        }} />
        <Route path="/stylekits/:styleKitId(\d+)/editfonts" render={props => {
          return <EditFonts {...props} fontFamilies={this.state.fontFamilies} pathname={this.props.pathname} setPathname={this.props.setPathname} editKitFonts={this.editKitColorsOrFonts} />
        }} />
        <Route exact path="/currentkit" render={props => {
          return <CurrentKit {...props} saveKit={this.saveKit} pathname={this.props.pathname} setPathname={this.props.setPathname} />
        }} />
        <ToastContainer />
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationViews)
