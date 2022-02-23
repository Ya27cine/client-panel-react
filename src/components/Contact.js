import React, { Component } from 'react'

import PropTypes from 'prop-types'


class Contact extends Component {
    render() {
        const { name, tel, email } = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <div className="card-text">
                        <ul className="list-group">
                            <li className="list-group-item">{tel}</li>
                            <li className="list-group-item">{email}</li>

                        </ul>
                    </div>
                </div>
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
