import { PageActions } from '../interfaces/enum'

export const countTotalPages = (totalItems: number, perPage: number) => {
  return Math.ceil(totalItems / perPage)
}

export const changePage = (currPage: number, actions: PageActions): number => {
  switch (actions) {
    case 'first':
      return 1
    case 'last':
      return -1
    case 'next':
      return currPage + 1
    case 'previous':
      if (currPage !== 1) {
        return currPage - 1
      } else {
        return currPage
      }
    default:
      return currPage
  }
}
