import React from 'react'
import { ArrowRight } from 'lucide-react'
import asset from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ClerkProvider,useClerk,UserButton,useUser } from '@clerk/clerk-react'
const Navbar = () => {
  const navigate = useNavigate()
  const {user}=useUser
  const {openSignIn}=useClerk()
  return (
    <div className="fixed top-0 z-50 w-full backdrop-blur-2xl flex items-center justify-between px-6 py-3 sm:px-20 xl:px-32">
      <img
        src={asset.logo}
        alt="Logo"
        className="w-32 sm:w-44 cursor-pointer"
        onClick={() => navigate('/')}
      />
      {
        user?<UserButton/>:(
               <button onClick={openSignIn}
        className="flex items-center gap-2 cursor-pointer
         text-white bg-purple-800 px-6 py-2.5 rounded-2xl
          hover:bg-purple-700 transition"
      >
        Get Started
        <ArrowRight className="h-4 w-4" />
      </button>
        )
      }
     
    </div>
  )
}

export default Navbar
