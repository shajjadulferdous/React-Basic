import React from 'react';

const PricingCard = () => {
    return (
        <>
          <div>
                <h1 className='text-4xl md:text-5xl  text-center font-extrabold mb-3'>Simple, Transparent Pricing</h1>
                <p className='text-center text-[#627382] text-[18px]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-12/16 mx-auto'>
                  <div className="card  bg-base-100 shadow-sm rounded-xl 
                    duration-500 transition-all hover:shadow-md 
                    hover:-translate-y-1 hover:border-primary/30
                  ">
                    <div className="card-body">
                    
                        <div className="flex justify-between flex-col">
                        <h2 className="text-3xl font-bold">Starter</h2>
                        <p className='text-[#627382] text-[16px]'>Perfect for getting started</p>
                        <span className="text-xl mt-5">
                         <span className='font-bold text-3xl'>$0</span>     
                            <span className='text-[#627382]'>/month</span></span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>

                            <span className='text-[#627382] text-sm'>Access to 10 free tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382] text-sm'>Basic templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382] text-sm'>Community support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382] text-sm'>1 project per month</span>
                        </li>
                        
                        </ul>
                        <div className="mt-6">
                        <button className="btn btn-primary btn-block rounded-full">Get Started Free</button>
                        </div>
                    </div>
                  </div>
                  <div className="card  bg-base-100 shadow-sm bg-linear-to-r from-[#4F39F6] to-[#655da4] relative rounded-xl
                     duration-500 transition-all hover:shadow-md 
                     hover:-translate-y-1 hover:border-primary/30
                  ">
                    <div className="card-body text-white">
                        <span className="badge  bg-[#FEF3C6] text-[#BB4D00] rounded-full py-2 px-3 absolute -top-2 right-[35%]">Most Popular</span>
                        <div className="flex justify-between flex-col">
                        <h2 className="text-3xl font-bold text-white">Pro</h2>
                        <p className='text-[16px] opacity-70'>Best for professionals</p>
                        <span className="text-xl mt-5">
                         <span className='font-bold text-3xl'>$29</span>     
                            <span className=''>/month</span></span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-netural" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>

                            <span className=' text-sm'>Access to all premium tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-netural" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className=' text-sm'>Unlimited templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-netural" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className=' text-sm'>Priority support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-netural" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className=' text-sm'>Unlimited projects</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-netural" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className=' text-sm'>Cloud sync</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-netural" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-sm'>Advanced analytics</span>
                        </li>
                        
                        </ul>
                        <div className="mt-6">
                        <button className="btn btn-netural btn-block rounded-full">Get Started Free</button>
                        </div>
                    </div>
                  </div>

                  <div className="card  bg-base-100 shadow-sm rounded-xl
                     duration-500 transition-all hover:shadow-md 
                     hover:-translate-y-1 hover:border-primary/30
                  ">
                    <div className="card-body">
                    
                        <div className="flex justify-between flex-col">
                        <h2 className="text-3xl font-bold">Enterprise</h2>
                        <p className='text-[#627382] text-[16px]'>For teams and businesses</p>
                        <span className="text-xl mt-5">
                         <span className='font-bold text-3xl'>$99</span>     
                            <span className='text-[#627382]'>/month</span></span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>

                            <span className='text-[#627382] text-sm'>Everything in Pro</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382] text-sm'>Team collaboration</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382] text-sm'>Custom integrations</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382] text-sm'>Dedicated support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382] text-sm'>SLA guarantee</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className='text-[#627382] text-sm'>Custom branding</span>
                        </li>
                        
                        </ul>
                        <div className="mt-6">
                        <button className="btn btn-primary btn-block rounded-full">Contact Sales</button>
                        </div>
                    </div>
                  </div>

             </div>
          </div>
        </>
    );
};

export default PricingCard;