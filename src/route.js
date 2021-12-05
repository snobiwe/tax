import React, { memo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Page from './screens/page/page'

import Start from './screens/start/start'

const Navigation = memo(() => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />}></Route>

        <Route path="page" element={<Page />}></Route>
      </Routes>
    </Router>
  )
})

export default Navigation
