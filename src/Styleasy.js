import React, { Component } from "react"
import IsAuth from "./components/Auth/IsAuth"
import Logo from "./components/logo/Logo"
import Footer from "./components/footer/Footer"


class Styleasy extends Component {

    // a function that return true if the session Storage object contains the key credentials and false if it does not.
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        authTrigger: this.isAuthenticated(),
        pathname: "/",
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

    setPathname = (pathname) => {
        this.setState({pathname: pathname})
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
            <Logo
            previewMode={this.state.previewMode}
            changePreviewMode={this.changePreviewMode}
            setAuth={this.setAuth}
            pathname={this.state.pathname}
            isAuthenticated={this.isAuthenticated}
            color1={this.state.color1}
            color2={this.state.color2}
            color3={this.state.color3}
            color4={this.state.color4}
            main_font={this.state.main_font}
            secondary_font={this.state.secondary_font}
            previewOption={this.state.previewOption}
            />
            <IsAuth changePreviewMode={this.changePreviewMode} previewOption={this.state.previewOption} editPreviewOption={this.editPreviewOption} setStateToSessionStorage={this.setStateToSessionStorage} pathname={this.state.pathname} isAuthenticated={this.isAuthenticated} setAuth={this.setAuth} setPathname={this.setPathname}/>
            <Footer/>
        </div>
    }
}

export default Styleasy