import React, { Component } from 'react'
import { ChromePicker } from 'react-color'
import ColorDisplay from './ColorDisplay'
import "./colors.css"
import tinycolor from 'tinycolor2'
import materialpalette from 'material-palette'
import kitManager from '../../modules/kitManager';
import { Prompt } from 'react-router'


class EditColors extends Component {

    state = {
        variation: "high",
        sourceHex: "1122ba",
        colors: ["949df5", "606ff0", "1122ba", "070e4b"],
        name: "",
        userId: "",
        main_font: "",
        secondary_font: "",
        id: "",
        edited: false
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
        this.setState({ sourceHex: color.hex.split("#")[1] }, () => this.reloadColors())
    }

    reloadColors = () => {
        const newState = {}
        newState.edited = true
        const hsl = tinycolor(this.state.sourceHex).toHsl()
        const palette = materialpalette({
            h: hsl.h,
            s: hsl.s * 100,
            l: hsl.l * 100
        })
        if (palette["900"].l === 1)
            palette["900"].l = 2
        if (palette["50"].s === 1)
            palette["50"].s = 2
        if (palette["100"].s === 1)
            palette["100"].s = 2
        if (palette["200"].s === 1)
            palette["200"].s = 2
        if (palette["300"].s === 1)
            palette["300"].s = 2
        if (palette["800"].s === 1)
            palette["800"].s = 2
        if (palette["900"].s === 1)
            palette["900"].s = 2

        if (this.state.variation === "low") {
            newState.colors = [tinycolor(palette["100"]).toHex(), tinycolor(palette["300"]).toHex(), this.state.sourceHex, tinycolor(palette["800"]).toHex()]
        }
        if (this.state.variation === "high") {
            newState.colors = [tinycolor(palette["50"]).toHex(), tinycolor(palette["200"]).toHex(), this.state.sourceHex, tinycolor(palette["900"]).toHex()]
        }
        this.setState(newState)
    }

    saveColors = () => {
        const newObject = {}
        newObject.color1 = this.state.colors[0]
        newObject.color2 = this.state.colors[1]
        newObject.color3 = this.state.colors[2]
        newObject.color4 = this.state.colors[3]
        newObject.name = this.state.name
        newObject.userId = this.state.userId
        newObject.main_font = this.state.main_font
        newObject.secondary_font = this.state.secondary_font
        newObject.id = this.state.id
        this.props.editKitColors(newObject)
        this.setState({edited: false})
    }

    componentDidMount() {
        if (this.props.pathname !== "/stylekits") { this.props.setPathname("/stylekits") }
        const newState = {}
        const colorArray = []
        kitManager.get(this.props.match.params.styleKitId)
            .then(kit => {
                newState.name = kit.name
                newState.userId = kit.userId
                newState.main_font = kit.main_font
                newState.secondary_font = kit.secondary_font
                newState.id = kit.id
                colorArray.push(kit.color1)
                colorArray.push(kit.color2)
                colorArray.push(kit.color3)
                colorArray.push(kit.color4)
                newState.sourceHex = kit.color3
                newState.colors = colorArray
                this.setState(newState)
            })
    }

    render() {
        return (
            <React.Fragment>
                <Prompt
                    when={this.state.edited === true}
                    message='You have unsaved changes, are you sure you want to leave?'
                />
                <div className="colorMaster">
                <div className="kitName" style={{marginBottom: "10px"}}>Editing: <span style={{color: "var(--color-light)"}}>{this.state.name}</span></div>
                    <section className="colorBox">
                        <ColorDisplay setVariation={this.setVariation} reloadColors={this.reloadColorsVariation} colors={this.state.colors} variation={this.state.variation} />
                        <div className="colorvl"></div>
                        <ChromePicker
                            color={this.state.sourceHex}
                            disableAlpha={true}
                            onChange={this.setSourceHex}
                        />
                        <div className="editSaveAndCancel">
                            <button className="returnButton" type="button" data-toggle="button" onClick={() => this.saveColors()}>Save</button>
                            <button className="returnButton" type="button" data-toggle="button" onClick={() => this.props.history.push("/stylekits")}>Cancel</button>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

export default EditColors