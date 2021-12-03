import React, { memo } from 'react'
import './popup.css'

const Popup = memo(({ salary, question, button, close, advance }) => {
  return (
    <div className="popup">
      <div className="popup_container">
        <h3 className="popup_title">Налоговый вычет</h3>
        <div className="popup__button_close">{close}</div>
        <p className="popup_text">
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
          налогового вычета составляет не более 13% от своего официального
          годового дохода.
        </p>
        <form>{salary}</form>
        <form>{advance}</form>
        <form>{question}</form>
        {button}
      </div>
    </div>
  )
})

export default Popup
