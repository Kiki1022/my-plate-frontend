import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import mealReducer from './reducers/mealReducer'

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(mealReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(

    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);

