import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
//import { composeWithDevTools } from 'redux-devtools-extension'

import App from './App'
import postReducer from './reducers'

import './index.css'

const store = createStore(
  postReducer,
  compose(applyMiddleware(thunk))
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
