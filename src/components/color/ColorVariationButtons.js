import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'

class ColorVariationButtons extends Component {
    render() {
        return (
            <React.Fragment>
            <ReactTooltip place="bottom" type="light" effect="solid"/>
            <div className="btn-group">
                <div className="darkText">Range<div className="tooltip" data-tip="Adjust the contrast of your palette">?</div></div>
                {
                    (this.props.variation === "low") ? (
                        <span>
                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("low")} className="btn active">Low</button>
                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("high")} className="btn">High</button>
                        </span>
                    ) : (
                            <span>
                                <button type="button" data-toggle="button" onClick={() => this.props.setVariation("low")} className="btn">Low</button>
                                <button type="button" data-toggle="button" onClick={() => this.props.setVariation("high")} className="btn active">High</button>
                            </span>
                        )
                }
            </div>
            </React.Fragment>
        )
    }
}

export default ColorVariationButtons