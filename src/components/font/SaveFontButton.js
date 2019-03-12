import React, { Component } from 'react'

class SaveFontButton extends Component {
    render() {
        return (
            <button type="button" data-toggle="button" onClick={() => this.props.saveFonts()} className="saveFontButton">Save to Current Kit</button>
        )
    }
}

export default SaveFontButton