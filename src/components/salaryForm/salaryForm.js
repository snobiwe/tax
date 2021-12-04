import React, { memo } from 'react'

import './salaryForm.css'

const SalaryForm = memo(({ inputValue, customInputValue, onSubmit }) => {
  return (
    <fieldset className="salary_fieldset">
      <legend className="popup_legend">Ваша зарплата в месяц</legend>

      <input
        value={inputValue}
        onChange={customInputValue}
        className="salary_input"
        type="text"
        placeholder="Введите данные"
        onSubmit={onSubmit}
      >
        {}
      </input>
    </fieldset>
  )
})

export default SalaryForm
