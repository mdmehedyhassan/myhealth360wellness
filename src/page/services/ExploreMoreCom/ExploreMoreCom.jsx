import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";



export default function ExploreMoreCom({ services }) {

    return (
        <div className="py-10 lg:pt-0 lg:pb-[100px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-5">
                    <h1 className='text-textPrimary text-5xl font-bold py-5 lg:py-10 text-center'>More Services</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <div key={index} className="flex-none px-2">
                            <Link to={'/services/info/' + service.name} >
                                <div
                                    style={{ cursor: 'pointer' }} className="relative rounded-lg overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-80 object-cover hover:scale-110 transition-all ease-in-out duration-500"
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
