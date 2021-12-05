import React, { memo } from 'react'
import './popup.css'
import AddButton from '../../components/addButton/addButton'
import SalaryForm from '../../components/salaryForm/salaryForm'
import AdvanceForm from '../../components/advanceForm/advanceForm'
import QuestionForm from '../../components/questionForm/questionForm'
import CloseButton from '../../components/closeButton/closeButton'

const Presenter = memo(
  ({ calculate, advance, visibleForm, setVisibleForm }) => {
    return (
      <div className="popup">
        <div className="popup_container">
          <h3 className="popup_title">Налоговый вычет</h3>
          <div className="popup__button_close">
            <CloseButton />
          </div>
          <p className="popup_text">
            Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
            налогового вычета составляет не более 13% от своего официального
            годового дохода.
          </p>

          <SalaryForm
            setVisibleForm={setVisibleForm}
            visibleForm={visibleForm}
            calculate={calculate}
          />

          <form>
            <AdvanceForm
              setVisibleForm={setVisibleForm}
              visibleForm={visibleForm}
              payments={advance}
              calculate={calculate}
            />
          </form>
          <form>
            <QuestionForm />
          </form>
          <AddButton />
        </div>
      </div>
    )
  }
)

export default Presenter
