import React from 'react';
import { MdDelete } from "react-icons/md";

const BuyCard = ({buyCard,setBuyCard}) => {
    console.log(buyCard)
    return (
        <div className='w-12/16 mx-auto mt-10 space-y-5'>
            {
                buyCard.map((cart) => 
                  <div className='flex bg-base-200 items-center justify-between  rounded-3xl'>
                        <div className='flex gap-3  p-5'>
                        <div className='p-3 rounded-full border w-fit bg-white'>
                             <img src={cart.image} className='h-10 w-10' alt="" />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>{cart.name}</h2>
                            <p className='opacity-60'>${cart.price}</p>
                        </div>
                    </div>
                      <div className='pr-6'>
                          <div className='btn'>
                            <MdDelete className='w-5 h-5 '></MdDelete>
                         </div>
                      </div>
                  </div>
                 )
            }
        </div>
    );
};

export default BuyCard;