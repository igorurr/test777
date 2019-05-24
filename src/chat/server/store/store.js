const { createStore, combineReducers, applyMiddleware  } = require('redux');

const reducers = require('./reducers');

module.exports = createStore(
    combineReducers( reducers ),
);
