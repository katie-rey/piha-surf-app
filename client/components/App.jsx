import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFruits } from '../actions'
import Home from './Home'
import Header from './Header'

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  )
}

export default App
