import * as React from 'react'
import { observer } from 'mobx-react'
import { debounce } from 'lodash'
import { ListStore } from '../store/ListStore'

interface IState {
  value: string
}

interface IProps {
  listStore: ListStore
}

@observer
export default class Input extends React.Component<IProps, IState> {
  state = { value: '' }

  fetchRepoList = debounce(this.props.listStore.fetchRepoList.bind(this.props.listStore), 500)

  handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value

    this.setState({ value })

    if (value) {
      this.fetchRepoList(value.trim())
    }
  }

  render() {
    return (
      <input type="text" value={this.state.value} onChange={this.handleInputChange}/>
    )
  }
}
