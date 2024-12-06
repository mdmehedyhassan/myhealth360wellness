import React from "react";
import PackagesBanner from "../PackagesBanner/PackagesBanner";
import backgroundImg from "../../../img/Packages/packages-bg.png";

const packages = [
  {
    id: 1,
    title: "Emsculpt Neo Golfer’s Package (Abs and Arms)",
    description: "Perfect for enhancing core strength and swing power.",
    price: "5,900",
    discountPercentage: 25,
  },
  {
    id: 2,
    title: "Emsculpt Neo Fitness Boost (Legs and Glutes)",
    description: "Ideal for building strength and improving endurance.",
    price: "6,500",
    discountPercentage: 20,
  },
  {
    id: 3,
    title: "Emsculpt Neo Athlete’s Edge (Full Body)",
    description: "Comprehensive package for peak athletic performance.",
    price: "8,200",
    discountPercentage: 15,
  },
  {
    id: 4,
    title: "Emsculpt Neo Sculpt & Define (Abs and Back)",
    description: "Perfect for toning core muscles and enhancing posture.",
    price: "5,400",
    discountPercentage: 18,
  },
  {
    id: 5,
    title: "Emsculpt Neo Power Package (Arms and Chest)",
    description: "Focused on building upper body strength and definition.",
    price: "6,000",
    discountPercentage: 22,
  },
  {
    id: 6,
    title: "Emsculpt Neo Slim & Strengthen (Waist and Hips)",
    description: "A targeted solution for toning and shaping curves.",
    price: "5,700",
    discountPercentage: 20,
  },
  {
    id: 7,
    title: "Emsculpt Neo Core Revolution (Abs Only)",
    description: "Designed to sculpt and strengthen your midsection.",
    price: "4,800",
    discountPercentage: 25,
  },
  {
    id: 8,
    title: "Emsculpt Neo Performance Boost (Legs Only)",
    description: "Focused on improving leg power and mobility.",
    price: "5,200",
    discountPercentage: 19,
  },
  {
    id: 9,
    title: "Emsculpt Neo Ultimate Recovery (Full Body)",
    description: "Best for recovery and maintaining overall muscle tone.",
    price: "9,000",
    discountPercentage: 10,
  },
];

const Package = () => {
  return (
    <div>
      <PackagesBanner></PackagesBanner>
      <div className="bg-bgPrimary px-[25px] md:px-0 -mt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] md:gap-[30px] pt-[63px] md:pt-[135px] pb-[79px] md:pb-[147px] max-w-7xl mx-auto">
          {/* Package-1 */}
          {packages.map(
            ({ id, title, description, price, discountPercentage }) => (
              <div
                key={id}
                className="card bg-white transition-all ease-in-out duration-1000 hover:bg-primary group border-2 border-borderSecondary rounded-[20px]"
                style={{
                  backgroundImage: `url(${backgroundImg})`,
                  backgroundPosition: "bottom right",
                  backgroundSize: "250px 207px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="card-body pt-[42px] pb-10 px-5 lg:px-10">
                  <h3 className="font-bold text-[22px] leading-[140%] text-black group-hover:text-white transition-all ease-in-out duration-500">
                    {title}
                  </h3>
                  <p className="text-[15px] font-normal leading-[160%] text-textSecondary mt-[6px] mb-6 group-hover:text-white transition-all ease-in-out duration-500">
                    {description}
                  </p>
                  <h2 className="card-title text-[40px] leading-[140%] font-extrabold text-primary group-hover:text-white transition-all ease-in-out duration-500">
                    ${price}
                    <div className="badge text-[11px] font-semibold leading-[160%] bg-secondary text-white rounded-full border-none transition-all ease-in-out duration-500">
                      {discountPercentage}% off
                    </div>
                  </h2>
                  <div className="card-actions justify-end mt-9">
                    <button className="btn text-black text-lg font-bold leading-[150%] hover:bg-white bg-white border-borderPrimary rounded-full w-full hover:border-none transition-all ease-in-out duration-duration-500">
                      Schedule a Consult
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Package;
