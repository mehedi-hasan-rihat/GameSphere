import React from 'react'
import Navbar from '../component/Header/Navbar'
import { Outlet } from 'react-router-dom'

export default function AuthLAyout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
