/* eslint-disable no-unused-vars */
import React from 'react';
import { brandLogos } from '../constants';
import img from '../assets/BlankRectangle1.png';
import img2 from '../assets/BlankRectangle3.png';
import ellipseL from '../assets/EllipseLeft.png';
import ellipseR from '../assets/EllipseRight.png';
const Branding = () =>{

    return(
        <>
            <section className="bg-[#F5F0EC] bg-cover w-screen px-4">
                <div className='hidden md:block relative'>
                    <img src={ellipseL} alt="" className='absolute top-96 -left-4'/>
                </div>
                <div className='hidden md:block relative'>
                    <img src={ellipseR} alt="" className='absolute top-[900px] -right-2 '/>
                </div>
                <div className="flex gap-12 pr-6 md:justify-between align-middle py-20 md:px-16">
                    <div>
                        <ul className="flex flex-col justify-center align-middle py-8 pl-10 gap-14">
                            {brandLogos.map((logo, index) => (
                                <li key={index} className="max-w-18"><img src={logo.image} alt="" /></li>
                            ))}
                            
                        </ul>
                    </div>
                    <div className=''>
                        <img src={img2} alt="" className="h-full block md:hidden" />

                        <img src={img} alt="" className="hidden md:block" />
                    </div>
                </div>

                <div className="hidden md:block min-h-full text-3xl md:min-h-52  relative  font-bold md:text-5xl pr-2 pt-4">
                    <p className='md:absolute md:h-screen right-14 text-right'>
                    We Are A Branding Agency Team Lead By Colium <br /> 
                    And Kate. We Have A Talented Web Developer, <br /> Ui-ux Design And Branding.
                    </p>
                </div>

                <div className="block md:hidden min-h-full text-3xl relative  font-bold pr-2 pt-4">
                    <p className='md:absolute md:h-screen right-14 text-right'>
                    We Are A Branding Agency Team  <br />Lead By Colium 
                    And Kate. We <br /> Have A Talented Web Developer, <br /> Ui-ux Design And Branding.
                    </p>
                </div>
                

                <div className="flex flex-col mt-12 gap-10 md:gap-0 justify-center md:flex-row md:justify-center md:mx-28 border-2 border-t-neutral-800 border-r-0 border-l-0 border-b-0 mb-0 pb-0" >
                    <div className='mx-8 md:mx-0 rounded-b-none rounded-r-lg border-black border-t-2 rounded-t-3xl md:rounded-t-[55px] border-l-2 border-r-[2px] p-10 rounded-br-none md:rounded-tr-[55px] md:border-t-0 md:border-l-0 md:rounded-tl-none md:border-r-[0.1px]'>
                        <div className="flex pb-4 space-x-4 align-middle">
                            <h1 className='font-bold text-6xl'>12</h1>
                            <p className='text-xl'>Years <br /> Experiences</p>
                        </div>
                        <p className='max-w-60'>Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit,</p>
                    </div>

                    <div className='mx-8 md:mx-0 p-10 rounded-b-none rounded-t-3xl border-r-2  border-black border-l-2 border-t-2 md:border-t-0 md:rounded-t-[55px] md:border-l-[0.1px] md:border-r-[0.1px] md:pr-24'>
                        <div className="flex pb-4 space-x-4">
                            <h1 className='font-bold text-6xl'>115</h1>
                            <p className='text-xl'>Projects <br /> Complete</p>
                        </div>
                        <p className='max-w-60'>Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit,</p>
                    </div>

                    <div className='mx-8 md:mx-0 p-10 rounded-b-none rounded-t-3xl border-r-2  border-black border-l-2 border-t-2  md:border-t-0 md:rounded-t-[55px] md:border-l-[0.1px] md:border-r-0 '>
                        <div className="flex pb-4 space-x-4">
                            <h1 className='font-bold text-6xl'>102</h1>
                            <p className='text-xl'>Happy <br /> Customer</p>
                        </div>
                        <p className='max-w-60'>Consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Ipsum dolor sit amet, consectetur adipiscing elit. Ut elit,</p>
                    </div>
                </div>
                
            </section>
            
        </>
    );
};

export default Branding