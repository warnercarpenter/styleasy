import React, { Component } from "react"
import InfiniteScroll from 'react-infinite-scroller';
import fontCategories from './fontCategories'

class FontPicker extends Component {

    loadMorePlaceholder() {
        console.log("InfiniteScroll: Loading ...")
    }

    render() {
        return (
            <div className="fontContainer">
                <InfiniteScroll
                    initialLoad={true}
                    pageStart={0}
                    hasMore={false}
                    loadMore={this.loadMorePlaceholder}
                    loader={<div className="loader" key={0}>Loading fonts ...</div>}
                    useWindow={false}
                >
                    {
                        (this.props.variation === "all") ? (
                            this.props.fontFamilies
                                .filter(currentFont => currentFont.toUpperCase().includes(this.props.searchTerms.toUpperCase()))
                                .map(currentFont =>
                                    (this.props.mainOrSecondary === "main") ? (
                                        (currentFont === this.props.main_font) ?
                                            (<div className="listedFont selected" key={currentFont} onClick={() => this.props.setMainFont(currentFont)} style={{ fontFamily: currentFont }}>{currentFont}</div>) :
                                            (<div className="listedFont" key={currentFont} onClick={() => this.props.setMainFont(currentFont)} style={{ fontFamily: currentFont }}>{currentFont}</div>)
                                    ) : (
                                            (currentFont === this.props.secondary_font) ?
                                                (<div className="listedFont selected" key={currentFont} onClick={() => this.props.setSecondaryFont(currentFont)} style={{ fontFamily: currentFont }}>{currentFont}</div>) :
                                                (<div className="listedFont" key={currentFont} onClick={() => this.props.setSecondaryFont(currentFont)} style={{ fontFamily: currentFont }}>{currentFont}</div>)
                                        )
                                )
                        ) : (
                                this.props.fontFamilies.filter(currentFont => fontCategories[`${this.props.variation}`].includes(currentFont))
                                    .filter(currentFont => currentFont.toUpperCase().includes(this.props.searchTerms.toUpperCase()))
                                    .map(currentFont =>
                                        (this.props.mainOrSecondary === "main") ? (
                                            (currentFont === this.props.main_font) ?
                                                (<div className="listedFont selected" key={currentFont} onClick={() => this.props.setMainFont(currentFont)} style={{ fontFamily: currentFont }}>{currentFont}</div>) :
                                                (<div className="listedFont" key={currentFont} onClick={() => this.props.setMainFont(currentFont)} style={{ fontFamily: currentFont }}>{currentFont}</div>)
                                        ) : (
                                                (currentFont === this.props.secondary_font) ?
                                                    (<div className="listedFont selected" key={currentFont} onClick={() => this.props.setSecondaryFont(currentFont)} style={{ fontFamily: currentFont }}>{currentFont}</div>) :
                                                    (<div className="listedFont" key={currentFont} onClick={() => this.props.setSecondaryFont(currentFont)} style={{ fontFamily: currentFont }}>{currentFont}</div>)
                                            )
                                    )
                            )
                    }
                </InfiniteScroll>
            </div>
        )
    }
}

export default FontPicker