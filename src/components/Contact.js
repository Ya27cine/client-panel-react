import React, { Component } from 'react'

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

export default Contact;
