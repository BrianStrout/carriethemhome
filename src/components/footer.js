import React from 'react'
import { Outlet } from 'react-router-dom'
import '../index.css'

const footer = () => {
  return (
    <div className='container'>
    <div className='footer'>
    <div>add a about this site pop up</div>
    <outlet />
    </div>
    </div>
  )
}

export default footer