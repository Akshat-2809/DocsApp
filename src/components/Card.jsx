import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[45px] bg-zinc-200 py-10 px-5 text-black overflow-hidden'>
        <FaRegFileAlt />
        <p className=' mt-5 leading-[1.4]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, cum fuga!</p>
        <div className='footer absolute bottom-0  w-full h-12 left-0'>
          <div className='mb-3 flex justify-between items-center px-8 py-3  '>
            <h5>0.4mb</h5>
            <span className='w-5 h-5 flex items-center justify-center'>
              <LuDownload />
            </span>
          </div>
        </div>

    </div>
    
  )
}

export default Card