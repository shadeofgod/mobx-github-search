import * as React from 'react'
import { observer } from 'mobx-react'

export interface IItem {
  fullName: string
  id: number
  description: string
  starCount: number
  url: string
}

interface IProps {
  item: IItem
}

@observer
export default class ListItem extends React.Component<IProps, {}> {

  render() {
    const { item } = this.props

    return (
      <li>
        <h3><a href={item.url}>{item.fullName}</a> stars: {item.starCount}</h3>
        <p>{item.description}</p>
      </li>
    )
  }
}
