import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ErrorPage from './routes/ErrorPage/ErrorPage'
import Home from './routes/Home/Home'
import Navigation from './components/Navigation/Navigation'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        {/* <Route element={<Words />} /> */}
      </Route>
      <Route path='/login' element={<SignIn />} />
      <Route path='/register' element={<SignUp />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App
