/// <reference path="./preact-redux.d.ts" />

// esモジュール、commonjsモジュール両方に対応させる
import defaultExport, * as namedExport from 'preact-redux'

export default defaultExport || namedExport
