//https://github.com/Microsoft/TypeScript-React-Starter
// might be out dated!

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {enthusiasm} from './reducers/index';
import {IStoreState} from './types/index';
import {Provider} from 'react-redux';

const store = createStore<IStoreState, any, any, any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
