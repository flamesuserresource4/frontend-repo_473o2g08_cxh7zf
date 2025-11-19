import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CGPAPage from './pages/CGPAPage'
import InstallmentsPage from './pages/InstallmentsPage'
import Test from './Test'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<HomePage />} />
          <Route path="cgpa" element={<CGPAPage />} />
          <Route path="installments" element={<InstallmentsPage />} />
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
