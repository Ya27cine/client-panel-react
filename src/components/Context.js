import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        _user: '',
        contacts: [
            { id: 1, name: "KHELIFA YASSINE", tel: "07653452", email: "example@email.fr" },
            { id: 2, name: "HAMOU SABAH", tel: "07653452", email: "example@email.fr" },
            { id: 3, name: "ALLAF MOHAMMED", tel: "07653452", email: "example@email.fr" },
        ]
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
