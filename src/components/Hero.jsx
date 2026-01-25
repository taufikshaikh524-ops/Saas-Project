import React from 'react'
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';
const Hero = () => {
  const navigate=useNavigate();
  return (
    <div
      className="
        px-4 sm:px-20 xl:px-32
        relative inline-flex flex-col w-full justify-center
        bg-cover bg-no-repeat min-h-screen
      "
      style={{ backgroundImage: "url('/gradientBackground.png')" }}
    >
        <div className='text-center mb-6 '>
            <h1 className='text-3xl sm:text-5xl md:text-6xl font-semibold mx-auto leading-[1.2]'>
                Create amazing content <br /> with  <span className='text-purple-900'>AI tools</span>
                </h1>
            <p>Transform your content creation process with our suite
                 of AI-powered tools.Write articles,generate images, and enhance workflow more.</p>
       
        </div>
           
        <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>   
            <button onClick={()=>navigate('/ai')}className="bg-purple-900 text-white px-10 py-3 
            rounded-lg font-medium
             hover:bg-purple-800 transition duration-300 cursor-pointer">
                Start Creating Now
            </button>
       
         <button className="bg-white text-black px-10 py-3
          rounded-lg font-medium hover:bg-purple-800 transition
           duration-300 cursor-pointer">
                Watch Demo
            </button>
        </div>
      <div className="flex items-center justify-center mt-10 gap-4">
        <img src={assets.user_group} alt="" className='h-8' />Trusted By 10k+ Peoples
      </div>

      {/* Hero content */}
    </div>
  )
}

export default Hero
