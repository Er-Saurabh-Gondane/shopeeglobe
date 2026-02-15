import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      
      <div className='max-w-7xl mx-auto flex items-center justify-between py-4 px-4'>

        {/* Logo */}
        <h1 className='text-4xl font-bold tracking-wide bg-linear-to-r from-blue-700 via-indigo-800 to-slate-900 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer'>
          <Link to="/">ShopeeGlobe</Link>
        </h1>

        {/* Nav Links */}
        <nav className='flex items-center gap-6 text-lg font-medium text-blue-900'>

          {/* Home */}
          <Link
            to="/"
            className='group relative flex items-center gap-2 px-2 py-1 transition-all duration-300 hover:text-indigo-700'
          >
            <i className="fa-solid fa-house transition-transform duration-300 group-hover:-translate-y-1"></i>
            <span>Home</span>

            {/* underline animation */}
            <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-700 transition-all duration-300 group-hover:w-full'></span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className='group relative flex items-center gap-2 px-2 py-1 transition-all duration-300 hover:text-indigo-700'
          >
            <i className="fa-solid fa-cart-arrow-down transition-transform duration-300 group-hover:scale-110"></i>
            <span>Cart</span>

            {/* underline animation */}
            <span className='absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-700 transition-all duration-300 group-hover:w-full'></span>
          </Link>

        </nav>

      </div>
    </header>
  )
}

export default Header
