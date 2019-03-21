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
                <div className="kitCard" onClick={() => { this.props.history.push(`/${this.props.kit.id}/details`) }}>
                    <div className="topRow">
                        <div className="colorGrid">
                            <div className="colorGridSquare" style={{ backgroundColor: "#" + this.props.kit.color1 }}></div>
                            <div className="colorGridSquare" style={{ backgroundColor: "#" + this.props.kit.color2 }}></div>
                            <div className="colorGridSquare" style={{ backgroundColor: "#" + this.props.kit.color3 }}></div>
                            <div className="colorGridSquare" style={{ backgroundColor: "#" + this.props.kit.color4 }}></div>
                        </div>
                        <div className="kitCardFonts">
                            <div className="kitCardMainFont" style={{ fontFamily: this.props.kit.main_font }}>{this.props.kit.main_font}</div>
                            <div className="kitCardSecondaryFont" style={{ fontFamily: this.props.kit.secondary_font }}>{this.props.kit.secondary_font}</div>
                        </div>
                    </div>
                    {/* <div className="bottomRow">
                        <button className="kitCardButton" onClick={() => { this.props.history.push(`/stylekits/${this.props.kit.id}/details`) }}>Details</button>
                        <div className="dropdown">
                            <div className="dropdown-content">
                                <div onClick={() => this.props.editKitName(this.props.kit.id)}>Edit name</div>
                                <div onClick={() => this.props.history.push(`/stylekits/${this.props.kit.id}/editcolors`)}>Edit colors</div>
                                <div onClick={() => this.props.history.push(`/stylekits/${this.props.kit.id}/editfonts`)}>Edit fonts</div>
                            </div>
                            <button className="dropbtn">Edit</button>
                        </div>
                        <button className="kitCardButton" onClick={() => this.props.deleteKit(this.props.kit.id)}>Delete</button>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default KitCard