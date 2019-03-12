import React, { Component } from 'react'
import "./fonts.css"
import FontSelect from './FontSelect';

class Fonts extends Component {

    state = {
        variation: "sansSerif",
        mainOrSecondary: "main",
        main_font: "Roboto",
        secondary_font: "Poppins",
        searchTerms: ""
    }

    changeSearchTerms = (searchTermObject) => {
        this.setState(searchTermObject)
    }

    setMainOrSecondary = (mainOrSecondary) => {
        this.setState({mainOrSecondary: mainOrSecondary})
    }

    setVariation = (variation) => {
        this.setState({variation: variation})
    }

    setMainFont = (font) => {
        this.setState({main_font: font})
    }

    setSecondaryFont = (font) => {
        this.setState({secondary_font: font})
    }

    componentDidMount() {
        if (this.props.pathname !== "/fonts") {this.props.setPathname("/fonts")}
    }

    render() {
        return (
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
                    />
                </section>
            </div>
        )
    }
}

export default Fonts