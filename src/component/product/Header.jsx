import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='flex justify-between items-center md:px-10 px-2 bg-blue-500 h-12 text-white font-normal text-sm md:font-medium md:text-lg '>
            <div >
                <p>My Shop</p>
            </div>
            <ul className='flex gap-6'>
                <Link to="/productApi"><li>Home</li></Link>
                <Link to="/productList"><li>Product</li></Link>
                <Link to="about"><li>About Us</li></Link>
                <Link to="contact"><li>Contact</li></Link>
            </ul>
        </header>
    </div>
  )
}

export default Header
