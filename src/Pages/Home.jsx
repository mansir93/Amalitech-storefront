import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Team from '../Components/Team'
import Project from '../Components/Project'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Team/>
        <Project/>
        <Footer/>
    </div>
  )
}

export default Home