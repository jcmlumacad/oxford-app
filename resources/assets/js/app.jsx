import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Thesaurus from './thesaurus';

import store from './store';

render(
    <Provider store={store}>
        <Thesaurus />
    </Provider>,
    document.getElementById('root')
);
