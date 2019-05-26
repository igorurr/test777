import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { chat } from '../../reducers/';

export default createStore( 
    combineReducers( {chat} ),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);