import React from 'react'

function Background() {
  return (
    <>
        <div className='fixed z-[2] w-full h-screen'>
            <div className='w-full py-8 top-[2%] flex justify-center text-white font-semibold text-[2vw]'> Documents.</div>
            <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] text-white font-semibold leading-none tracking-tighter'>DOCS.</h1>
        </div>
        
    </>
  )
}

export default Background