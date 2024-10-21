/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../assets/BlankRectangle6.png'

const Contact = () => {

    return (
        <>
            <section className='bg-[#F5F0EC] px-6 py-40'>
                <div className='flex gap-10 flex-col md:flex-row md:justify-around md:items-center'>
                    <div className='order-1 md:order-none'>
                        <img src={img} alt="" />
                    </div>
                    <div className='order-2 md:order-none'>
                        <h1 className='font-bold text-6xl md:text-9xl'>Let&apos;s <br /> Build And</h1>
                    </div>
                    <div className='order-0 d:order-none md:self-start'>
                        <p className='text-4xl'>hinova@mail.com</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:justify-center md:items-center  md:space-x-20 md:pl-64">
                    <div className='order-1 md:order-none'>
                        <button className='bg-black p-6 rounded-lg w-44 h-14 text-center text-white'>Get In Touch </button>
                    </div>
                    <div className='order-0 pl-28 md:order-none  md:pl-0'>
                        <h1 className='font-bold text-6xl md:text-9xl mb-4 md:mb-0 '>Scale It!</h1>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;