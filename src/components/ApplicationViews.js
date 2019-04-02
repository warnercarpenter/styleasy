import React, { Component } from "react"
import { Route, Redirect } from "react-router-dom"
import Login from "./Auth/Login"
import Logout from "./logout/Logout"
import Logo from "./logo/Logo.js"
import EditColors from "./color/EditColors"
import EditFonts from "./font/EditFonts"
import SystemFonts from "./font/SystemFonts";
import kitManager from "../modules/kitManager"
import { withRouter } from 'react-router'
import StyleKits from "./styleKits/StyleKits";
import StyleKitDetails from "./styleKits/StyleKitDetails"
import StyleKitCSSCode from "./styleKits/StyleKitCSSCode"

class ApplicationViews extends Component {

  state = {
    fontFamilies: [],
    styleKits: []
  }

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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

  editKitName = (id, newName) => {
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

  editKitColorsOrFonts = (editedKitObject, id) => {
    kitManager.put(editedKitObject)
      .then(kitManager.getAll)
      .then(e => this.setState({ styleKits: e }))
      .then(() => this.props.history.push(`/${id}/details`))
  }

  resetStyling = () => {
    document.documentElement.style.setProperty('--color-light', "#ffffff")
    document.documentElement.style.setProperty('--color-medium-light', "#ababab")
    document.documentElement.style.setProperty('--color-medium-dark', "#7d7d7d")
    document.documentElement.style.setProperty('--color-dark', "#151515")
    document.documentElement.style.setProperty('--main-font', sessionStorage.getItem("Helvetica, sans-serif"))
    document.documentElement.style.setProperty('--secondary-font', sessionStorage.getItem("sans-serif"))
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
        <div>
          {(this.isAuthenticated()) ? (<Logout history={this.props.history} setAuth={this.props.setAuth} />) : (<div style={{ height: "30px" }}></div>)}
          <Logo history={this.props.history}/>
        </div>

        <Route exact path="/login" render={(props) => {
          return <Login {...props} />
        }} />

        <Route exact path="/" render={(props) => {
          if (this.isAuthenticated()) {
            return <StyleKits {...props}
              styleKits={this.state.styleKits} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/:styleKitId(\d+)/details" render={(props) => {
          if (this.isAuthenticated()) {
            return <StyleKitDetails {...props}
              styleKits={this.state.styleKits}
              editKitName={this.editKitName} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/:styleKitId(\d+)/css" render={(props) => {
          if (this.isAuthenticated()) {
            return <StyleKitCSSCode {...props}/>
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/:styleKitId(\d+)/editcolors" render={(props) => {
          if (this.isAuthenticated()) {
            return <EditColors {...props}
              previewOption={this.props.previewOption}
              changePreviewMode={this.props.changePreviewMode}
              resetStyling={this.resetStyling}
              setStateToSessionStorage={this.props.setStateToSessionStorage}
              editPreviewOption={this.props.editPreviewOption}
              editKitColors={this.editKitColorsOrFonts} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route exact path="/:styleKitId(\d+)/editfonts" render={(props) => {
          if (this.isAuthenticated()) {
            return <EditFonts {...props}
              fontFamilies={this.state.fontFamilies}
              editKitFonts={this.editKitColorsOrFonts} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationViews)
