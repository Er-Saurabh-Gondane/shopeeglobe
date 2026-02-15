import React from 'react'
import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'

function Home() {
  return (
    <div >
        <div  className='sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm'>
             <Header />

        </div>
        <div className="max-w-7xl mx-auto px-4 pt-10 pb-16">
        <Hero />
      </div>
    </div>
  )
}

export default Home