import React from 'react';
import { useParams } from 'react-router-dom';
import { FaCalendarDays } from "react-icons/fa6";


import BodyImg from "../../../img/Shared/Body.png";
import HairImg from "../../../img/Shared/Hair.png";
import FaceImg from "../../../img/Shared/Face.png";
import InjectableImg from "../../../img/Shared/Injectables.png";
import CoachingImg from "../../../img/Shared/Coaching.png";
import IVHydrationImg from "../../../img/Shared/IVHydration.png";
import MedicalRehabImg from "../../../img/Shared/MedicalRehab.png";
import BodySculptingImg from "../../../img/Shared/BodySculpting.png";
import ExploreMoreCom from '../ExploreMoreCom/ExploreMoreCom';
const services = [
  {
    name: "Body",
    image: BodyImg,
    description: "Our Body services are designed to enhance physical health and appearance. From toning to rejuvenation, we use cutting-edge techniques to help you achieve your goals. Our customized plans are tailored to fit your unique needs, ensuring you look and feel your best. Experience a combination of relaxation and effective treatments in a luxurious setting. Let us guide you through a transformative journey toward self-confidence and wellness.",
    price: 150,
  },
  {
    name: "Hair",
    image: HairImg,
    description: "Transform your hair with our specialized services. Whether you're looking for growth solutions, nourishing treatments, or style makeovers, we’ve got you covered. Our experts use top-tier products to restore vitality and shine, promoting healthy and gorgeous hair. We cater to both men and women, offering personalized care that aligns with your specific hair goals. Rediscover your crowning glory with our innovative treatments.",
    price: 120,
  },
  {
    name: "Face",
    image: FaceImg,
    description: "Our Face services focus on rejuvenation and glow. Using advanced skincare technologies, we address concerns like aging, acne, and dullness. Pamper your skin with luxurious treatments that deeply hydrate and refresh, leaving you with a radiant, youthful look. From facials to peels, our offerings are customized to meet your skin’s unique needs. Trust our professionals to enhance your natural beauty.",
    price: 180,
  },
  {
    name: "Injectables",
    image: InjectableImg,
    description: "Achieve a youthful, refreshed appearance with our Injectables services. We offer a range of treatments, including Botox and dermal fillers, to smooth wrinkles and enhance facial contours. Our skilled practitioners prioritize safety and natural-looking results, ensuring you feel confident and radiant. Whether you seek to combat aging signs or refine your features, our injectables are designed for effective, lasting outcomes.",
    price: 300,
  },
  {
    name: "Coaching",
    image: CoachingImg,
    description: "Discover a better version of yourself with our Coaching services. Tailored to guide you in achieving personal and professional goals, our sessions focus on motivation, clarity, and actionable strategies. Whether you aim to boost confidence, improve lifestyle, or overcome challenges, our expert coaches provide support every step of the way. Empower yourself to lead a balanced, fulfilling life.",
    price: 200,
  },
  {
    name: "IV Hydration",
    image: IVHydrationImg,
    description: "Boost your energy and wellness with our IV Hydration therapy. Perfect for rehydration, recovery, and rejuvenation, our drips are customized with essential vitamins and nutrients. Experience improved immunity, mental clarity, and overall vitality. Our professional team ensures a comfortable and safe experience. Feel revitalized and energized in just one session.",
    price: 250,
  },
  {
    name: "Medical Rehab",
    image: MedicalRehabImg,
    description: "Recover and regain strength with our Medical Rehab services. Designed for individuals recovering from injuries or medical conditions, our tailored programs include therapeutic exercises and treatments. Our expert team works closely with you to improve mobility, reduce pain, and enhance overall quality of life. Trust us to support you on your journey to wellness.",
    price: 350,
  },
  {
    name: "Body Sculpting",
    image: BodySculptingImg,
    description: "Sculpt and refine your physique with our Body Sculpting treatments. Using non-invasive technologies, we target stubborn fat and contour your body to perfection. Achieve your dream shape with safe, effective procedures designed to enhance confidence and self-image. From initial consultation to results, our professionals guide you every step of the way.",
    price: 400,
  },
];

function ServicesInfo() {
  const location = useParams();
  const path = location.serviceName;
  //select data that matched with path
  const newData = services.find(el => el.name === path);
  //select all data expect the data matched with path
  const remainingServices = services.filter(el => el.name !== path);
  //get 3 random data function
  function getRandomServices(servicesArray, count) {
    // Create a copy of the array to avoid mutating the original
    const shuffled = [...servicesArray].sort(() => 0.5 - Math.random());
    // Return the first `count` elements from the shuffled array
    return shuffled.slice(0, count);
  }

  //get 3 random data from remainingServices
  const moreServices = getRandomServices(remainingServices, 3);

  return (
    <>
      <div className='h-[5.5rem] bg-primary'></div>
      <div className="w-full h-full py-10 lg:py-[100px] px-5 bg-bgPrimary flex justify-center items-center">
        <div className="lg:max-w-[1324px]">
          <h1 className='text-textPrimary text-5xl font-bold py-5 lg:pb-16 text-center'>Service Details</h1>
          <div div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-start'>
            <div className='w-full h-full'>
              <img src={newData.image} alt="" className='w-[600px] shadow-lg rounded-lg' />
            </div>
            <div className='mt-5 lg:mt-0'>
              <h1 className='text-textPrimary text-5xl font-bold py-2 text-center lg:text-start'>{newData.name}</h1>
              <h2 className='text-primary text-3xl font-bold text-center lg:text-start'>${newData.price}</h2>
              <p className='text-textSecondary text-xl py-5 text-center lg:text-start'>{newData.description}</p>
              <div className='flex justify-center lg:justify-start items-center '>
                <button className="flex items-center bg-primary text-white font-semibold px-4 py-3 rounded-full space-x-2 transition-all duration-500 ease-in-out hover:bg-white hover:text-textPrimary">
                  <div className="bg-primaryAccent text-secondary p-2 rounded-full -ml-1">
                    {/* Calendar Icon */}
                    <FaCalendarDays />
                  </div>
                  <span>Schedule a Consult</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExploreMoreCom services={moreServices} />
    </>
  )
}

export default ServicesInfo



