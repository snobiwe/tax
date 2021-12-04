import React, { memo, useState, useCallback } from 'react'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SalaryForm from './components/salaryForm/salaryForm'
import Page from './screens/page/page'
import Popup from './screens/popup/popup'
import Start from './screens/start/start'
import QuestionForm from './components/questionForm/questionForm'
import StartButton from './components/start_button/start_button'
import AdvanceForm from './components/advanceForm/advanceForm'
import AddButton from './components/addButton/addButton'
import CloseButton from './components/closeButton/closeButton'

const App = memo(() => {
  const [inputValue, setInputValue] = useState('')

  const customInputValue = useCallback((e) => {
    const value = e.target.value
    setInputValue(value)
    console.log(e.target.value)
  }, [])

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Start
              button={<StartButton path="/page" text={'Налоговый вычет'} />}
            />
          }
        ></Route>

        <Route
          path="page"
          element={
            <Page
              popup={
                <Popup
                  salary={
                    <SalaryForm
                      customInputValue={customInputValue}
                      inputValue={inputValue}
                    />
                  }
                  question={<QuestionForm />}
                  advance={<AdvanceForm value={inputValue * 12 * 0.13} />}
                  button={<AddButton />}
                  close={<CloseButton path="/" />}
                />
              }
            />
          }
        ></Route>
      </Routes>
    </Router>
  )
})

export default App
