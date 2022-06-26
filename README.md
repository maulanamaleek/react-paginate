# @malik/react-paginate

> Pagination component for react

[![NPM](https://img.shields.io/npm/v/@malik/react-paginate.svg)](https://www.npmjs.com/package/@malik/react-paginate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @malik/react-paginate
```

## Usage

```tsx
import React, { Component } from 'react'

import ReactPaginate from '@malik/react-paginate'
import '@malik/react-paginate/dist/index.css'

fucntion Example {
  const fetchData = (page) => {
    fetch(`...?page=${page}`)
  }

  return (
    <ReactPaginate 
      currentPage={1}
      itemsPerPage={20}
      totalItems={100}
      onPageChange={fetchData}
    />
  )

}
```

## License

MIT © [maulanamaleek](https://github.com/maulanamaleek)
