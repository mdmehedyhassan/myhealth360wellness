import { ArrowRight } from "lucide-react";
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
  { name: "Body", image: BodyImg },
  { name: "Hair", image: HairImg },
  { name: "Face", image: FaceImg },
  { name: "Injectables", image: InjectableImg },
  { name: "Coaching", image: CoachingImg },
  { name: "IV Hydration", image: IVHydrationImg },
  { name: "Medical Rehab", image: MedicalRehabImg },
  { name: "Body Sculpting", image: BodySculptingImg },
];

export default function OurServicesCom() {
  return (
    <div className="py-20 lg:pt-[120px] lg:pb-[144px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-base font-semibold text-primary">
            Schedule a Consult
          </p>
          <h2 className="mt-2 text-3xl lg:text-5xl font-bold text-textPrimary">
            Our Featured Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div key={index} className="flex-none w-full px-2">
              <Link to={'/services/info/'+ service.name} >
                <div
                  style={{ cursor: 'pointer' }} className="relative rounded-lg overflow-hidden">
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
                      <div className="w-7 h-7 bg-secondary rounded-full flex justify-center items-center z-10">
                        <ArrowRight className="text-xs text-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
