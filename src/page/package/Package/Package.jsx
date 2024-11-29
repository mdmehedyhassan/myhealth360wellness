import React from "react";
import PackagesBanner from "../PackagesBanner/PackagesBanner";
import backgroundImg from "../../../img/Packages/packages-bg.png";

const packages = [
  {
    id: 1,
    title: "Emsculpt Neo Golfer’s package (abs and arms)",
    description: "perfect for improving the golf game",
    price: "5,900",
    discountPercentage: 25,
  },
  {
    id: 2,
    title: "Emsculpt Neo Golfer’s package (abs and arms)",
    description: "perfect for improving the golf game",
    price: "5,900",
    discountPercentage: 25,
  },
  {
    id: 3,
    title: "Emsculpt Neo Golfer’s package (abs and arms)",
    description: "perfect for improving the golf game",
    price: "5,900",
    discountPercentage: 25,
  },
  {
    id: 4,
    title: "Emsculpt Neo Golfer’s package (abs and arms)",
    description: "perfect for improving the golf game",
    price: "5,900",
    discountPercentage: 25,
  },
  {
    id: 5,
    title: "Emsculpt Neo Golfer’s package (abs and arms)",
    description: "perfect for improving the golf game",
    price: "5,900",
    discountPercentage: 25,
  },
  {
    id: 6,
    title: "Emsculpt Neo Golfer’s package (abs and arms)",
    description: "perfect for improving the golf game",
    price: "5,900",
    discountPercentage: 25,
  },
  {
    id: 7,
    title: "Emsculpt Neo Golfer’s package (abs and arms)",
    description: "perfect for improving the golf game",
    price: "5,900",
    discountPercentage: 25,
  },
  {
    id: 8,
    title: "Emsculpt Neo Golfer’s package (abs and arms)",
    description: "perfect for improving the golf game",
    price: "5,900",
    discountPercentage: 25,
  },
  {
    id: 9,
    title: "Emsculpt Neo Golfer’s package (abs and arms)",
    description: "perfect for improving the golf game",
    price: "5,900",
    discountPercentage: 25,
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
                className="card bg-white transition-all ease-in-out duration-500 hover:bg-primary group border-borderPrimary rounded-[20px]"
                style={{
                  backgroundImage: `url(${backgroundImg})`,
                  backgroundPosition: "bottom right",
                  backgroundSize: "250px 207px",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="card-body pt-[42px] pb-10 px-10">
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
