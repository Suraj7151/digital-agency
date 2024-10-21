/* eslint-disable no-unused-vars */
import React from 'react';
import backgroundImage from '../assets/Gradient.png';  // Adjust the path as necessary
import section1 from '../assets/Section01.png';
import logo from '../assets/Logo.png';
import side from '../assets/side.png'
const Header = () =>{
    return (
        <>
            <section className='header h-[612px] bg-cover bg-center min-w-full sm:w-full md:min-h-screen flex flex-col justify-between p-6 md:p-10 md:bg-[url(${backgroundImage})]'
            style={{ backgroundImage: `url(${section1})` }}
            >
                <nav className='flex justify-between items-center'>
                    <div className="text-3xl flex gap-2 font-bold">
                        <img src={logo} alt="" />
                        NOVA
                    </div>
                    <ul className='hidden md:flex space-x-12 text-lg'>
                        <li><a href="">Work</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Testimonials</a></li>
                    </ul>
                    <button className="hidden bg-black text-white py-3 px-6 rounded-lg md:flex items-center">
                        Contact <span className="ml-2">→</span>
                    </button>
                    <button className="md:hidden"><img src={side} alt="" /></button>
                </nav>

                <div className='static'>
                    <p className='hidden md:block absolute right-14 max-w-xs text-right text-md'>We are Nova, bluo is a creative digital agency with serveral services which focused on quality and innovations for your company.</p>

                    <p className='block md:hidden absolute right-5 top-24 max-w-56 text-right text-xs'>We are Nova, bluo is a creative digital <br /> agency with serveral services which <br /> focused on quality and innovations for <br /> your company.</p>
                </div>

                <div className="flex">
                    <div className='hidden md:block font-bold  md:text-9xl'>
                        <h1 className="md:max-w-40" >Creative </h1>
                        <h1 className="">Digital Agency</h1>
                    </div>

                    <div className='block md:hidden absolute bottom-[500px] text-6xl font-bold'>
                        <h1 className="max-w-40" >Creative </h1>
                        <h1 className="max-w-40">Digital Agency</h1>
                    </div>

                    <div className='static '>
                        <span className='absolute right-5 bottom-96  md:absolute md:right-14 md:bottom-14 text-center'>
                            <p className='text-xl'>Establish</p> 
                            <p className='text-4xl text-center'>2024</p>
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Header;

// import React from 'react';

// const Header = () => {
//   return (
//     <section className="bg-[#D4F176] bg-cover bg-center min-h-screen w-full flex flex-col justify-between p-6 md:p-10 overflow-hidden"
//     style={{ backgroundImage: `url(${backgroundImage})`}}>
//       <nav className="flex justify-between items-center">
//         <div className="text-2xl font-bold">NOVA.</div>
//         <ul className="hidden md:flex space-x-8">
//           <li><a href="#work">Work</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#service">Service</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#testimonials">Testimonials</a></li>
//         </ul>
//         <button className="hidden md:flex bg-black text-white px-4 py-2 rounded-full items-center">
//           Contact <span className="ml-2">→</span>
//         </button>
//         <button className="md:hidden">☰</button>
//       </nav>

//       <div className="flex-grow flex flex-col justify-between mt-8 md:mt-0">
//         <p className="md:absolute md:right-10 md:top-32 md:max-w-xs text-sm md:text-right">
//           We are Nova, bluo is a creative digital agency with several services which focused on quality and innovations for your company.
//         </p>

//         <div className="relative mt-8 md:mt-0">
//           <h1 className="text-5xl md:text-8xl font-bold leading-tight">
//             Creative<br />Digital Agency
//           </h1>
//           <div className="md:absolute md:right-0 md:bottom-0 mt-8 md:mt-0">
//             <p className="text-lg">Establish</p>
//             <p className="text-3xl font-bold">2024</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Header;