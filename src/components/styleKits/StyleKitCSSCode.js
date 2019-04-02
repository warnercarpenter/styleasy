import React, { Component } from "react"
import kitManager from "../../modules/kitManager"

class StyleKitCSSCode extends Component {
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
            <div className="kitDetailsMaster">
                <div className="kitNameDetails">CSS code for: <span style={{color: "var(--color-light)"}}>{this.state.name}</span></div>
                <div className="styleKitEmbedCode">
                    <div className="colorEmbedCode">
                        <div className="individualColorEmbed">
                            <div className="colorEmbedSquare" style={{ backgroundColor: "#" + this.state.color1 }}></div>
                            <div className="embedInputAndTitle">
                                <div className="embedTitle">Color 1:</div>
                                <input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="color1code" onClick={() => document.getElementById("color1code").select()} className="embedCode" readonly value={"--color-light: #" + this.state.color1 + ";"}></input>
                            </div>
                        </div>
                        <div className="individualColorEmbed">
                            <div className="colorEmbedSquare" style={{ backgroundColor: "#" + this.state.color2 }}></div>
                            <div className="embedInputAndTitle">
                                <div className="embedTitle">Color 2:</div>
                                <input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="color2code" onClick={() => document.getElementById("color2code").select()} className="embedCode" readonly value={"--color-medium-light: #" + this.state.color2 + ";"}></input>
                            </div>
                        </div>
                        <div className="individualColorEmbed">
                            <div className="colorEmbedSquare" style={{ backgroundColor: "#" + this.state.color3 }}></div>
                            <div className="embedInputAndTitle">
                                <div className="embedTitle">Color 3:</div>
                                <input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="color3code" onClick={() => document.getElementById("color3code").select()} className="embedCode" readonly value={"--color-medium-dark: #" + this.state.color3 + ";"}></input>
                            </div>
                        </div>
                        <div className="individualColorEmbed">
                            <div className="colorEmbedSquare" style={{ backgroundColor: "#" + this.state.color4 }}></div>
                            <div className="embedInputAndTitle">
                                <div className="embedTitle">Color 4:</div>
                                <input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" id="color4code" onClick={() => document.getElementById("color4code").select()} className="embedCode" readonly value={"--color-dark: #" + this.state.color4 + ";"}></input>
                            </div>
                        </div>
                    </div>
                    <div className="fontEmbedCode">
                    </div>
                </div>
                <button type="button" data-toggle="button" onClick={() => this.props.history.push("/" + this.state.id + "/details")} className="returnButton">Return</button>
            </div>
        )
    }
}

export default StyleKitCSSCode