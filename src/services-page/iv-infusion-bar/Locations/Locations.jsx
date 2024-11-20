import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import map1 from "../../../img/IV-Infusion-Bar/map1.png";
import map2 from "../../../img/IV-Infusion-Bar/map2.png";
import map3 from "../../../img/IV-Infusion-Bar/map3.png";
import LocationIcon from "../../../img/IV-Infusion-Bar/location-icon.png";

const services = [
  { image: map1 },
  { image: map2 },
  { image: map3 },
  { image: map1 },
];

export default function Locations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
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
    <div className="py-16 lg:py-20 mt-32 px-4 sm:px-6 lg:px-8 bg-bgSecondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="mt-2 text-3xl lg:text-5xl font-bold text-textPrimary mb-5">
            Our Locations
          </h2>
          <p className="text-textSecondary font-normal text-[15px] leading-[150%] mb-10">
            We are proud to be serving patients from Buffalo, Amherst,
            Cheektowaga, Orchard Park, Williamsville and all over Western New
            York, including :
          </p>
        </div>
        <div className="relative">
          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="z-10 p-2 rounded-full bg-primary shadow-md text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="overflow-hidden mx-4 w-full">
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
                    className={`flex-none w-full ${
                      itemsPerSlide === 3
                        ? "lg:w-1/3"
                        : itemsPerSlide === 2
                        ? "sm:w-1/2"
                        : "w-full"
                    } px-2`}
                  >
                    <div className="relative rounded-lg overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full  object-cover"
                      />
                      <div
                        className="absolute bg-primary p-4 top-5 right-6 text-white rounded-lg tooltip tooltip-left "
                        data-tip="View On Map"
                      >
                        <img src={LocationIcon} alt="location-icon" />
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
