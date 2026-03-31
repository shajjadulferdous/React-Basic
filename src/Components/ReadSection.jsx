import React from 'react';

const ReadSection = () => {
    return (
        <>
          <div className='bg-linear-to-r from-[#4F39F6] to-[#655da4] text-white mt-15 md:mt-30'>
               <div className='w-12/16 mx-auto py-15 md:py-30 text-center'>
                   <h1 className='text-2xl md:text-4xl font-extrabold mb-4'>Ready to Transform Your Workflow?</h1>
                   <p className='opacity-70'>Join thousands of professionals who are already using Digitools to work smarter.</p>
                   <p className='opacity-70'>Start your free trial today.</p>
                   <div className='pt-10 pb-4 space-x-4'>
                      <span className="btn btn-outline btn-primary bg-white  text-[#4F39F6] rounded-full border-white">Explore Products</span>
                      <span className="btn btn-outline btn-primary text-white border-white rounded-full ">View Pricing</span>
                   </div>
                   <p className='opacity-70'>14-day free trial • No credit card required • Cancel anytime</p>
               </div>
          </div>
        </>
    );
};

export default ReadSection;