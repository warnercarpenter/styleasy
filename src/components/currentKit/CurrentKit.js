import React, { Component } from 'react'
import './currentKit.css'

class CurrentKit extends Component {

    componentDidMount() {
        if (this.props.pathname !== "/currentkit") { this.props.setPathname("/currentkit") }
    }

    render() {
        return (
            <div className="currentKitBox">
                <div className="colorChoiceDisplay">
                    <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>Color 1: </span><span style={{ color: "var(--color-light)" }}>#{sessionStorage.getItem("color1").toUpperCase()}</span></div>
                    <div className="colorChoiceSquare" style={{ backgroundColor: "#" + sessionStorage.getItem("color1") }}>{""}</div>
                    <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>Color 2: </span><span style={{ color: "var(--color-light)" }}>#{sessionStorage.getItem("color2").toUpperCase()}</span></div>
                    <div className="colorChoiceSquare" style={{ backgroundColor: "#" + sessionStorage.getItem("color2") }}>{""}</div>
                    <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>Color 3: </span><span style={{ color: "var(--color-light)" }}>#{sessionStorage.getItem("color3").toUpperCase()}</span></div>
                    <div className="colorChoiceSquare" style={{ backgroundColor: "#" + sessionStorage.getItem("color3") }}>{""}</div>
                    <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>Color 4: </span><span style={{ color: "var(--color-light)" }}>#{sessionStorage.getItem("color4").toUpperCase()}</span></div>
                    <div className="colorChoiceSquare" style={{ backgroundColor: "#" + sessionStorage.getItem("color4") }}>{""}</div>
                </div>
                <div className="fontChoiceDisplay">
                    <div className="mainFontChoiceDisplay" style={{ fontFamily: sessionStorage.getItem("main_font") }}>{sessionStorage.getItem("main_font")}</div>
                    <div className="secondaryFontChoiceDisplay" style={{ fontFamily: sessionStorage.getItem("secondary_font") }}>{sessionStorage.getItem("secondary_font")}</div>
                    <button type="button" data-toggle="button" onClick={() => this.props.saveKit()} className="saveKitButton">Save Kit</button>
                </div>
            </div>
        )
    }
}

export default CurrentKit