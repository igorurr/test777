
import React from "react";
import { Provider } from 'react-redux';

import store from './helpers/store';
import { App as Comp } from '../components';

const App = () => (
    <Provider store={store}>
        <Comp/>
    </Provider>
);

export default App;