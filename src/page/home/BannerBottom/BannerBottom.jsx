import React from 'react';
import phone from "../../../img/phone.png"
import message from "../../../img/message.png"

const BannerBottom = () => {
    return (
        <div className='flex bg-[#0B5E62] flex-col md:flex-row justify-center items-center py-6 px-5 md:px-0'>
            <div>
                <p className=' md:max-w-[596px] text-white text-base font-medium leading-[160%]  md:border-r-2 md:border-[#95DDD947] pr-0 md:pr-20 mb-8 md:mb-0'>Lorem ipsum dolor sit amet consectetur. Nam nulla mattis viverra in purus ac aenean vitae duis. Volutpat mi nunc nunc facilisis. </p>
            </div>
            {/* phone */}
            <div className='flex gap-3 border-[1px] border-[#95DDD947] rounded-[10px] pt-[10px] pb-3 pl-[11px] pr-5 mr-0 md:mr-10 ml-0 md:ml-28 mb-5 md:mb-0'>
                <img className='w-12 h-12' src={phone} alt="" />
                <div>
                    <h4 className='text-[#AAC6C0] text-sm font-medium leading-[150%]'>Call us</h4>
                    <h3 className='text-xl text-white font-bold leading-[140%]'>716-407-3250</h3>
                </div>
            </div>
            {/* message */}
            <div className='flex gap-3 border-[1px] border-[#95DDD947] rounded-[10px] pt-[10px] pb-3 pl-[11px] pr-5'>
                <img className='w-12 h-12' src={message} alt="" />
                <div>
                    <h4 className='text-[#AAC6C0] text-sm font-medium leading-[150%]'>Text us</h4>
                    <h3 className='text-xl text-white font-bold leading-[140%]'>716-200-6146</h3>
                </div>
            </div>
        </div>
    );
};

export default BannerBottom;