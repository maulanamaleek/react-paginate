/* eslint-disable no-unused-vars */
import * as React from 'react'
import Button from './components/Button/Button'
import { PaginationType } from './interfaces/enum'
import {
  PreviousIcon,
  NextIcon,
  LastIcon,
  FirstIcon
} from './components/Icons/Icons'
import { Label } from './components/Label/Label'
import { PaginationFlex } from './style'
import { changePage, countTotalPages } from './utils'

interface Props {
  type?: PaginationType
  totalItems: number
  itemsPerPage?: number
  currentPage: number
  loading?: JSX.Element
  themeColor?: string
  onPageChange?: Function
}

export const ReactPaginate = ({
  currentPage,
  totalItems,
  onPageChange,
  itemsPerPage = 20
}: Props) => {
  const [page, setPage] = React.useState(currentPage)

  const _handleNext = React.useCallback(() => {
    const nextPage = changePage(page, 'next')
    if (nextPage > countTotalPages(totalItems, itemsPerPage)) return
    if (onPageChange) onPageChange(nextPage)
    setPage(nextPage)
  }, [setPage, page])

  const _handlePrevious = React.useCallback(() => {
    const prevPage = changePage(page, 'previous')
    if (onPageChange) onPageChange(prevPage)
    setPage(prevPage)
  }, [setPage, page])

  const _handleFirst = React.useCallback(() => {
    const firstPage = changePage(page, 'first')
    if (onPageChange) onPageChange(firstPage)
    setPage(firstPage)
  }, [setPage])

  const _handleLast = React.useCallback(() => {
    const lastPage = countTotalPages(totalItems, itemsPerPage)
    if (onPageChange) onPageChange(lastPage)
    setPage(lastPage)
  }, [setPage])

  React.useEffect(() => {
    console.log(page)
  }, [page])

  return (
    <div className='react-paginate-wrapper'>
      <PaginationFlex>
        <Button onClick={_handleFirst} text={<FirstIcon />} />
        <Button onClick={_handlePrevious} text={<PreviousIcon />} />

        <div className='label-wrap'>
          <Label>{page}</Label>
        </div>

        <Button onClick={_handleNext} text={<NextIcon />} />
        <Button onClick={_handleLast} text={<LastIcon />} />
      </PaginationFlex>
    </div>
  )
}
