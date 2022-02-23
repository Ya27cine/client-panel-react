import React, { Component } from 'react'

import PropTypes from 'prop-types'


class Contact extends Component {
    render() {
        const { name, tel, email } = this.props;
        return (
            <div>
                <h3> Contacts {name}</h3>
                <ul>
                    <li>TEl: {tel}</li>
                    <li>{email}</li>
                </ul>
            </div>
        )
    }
}

Contact.defaultProps = {
    name: "MY NAME",
    tel: '00000',
    email: "my@email.com"
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default Contact;
