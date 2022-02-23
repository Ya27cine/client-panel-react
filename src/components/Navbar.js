import React from 'react'
import PropTypes from 'prop-types'


const Navbar = (args) => {
    const { title } = args;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <a className="navbar-brand" href="#">{title}</a>

            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>


            </ul>

        </nav>
    )
}


Navbar.defaultProps = {
    title: "MY Title",
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar;
