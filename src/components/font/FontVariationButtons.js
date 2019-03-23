import React, { Component } from 'react'

class FontVariationButtons extends Component {
    render() {
        return (
            <div className="btn-group">
                {
                    (this.props.variation === "serif") ? (
                        <div className="fontVariationButtonGroup">
                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("serif")} className="fontVariationButton active">Serif</button>
                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("sansSerif")} className="fontVariationButton">Sans Serif</button>
                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("handwriting")} className="fontVariationButton">Handwriting</button><br />
                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("display")} className="fontVariationButton">Display</button>
                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("monospace")} className="fontVariationButton">Monospace</button>
                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("all")} className="fontVariationButton">All</button>
                        </div>
                    ) : (
                            (this.props.variation === "sansSerif") ? (
                                <div className="fontVariationButtonGroup">
                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("serif")} className="fontVariationButton">Serif</button>
                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("sansSerif")} className="fontVariationButton active">Sans Serif</button>
                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("handwriting")} className="fontVariationButton">Handwriting</button><br />
                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("display")} className="fontVariationButton">Display</button>
                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("monospace")} className="fontVariationButton">Monospace</button>
                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("all")} className="fontVariationButton">All</button>
                                </div>
                            ) : (
                                    (this.props.variation === "display") ? (
                                        <div className="fontVariationButtonGroup">
                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("serif")} className="fontVariationButton">Serif</button>
                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("sansSerif")} className="fontVariationButton">Sans Serif</button>
                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("handwriting")} className="fontVariationButton">Handwriting</button><br />
                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("display")} className="fontVariationButton active">Display</button>
                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("monospace")} className="fontVariationButton">Monospace</button>
                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("all")} className="fontVariationButton">All</button>
                                        </div>
                                    ) : (
                                            (this.props.variation === "handwriting") ? (
                                                <div className="fontVariationButtonGroup">
                                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("serif")} className="fontVariationButton">Serif</button>
                                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("sansSerif")} className="fontVariationButton">Sans Serif</button>
                                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("handwriting")} className="fontVariationButton active">Handwriting</button><br />
                                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("display")} className="fontVariationButton">Display</button>
                                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("monospace")} className="fontVariationButton">Monospace</button>
                                                    <button type="button" data-toggle="button" onClick={() => this.props.setVariation("all")} className="fontVariationButton">All</button>
                                                </div>
                                            ) : (
                                                    (this.props.variation === "monospace") ? (
                                                        <div className="fontVariationButtonGroup">
                                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("serif")} className="fontVariationButton">Serif</button>
                                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("sansSerif")} className="fontVariationButton">Sans Serif</button>
                                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("handwriting")} className="fontVariationButton">Handwriting</button><br />
                                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("display")} className="fontVariationButton">Display</button>
                                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("monospace")} className="fontVariationButton active">Monospace</button>
                                                            <button type="button" data-toggle="button" onClick={() => this.props.setVariation("all")} className="fontVariationButton">All</button>
                                                        </div>
                                                    ) : (
                                                            <div className="fontVariationButtonGroup">
                                                                <button type="button" data-toggle="button" onClick={() => this.props.setVariation("serif")} className="fontVariationButton">Serif</button>
                                                                <button type="button" data-toggle="button" onClick={() => this.props.setVariation("sansSerif")} className="fontVariationButton">Sans Serif</button>
                                                                <button type="button" data-toggle="button" onClick={() => this.props.setVariation("handwriting")} className="fontVariationButton">Handwriting</button><br />
                                                                <button type="button" data-toggle="button" onClick={() => this.props.setVariation("display")} className="fontVariationButton">Display</button>
                                                                <button type="button" data-toggle="button" onClick={() => this.props.setVariation("monospace")} className="fontVariationButton">Monospace</button>
                                                                <button type="button" data-toggle="button" onClick={() => this.props.setVariation("all")} className="fontVariationButton active">All</button>
                                                            </div>
                                                        )
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