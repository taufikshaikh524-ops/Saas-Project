import React from 'react'
import { AiToolsData } from '../assets/assets'
const AiTools = () => {
    return (
        <div className="px-4 sm:px-20 xl:px-32 my-24">
            <div className="text-center">
                <h2 className='text-slate-700
                                 text-[42px] 
                                 font-semibold'>
                     Powerfull AI Tools
               </h2>
                <p className='text-gray-500
                                max-w-lg 
                                mx-auto'> 
                    Everything you need to create content faster and better all in one place using AI Technology.
                </p>
            </div>
            <div className="flex flex-wrap justify-center mt-10">
                {AiToolsData.map((tool,index)=>(
                    <div key={index} className='p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE]
                                                shadow-lg border border-gray-100 
                                                hover:translate-y-1 trasition-all
                                                duration-300'>
                        <div className="text-center">
                            <img src={tool.image} alt={tool.name} className="w-16 h-16 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-slate-700">{tool.name}</h3>
                            <p className="text-gray-500 mt-2">{tool.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        
        </div>
    )
}

export default AiTools
