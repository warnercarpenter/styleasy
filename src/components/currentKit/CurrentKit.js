import React, { Component } from 'react'
import './currentKit.css'

class CurrentKit extends Component {

    componentDidMount() {
        if (this.props.pathname !== "/currentkit") { this.props.setPathname("/currentkit") }
    }

    render() {
        return (
            <div className="kitDetailsMaster">
                <div className="styleKitDetails">
                    <div className="colorChoiceDetails">
                        <div className="colorRow">
                            <div className="hexAndSquare">
                                <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>Color 1: </span><span style={{ color: "var(--color-light)" }}>#{sessionStorage.getItem("color1").toUpperCase()}</span></div>
                                <div className="colorChoiceSquare" style={{ width: "120px", backgroundColor: "#" + sessionStorage.getItem("color1") }}>{""}</div>
                            </div>
                            <div className="hexAndSquare">
                                <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>Color 2: </span><span style={{ color: "var(--color-light)" }}>#{sessionStorage.getItem("color2").toUpperCase()}</span></div>
                                <div className="colorChoiceSquare" style={{ width: "120px", backgroundColor: "#" + sessionStorage.getItem("color2") }}>{""}</div>
                            </div>
                            <div className="hexAndSquare">
                                <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>Color 3: </span><span style={{ color: "var(--color-light)" }}>#{sessionStorage.getItem("color3").toUpperCase()}</span></div>
                                <div className="colorChoiceSquare" style={{ width: "120px", backgroundColor: "#" + sessionStorage.getItem("color3") }}>{""}</div>
                            </div>
                            <div className="hexAndSquare">
                                <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>Color 4: </span><span style={{ color: "var(--color-light)" }}>#{sessionStorage.getItem("color4").toUpperCase()}</span></div>
                                <div className="colorChoiceSquare" style={{ width: "120px", backgroundColor: "#" + sessionStorage.getItem("color4") }}>{""}</div>
                            </div>
                        </div>
                    </div>
                    <div className="fontChoiceDetails">
                        <div className="mainFontChoiceDisplay" style={{ fontFamily: sessionStorage.getItem("main_font"), marginTop: "0px", width: "100%" }}>{sessionStorage.getItem("main_font")}</div>
                        <div className="secondaryFontChoiceDisplay" style={{ width: "100%", fontFamily: sessionStorage.getItem("secondary_font") }}>{sessionStorage.getItem("secondary_font")}</div>
                    </div>
                </div>
                <button type="button" data-toggle="button" onClick={() => this.props.saveKit()} className="returnButton">Save Kit</button>
            </div>
        )
    }
}

export default CurrentKit