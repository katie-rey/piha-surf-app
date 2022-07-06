import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFruits } from '../actions'
import Home from './Home'
import Header from './Header'
import SurfData from './SurfData'

function App() {
  const fruits = useSelector((state) => state.fruits)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  return (
    <>
      <Header />
      <Home />
      {/* <SurfData /> */}
    </>
  )
}

export default App
