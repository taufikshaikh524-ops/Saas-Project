import React from 'react'
import  {PricingTable} from '@clerk/clerk-react'
const Plans = () => {
    return (
        <div className='mx-auto max-w-2xl z-20 my-30'>
            <div className="text-center">
                <h2 className='text-slate-700 text-[42px]'>Choose Your Plan</h2>
                  <p className='mx-w-lg mx-auto text-grey-500'>Start for free and scale up for your grow.
                Find the perfect plan for your content generation needs.</p>
            </div>
            <div className="mt-10">
                <PricingTable />
            </div>
        </div>
    )
}

export default Plans
