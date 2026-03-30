import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
    return (
      
        <div className="bg-base-100 w-11/16 mx-auto flex md:flex-nowrap space-y-3">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a href="">Products</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
                </div>
                 <h1 className='bg-linear-to-r from-[#4F39F6] to-[#655da4] bg-clip-text text-transparent font-bold text-3xl'>DigiTools</h1>
            </div>
            <div className="navbar-center hidden xl:flex">
                <ul className="flex gap-4 px-1">
                    <li><a href="">Products</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end">
               <ul className='flex justify-between gap-4 items-center'>
                 <li><a href=""><FaShoppingCart /></a></li>
                 <li><a href="">Login</a></li>
                 <li className='py-2 px-4 text-white 
                 bg-linear-to-r from-[#4F39F6] to-[#655da4] rounded-full font-semibold'><a href="">Get Started</a></li>
               </ul>
            </div>
            </div>
    );
};

export default NavBar;