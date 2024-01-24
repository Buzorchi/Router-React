import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <nav className="flex bg-[#333] p-[20px] gap-10 justify-end ">
        <Link to="/product" className="nav-link">Product</Link>
        <Link to="/formPage" className="nav-link">Form</Link>
        <Link to="/props" className="nav-link">Props</Link>
        <Link to="/addForm" className="nav-link">Personal Budget Dashboard</Link>
        <Link to="/dashboard" className='nav-link'>Dashboard</Link>
        <Link to="/productApi" className='nav-link'>My Shop</Link>
      </nav>
      <div className="content">
        <h1 className='text-2xl font-bold'>Welcome to the Home Page</h1>
        <p>Explore our products and projects.</p>
      </div>
    </div>
  )
}

export default Home
