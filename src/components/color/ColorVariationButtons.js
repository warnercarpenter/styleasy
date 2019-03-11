import React, { Component } from 'react'

class ColorVariationButtons extends Component {
    render() {
        return (
            <div className="btn-group">
                <div className="darkText">Range</div>
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
        )
    }
}

export default ColorVariationButtons