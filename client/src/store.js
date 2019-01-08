import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(routerMiddleware(history), thunk);
    } else {
        return applyMiddleware(routerMiddleware(history), thunk, createLogger())
    }
};

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));