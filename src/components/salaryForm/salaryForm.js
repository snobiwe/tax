import React, { memo } from 'react'

import './salaryForm.css'

const SalaryForm = memo(({ calculate, setVisibleForm }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        calculate()
        setVisibleForm(true)
        console.log(calculate)
      }}
    >
      <fieldset className="salary_fieldset">
        <legend className="popup_legend">Ваша зарплата в месяц</legend>

        <input
          className="salary_input"
          type="text"
          placeholder="Введите данные"
        >
          {}
        </input>
      </fieldset>
    </form>
  )
})

export default SalaryForm
