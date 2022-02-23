import React, { Component } from 'react'

import Contact from './Contact'

class Contacts extends Component {
    state = {
        _user: '',
        contacts: [
            { id: 1, name: "KHELIFA YASSINE", tel: "07653452", email: "example@email.fr" },
            { id: 2, name: "HAMOU SABAH", tel: "07653452", email: "example@email.fr" },
            { id: 3, name: "ALLAF MOHAMMED", tel: "07653452", email: "example@email.fr" },
            { id: 4, name: "Kevin Cedric", tel: "07653452", email: "example@email.fr" },
        ]

    }

    render() {
        const { contacts } = this.state;
        return (
            <div>

                {contacts.map((contact) => (
                    <Contact data={contact} key={contact.id} />
                ))}

            </div>
        )
    }
}



export default Contacts;
