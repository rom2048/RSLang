import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ErrorPage from './routes/ErrorPage/ErrorPage'
import Home from './routes/Home/Home'
import Navigation from './components/Navigation/Navigation'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import Words from './routes/Words/Words'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path='/words' element={<Words />} />
      </Route>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App
