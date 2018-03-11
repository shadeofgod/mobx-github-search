import { observable, action } from 'mobx'

export class ViewStore {
  @observable isLoading: boolean

  constructor() {
    this.isLoading = false
  }

  @action finishLoading = () => {
    this.isLoading = false
  }

  @action startLoading = () => {
    this.isLoading = true
  }

}

const viewStore = new ViewStore()

export default viewStore
