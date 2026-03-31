import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <div className='bg-[#101727] text-white '>
             <div className='w-12/16 mx-auto'>
             <div className='pt-30 pb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  justify-center'>
                 <div>
                    <h1 className=' text-2xl md:text-4xl font-bold mb-4'>DigiTools</h1>
                    <p className='opacity-70 text-sm'>Premium digital tools for creators, professionals, and businesses.
                         Work smarter with our suite of powerful tools.</p>
                 </div>
                 <div className='space-y-3'>
                     <h2 className='text-[18px]'>Product</h2>
                     <p className='opacity-70 text-sm'>Features</p>
                     <p className='opacity-70 text-sm'>Pricing</p>
                     <p className='opacity-70 text-sm'>Templates</p>

                     <p className='opacity-70 text-sm'>Integrations</p>
                 </div>
                 <div className='space-y-3'>
                     <h2 className='text-[18px]'>Company</h2>
                     <p className='opacity-70 text-sm'>About</p>
                     <p className='opacity-70 text-sm'>Blog</p>
                     <p className='opacity-70 text-sm'>Careers</p>
                     <p className='opacity-70 text-sm'>Press</p>
                 </div>
                 <div className='space-y-3'>
                     <h2 className='text-[18px]'>Resources</h2>
                     <p className='opacity-70 text-sm'>Documentation</p>
                     <p className='opacity-70 text-sm'>Help Center</p>
                     <p className='opacity-70 text-sm'>Community</p>
                     <p className='opacity-70 text-sm'>Contact</p>
                 </div>
                 <div>
                     <h2 className='text-[18px] mb-3'>Social Links</h2>
                     <div className='flex gap-4'>
                         <FaInstagram />
                         <FaFacebookSquare />
                         <FaXTwitter />
                     </div>

                 </div>
             </div>
             <div>
                <footer className="footer sm:footer-horizontal  text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">

                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a className='opacity-70'>
                       <p>Privacy Policy</p>
                    </a>
                    <a className='opacity-70'>
                      <p>Terms of Service</p>
                    </a>
                    <a className='opacity-70'>
                       <p>Cookies</p>
                    </a>
                </nav>
                </footer>
             </div>
            </div>
        </div>
        </>
    );
};

export default Footer;