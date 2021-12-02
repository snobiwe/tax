import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import './closeButton.css'

const CloseButton = memo(() => {
  return (
    <Link to="/">
      <button className="close_button"></button>
    </Link>
  )
})

export default CloseButton
