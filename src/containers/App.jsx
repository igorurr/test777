
import React from "react";
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from '../reducers';
import { App as Comp } from '../components';

const store = createStore( 
    combineReducers( reducers ),
    composeWithDevTools()
);

const App = () => (
    <Provider store={store}>
        <Comp/>
    </Provider>
);

export default App;