import React from 'react'
import Nav from '../Components/Nav'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
      <div className='relative md:hidden'>
          <Nav />
          <main>
              <Outlet />
          </main>
    </div>
  )
}
