
import React, { Component } from "react";
import { Provider } from 'react-redux';

import { store } from '../store';
import { App as Comp } from '../components';

import { worker } from '../chat/';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Comp/>
            </Provider>
        );
    }

    componentDidMount() {
        worker();
    }
}

export default App;
