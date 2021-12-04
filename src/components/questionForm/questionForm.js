import React, { memo, useState } from 'react'
import './questionForm.css'

const QuestionForm = memo(() => {
  const Radio = memo(({ text, value, checked }) => {
    return (
      <label className="radio">
        <input
          onChange={changeValue}
          checked={checked}
          className="radio-btn"
          type="radio"
          value={value}
        ></input>
        <span className="input_span">{text}</span>
      </label>
    )
  })
  const [value, setValue] = useState(false)
  const changeValue = (e) => {
    setValue(e.target.value)
    console.log(e.target.value)
  }
  return (
    <fieldset className="question_fieldset">
      <p className="question_title">Что уменьшаем?</p>
      <div>
        <Radio
          value={'Платеж'}
          onChange={changeValue}
          checked={value === 'Платеж' ? true : false}
          text={'Платеж'}
        />
        <Radio
          value={'Срок'}
          onChange={changeValue}
          checked={value === 'Срок' ? true : false}
          text={'Срок'}
        />
      </div>
    </fieldset>
  )
})

export default QuestionForm
