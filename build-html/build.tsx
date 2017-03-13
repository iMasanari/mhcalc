import * as preact from 'preact'
import { createStore } from 'redux'
import preactRedux from '../src/units/preact-redux'
import * as render from 'preact-render-to-string'
import * as fs from 'fs'
import * as ejs from 'ejs'
import reducer from '../src/reducers'
import App from '../src/components/App'

const { Provider } = preactRedux
const store = createStore(reducer)

const html = render(
    <Provider store={store}>
        <App />
    </Provider>
)

ejs.renderFile('build-html/index.ejs', { html }, {}, (_err, str) => {
    var outputFile = fs.createWriteStream('index.html')
    outputFile.write(str)
});
