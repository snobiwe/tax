import React, { memo } from 'react'
import './salaryForm.css'

const SalaryForm = memo(() => {
  return (
    <fieldset className="salary_fieldset">
      <legend className="popup_legend">Ваша зарплата в месяц</legend>
      <input className="salary_input" type="text" placeholder="Введите данные">
        {}
      </input>
      <button className="salary_button">Рассчитать</button>
    </fieldset>
  )
})

export default SalaryForm
