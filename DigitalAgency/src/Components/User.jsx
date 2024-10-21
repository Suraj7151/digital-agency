/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import img1 from '../assets/BlankRectangle3.png'
import img2 from '../assets/BlankRectangle4.png'
import img3 from '../assets/BlankRectangle5.png'
import ellipseL from '../assets/EllipseLeft.png';
import ellipseR from '../assets/EllipseRight.png';

const User = () => {
  return (
    <section className=' bg-[#F5F0EC] pt-10' style={{height:`1027px`}}>
        <div className='hidden md:block relative'>
            <img src={ellipseL} alt="" className='absolute -top-96'/>
            <img src={ellipseR} alt="" className='absolute right-0 top-[520px]'/>
        </div>
        <div className="min-h-svh  relative" >
            <div className='hidden md:block px-6 text-2xl max-w-80 md:absolute md:right-48 md:max-w-5xl font-bold md:text-5xl md:top-6 mb-6 pb-6' >
                <h1>We Build Engaging User Experience By <br /> Connecting The Dots Between Users' Needs <br />And The Client's Business Model.</h1>
            </div>


            <div className='block md:hidden px-6 text-2xl max-w-[350px] font-bold  mb-6 pb-6' >
                <h1>We Build Engaging User<br />  Experience By Connecting The<br /> Dots Between Users' Needs And <br />The Client's Business Model.</h1>
            </div>
            <div className="flex flex-col px-6 md:px-16 gap-6 md:gap-10 md:pt-20 pb-40">
                <div>
                    <img src={img1} alt="" className='h-64 md:h-full'/>
                </div>
                <div className='h-52 w-11/12 md:w-full md:h-full md:absolute md:top-64 md:left-2/4 md:pl-10'>
                    <img src={img2} alt="" />
                </div>
                <div className='w-56 pt-6 h-44 md:w-full md:h-full md:absolute md:bottom-0 md:top-96 md:pt-60 left-64'>
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default User;
