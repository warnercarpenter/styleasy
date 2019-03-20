import React, { Component } from 'react'
import "./fonts.css"
import FontSelect from './FontSelect';
import SaveFontButton from './SaveFontButton'
import { Prompt } from 'react-router'

class Fonts extends Component {

    state = {
        variation: "all",
        mainOrSecondary: "main",
        main_font: "Helvetica",
        secondary_font: "Arial",
        searchTerms: "",
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
        const fontsForKit = {}
        fontsForKit.main_font = this.state.main_font
        fontsForKit.secondary_font = this.state.secondary_font
        this.props.saveToSessionStorage(fontsForKit, "fonts")
        this.props.savedToCurrentAlert()
        this.setState({edited: false})
    }

    componentDidMount() {
        if (this.props.pathname !== "/fonts") { this.props.setPathname("/fonts") }
        if (sessionStorage.getItem("main_font") && sessionStorage.getItem("secondary_font")) {
            const fontObject = {}
            fontObject.main_font = sessionStorage.getItem("main_font")
            fontObject.secondary_font = sessionStorage.getItem("secondary_font")
            this.setState(fontObject)
        }
    }

    render() {
        return (
            <React.Fragment>
                <Prompt
                    when={this.state.edited === true}
                    message='You have unsaved changes, are you sure you want to leave?'
                />
                <div className="kitName" style={{marginBottom: "10px"}}>Editing: <span style={{color: "var(--color-light)"}}>Current Kit</span></div>
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
                    <SaveFontButton saveFonts={this.saveFonts} />
                </div>
            </React.Fragment>
        )
    }
}

export default Fonts