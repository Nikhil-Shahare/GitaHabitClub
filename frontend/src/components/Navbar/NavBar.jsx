import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav-container bg-white rounded-lg max-w-3xl w-full px-2 py-1'>

    <nav className='flex justify-between h-10  '>
        <div className='nav-logo'>
            <Link to="/">
           <img className='w-22 h-10'  src={logo}/>
            </Link>
        </div>
        <div className='flex align-middle'>
            <ul >
                <li className='text-grey-100 '><Link  to="/list">my Blogs</Link></li>

            </ul>
        </div>

    </nav>
    </div>
  )
}

export default NavBar