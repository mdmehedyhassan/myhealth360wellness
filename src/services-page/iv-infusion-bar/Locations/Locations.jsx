import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LocationIcon from "../../../img/IV-Infusion-Bar/location-icon.png";
import Iframe from "react-iframe";

const services = [
  {
    title: "Clarence-3",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.218064707354!2d-78.6338930226627!3d42.97367989611267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d39f1bb89c5a83%3A0xdc60945d77b5b77!2sMy%20Health%20360!5e0!3m2!1sen!2sbd!4v1732901113717!5m2!1sen!2sbd",
    link: "https://maps.app.goo.gl/EWrTkA9VjH1chnoEA",
  },
  {
    title: "buffalo-1",
    map: "https://www.google.com/maps/embed?pb=!1m24!1m8!1m3!1d46727.703936458565!2d-78.73628!3d42.9470567!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x89d39f1bb89c5a83%3A0xdc60945d77b5b77!2sMy%20Health%20360%2C%209650%20Main%20St%20Suite%201%2C%20Clarence%2C%20NY%2014031%2C%20United%20States!3m2!1d42.973676!2d-78.6313181!4m5!1s0x89d30caa7173629d%3A0x2b591da8b27a6e80!2sBuffalo%2C%20NY%2014225%2C%20USA!3m2!1d42.9202891!2d-78.7589558!5e0!3m2!1sen!2sbd!4v1732903117810!5m2!1sen!2sbd",
    link: "https://maps.app.goo.gl/GPL5RcGYVbPX9cW28",
  },
  {
    title: "Amherst",
    map: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d46709.362705432875!2d-78.75280644333873!3d42.97121281513554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89d3724da88354b3%3A0xd481fd9c25afd0ad!2sAmherst%2C%20NY%2C%20USA!3m2!1d42.9791367!2d-78.79224239999999!4m5!1s0x89d39f1bb89c5a83%3A0xdc60945d77b5b77!2sMy%20Health%20360%2C%209650%20Main%20St%20Suite%201%2C%20Clarence%2C%20NY%2014031%2C%20United%20States!3m2!1d42.973676!2d-78.6313181!5e0!3m2!1sen!2sbd!4v1732903183442!5m2!1sen!2sbd",
    link: "https://maps.app.goo.gl/MPxbb6xxSmdZtujQ6",
  },
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
                    <div className="relative rounded-lg overflow-hidden p-4 bg-white">
                      <Iframe
                        url={service.map}
                        width="340px"
                        height="327px"
                        id=""
                        className="rounded-lg"
                        display="block"
                        position="relative"
                      />
                      <a href={service.link}>
                        <div
                          className="absolute bg-primary p-2 lg:p-4 top-5 right-6 text-white rounded-lg tooltip tooltip-left "
                          data-tip="View On Map"
                        >
                          <img src={LocationIcon} alt="location-icon" />
                        </div>
                      </a>
                    </div>
                    <h1 className="text-[22px] text-black font-bold flex justify-center items-center mt-2">
                      {service.title}
                    </h1>
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
