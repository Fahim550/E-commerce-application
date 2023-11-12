import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

export default function Layout({children}) {
  return (
    <div className=''>
        <Navbar/>
        <div className="contant">
            {children}
        </div>
        <Footer/>
    </div>
  )
}
