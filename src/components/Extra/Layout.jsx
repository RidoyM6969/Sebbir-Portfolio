import React from 'react'
import Menu from '../home/Menu'
import { Outlet } from 'react-router'
import Footer from '../home/Footer'

const Layout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout
