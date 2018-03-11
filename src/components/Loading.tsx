import * as React from 'react'
import { observer } from 'mobx-react'

const INITIAL_TEXT = 'Loading'

@observer
export default class Loading extends React.Component<{}, {}> {
  state = { text: INITIAL_TEXT }

  private interval: null | number = null

  componentDidMount() {
    if (!this.interval) {
      this.interval = window.setInterval(() => {
        if (this.state.text.length <= 12) {
          this.setState((state) => ({ text: this.state.text + '.' }))
        } else {
          this.setState({ text: INITIAL_TEXT })
        }
      }, 300)
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render() {
    return <div>{this.state.text}</div>
  }
}
