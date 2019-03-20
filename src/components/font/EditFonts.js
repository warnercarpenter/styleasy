import React, { Component } from 'react'
import "./fonts.css"
import FontSelect from './FontSelect';
import kitManager from '../../modules/kitManager';
import { Prompt } from 'react-router'

class EditFonts extends Component {

    state = {
        variation: "all",
        mainOrSecondary: "main",
        main_font: "Helvetica",
        secondary_font: "Arial",
        searchTerms: "",
        color1: "",
        color2: "",
        color3: "",
        color4: "",
        name: "",
        userId: "",
        id: "",
        edited: false
    }

    changeSearchTerms = (searchTermObject) => {
        this.setState(searchTermObject)
    }

    setMainOrSecondary = (mainOrSecondary) => {
        this.setState({ mainOrSecondary: mainOrSecondary })
    }

    setVariation = (variation) => {
        this.setState({ variation: variation })
    }

    setMainFont = (font) => {
        this.setState({
            main_font: font,
            edited: true
        })
    }

    setSecondaryFont = (font) => {
        this.setState({
            secondary_font: font,
            edited: true
        })
    }

    saveFonts = () => {
        const newObject = {}
        newObject.color1 = this.state.color1
        newObject.color2 = this.state.color2
        newObject.color3 = this.state.color3
        newObject.color4 = this.state.color4
        newObject.name = this.state.name
        newObject.userId = this.state.userId
        newObject.main_font = this.state.main_font
        newObject.secondary_font = this.state.secondary_font
        newObject.id = this.state.id
        this.props.editKitFonts(newObject)
        this.setState({ edited: false })
    }

    componentDidMount() {
        if (this.props.pathname !== "/stylekits") { this.props.setPathname("/stylekits") }
        const newState = {}
        kitManager.get(this.props.match.params.styleKitId)
            .then(kit => {
                newState.name = kit.name
                newState.userId = kit.userId
                newState.main_font = kit.main_font
                newState.secondary_font = kit.secondary_font
                newState.id = kit.id
                newState.color1 = kit.color1
                newState.color2 = kit.color2
                newState.color3 = kit.color3
                newState.color4 = kit.color4
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
                <div className="kitName" style={{marginBottom: "10px"}}>Editing: <span style={{color: "var(--color-light)"}}>{this.state.name}</span></div>
                <div className="fontMaster">
                    <section className="fontBox">
                        <FontSelect
                            setMainOrSecondary={this.setMainOrSecondary}
                            mainOrSecondary={this.state.mainOrSecondary}
                            setVariation={this.setVariation}
                            variation={this.state.variation}
                            searchTerms={this.state.searchTerms}
                            changeSearchTerms={this.changeSearchTerms}
                            main_font={this.state.main_font}
                            setMainFont={this.setMainFont}
                            secondary_font={this.state.secondary_font}
                            setSecondaryFont={this.setSecondaryFont}
                            fontFamilies={this.props.fontFamilies}
                        />
                    </section>
                    <div className="editSaveAndCancel">
                        <button className="returnButton" type="button" data-toggle="button" onClick={() => this.saveFonts()}>Save</button>
                        <button className="returnButton" type="button" data-toggle="button" onClick={() => this.props.history.push("/stylekits")}>Cancel</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EditFonts