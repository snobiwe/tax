import React, { memo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Page from './screens/page/page'

import Start from './screens/start/start'

const NavigationStack = memo(() => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />

        <Route path="page" element={<Page />} />
      </Routes>
    </Router>
  )
})

export default NavigationStack
