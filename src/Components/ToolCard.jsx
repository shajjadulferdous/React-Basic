import React from 'react';
import UserImg from '../assets/user.png'
import PackageImg from '../assets/package.png'
import RocketImg from '../assets/rocket.png'
const ToolCard = () => {
    return (
        <div className='w-12/16 mx-auto my-15'>
            <h1 className='text-4xl md:text-5xl text-center font-extrabold mb-3'>Get Started in 3 Steps</h1>
            <p className='text-[#627382] mb-10 text-center'>Start using premium digital tools in minutes, not hours.</p>
            {/* /<div className='flex text-center gap-8'>
             <div className='flex flex-col justify-center items-center relative shadow-md'>
                <div className='bg-linear-to-r from-[#4F39F6] to-[#655da4] p-2 text-white rounded-full w-fit absolute top-0 right-0 text-sm'>01</div>
                <div className='flex justify-center items-center bg-[#E1E7FF] p-5 rounded-full'>
                    <div><img src={UserImg} alt="" /></div>
                </div>
                <h3 className='text-2xl font-bold'>Create Account</h3>
                <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
             <div className='flex flex-col justify-center items-center relative shadow-md'>
                <div className='bg-linear-to-r from-[#4F39F6] to-[#655da4] p-2 text-white rounded-full w-fit absolute top-0 right-0 text-sm'>02</div>
                <div className='flex justify-center items-center bg-[#E1E7FF] p-5 rounded-full'>
                    <div><img src={PackageImg} alt="" /></div>
                </div>
                <h3 className='text-2xl font-bold'>Choose Products</h3>
                <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
            </div>
             <div className='flex flex-col justify-center items-center relative shadow-md'>
                 <div>
                    <div className='bg-linear-to-r from-[#4F39F6] to-[#655da4] p-2
                   text-white rounded-full w-fit absolute top-0 right-0 text-sm'>03</div>
                
                    <div className='flex justify-center items-center bg-[#E1E7FF] p-5 w-fit rounded-full '>
                       <img src={RocketImg} alt="" />
                    </div>
                    <h3 className='text-2xl font-bold'>Start Creating</h3>
                    <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                
                 </div>
            </div>
            </div>  */}
              <div className='gap-8 my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center '>
                  <div className='shadow-md w-full relative rounded-xl'>
                      <div className='text-center pt-10 justify-center items-center py-15 px-10 rounded-xl'>
                          <div className='flex justify-center items-center'>
                             <img src={UserImg} alt="" className='bg-[#E1E7FF] p-8 rounded-full' />
                          </div>
                           <h3 className='text-2xl font-bold'>Create Account</h3>
                           <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                      </div>
                         <span className='absolute top-1 right-1 text-white bg-linear-to-r from-[#4F39F6] to-[#655da4] px-2.5 py-1.5 rounded-full'>01</span>
                  </div>
                  <div className='shadow-md w-full relative rounded-xl'>
                      <div className='text-center pt-10 justify-center items-center py-15 px-10 rounded-xl'>
                          <div className='flex justify-center items-center'>
                             <img src={PackageImg} alt="" className='bg-[#E1E7FF] p-8 rounded-full' />
                          </div>
                           <h3 className='text-2xl font-bold'>Choose Products</h3>
                           <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                      </div>
                      <span className='absolute top-1 right-1 text-white bg-linear-to-r from-[#4F39F6] to-[#655da4] px-2.5 py-1.5 rounded-full'>02</span>
                  </div>
                  <div className='shadow-md w-full relative rounded-xl'>
                      <div className='text-center pt-10 justify-center items-center py-15 px-10 rounded-xl'>
                          <div className='flex justify-center items-center'>
                             <img src={RocketImg} alt="" className='bg-[#E1E7FF] p-8 rounded-full ' />
                          </div>
                           <h3 className='text-2xl font-bold'>Start Creating</h3>
                           <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                      </div>
                      <span className='absolute top-1 right-1 text-white bg-linear-to-r from-[#4F39F6] to-[#655da4] px-2.5 py-1.5 rounded-full'>03</span>
                  </div>
              </div>
        </div>
    );
};

export default ToolCard;