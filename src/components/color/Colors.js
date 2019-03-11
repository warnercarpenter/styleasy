import React, { Component } from 'react'
import { ChromePicker } from 'react-color'
import ColorDisplay from './ColorDisplay'
import "./colors.css"
import tinycolor from 'tinycolor2'
import materialpalette from 'material-palette'


class Colors extends Component {

    state = {
        variation: "high",
        sourceHex: "1122ba",
        colors: ["949df5", "606ff0", "1122ba", "070e4b"]
    }

    setVariation = (variation) => {
        const newState = {}
        newState.variation = variation
        this.setState(newState, () => this.reloadColors())
    }

    setScheme = (scheme) => {
        const newState = {}
        newState.scheme = scheme
        this.setState(newState)
    }

    setSourceHex = (color) => {
        this.setState({sourceHex: color.hex.split("#")[1]}, () => this.reloadColors())
    }

    reloadColors = () => {
        const newState = {}
        const hsl = tinycolor(this.state.sourceHex).toHsl()
        const palette = materialpalette({
            h: hsl.h,
            s: hsl.s * 100,
            l: hsl.l * 100
        })
        if (palette["900"].l === 1)
            palette["900"].l = 2

        if (this.state.variation === "low") {
            newState.colors = [tinycolor(palette["200"]).toHex(), tinycolor(palette["300"]).toHex(), this.state.sourceHex, tinycolor(palette["800"]).toHex()]
        }
        if (this.state.variation === "high") {
            newState.colors = [tinycolor(palette["100"]).toHex(), tinycolor(palette["200"]).toHex(), this.state.sourceHex, tinycolor(palette["900"]).toHex()]
        }
        this.setState(newState)
    }

    componentDidMount() {
        if (this.props.pathname !== "/") {this.props.setPathname("/")}
    }

    render() {
        return (
            <div className="colorMaster">
                <section className="colorBox">
                    <ColorDisplay setVariation={this.setVariation} reloadColors={this.reloadColorsVariation} colors={this.state.colors} variation={this.state.variation} />
                    <div className="colorvl"></div>
                    <ChromePicker
                    color={this.state.sourceHex}
                        disableAlpha={true}
                        onChange={this.setSourceHex}
                    />
                </section>
            </div>
        )
    }
}

export default Colors