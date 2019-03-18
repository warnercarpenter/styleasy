import React, { Component } from "react"

class FontPreview extends Component {

    render() {
        return (
            <div className="fontPreview">
                <div className="mainFontDisplay" style={{ fontFamily: this.props.main_font }}>{this.props.main_font}</div>
                <div className="secondaryFontDisplay" style={{ fontFamily: this.props.secondary_font }}>{this.props.secondary_font}</div>
            </div>
        )
    }
}

export default FontPreview