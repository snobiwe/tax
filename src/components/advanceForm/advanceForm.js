import React, { memo, useCallback } from 'react'
import './advanceForm.css'

const AdvanceForm = memo(
  ({ payments = [], calculate, visibleForm, setVisibleForm }) => {
    const listItem = useCallback(
      (item, index) => (
        <li key={index} className="advance_item">
          <input className="advance_input" type="checkbox" id={index}></input>
          <label htmlFor={index} className="advance_val">
            {item}
            <span className="advance_span">в {index + 1}-й год</span>
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

        <ul className="advance_inputs">
          {visibleForm && (
            <>
              {payments.map((index, item) => {
                return listItem(index, item)
              })}
            </>
          )}
        </ul>
      </fieldset>
    )
  }
)

export default AdvanceForm
