import React, { Component } from "react"
import InfiniteScroll from 'react-infinite-scroller';
import fontCategories from './fontCategories'

class FontPicker extends Component {

    state = {
        fontFamilies: [],
    }

    componentDidMount() {
        fetch(`https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=AIzaSyB9LGN_4znWzWjBthBGAnxBW7u77rvo6tY`)
            .then(e => e.json())
            .then(e => {
                const newState = {
                    fontFamilies: []
                }
                e.items.forEach(currentFont => {
                    const family = currentFont.family
                    newState.fontFamilies.push(family)
                })
                this.setState(newState)
            })
    }

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
                    {this.state.fontFamilies.filter(currentFont => fontCategories[`${this.props.variation}`].includes(currentFont))
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
                        )}
                </InfiniteScroll>
            </div>
        )
    }
}

export default FontPicker