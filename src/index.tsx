/// <reference path="./preact-redux.d.ts" />

import * as preact from 'preact'
import { createStore } from 'redux'
import preactRedux from 'preact-redux'
import reducer from './reducers'
import App from './components/App'

const { Provider } = preactRedux
const store = createStore(reducer)

const target = document.getElementById('app')!

preact.render(
    <Provider store={store}>
        <App />
    </Provider>,
    target,
    target.lastElementChild!
)

