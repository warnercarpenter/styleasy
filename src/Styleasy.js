import React, { Component } from "react"
import Footer from "./components/footer/Footer"
import ApplicationViews from "./components/ApplicationViews";


class Styleasy extends Component {

    // a function that return true if the session Storage object contains the key credentials and false if it does not.

    state = {
        color1: "949df5",
        color2: "606ff0",
        color3: "1122ba",
        color4: "070e4b",
        main_font: "Helvetica",
        secondary_font: "sans-serif",
        previewMode: false,
        previewOption: false
    }

    setStateToSessionStorage = () => {
        this.setState({
            color1: sessionStorage.getItem("color1"),
            color2: sessionStorage.getItem("color2"),
            color3: sessionStorage.getItem("color3"),
            color4: sessionStorage.getItem("color4"),
            main_font: sessionStorage.getItem("main_font"),
            secondary_font: sessionStorage.getItem("secondary_font")
        })
    }

    editPreviewOption = (boolean) => {
        this.setState({previewOption: boolean})
    }

    changePreviewMode = (boolean) => {
        this.setState({previewMode: boolean})
    }

    // a function that can be passed down to a component to trigger a render.
    setAuth = () => {
        this.setState({ authTrigger: this.isAuthenticated() })
    }

    render() {
        return <div className="masterContainer">
            <ApplicationViews
            changePreviewMode={this.changePreviewMode}
            previewOption={this.state.previewOption}
            editPreviewOption={this.editPreviewOption}
            setStateToSessionStorage={this.setStateToSessionStorage}
            setAuth={this.setAuth}
            />
            <Footer/>
        </div>
    }
}

export default Styleasy