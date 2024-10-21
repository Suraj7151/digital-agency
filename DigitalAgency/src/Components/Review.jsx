/* eslint-disable no-unused-vars */
import React from 'react';
import { reviews } from '../constants';
import leftarrow from '../assets/left arrow.png';
import rightarrow from '../assets/rightarrow.png';
import dot from '../assets/Dot.png';

const Review = () => {

    return (
        <>
            <section className="bg-[#F5F0EC] review-section flex flex-col justify-start px-4 md:p-6 md:pt-20">
                <div className="hidden md:block heading font-bold max-w-80 md:max-w-none md:text-center text-2xl md:text-4xl">
                    <p>Lets See What Our Client Says About Our <br /> Services Which Is Website Design, App Design, <br /> Development, And Branding.</p>
                </div>

                <div className="block md:hidden heading font-bold max-w-80 text-[26px]">
                    <p>Lets See What Our Client Says<br /> About Our Services Which Is<br /> Website Design, App Design, <br /> Development, And Branding.</p>
                </div>

                <div className="overflow-scroll flex space-x-6 md:justify-around py-6 md:items-center pt-16 md:p-16 ">
                <p className='hidden md:block'><img className='' src={leftarrow} alt="" /></p>
                    {reviews.map((review, index) => (
                    <div key={index} className=' p-5 pr-10 gap-6 flex flex-col md:justify-center md:px-16 md:gap-8 border-2 border-black rounded-lg md:h-72 min-h-48 min-w-60 md:w-[512px]'>
                            <p className='text-xs w-48 md:w-80 md:text-lg'>{review.desc}</p>
                            <div className="flex space-x-6">
                                <img className='w-14 h-14' src={review.image} alt="" />
                                <div className='flex flex-col justify-center'>
                                    <h1 className='text-sm'>{review.name}</h1>
                                    <h1 className='text-xs'>{review.position}</h1>
                                </div>
                            </div>
                    </div> 
                    ))}
                    <p className='hidden md:block'><img src={rightarrow} alt="" /></p>
                </div>
                    <div className='flex justify-center items-center'>
                        <img src={dot} alt="" />
                    </div>
            </section>  
        </>
    );
}

export default Review