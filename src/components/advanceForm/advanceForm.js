import React, { memo, useState } from 'react'
import './advanceForm.css'

const AdvanceForm = memo(({ value }) => {
  const [visibleForm, setVisibleForm] = useState(false)

  return (
    <fieldset className="advance_fieldset">
      <button
        onClick={(e) => {
          e.preventDefault()
          setVisibleForm(true)
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
          <li className="advance_item">
            <input className="advance_input" type="checkbox" id="first"></input>
            <label htmlFor="first" className="advance_val">
              {value}
              <span className="advance_span">в 1-ый год</span>
            </label>
          </li>
        )}
        {visibleForm && (
          <li className="advance_item">
            <input
              className="advance_input"
              type="checkbox"
              id="second"
            ></input>
            <label htmlFor="second" className="advance_val">
              {value}
              <span className="advance_span">во 2-ой год</span>
            </label>
          </li>
        )}
        {visibleForm && (
          <li className="advance_item">
            <input className="advance_input" type="checkbox" id="third"></input>
            <label htmlFor="third" className="advance_val">
              {value}
              <span className="advance_span">в 3-ий год</span>
            </label>
          </li>
        )}
        {visibleForm && (
          <li className="advance_item">
            <input
              className="advance_input"
              type="checkbox"
              id="fourth"
            ></input>
            <label htmlFor="fourth" className="advance_val">
              {value}
              <span className="advance_span">в 4-ый год</span>
            </label>
          </li>
        )}
      </ul>
    </fieldset>
  )
})

export default AdvanceForm
