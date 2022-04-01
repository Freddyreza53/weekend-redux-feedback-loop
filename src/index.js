import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';


const feelingReducer = (state = '', action) => {
    if (action.type === 'ADD_FEELING') {
        return action.payload;
    } else if (action.type === 'CLEAR') {
        return state = '';
    }
    return state;
}

const understandReducer = (state = '', action) => {
    if(action.type === 'ADD_UNDERSTAND') {
        return action.payload
    } else if (action.type === 'CLEAR') {
        return state = '';
    }
    return state;
}

const supportReducer = (state = '', action) => {
    if (action.type === 'ADD_SUPPORT') {
        return action.payload
    } else if (action.type === 'CLEAR') {
        return state = '';
    }
    return state;
}

const commentReducer = (state = '', action) => {
    if (action.type === 'ADD_COMMENT') {
        return action.payload
    } else if (action.type === 'CLEAR') {
        return state = '';
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feelingReducer,
        understandReducer,
        supportReducer,
        commentReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
