import React, { memo, useCallback, useState } from 'react'
import './advanceForm.css'

const AdvanceForm = memo(({ payments = [], calculate }) => {
  const [visibleForm, setVisibleForm] = useState(false)

  const listItem = useCallback(
    (item, index) => (
      <li className="advance_item">
        <input className="advance_input" type="checkbox" id={index}></input>
        <label htmlFor={index} className="advance_val">
          {item}
          <span className="advance_span">`в {index}й год`</span>
        </label>
      </li>
    ),
    []
  )

  return (
    <fieldset className="advance_fieldset">
      <button
        onClick={(e) => {
          e.preventDefault()
          setVisibleForm(true)
          calculate()
        }}
        className="salary_button"
      >
        Рассчитать
      </button>

      {visibleForm && (
        <p className="advance_legend">
          Итого можете внести в качестве досрочных:
        </p>
      )}
      {visibleForm && (
        <>
          <ul className="advance_inputs">
            {payments.map((index) => {
              listItem(index)
            })}
          </ul>
        </>
      )}
    </fieldset>
  )
})

export default AdvanceForm
