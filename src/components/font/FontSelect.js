import React, { Component } from 'react'
import FontVariationButtons from './FontVariationButtons'
import FontPicker from './FontPicker'
import FontPreview from './FontPreview'
import ReactTooltip from 'react-tooltip'

class FontSelect extends Component {

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange.searchTerms = evt.target.value
        this.props.changeSearchTerms(stateToChange)
    }

    render() {
        return (
            <React.Fragment>
                <div className="fontDisplay">
                    <div className="fontPreviewAndOptions">
                        <FontPreview setMainOrSecondary={this.props.setMainOrSecondary} mainOrSecondary={this.props.mainOrSecondary} main_font={this.props.main_font} secondary_font={this.props.secondary_font} />
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
                        <div className="buttonBox">
                            <FontVariationButtons setVariation={this.props.setVariation} variation={this.props.variation} />
                            <input type="text" spellCheck="false" autoComplete="off" className="fontSearch" onChange={this.handleFieldChange} placeholder="Search"></input>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FontSelect