import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import BodyImg from "../../../img/Shared/Body.png";
import HairImg from "../../../img/Shared/Hair.png";
import FaceImg from "../../../img/Shared/Face.png";
import InjectableImg from "../../../img/Shared/Injectables.png";

const services = [
  { name: "Body", image: BodyImg },
  { name: "Hair", image: HairImg },
  { name: "Face", image: FaceImg },
  { name: "Injectables", image: InjectableImg },
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
    <div className="py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
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
                  transform: `translateX(-${
                    currentIndex * (100 / itemsPerSlide)
                  }%)`,
                }}
              >
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex-none w-full sm:w-1/2 lg:w-1/4 px-2"
                  >
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="absolute inset-0 bg-primary opacity-60 mix-blend-multiply"></div>
                        <div className="flex justify-between items-center w-full">
                          <h3 className="text-xl font-semibold text-white z-10 ">
                            {service.name}
                          </h3>
                          <div className="w-7 h-7 bg-secondary rounded-full flex justify-center items-center z-10">
                            <ArrowRight className="text-xs text-black" />
                          </div>
                        </div>
                      </div>
                    </div>
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
