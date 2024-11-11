import React from 'react';
import Marquee from "react-fast-marquee";
import instaImg1 from '../../../img/insta1.png'
import instaImg2 from '../../../img/insta2.png'
import instaImg3 from '../../../img/insta3.png'
import instaImg4 from '../../../img/insta4.png'
import instaImg5 from '../../../img/insta5.png'
import instaImg6 from '../../../img/insta6.png'
import instaImg7 from '../../../img/insta7.png'


const InstagramPage = () => {
    return (
        <div className='bg-[#E9F0EC] pb-1'>
            <h3 className='text-[#062223] text-[28px] md:text-5xl font-bold leading-[120%] text-center mb-10'>Our Instagram</h3>
            <Marquee>
                <img className='mr-1' src={instaImg1} alt="" />
                <img className='mr-1' src={instaImg2} alt="" />
                <img className='mr-1' src={instaImg3} alt="" />
                <img className='mr-1' src={instaImg4} alt="" />
                <img className='mr-1' src={instaImg5} alt="" />
                <img className='mr-1' src={instaImg6} alt="" />
                <img className='mr-1' src={instaImg7} alt="" />
                <img className='mr-1' src={instaImg1} alt="" />
                <img className='mr-1' src={instaImg2} alt="" />
                <img className='mr-1' src={instaImg3} alt="" />
                <img className='mr-1' src={instaImg4} alt="" />
                <img className='mr-1' src={instaImg5} alt="" />
                <img className='mr-1' src={instaImg6} alt="" />
                <img className='mr-1' src={instaImg7} alt="" />
            </Marquee>
        </div>
    );
};

export default InstagramPage;