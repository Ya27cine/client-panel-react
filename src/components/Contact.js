import React, { Component } from 'react'

import PropTypes from 'prop-types'


class Contact extends Component {
    render() {
        const { name, tel, email } = this.props.data;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        {name}
                        <i onClick={this.showContact.bind(this, name)}
                            className="fa fa-sort-down">
                        </i>
                    </h4>
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

    showContact(name) {
        console.log('salem ', name)
    }
}

Contact.defaultProps = {
    name: "MY NAME",
    tel: '00000',
    email: "my@email.com"
}

Contact.propTypes = {
    data: PropTypes.object.isRequired,
}

export default Contact;
