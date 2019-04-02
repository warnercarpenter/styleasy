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
                <div className="kitName" style={{marginBottom: "15px"}}>Select a kit to view or edit</div>
                {
                    (this.props.styleKits.length < 1 && this.state.loaded === true) ? (
                        <p className="uhOh">Uh oh! It looks like you haven't created any kits.<br />Create a new kit to get started!</p>
                    ) : (null)
                }
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
                        <div className="addNewKit">
                            <button className="addNewKitButton">Create new kit</button>
                        </div>
                    </section>
                }
            </div>
        )
    }
}

export default StyleKits