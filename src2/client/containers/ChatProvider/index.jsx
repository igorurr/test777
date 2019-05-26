import React, { Component } from "react";

class ChatProvider extends Component {
    closeApp() {
        console.log('прила закрывается')
    }

    render() {
        return (
            <Comp {...this.props} closeApp={this.closeApp} />
        );
    }
};

export default connect(
    state => {
        if( state.chat.user == -1 )
            return {
                isLoading: true
            };

        const { name, color } = state.chat.users.find( user => user.id === state.chat.user );

        return {
            isLoading: false,
            name,
            color,
        }
    }
)( Header );
