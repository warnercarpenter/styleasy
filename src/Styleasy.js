import React, { Component } from "react"
import IsAuth from "./components/Auth/IsAuth"
import Logo from "./components/logo/Logo"
import Footer from "./components/footer/Footer"


class Styleasy extends Component {

    componentDidMount() {
    }
    // a function that return true if the session Storage object contains the key credentials and false if it does not.
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        authTrigger: this.isAuthenticated(),
        pathname: "/"
    }

    setPathname = (pathname) => {
        this.setState({pathname: pathname})
    }

    // a function that can be passed down to a component to trigger a render.
    setAuth = () => {
        this.setState({ authTrigger: this.isAuthenticated() })
    }
    render() {
        return <div className="masterContainer">
            <Logo setAuth={this.setAuth} pathname={this.state.pathname} isAuthenticated={this.isAuthenticated}/>
            <IsAuth pathname={this.state.pathname} isAuthenticated={this.isAuthenticated} setAuth={this.setAuth} setPathname={this.setPathname}/>
            <Footer/>
        </div>
    }
}

export default Styleasy