import React from 'react';
import { CiPlay1 } from "react-icons/ci";
import BannerImg from '../assets/banner.png'
import playImg from '../assets/Play.png'
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Banner = () => {
    return (
       <>
        {/* <hr className='opacity-50' /> */}
        <div className='flex mx-auto w-14/16 md:w-12/16 my-10 sm:my-15 gap-15 flex-col md:flex-row text-start md:text-center'>
            <div className='flex-1 flex justify-center items-center text-start'>
                  <div>
                 <p className='flex bg-[#E1E7FF] py-2 px-3 rounded-full w-fit gap-2 mb-4 items-center justify-center text-center '>  <VscDebugBreakpointLog className='bg-blue-200 animate-pulse' />
                     <span className='text-nowrap'>New: AI-Powered Tools Available</span></p>
                <h1 className='text-3xl md:text-5xl lg:text-5xl font-bold mb-4'>Supercharge Your Digital Workflow</h1>
                <p className='text-[#627382] mb-8 text-[18px] leading-5'>Access premium AI tools, design assets, templates, and productivity
                 software—all in one place. Start creating faster today.
                 Explore Products
                </p>
                <div className='flex gap-4 flex-col sm:flex-row'>
                    <button className='py-2 px-4 text-white  
                    bg-linear-to-r from-[#4F39F6] to-[#655da4] rounded-full font-semibold 
                    hover:cursor-pointer  active:scale-95
                    '>Explore Products</button>
                    <button className='flex gap-2 items-center justify-center
                     text-white font-semibold  py-2 px-4 
                      border-2 border-[#4F39F6] rounded-full hover:cursor-pointer  active:scale-95
                    '>
                         <img src={playImg} alt="" />
                         <span className='bg-linear-to-r from-[#4F39F6] to-[#655da4]
                          bg-clip-text
                          text-transparent 
                         '>Watch Demo</span>
                        </button>
                  </div>
                </div>
                </div>
                <div className='flex-1 flex justify-center'>
                    <img src={BannerImg} className='mt-5' alt="banner.png" />
                </div>
            
        </div>
       </>
    );
};

export default Banner;