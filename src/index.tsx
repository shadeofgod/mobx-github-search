import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'

import listStore from './store/ListStore'
import viewStore from './store/ViewStore'
import { App } from './App'

useStrict(true)

const stores = { listStore, viewStore }

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('app') as HTMLElement,
)
