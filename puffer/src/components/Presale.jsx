import React from 'react'

const Presale = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-950">
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-custom-grid bg-custom-size flex flex-col items-center pt-16 ">
    
   <div className='w-1/4 flex justify-center items-center h-screen/3 border border-blue-500 rounded-lg flex-col pb-[40px] shadow-xl shadow-blue-500'>

  <div>
  <h1 className='text-blue-500 text-4xl font-semibold shadow-md shadow-blue-500 text-center  mt-[30px]'>Presale </h1>
  </div>

  <div className='border border-transparent mt-[40px] flex jusitfy-between gap-x-12'>
  <button className='text-white border border-blue-500 rounded-lg h-[40px] px-[4px] py-[2px] border-2 font-medium'>Switch to caption</button>
  <button className='text-white border border-blue-500 rounded-lg h-[40px] px-[4px] py-[2px] border-2 font-medium'>Set Slippage</button>
  </div>

  <div className=' mt-[40px] '>
  <input 
    className='bg-transparent text-white placeholder-white border border-blue-500 rounded-lg   h-[40px]' 
    placeholder='Enter percentage' 
  />
</div>

<div className='mt-[40px] w-2/3 px-4 border border-blue-500 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-[5px] text-2xl rounded-lg flex justify-center'>
  <button className='text-white'>Place Order</button>
</div>



   </div>

    </div>
    </div>
  )
}

export default Presale
