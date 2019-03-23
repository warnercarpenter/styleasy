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
                <ReactTooltip multiline={true} place="bottom" type="light" effect="solid" />
                <div className="fontDisplay">
                <div className="fontTooltip"
                    data-tip="Click on a font to edit it">?</div>
                    <div className="fontPreviewAndOptions">
                        <FontPreview setMainOrSecondary={this.props.setMainOrSecondary} mainOrSecondary={this.props.mainOrSecondary} main_font={this.props.main_font} secondary_font={this.props.secondary_font} />
                        <div className="buttonBox">
                            <div className="previewKitText" style={{ marginTop: "2px", color:"var(--color-medium-dark)"}}>Filter <div className="tooltip"
                                data-tip="Filter fonts by category">?</div></div>
                                <hr className="buttonLine"/>
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
            </React.Fragment>
        )
    }
}

export default FontSelect