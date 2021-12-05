import React, { memo, useCallback, useMemo, useState } from 'react'
import { MAX_PAYMENT, PROCENT, MONTH, MROT } from '../../Global'
import Presenter from './presenter'
import './popup.css'

const Popup = memo(() => {
  const [inputValue, setInputValue] = useState('')
  const [visibleForm, setVisibleForm] = useState(false)

  const advance = useMemo(() => {
    if (inputValue) {
      if (+inputValue > MROT) {
        const taxDeduction = +inputValue * MONTH * PROCENT
        const numberOfYear = MAX_PAYMENT / taxDeduction
        const paymentArray = [...new Array(numberOfYear | 0).fill(taxDeduction)]
        const remainingAmount = MAX_PAYMENT - taxDeduction * (numberOfYear | 0)
        paymentArray.push(remainingAmount)

        return paymentArray
      } else if (inputValue) {
        alert('Сумма не введена')
      }
    }
  }, [inputValue])

  const calculate = useCallback(() => {
    const calculateInput = document.querySelector('.salary_input')
    if (calculateInput && calculateInput.value) {
      setInputValue(calculateInput.value)
    }
  }, [])

  return <Presenter {...{ calculate, advance, visibleForm, setVisibleForm }} />
})

export default Popup
