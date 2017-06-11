// polyfill
import 'es6-promise/auto'

import * as preact from 'preact'
import { createStore, applyMiddleware } from 'redux'
import preactRedux from 'preact-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './components/App'

const { Provider } = preactRedux
const store = createStore(reducer, applyMiddleware(thunk))

preact.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')!
)
