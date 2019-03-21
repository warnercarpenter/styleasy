import React, { Component } from "react"
import kitManager from "../../modules/kitManager"

class StyleKitDetails extends Component {
    state = {
        id: "",
        userId: "",
        name: "",
        color1: "",
        color2: "",
        color3: "",
        color4: "",
        main_font: "",
        secondary_font: ""
    }

    editName = () => {
        const newName = window.prompt("Enter new name")
        if (newName !== null && newName !== "") {
            this.setState({name: newName})
            this.props.editKitName(this.state.id, newName)
        }
    }

    componentDidMount() {
        if (this.props.pathname !== "/stylekits") { this.props.setPathname("/stylekits") }
        kitManager.get(this.props.match.params.styleKitId)
            .then(kit => {
                this.setState({
                    id: kit.id,
                    userId: kit.userId,
                    name: kit.name,
                    color1: kit.color1,
                    color2: kit.color2,
                    color3: kit.color3,
                    color4: kit.color4,
                    main_font: kit.main_font,
                    secondary_font: kit.secondary_font
                })
            })
    }

    render() {
        return (
            <div className="kitDetailsMaster">
                <div className="kitName">{this.state.name}</div>
                <div className="styleKitDetails">
                    <div className="colorChoiceDetails">
                        <div className="colorRow">
                            <div className="hexAndSquare">
                                <div className="colorChoiceSquare" style={{ width: "120px", backgroundColor: "#" + this.state.color1 }}>{""}</div>
                                <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>Color 1: </span><span style={{ color: "var(--color-light)" }}>#{this.state.color1.toUpperCase()}</span></div>
                            </div>
                            <div className="hexAndSquare">
                                <div className="colorChoiceSquare" style={{ width: "120px", backgroundColor: "#" + this.state.color2 }}>{""}</div>
                                <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>Color 2: </span><span style={{ color: "var(--color-light)" }}>#{this.state.color2.toUpperCase()}</span></div>
                            </div>
                            <div className="hexAndSquare">
                                <div className="colorChoiceSquare" style={{ width: "120px", backgroundColor: "#" + this.state.color3 }}>{""}</div>
                                <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>Color 3: </span><span style={{ color: "var(--color-light)" }}>#{this.state.color3.toUpperCase()}</span></div>
                            </div>
                            <div className="hexAndSquare">
                                <div className="colorChoiceSquare" style={{ width: "120px", backgroundColor: "#" + this.state.color4 }}>{""}</div>
                                <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>Color 4: </span><span style={{ color: "var(--color-light)" }}>#{this.state.color4.toUpperCase()}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="fontChoiceDetails">
                        <div className="mainFontChoiceDisplay" style={{ fontFamily: this.state.main_font, marginTop: "0px", width: "100%" }}>{this.state.main_font}</div>
                        <div className="secondaryFontChoiceDisplay" style={{ width: "100%", fontFamily: this.state.secondary_font }}>{this.state.secondary_font}</div>
                    </div>
                </div>
                <div className="colorRow" style={{ width: "400px", margin: "auto" }}>
                    <button type="button" data-toggle="button" onClick={() => this.editName()} className="returnButton">Edit Name</button>
                    <button type="button" data-toggle="button" onClick={() => this.props.history.push(`/${this.state.id}/editcolors`)} className="returnButton">Edit Colors</button>
                    <button type="button" data-toggle="button" onClick={() => this.props.history.push(`/${this.state.id}/editfonts`)} className="returnButton">Edit Fonts</button>
                </div>
                <button type="button" data-toggle="button" onClick={() => this.props.history.push("/")} className="returnButton" style={{border: "none"}}>Return to Kits</button>
            </div>
        )
    }
}

export default StyleKitDetails