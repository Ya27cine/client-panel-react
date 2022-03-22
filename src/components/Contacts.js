import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from './Context';

class Contacts extends Component {

    render() {

        return (
            <Consumer>
                {value => (
                    <div>
                        {value.contacts.map((contact) => (
                            <Contact data={contact} key={contact.id}
                                eventDelete={this.deleteContact.bind(this, contact.id)}
                            />
                        ))}
                    </div>
                )}
            </Consumer>
        )
    }

    deleteContact(id) {
        console.log('delete contact ! done ', id);
        const { contacts } = this.state;
        const new_list_contct = contacts.filter((contact) => (contact.id !== id))

        this.setState({
            contacts: new_list_contct
        })
    }
}



export default Contacts;
