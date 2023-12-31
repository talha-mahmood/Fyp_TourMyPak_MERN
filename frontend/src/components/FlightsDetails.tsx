import React from 'react'

const FlightsDetails = () => {
  return (
    <div>
        <div className="flex">
            {/* right side */}
            <div className='ml-[16px]'>
                {/* header */}
                <div className='w-[840px] flex'>
                    <div>
                        <p>Cheapest</p>
                    </div>
                    <div>
                        <p>Best</p>
                    </div>
                    <div>
                        <p>Quickest</p>
                    </div>
                    <div>
                        <p>Other sort</p>
                    </div>


                </div>
        
            </div>
            {/* left side */}
            <div>
            <p className='font-semibold text-lg'>Filters</p>
            </div>
        </div>
    </div>
  )
}

export default FlightsDetails