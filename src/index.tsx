import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "tachyons";
// @ts-ignore
import App from './containers/App.tsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
// @ts-ignore
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import * as serviceWorker from './serviceWorkerRegistration';

const rootReducer = combineReducers({searchRobots, requestRobots});

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
        <App />
    </Provider>
  </React.StrictMode>
);

serviceWorker.register()
