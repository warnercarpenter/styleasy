import React, { Component } from 'react'

class MainOrSecondaryButtons extends Component {
    render() {
        return (
            <div className="btn-group">
                {
                    (this.props.mainOrSecondary === "main") ? (
                        <span>
                            <button type="button" data-toggle="button" onClick={() => this.props.setMainOrSecondary("main")} className="btn MOS active">Main Font</button>
                            <button type="button" data-toggle="button" onClick={() => this.props.setMainOrSecondary("secondary")} className="btn MOS">Sub Font</button>
                        </span>
                    ) : (
                            <span>
                                <button type="button" data-toggle="button" onClick={() => this.props.setMainOrSecondary("main")} className="btn MOS">Main Font</button>
                                <button type="button" data-toggle="button" onClick={() => this.props.setMainOrSecondary("secondary")} className="btn MOS active">Sub Font</button>
                            </span>
                        )
                }
            </div>
        )
    }
}

export default MainOrSecondaryButtons