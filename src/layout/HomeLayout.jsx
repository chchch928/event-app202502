import React from 'react'
import MainNavigation from './MainNavigation'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
        <h1>Home</h1>
        <Outlet/>
    </>
  )
}

export default HomeLayout