import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import './start_button.css'

const StartButton = memo(({ text }) => {
  return (
    <Link to="/page">
      <button className="button">
        <p className="button_text">{text}</p>
      </button>
    </Link>
  )
})

export default StartButton
