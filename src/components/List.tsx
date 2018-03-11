import * as React from 'react'
import { observer } from 'mobx-react'

import Loading from './Loading'
import ListItem, { IItem } from './ListItem'

import { ListStore } from '../store/ListStore'

interface IProps {
  isLoading: boolean
  listStore: ListStore
}

@observer
export default class List extends React.Component<IProps, {}> {
  render() {
    if (this.props.isLoading) {
      return <Loading />
    }

    return (
      <div>
        <h2>result total count: {this.props.listStore.totalCount}</h2>
        <ul>
          {this.props.listStore.reposList.map((i) => <ListItem item={i as IItem} key={(i as IItem).id}/>)}
        </ul>
      </div>
    )
  }
}

