import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Style = () => {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    </div>
  )
}

export default Style