import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimonial from '../components/Testimonial'
import AiTools from '../components/AiTools'
import Plans from '../components/Plans'     
const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero/> 
            <AiTools/>
            <Testimonial/>
            <Plans></Plans>
        </>
    )
}

export default Home
