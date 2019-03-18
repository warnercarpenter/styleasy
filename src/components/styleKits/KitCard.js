import React, { Component } from "react"

class KitCard extends Component {
    state = {}

    previewKit = () => {
        console.log("test1")
    }

    cancelPreview = () => {
        console.log("test2")
    }

    render() {
        return (
            <div className="kitCardMaster">
                <div className="kitName">{this.props.kit.name}</div>
                <div className="kitCard">
                    <div className="topRow">
                        <div className="colorGrid">
                            <div className="colorGridSquare" style={{ backgroundColor: "#" + this.props.kit.color1 }}></div>
                            <div className="colorGridSquare" style={{ backgroundColor: "#" + this.props.kit.color2 }}></div>
                            <div className="colorGridSquare" style={{ backgroundColor: "#" + this.props.kit.color3 }}></div>
                            <div className="colorGridSquare" style={{ backgroundColor: "#" + this.props.kit.color4 }}></div>
                        </div>
                        <div className="kitCardFonts">
                            <div className="kitCardMainFont" style={{ fontFamily: this.props.kit.main_font}}>{this.props.kit.main_font}</div>
                            <div className="kitCardSecondaryFont" style={{ fontFamily: this.props.kit.secondary_font}}>{this.props.kit.secondary_font}</div>
                        </div>
                    </div>
                    <div className="bottomRow">
                        <button className="kitCardButton" onMouseOver={this.previewKit} onMouseOut={this.cancelPreview}>Preview</button>
                        <button className="kitCardButton">Details</button>
                        <button className="kitCardButton">Edit</button>
                        <button className="kitCardButton" onClick={() => this.props.deleteKit(this.props.kit.id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default KitCard