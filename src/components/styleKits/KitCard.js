import React, { Component } from "react"

class KitCard extends Component {
    state = {
        hover: false
    }

    handleMouseEnter = () => {
        this.setState({hover: true})
    }

    handleMouseLeave = () => {
        this.setState({hover: false})
    }

    previewKit = () => {
        console.log("test1")
    }

    cancelPreview = () => {
        console.log("test2")
    }

    render() {
        return (
            <div className="kitCardMaster" onMouseEnter={() => this.handleMouseEnter()} onMouseLeave={() => this.handleMouseLeave()}>
                <div className="kitName">{this.props.kit.name}</div>
                <div className="kitCard" onClick={() => { this.props.history.push(`/${this.props.kit.id}/details`) }}>
                    <div className="colorGrid">
                        <div className="colorGridSquare" style={{ backgroundColor: "#" + this.props.kit.color1 }}></div>
                        <div className="colorGridSquare" style={{ backgroundColor: "#" + this.props.kit.color2 }}></div>
                        <div className="colorGridSquare" style={{ backgroundColor: "#" + this.props.kit.color3 }}></div>
                        <div className="colorGridSquare" style={{ backgroundColor: "#" + this.props.kit.color4 }}></div>
                    </div>
                    <div className="kitCardFonts">
                        <div className="kitCardFontGroup">
                            <div className="kitCardMainFont" style={{ fontFamily: this.props.kit.main_font }}>

                                {this.props.kit.main_font}

                            </div>
                            <div className="kitCardSecondaryFont" style={{ fontFamily: this.props.kit.secondary_font }}>{this.props.kit.secondary_font}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default KitCard