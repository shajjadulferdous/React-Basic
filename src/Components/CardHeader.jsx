import React from 'react';

const CardHeader = ({SetState}) => {
    return (
        <div className='flex justify-center items-center mt-15'>
            <div >
                <h1 className='font-extrabold text-5xl text-center mb-4'>Premium Digital Tools</h1>
                <p className='text-center text-[#627382]'>Choose from our curated collection of premium digital products designed </p>
                <p className='text-center text-[#627382]'>to boost your productivity and creativity.</p>
                <div className='flex justify-center items-center mt-3'>
                    <div className="tabs tabs-box bg-white space-x-4">
                    <input type="radio" name="my_tabs_1" className="tab bg-linear-to-r from-[#4F39F6] to-[#655da4] text-white px-4 py-2 rounded-full" onClick={ ()=>{SetState(true)}} aria-label="Products" defaultChecked />
                    <input type="radio" name="my_tabs_1" className="tab px-4 py-2 rounded-full text-neutral" onClick={ ()=>{SetState(true)}} aria-label="Cart" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardHeader;