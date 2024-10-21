/* eslint-disable no-unused-vars */
import React from 'react';
import { services } from '../constants';
import serviceImg from '../assets/services.png'
const Services = () => {

    return (
        <>
            <section className='bg-[#F5F0EC] md:pt-48 pb-20 pt-10'>
                <div className='relative'>
                    <img src={serviceImg} alt="" className='hidden md:block md:absolute md:left-2/3 md:top-36'/>
                </div>
                <div className='hidden md:block md:text-5xl md:pb-6 md:pt-0  pt-8 font-bold text-[26px] md:px-14'>
                Nova Is Your One-stop Graphic Design Agency. We Offer All <br /> The Services You Need To Help Get Your Business
                </div>
                <div className='block md:hidden pt-8 font-bold text-[26px] px-8'>
                Nova Is Your One-stop Graphic Design Agency. We Offer All The Services You Need To Help Get Your Business
                </div>
                <ul className='mt-7 px-12 '>
                    {services.map((service, index)=>(
                        <li key={index} className='flex flex-col md:flex-row md:items-center gap-8 pb-7 pt-10 md:pl-44 border-2 border-l-0 border-r-0 border-t-0'>
                            <p className='block md:hidden text-xl'>{service.id}</p>
    
                            <div className="flex items-center gap-8">
                                <img src={service.image} alt={service.name} />
                                <p className='text-left text-3xl'>{service.name}</p>
                            </div>
                            {/* After the first list item, add the top image for mobile view */}
                            {index === 0 && (
                                <div className='block mt-5 md:hidden'>
                                    {/* Image shown after first item in mobile view */}
                                    <img src={serviceImg} alt="Mobile Image" />
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
export default  Services;