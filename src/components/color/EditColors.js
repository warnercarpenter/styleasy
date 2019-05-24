import React, { Component } from 'react'
import { ChromePicker } from 'react-color'
import ColorDisplay from './ColorDisplay'
import tinycolor from 'tinycolor2'
import materialpalette from 'material-palette'
import kitManager from '../../modules/kitManager';
import { Prompt } from 'react-router'
import ReactTooltip from 'react-tooltip'
import Switch from "react-switch";


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
        edited: false,
        previewMode: true
    }

    setVariation = (variation) => {
        const newState = {}
        newState.variation = variation
        this.setState(newState, () => {
            this.reloadColors()
        })
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
        this.props.editKitColors(newObject, this.state.id)
        this.setState({ edited: false })
    }

    reloadPreview = () => {
        document.documentElement.style.setProperty('--color-light', "#" + this.state.colors[0])
        document.documentElement.style.setProperty('--color-medium-light', "#" + this.state.colors[1])
        document.documentElement.style.setProperty('--color-medium-dark', "#" + this.state.colors[2])
        document.documentElement.style.setProperty('--color-dark', "#" + this.state.colors[3])
    }

    resetPreview = () => {
        document.documentElement.style.setProperty('--color-light', "#ffffff")
        document.documentElement.style.setProperty('--color-medium-light', "#ababab")
        document.documentElement.style.setProperty('--color-medium-dark', "#7d7d7d")
        document.documentElement.style.setProperty('--color-dark', "#151515")
    }

    handleChange = (checked) => {
        this.setState({ previewMode: checked });
    }

    checkVariation = (color, reference) => {
        const hsl = tinycolor(color).toHsl()
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

        if (tinycolor(palette["300"]).toHex() === reference) {
            return "low"
        } else {
            return "high"
        }
    }

    componentDidUpdate() {
        if (this.state.previewMode === true) {
            this.reloadPreview()
        } else {
            this.resetPreview()
        }
    }

    componentWillUnmount() {
        this.props.resetStyling()
    }

    componentDidMount() {
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
                newState.variation = this.checkVariation(kit.color3, kit.color2)
                this.setState(newState)
            })
    }

    // render() {
    //     return (
    //         <React.Fragment>
    //             <ReactTooltip multiline={true} place="bottom" type="light" effect="solid" />
    //             <Prompt
    //                 when={this.state.edited === true}
    //                 message='You have unsaved changes, are you sure you want to leave?'
    //             />
    //             <div className="colorMaster">
    //                 <div className="kitName" style={{ marginBottom: "10px" }}>Editing colors for: <span style={{ color: "var(--color-light)" }}>{this.state.name}</span></div>
    //                 <section className="colorBox">
    //                     <ColorDisplay setVariation={this.setVariation} reloadColors={this.reloadColorsVariation} colors={this.state.colors} variation={this.state.variation} />
    //                     <div className="colorvl"></div>
    //                     <div>
    //                         <ChromePicker
    //                             color={this.state.sourceHex}
    //                             disableAlpha={true}
    //                             onChangeComplete={this.setSourceHex}
    //                         />
    //                     </div>
    //                     <div className="editSaveAndCancel">
    //                         <button className="kitCardButton" type="button" data-toggle="button" onClick={() => this.saveColors()}>Save</button>
    //                         <button className="kitCardButton" type="button" data-toggle="button" onClick={() => this.props.history.push(`/${this.state.id}/details`)}>Cancel</button>
    //                     </div>
    //                 </section>
    //             </div>
    //             <label className="previewModeButton">
    //                 <div className="previewKitText">Preview colors <div className="tooltip"
    //                     data-tip="Visualize current color selections">?</div></div>
    //                 <span className="toggle">
    //                     <Switch
    //                         onChange={this.handleChange}
    //                         checked={this.state.previewMode}
    //                         offColor={"#7d7d7d"}
    //                         onColor={"#" + this.state.colors[2]}
    //                         boxShadow={"0px 0px 3px black"}
    //                     />
    //                 </span>
    //             </label>
    //         </React.Fragment>
    //     )
    // }

    render() {
        return (
            <React.Fragment>
                <ReactTooltip multiline={true} place="bottom" type="light" effect="solid" />
                <Prompt
                    when={this.state.edited === true}
                    message='You have unsaved changes, are you sure you want to leave?'
                />
                <div className="colorMaster">
                    <div className="kitName" style={{ marginBottom: "10px" }}><span style={{ color: "var(--color-medium-light)" }}>Editing colors for: </span>{this.state.name}</div>
                    <div className="colorBox">
                        <ColorDisplay setVariation={this.setVariation} reloadColors={this.reloadColorsVariation} colors={this.state.colors} variation={this.state.variation} />
                        <div>
                            <ChromePicker
                                color={this.state.sourceHex}
                                disableAlpha={true}
                                onChangeComplete={this.setSourceHex}
                            />
                        </div>
                    </div>
                    <div className="editSaveAndCancel">
                        <button className="solidButton" type="button" data-toggle="button" onClick={() => this.saveColors()}>Save</button>
                        <button className="solidButton" type="button" data-toggle="button" onClick={() => this.props.history.push(`/${this.state.id}/details`)}>Cancel</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EditColors