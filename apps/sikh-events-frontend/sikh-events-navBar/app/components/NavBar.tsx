import React from 'react'
import Header from "./Header"
import Link from '@/node_modules/next/link'
import Searchbar from './Searchbar'

const NavBar = () => {
  return (

    <div >
    <div className="navbar nav rounded-3xl" >

  <img src="/assets/SikhiHub_logo.png" alt="Logo" className="h-10 ml-1 mr-1" />
  <div className="navbar-start">
    <a className="text-xl font-bold text-white">SikhiHub</a>
  </div>

  <Searchbar></Searchbar>

  <div className="navbar-end">
    <a className="btn btn-ghost text-lg text-white hover:text-customYellow careers">Careers</a>
    <a className="btn btn-ghost text-lg text-white  hover:text-customYellow aboutUs">About Us</a>
    <a className="btn btn-ghost text-lg text-white mr-5  hover:text-customYellow contactUs">Contact Us</a>
    <a className="btn btn-ghost text-base text-black bg-white  rounded-2xl px-2 py-0 mx-1 login">Login</a>
    <a className="btn btn-ghost text-base text-white rounded-2xl px-2 py-0 mx-1 signUp">Sign Up</a>
    
  </div>

  
</div>
</div>
  )
}

export default NavBar
