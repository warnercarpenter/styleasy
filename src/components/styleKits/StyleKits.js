import React, { Component } from 'react'
import KitCard from './KitCard'
import './stylekits.css'


class StyleKits extends Component {

    componentDidMount() {
        if (this.props.pathname !== "/stylekits") { this.props.setPathname("/stylekits") }
    }

    render() {
        return (
            <section className="styleKits">
                {
                    this.props.styleKits.filter(currentKit => currentKit.userId = parseInt(sessionStorage.getItem("credentials")))
                    .map(currentKit => {
                            return (
                                <KitCard deleteKit={this.props.deleteKit} key={currentKit.id} kit={currentKit} />
                            )
                        })
                }
            </section>
        )
    }
}

export default StyleKits