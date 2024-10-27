import React from 'react';
import banner from '../../../img/banner.png'
import { FaCalendarAlt } from "react-icons/fa";

const Banner = () => {
    return (
        <div
            className="hero min-h-screen bg-black "
            style={{
                backgroundImage: `url(${banner})`,
            }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-neutral-content text-center pt-32 md:pt-40">
                <div className="max-w-[1002px] flex flex-col justify-center items-center">
                    <h1 className="mb-9 text-4xl md:text-[64px] font-bold text-white leading-[120%]">Complete Suite of Wellness and Aesthetic Services</h1>
                    <button className=" bg-[#E5C466]  rounded-full flex gap-2 justify-center items-center hover:bg-[#D9A922] hover:scale-95 ">
                        <span className='bg-[#D9A922] rounded-full px-4 py-[15px] my-[7px] ml-[8px]'><FaCalendarAlt className='text-white w-6 h-6'></FaCalendarAlt></span>
                        <span className='text-black text-lg font-bold leading-[150%] pr-6'>Schedule a Consult</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;