import React, { Component } from 'react'
import KitCard from './KitCard'

class StyleKits extends Component {

    state = {
        loaded: false
    }

    componentWillReceiveProps() {
        this.setState({ loaded: true })
    }

    render() {
        return (
            <div>
                <div className="kitName" style={{ fontSize: "1.25em", color: "var(--color-medium-light)"}}>Select a preset to begin</div>
                <hr className="kitNameLine" />
                {
                    <section className="styleKits">
                        <div className="kitCardContainer">
                            {
                                this.props.styleKits.map(currentKit => {
                                    return (
                                        <KitCard styleKits={this.props.styleKits} setPathname={this.props.setPathname} editKitName={this.props.editKitName} history={this.props.history} deleteKit={this.props.deleteKit} key={currentKit.id} kit={currentKit} />
                                    )
                                })
                            }
                        </div>
                    </section>
                }
            </div>
        )
    }
}

export default StyleKits