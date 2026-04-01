import React from 'react';
import { MdDelete } from "react-icons/md";
import NoItemImg from '../assets/icon_empty_cart.png'
import { toast } from 'react-toastify';
const BuyCard = ({buyCard,setBuyCard}) => {
    const sum = buyCard.reduce( (s , items) => s + items.price , 0)
    const handleOneCard = (items)=>{
        const filtered = buyCard.filter( item => item.id != items.id);
        setBuyCard(filtered);
        toast(`${items.name} Deleted Successfully`)
    }
    return (
        <div className='w-12/16 mx-auto mt-10 space-y-5'>
            {
                buyCard.length ? buyCard.map((cart ) => 
                  <div key={cart.id} className='flex bg-base-200 items-center justify-between flex-col sm:flex-row p-3 sm:p-1 rounded-3xl'>
                        <div className='flex gap-3  p-5 flex-col sm:flex-row justify-center items-center '>
                        <div className='p-3 rounded-full border w-fit bg-white'>
                             <img src={cart.image} className='h-10 w-10' alt="" />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>{cart.name}</h2>
                            <p className='opacity-60 text-center sm:text-start'>${cart.price}</p>
                        </div>
                    </div>
                      <div className='pr-6'>
                          <div className='btn' onClick={()=>{handleOneCard(cart)}}>
                            <MdDelete className='w-5 h-5 '></MdDelete>
                         </div>
                      </div>
                  </div> 
                 )
                 : <div className='my-20'>
                      <div className='flex justify-center items-center mb-3'>
                         <img src={NoItemImg} alt="" />
                      </div>
                      <h1 className='text-5xl font-bold text-center text-[#627382]'>Your Cart is Empty!</h1>
                      <p className='text-[#627382] text-center'>Looks like you haven't made order yet.</p>
                 </div>
            }
             <div className='flex justify-between'>
                <div className='font-bold text-2xl'>Total</div>
                <div className='font-bold text-2xl px-5'>{sum}</div>
             </div>
            <button onClick={ ()=> {setBuyCard([]);
                toast.success(`All items cleared`)
            }} className='btn btn-primary p-4 w-full rounded-full'>Proceed to Checkout</button>
        </div>
    );
};

export default BuyCard;