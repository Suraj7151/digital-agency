/* eslint-disable no-unused-vars */
import React from 'react';
import ig from '../assets/Ig.png';
import fb from '../assets/fb.png';
import mail from '../assets/mail.png';
import line from '../assets/Line.png';
import line2 from '../assets/Line2.png';
import arrow from '../assets/Btn.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';


const Footer = ()=>{

    return (
        <>
            <footer className='bg-[#CEF364] h-[601px] md:h-[460px] w-full'>
                <div className="container px-6 md:px-16 h-full grid grid-cols-3 md:grid-cols-4 md:gap-6">
                    {/* Left Section */}
                    <div className="flex flex-col justify-between w-1/3 py-14 h-full">
                        <h1 className="text-2xl font-bold">NOVA.</h1>
                        <p className="text-xs w-32 text-[#0101018c] md:w-60 md:max-w-none md:text-sm mt-12 md:mt-4 bottom-0">© 2024 – Copyright All Rights Reserved.</p>
                    </div>

                {/* Center Section */}
                    <div className="relative w-1/3 pl-10 ">
                        <img src={line} alt="" className='hidden md:block h-[460px]'/>
                        <img src={line2} alt="" className='block md:hidden h-[601px]'/>
                        <img src={arrow} alt="" className='absolute bottom-[227px] left-[20px] md:left-[13px] md:bottom-[132px] h-14'/>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col pb-10 md:pl-96  pr-[10px] md:pr-0 md:flex-row gap-8 md:gap-52 py-14 justify-around w-1/3 md:w-9/12">
                    {/* Product Links */}
                        <div>
                            <h2 className="font-bold mb-2">Product</h2>
                            <ul className="text-[#0101018c] space-y-4 text-xs md:text-base">
                                <li><a href="#">Envato</a></li>
                                <li><a href="#">UI8</a></li>
                                <li><a href="#">UIplus</a></li>
                                <li><a href="#">Iconhub</a></li>
                                <li><a href="#">Pixel</a></li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <h2 className="font-bold mb-2">Company</h2>
                            <ul className="text-[#0101018c] space-y-4 text-xs md:text-base">
                                <li><a href="#">Work</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Testimonials</a></li>
                            </ul>
                        </div>

                    {/* Social Media Links */}
                        <div className='md:pl-16 mr-16'>
                            <h2 className="text-lg mb-2 w-32 ">Social Media</h2>
                                <ul className="text-[#0101018c] flex space-x-2 md:space-x-4 w-44  pr-12 md:text-base">
                                <li className='border-2 border-black rounded-full flex justify-center items-center md:p-2 p-3'>
                                <img src={ig} alt="Instagram" className="md:w-4 md:h-4 w-96 h-6"/>
                            </li>
                            <li className='border-2 border-black rounded-full flex justify-center items-center md:p-2 p-3'>
                                <img src={fb} alt="Facebook" className="md:w-4 md:h-4 w-96 h-6"/>
                                {/* <FontAwesomeIcon icon={faFacebook} /> */}
                            </li>
                            <li className='border-2 border-black rounded-full flex justify-center items-center md:p-2 p-3'>
                                <img src={mail} alt="Mail" className="md:w-4 md:h-4 w-96 h-6"/>
                            </li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div className="text-right  relative">
                    <a href="#" className="absolute text-[#0101018c] bottom-4 md:bottom-8 right-10 text-sm">Privacy Policy</a>
                </div>
            </footer>
        </>
    );
}

export default Footer;