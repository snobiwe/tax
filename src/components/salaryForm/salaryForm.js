import React, { memo, useCallback } from 'react'

import './salaryForm.css'

const SalaryForm = memo(({ calculate, setVisibleForm }) => {
  const SalaryFormSubmit = useCallback(
    (e) => {
      e.preventDefault()
      calculate()
      setVisibleForm(true)
    },
    [calculate, setVisibleForm]
  )

  return (
    <form onSubmit={SalaryFormSubmit}>
      <fieldset className="salary_fieldset">
        <legend className="popup_legend">Ваша зарплата в месяц</legend>

        <input
          className="salary_input"
          type="text"
          placeholder="Введите данные"
        />
      </fieldset>
    </form>
  )
})

export default SalaryForm
