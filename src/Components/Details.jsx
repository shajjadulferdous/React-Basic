import React from 'react';

const Details = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#655da4] text-white  '>
           <div className='flex justify-between w-14/16 md:w-12/16 mx-auto flex-col sm:flex-row items-center'>
            <div className='px-5 md:my-10 my-5'>
                <h1 className='font-bold text-4xl md:text-6xl mb-3'>50K+</h1>
               <p>Active Users</p>
            </div>
            <div className='px-5 md:my-10 my-5 border-x-2'>
                <h1 className='font-bold text-4xl md:text-6xl mb-3'>200+</h1>
                <p>Premium Tools</p>
            </div>
            <div className='px-5 md:my-10 my-5'>
                <h1 className='font-bold text-4xl md:text-6xl mb-3'>4.9</h1>
                <p>Rating</p>
            </div>
           </div>
        </div>
    );
};

export default Details;