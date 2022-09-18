import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TopPage from './pages/TopPage'
import EditPage from './pages/EditPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
