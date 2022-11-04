import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';
import App from './App';

const rootNode = document.getElementById('root');
const store = legacy_createStore(rootReducer, composeWithDevTools());

ReactDOM.createRoot(rootNode).render(
    <Provider store={store}>
        <App />
    </Provider>
);
