import React, { memo } from 'react'
import './addButton.css'

const AddButton = memo(() => {
  return (
    <button className="add_button">
      <p className="add_button_text">Добавить</p>
    </button>
  )
})

export default AddButton
