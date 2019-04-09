import React, { Component } from 'react'
import KitCard from './KitCard'
import './stylekits.css'


class StyleKits extends Component {

    componentDidMount() {
        if (this.props.pathname !== "/stylekits") { this.props.setPathname("/stylekits") }
    }

    render() {
        return (
            (this.props.styleKits.filter(currentKit => currentKit.userId === parseInt(sessionStorage.getItem("credentials"))).length > 0) ? (
                <section className="styleKits">
                    {
                        this.props.styleKits.filter(currentKit => currentKit.userId === parseInt(sessionStorage.getItem("credentials")))
                            .map(currentKit => {
                                return (
                                    <KitCard setPathname={this.props.setPathname} editKitName={this.props.editKitName} history={this.props.history} deleteKit={this.props.deleteKit} key={currentKit.id} kit={currentKit} />
                                )
                            })
                    }
                </section>
            ) : (
                    <section className="styleKits">
                        <div className="centeredUhOh" style={{textAlign: "center"}}>Uh oh! Looks like you haven't created any kits.<br />Try saving your current kit to get started!</div>
                    </section>
                )
        )
    }
}

export default StyleKits