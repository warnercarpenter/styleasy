import React, { Component } from 'react'

class FontVariationButtons extends Component {
    render() {
        return (
            <div className="btn-group">
                {
                    (this.props.variation === "serif") ? (
                        <div className="fontVariationButtonGroup">
                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("serif")} className="btn active">Serif</button>
                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("sansSerif")} className="btn">Sans Serif</button>
                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("handwriting")} className="btn">Handwriting</button><br/>
                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("display")} className="btn">Display</button>
                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("monospace")} className="btn">Monospace</button>
                        </div>
                    ) : (
                            (this.props.variation === "sansSerif") ? (
                                <div className="fontVariationButtonGroup">
                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("serif")} className="btn">Serif</button>
                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("sansSerif")} className="btn active">Sans Serif</button>
                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("handwriting")} className="btn">Handwriting</button><br/>
                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("display")} className="btn">Display</button>
                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("monospace")} className="btn">Monospace</button>
                                </div>
                            ) : (
                                    (this.props.variation === "display") ? (
                                        <div className="fontVariationButtonGroup">
                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("serif")} className="btn">Serif</button>
                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("sansSerif")} className="btn">Sans Serif</button>
                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("handwriting")} className="btn">Handwriting</button><br/>
                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("display")} className="btn active">Display</button>
                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("monospace")} className="btn">Monospace</button>
                                        </div>
                                    ) : (
                                            (this.props.variation === "handwriting") ? (
                                                <div className="fontVariationButtonGroup">
                                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("serif")} className="btn">Serif</button>
                                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("sansSerif")} className="btn">Sans Serif</button>
                                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("handwriting")} className="btn active">Handwriting</button><br/>
                                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("display")} className="btn">Display</button>
                                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("monospace")} className="btn">Monospace</button>
                                                </div>
                                            ) : (
                                                    <div className="fontVariationButtonGroup">
                                                        <button type="button" data-toggle="button" onClick={() => this.props.setVariation("serif")} className="btn">Serif</button>
                                                        <button type="button" data-toggle="button" onClick={() => this.props.setVariation("sansSerif")} className="btn">Sans Serif</button>
                                                        <button type="button" data-toggle="button" onClick={() => this.props.setVariation("handwriting")} className="btn">Handwriting</button><br/>
                                                        <button type="button" data-toggle="button" onClick={() => this.props.setVariation("display")} className="btn">Display</button>
                                                        <button type="button" data-toggle="button" onClick={() => this.props.setVariation("monospace")} className="btn active">Monospace</button>
                                                    </div>

                                                )
                                        )
                                )
                        )
                }
            </div>
        )
    }
}

export default FontVariationButtons