import * as React from 'react'
import { observer, inject } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

import Input from './components/Input'
import List from './components/List'

import { ListStore } from './store/ListStore'
import { ViewStore } from './store/ViewStore'

export interface IProps {
  listStore: ListStore
  viewStore: ViewStore
}

@inject('listStore')
@inject('viewStore')
@observer
export class App extends React.Component<{}, {}> {
  render() {
    const { viewStore, listStore } = this.props as IProps

    return (
      <div>
        <Input listStore={listStore}/>
        <List isLoading={viewStore.isLoading} listStore={listStore}/>
        {process.env.NODE_ENV !== 'production' && <DevTools />}
      </div>
    )
  }
}
