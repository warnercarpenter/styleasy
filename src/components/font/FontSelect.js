import React, { Component } from 'react'
import MainOrSecondaryButtons from './MainOrSecondaryButtons'
import FontVariationButtons from './FontVariationButtons'
import FontPicker from './FontPicker'
import FontPreview from './FontPreview'

class FontSelect extends Component {

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange.searchTerms = evt.target.value
        this.props.changeSearchTerms(stateToChange)
    }

    render() {
        return (
            <div className="fontDisplay">
                <div className="fontPreviewAndOptions">
                <FontPreview main_font={this.props.main_font} secondary_font={this.props.secondary_font} />
                    <div className="buttonBox">
                        <MainOrSecondaryButtons setMainOrSecondary={this.props.setMainOrSecondary} mainOrSecondary={this.props.mainOrSecondary} />
                        <hr className="buttonLine" />
                        <FontVariationButtons setVariation={this.props.setVariation} variation={this.props.variation} />
                        <input type="text" spellCheck="false" autoComplete="off" className="fontSearch" onChange={this.handleFieldChange} placeholder="Search"></input>
                    </div>
                </div>
                <FontPicker
                mainOrSecondary={this.props.mainOrSecondary}
                variation={this.props.variation}
                searchTerms={this.props.searchTerms}
                main_font={this.props.main_font}
                setMainFont={this.props.setMainFont}
                secondary_font={this.props.secondary_font}
                setSecondaryFont={this.props.setSecondaryFont}
                fontFamilies={this.props.fontFamilies}
                />
            </div>
        )
    }
}

export default FontSelect