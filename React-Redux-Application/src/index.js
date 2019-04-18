import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './backend/store';
import App from './App';

import  ConfigureBackend  from './backend/ConfigureBackend';


ConfigureBackend();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);