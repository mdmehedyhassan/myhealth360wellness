import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import BodyImg from "../../../img/Shared/Body.png";
import HairImg from "../../../img/Shared/Hair.png";
import FaceImg from "../../../img/Shared/Face.png";
import InjectableImg from "../../../img/Shared/Injectables.png";
import CoachingImg from "../../../img/Shared/Coaching.png";
import IVHydrationImg from "../../../img/Shared/IVHydration.png";
import MedicalRehabImg from "../../../img/Shared/MedicalRehab.png";
import BodySculptingImg from "../../../img/Shared/BodySculpting.png";
import { Link } from "react-router-dom";

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

export default function FeaturedServicesCom() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerSlide >= services.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.max(0, services.length - itemsPerSlide)
        : prevIndex - 1
    );
  };

  return (
    <div className="py-20 lg:py-[124px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-base font-semibold text-primary">
            Schedule a Consult
          </p>
          <h2 className="mt-2 text-3xl lg:text-5xl font-bold text-textPrimary">
            Our Featured Services
          </h2>
        </div>
        <div className="relative">
          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="z-10 p-2 rounded-full bg-primary shadow-md text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="overflow-hidden mx-4">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerSlide)
                    }%)`,
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex-none w-full sm:w-1/2 lg:w-1/4 px-2 cursor-pointer"
                  >
                    <Link to={"/services/info/" + service.name}>
                      <div className="relative rounded-lg overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.name}
                          className="w-full h-64 object-cover hover:scale-110 transition-all ease-in-out duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="absolute inset-0 bg-primary opacity-60 mix-blend-multiply"></div>
                          <div className="flex justify-between items-center w-full">
                            <h3 className="text-xl font-semibold text-white z-10 ">
                              {service.name}
                            </h3>
                            <div className="w-7 h-7 bg-secondary rounded-full flex justify-center items-center z-10 cursor-pointer">
                              <Link to="/services">
                                <ArrowRight className="text-xs text-black" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="z-10 p-2 rounded-full bg-primary shadow-md text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
