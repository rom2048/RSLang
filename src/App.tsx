import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ErrorPage from './routes/ErrorPage/ErrorPage'
import Home from './routes/Home/Home'
import Navigation from './components/Navigation/Navigation'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App
