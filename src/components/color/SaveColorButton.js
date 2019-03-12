import React, { Component } from 'react'

class SaveColorButton extends Component {
    render() {
        return (
            <button type="button" data-toggle="button" onClick={() => this.props.saveColors()} className="saveColorButton">Save to Current Kit</button>
        )
    }
}

export default SaveColorButton