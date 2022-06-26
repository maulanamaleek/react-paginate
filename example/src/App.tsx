import React, { useEffect, useState } from 'react'

import { ReactPaginate } from '@malik/react-paginate'
import '@malik/react-paginate/dist/index.css'

const App = () => {
  const [curr, setCurr] = useState(1)
  const [data, setData] = useState<any[]>([])
  const fetchData = (page: number) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${10}`)
      .then(response => response.json())
      .then(json => setData(json))
  }

  useEffect(() => {
    fetchData(curr)
    setCurr(1)
    console.log(data)
  }, [])

  return (
    <div>
      <p>Demo</p>
      {data?.map((item, idx) => (
        <p key={idx}>{item.title}</p>
      ))}
      <ReactPaginate
        totalItems={100}
        itemsPerPage={10}
        currentPage={curr}
        onPageChange={fetchData}
      />
    </div>
  )
}

export default App
