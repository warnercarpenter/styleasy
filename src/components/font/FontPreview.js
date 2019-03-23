import React, { Component } from "react"

class FontPreview extends Component {

    render() {
        return (
            <React.Fragment>
                {
                    (this.props.mainOrSecondary === "main") ? (
                        <div className="fontPreview">
                            <div className="mainFontDisplay" style={{ fontFamily: this.props.main_font }}><span onClick={() => this.props.setMainOrSecondary("main")} className="mainFontDisplayText">{this.props.main_font}</span></div>
                            <div className="secondaryFontDisplay" style={{ fontFamily: this.props.secondary_font, color: "var(--color-medium-light" }}><span onClick={() => this.props.setMainOrSecondary("secondary")} className="secondaryFontDisplayText">{this.props.secondary_font}</span></div>
                        </div>
                    ) : (
                        <div className="fontPreview">
                            <div className="mainFontDisplay" style={{ fontFamily: this.props.main_font, color: "var(--color-medium-light" }}><span onClick={() => this.props.setMainOrSecondary("main")} className="mainFontDisplayText">{this.props.main_font}</span></div>
                            <div className="secondaryFontDisplay" style={{ fontFamily: this.props.secondary_font }}><span onClick={() => this.props.setMainOrSecondary("secondary")} className="secondaryFontDisplayText">{this.props.secondary_font}</span></div>
                        </div>
                    )
                }
            </React.Fragment>
        )
}
}

export default FontPreview