import React from 'react'

const Yield = () => {
  return (
    <div className='min-h-screen bg-black '>
    <div className='text-white text-2xl flex justify-center pt-[40px]'>
     <h1>Stake tokens to yield
     <span className='text-purple-500 font-medium'> DChain</span>
     </h1>
     </div>

     <div className='flex justify-center mt-[40px]'>
            <button className="bg-gradient-to-r from-purple-900 via-black to-black text-white text-medium text-xl border rounded-lg border-purple-500 py-2 px-4">
                Deposit 1 ETH
            </button>
        </div>

        <div className='flex justify-center mt-[40px]'>
        <button className="bg-gradient-to-r from-purple-900 via-black to-black text-white text-medium text-xl border rounded-lg border-purple-500 py-2 px-4">
            Withdraw All
        </button>
    </div>
    

    </div>
  )
}

export default Yield
