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
                <div className="kitName" style={{marginBottom: "15px"}}>Welcome to Styleasy! Select a preset to get started.</div>
                {
                    <section className="styleKits">
                        <div className="kitCardContainer">
                            {
                                (this.props.styleKits.length) ? (
                                    this.props.styleKits.filter(currentKit => currentKit.userId === parseInt(sessionStorage.getItem("credentials")))
                                        .map(currentKit => {
                                            return (
                                                <KitCard styleKits={this.props.styleKits} setPathname={this.props.setPathname} editKitName={this.props.editKitName} history={this.props.history} deleteKit={this.props.deleteKit} key={currentKit.id} kit={currentKit} />
                                            )
                                        })
                                ) : (null)
                            }
                        </div>
                    </section>
                }
            </div>
        )
    }
}

export default StyleKits