import React from 'react';
import { useParams } from 'react-router-dom';

import BodyImg from "../../../img/Shared/Body.png";
import HairImg from "../../../img/Shared/Hair.png";
import FaceImg from "../../../img/Shared/Face.png";
import InjectableImg from "../../../img/Shared/Injectables.png";
import CoachingImg from "../../../img/Shared/Coaching.png";
import IVHydrationImg from "../../../img/Shared/IVHydration.png";
import MedicalRehabImg from "../../../img/Shared/MedicalRehab.png";
import BodySculptingImg from "../../../img/Shared/BodySculpting.png";
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
    console.log(location);
    const path = location.serviceName;
    const newData = services.find(el => el.name===path);
    console.log(newData)
  return (
    <div>
      
    </div>
  )
}

export default ServicesInfo
