import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "tachyons";
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({searchRobots, requestRobots});

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
        <App />
    </Provider>
  </React.StrictMode>
);
