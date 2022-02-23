import React from 'react'
import PropTypes from 'prop-types'


const Navbar = (args) => {
    const { title } = args;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}


Navbar.defaultProps = {
    title: "MY Title",
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

export default Navbar;
