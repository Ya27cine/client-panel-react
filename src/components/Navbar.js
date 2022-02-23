import React from 'react'

const Navbar = (args) => {
    const { title } = args;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Navbar;
