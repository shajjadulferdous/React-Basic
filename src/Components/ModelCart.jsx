import React, { useState } from 'react';
import { toast } from 'react-toastify';
const ModelCart = ({cart , buyCard , setBuyCard , }) => {
    const [isBuy , buyFunc] = useState(false);
    const handleBuy = (buyerCart)=>{
         buyFunc(true);
         const ans =  buyCard.filter(card=> card.id != buyerCart.id);
         
         setBuyCard([...ans, cart]);
         if (ans.length == buyCard.length) toast.success(`${buyerCart.name} Purchassed suceessfully`)
         else toast.error(`${cart.name} Already Purchassed`)
    }
    return (
                  <div className="card  bg-base-100 shadow-sm rounded-xl  
                        duration-500 transition-all hover:shadow-md 
                        hover:-translate-y-1 hover:border-primary/30">
                    <div className="card-body">
                         <div className='flex justify-end'>
                             <span className={`badge badge-xs badge-warning ${cart.tag == 'new'?'bg-green-200 text-green-500 border-none':cart.tag =='popular' ?'bg-[#E1E7FF] text-[#4F39F6] border-none':'bg-[#FEF3C6] border-none text-[#BB4D00]'}`}>{cart.tag}</span>
                         </div>
                        <div className="flex justify-between flex-col">
                         <div className='p-3  w-fit rounded-full border-[#6f889f] border-2' >
                             <img className='w-10 h-10' src={cart.image} alt="" />
                         </div>
                        <h2 className="text-2xl font-bold">{cart.name}</h2>
                         
                        <p className='text-[#627382] text-[16px]'>{cart.description}</p>
                        <span className="text-xl mt-5">
                         <span className='font-bold text-3xl'>${cart.price}</span>     
                            <span className='text-[#627382]'>/{cart.period.toUpperCase()}</span></span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            {
                                cart.features.map( (feature , index) =><li key={index}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='text-[#627382] text-sm'>{feature}</span>
                                </li> 
                            )
                            }                                           
                        </ul>
                        <div className="mt-6 ">
                        <button onClick={() =>{handleBuy(cart)}} className={`btn ${!isBuy ? 'btn-primary' : 'btn-info text-white'} btn-block rounded-full`}>{isBuy ? 'Added to Cart !':'Buy Now'}</button>
                        </div>
                    </div>
                  </div>
    );
};

export default ModelCart;