import React, { memo } from 'react'
import './questionForm.css'

const QuestionForm = memo(() => {
  return (
    <fieldset className="question_fieldset">
      <p className="question_title">Что уменьшаем?</p>
      <div>
        <label className="radio">
          <input className="radio-btn" type="radio" value="payment"></input>
          <span className="input_span">Платёж</span>
        </label>
        <label className="radio">
          <input className="radio-btn" type="radio" value="date"></input>
          <span className="input_span">Срок</span>
        </label>
      </div>
    </fieldset>
  )
})

export default QuestionForm
