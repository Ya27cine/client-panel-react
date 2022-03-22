import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((contact) => contact.id  !== action.payload )
            };
            default: return state;
    }
}

export class Provider extends Component {
    state = {
        _user: '',
        contacts: [
            { id: 1, name: "KHELIFA YASSINE", tel: "07653452", email: "example@email.fr" },
            { id: 2, name: "HAMOU SABAH", tel: "07653480", email: "example@email.fr" },
            { id: 3, name: "ALLAF MOHAMMED", tel: "07653491", email: "example@email.fr" },
        ],
        dispatch: action => this.setState( state => reducer(state, action)  )
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;
