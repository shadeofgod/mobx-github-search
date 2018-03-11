import { observable } from 'mobx'
import { asyncAction } from 'mobx-utils'

import { getRepoListBykeywords } from '../service'
import viewStore from './ViewStore'

interface IItem {
  full_name: string
  id: number
  description: string
  stargazers_count: number
  html_url: string
}

export class ListStore {
  @observable reposList: object[] = []
  @observable totalCount: number = 0

  @asyncAction
  *fetchRepoList(q: string) {
    console.time('fetch repo list')
    viewStore.startLoading()

    const response = yield getRepoListBykeywords(q)

    this.reposList = response.items.map((i: IItem) => ({
      description: i.description,
      fullName: i.full_name,
      id: i.id,
      starCount: i.stargazers_count,
      url: i.html_url,
    }))
    this.totalCount = response.total_count

    viewStore.finishLoading()
    console.timeEnd('fetch repo list')
  }

}

const listStore = new ListStore()

export default listStore
