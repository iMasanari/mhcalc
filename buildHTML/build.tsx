/// <reference path="../src/preact-redux.d.ts" />

import * as preact from 'preact'
import { createStore } from 'redux'
import preactRedux from 'preact-redux'
import render from 'preact-render-to-string'
import fs from 'fs'
import ejs from 'ejs'
import reducer from '../src/reducers'
import App from '../src/components/App'

const { Provider } = preactRedux
const store = createStore(reducer)

const html = render(
    <Provider store={store}>
        <App />
    </Provider>
)

ejs.renderFile('buildHTML/index.ejs', { html }, {}, (err, str) => {
    var outputFile = fs.createWriteStream('index.html')
    outputFile.write(str)
});
