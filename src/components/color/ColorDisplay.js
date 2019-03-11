import React, { Component } from 'react'
import ColorVariationButtons from './ColorVariationButtons'

class ColorDisplay extends Component {

    render() {
        return (
            <div className="colorDisplay">
            <div className="colorRow">
                    <div className="colorSquare" style={{backgroundColor: "#" + this.props.colors[0]}}>{""}</div>
                    <div className="colorSquare" style={{backgroundColor: "#" + this.props.colors[1]}}>{""}</div>
                    <div className="colorSquare" style={{backgroundColor: "#" + this.props.colors[2]}}>{""}</div>
                    <div className="colorSquare" style={{backgroundColor: "#" + this.props.colors[3]}}>{""}</div>
            </div>
            <ColorVariationButtons setVariation={this.props.setVariation} variation={this.props.variation} />
            </div>
        )
    }
}

export default ColorDisplay