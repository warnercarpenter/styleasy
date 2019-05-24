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
        secondary_font: "",
        preview: false
    }

    togglePreview = () => {
        if (this.state.preview === false) {
            this.setState({ preview: true })
        } else {
            this.setState({ preview: false })
        }
    }

    editName = () => {
        const newName = window.prompt("Enter new name")
        if (newName !== null && newName !== "") {
            this.setState({ name: newName })
            this.props.editKitName(this.state.id, newName)
        }
    }

    preview = () => {
        document.documentElement.style.setProperty('--color-light', "#" + this.state.color1)
        document.documentElement.style.setProperty('--color-medium-light', "#" + this.state.color2)
        document.documentElement.style.setProperty('--color-medium-dark', "#" + this.state.color3)
        document.documentElement.style.setProperty('--color-dark', "#" + this.state.color4)
        document.documentElement.style.setProperty('--main-font', this.state.main_font)
        document.documentElement.style.setProperty('--secondary-font', this.state.secondary_font)
    }

    resetPreview = () => {
        document.documentElement.style.setProperty('--color-light', "#ffffff")
        document.documentElement.style.setProperty('--color-medium-light', "#ababab")
        document.documentElement.style.setProperty('--color-medium-dark', "#7d7d7d")
        document.documentElement.style.setProperty('--color-dark', "#151515")
        document.documentElement.style.setProperty('--main-font', "Helvetica, sans-serif")
        document.documentElement.style.setProperty('--secondary-font', "Arial")
    }

    componentDidUpdate = () => {
        if (this.state.preview) {
            this.preview()
        } else {
            this.resetPreview()
        }
    }

    componentWillUnmount() {
        this.resetPreview()
    }

    componentDidMount() {
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
            <React.Fragment>
                <div className="kitDetailsMaster">
                    <div className="kitNameDetails">{this.state.name}</div>
                    <div className="styleKitDetails">
                        <div className="fontChoiceDetails">
                            <div className="mainFontChoiceDisplay" style={{ fontFamily: this.state.main_font, marginTop: "0px", width: "100%" }}>{this.state.main_font}</div>
                            <div className="secondaryFontChoiceDisplay" style={{ width: "100%", fontFamily: this.state.secondary_font }}>{this.state.secondary_font}</div>
                        </div>
                        <div className="colorRow">
                            <div className="hexAndSquare">
                                <div className="colorChoiceSquare" style={{ backgroundColor: "#" + this.state.color1 }}>{""}</div>
                                <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>#{this.state.color1.toUpperCase()}</span></div>
                            </div>
                            <div className="hexAndSquare">
                                <div className="colorChoiceSquare" style={{ backgroundColor: "#" + this.state.color2 }}>{""}</div>
                                <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>#{this.state.color2.toUpperCase()}</span></div>
                            </div>
                            <div className="hexAndSquare">
                                <div className="colorChoiceSquare" style={{ backgroundColor: "#" + this.state.color3 }}>{""}</div>
                                <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>#{this.state.color3.toUpperCase()}</span></div>
                            </div>
                            <div className="hexAndSquare">
                                <div className="colorChoiceSquare" style={{ backgroundColor: "#" + this.state.color4 }}>{""}</div>
                                <div className="colorChoiceHex"><span style={{ color: "var(--color-medium-light)" }}>#{this.state.color4.toUpperCase()}</span></div>
                            </div>
                        </div>
                        <div className="buttonRow" style={{ margin: "auto" }}>
                            <div className="dropdown">
                                <button className="dropbtn kitCardButton">Edit</button>
                                <div className="dropdown-content">
                                    <div onClick={() => this.editName()}>Edit Name</div>
                                    <div onClick={() => this.props.history.push(`/${this.state.id}/editcolors`)}>Edit Colors</div>
                                    <div onClick={() => this.props.history.push(`/${this.state.id}/editfonts`)}>Edit Fonts</div>
                                </div>
                            </div>
                            <button type="button" data-toggle="button" className="kitCardButton" onClick={() => this.props.history.push("/" + this.state.id + "/css")}>Get CSS Code</button>
                            {
                                (this.state.preview === true) ? (
                                    <button type="button" data-toggle="button" onClick={() => this.togglePreview()} className="kitCardButton">Disable Preview</button>
                                ) : (
                                        <button type="button" data-toggle="button" onClick={() => this.togglePreview()} className="kitCardButton">Preview</button>
                                    )
                            }
                        </div>
                    </div>
                </div>
                <button type="button" data-toggle="button" style={{margin: "auto", marginTop: "12px"}} onClick={() => this.props.history.push("/")} className="solidButton">Cancel</button>
            </React.Fragment>
        )
    }
}

export default StyleKitDetails