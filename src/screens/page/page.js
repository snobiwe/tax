import React, { memo } from 'react'
import Popup from '../popup'
import './page.css'

const Page = memo(() => {
  return (
    <div className="page">
      <div className="popup">
        <Popup />
      </div>
    </div>
  )
})

export default Page
