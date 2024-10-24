import { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import BodyImg from "../../../media/images/Home/Body.png"
import HairImg from "../../../media/images/Home/Hair.png"
import FaceImg from "../../../media/images/Home/Face.png"
import InjectableImg from "../../../media/images/Home/Injectables.png"

const services = [
  { name: 'Body', image: BodyImg },
  { name: 'Hair', image: HairImg },
  { name: 'Face', image: FaceImg },
  { name: 'Injectables', image: InjectableImg },
]


export default function FeaturedServicesCom() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length)
  }

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-base font-semibold text-[#0B5E62]">Schedule a Consult</p>
          <h2 className="mt-2 text-3xl font-bold text-[#062223] sm:text-4xl">Our Featured Services</h2>
        </div>
        <div className="relative">
          <div className="flex justify-between items-center">
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6"/>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-12">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className={`relative rounded-lg overflow-hidden transition-opacity duration-500 ${
                    index >= currentIndex && index < currentIndex + 4 ? 'opacity-100' : 'opacity-0 hidden lg:block'
                  }`}
                >
                  <img src={service.image} alt={service.name} className="w-full h-64 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#13313380] p-4">
                    <div className="flex justify-between items-center  w-full">
                      <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                     <div className="w-7 h-7 bg-[#E5C466] rounded-full flex justify-center items-center">
                     <ArrowRight className=" text-xs text-black " />
                     </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-36 z-10 p-2 rounded-full bg-white shadow-md text-gray-800 hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}