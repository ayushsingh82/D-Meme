import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {
    return (
      <nav className=''>
        <div className='flex flex-row mx-auto px-[40px] py-[25px] justify-between items-center mt-[0px] bg-black'>
          <div className='font-bold text-2xl text-purple-400'>
            <a href='/'>D~Meme</a>
          </div>
          <div className='flex justify-center flex-1 space-x-8 text-center'>
            <h1 className='font-normal text-xl text-white'>
              <a href='/'>Dashboard</a>
            </h1>
            <h1 className='font-normal text-xl text-white border rounded-lg px-[2px] border-purple-500 bg-gradient-to-r from-purple-900 via-black to-black text-white'>
              <a href='/create'>Create token</a>
            </h1>
          </div>
          <div className='text-white'>
           <ConnectButton/>
          </div>
        </div>
        <hr className='border-t-2 border-purple-600' />
      </nav>
    );
  }
  

export default Navbar