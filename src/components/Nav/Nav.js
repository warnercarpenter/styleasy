import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

class Nav extends Component {
    logout = () => {
        sessionStorage.clear("credentials")
        this.props.setAuth()
    }

    render() {
        return (
            <ul className="navBar">
                <li className="nav-item">
                    {
                        (this.props.pathname === "/") ? (
                            <Link className="nav-link active" to="/">
                                Colors
                        </Link>
                        ) : (
                                <Link className="nav-link" to="/">
                                    Colors
                        </Link>
                            )
                    }
                </li>
                <li className="nav-item">
                    {
                        (this.props.pathname === "/fonts") ? (
                            <Link className="nav-link active" to="/fonts">
                                Fonts
                        </Link>
                        ) : (
                                <Link className="nav-link" to="/fonts">
                                    Fonts
                        </Link>
                            )
                    }
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/following">Following</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/stylekits">Style Kits</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/currentkit">Current Kit</Link>
                </li>
                {/* <button
                        type="button"
                        className="btn btn-outline-info"
                        onClick={this.logout}>
                        Logout
            </button> */}
            </ul>
        )
    }
}

export default Nav
