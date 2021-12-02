import React, { memo } from 'react'
import './page.css'

const Page = memo(({ popup }) => {
  return (
    <div className="page">
      <div className="popup">{popup}</div>
    </div>
  )
})

export default Page
