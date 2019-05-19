import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { chat } from '../../reducers/';

export default createStore( 
    combineReducers( chat ),
    composeWithDevTools()
);