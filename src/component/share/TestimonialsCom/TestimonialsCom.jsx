import React from "react";
import userImg from "../../../img/Home/user.svg";
import userImg2 from "../../../img/Home/user-2.jpg";
import userImg3 from "../../../img/Home/user-3.jpeg";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Eddie Romero",
    position: "Director of Business Development at Fibratex",
    review:
      "Dr. Fatima is an excellent doctor, she goes above and beyond in caring for her patients. She's a very caring, knowledgeable doctor. I feel very confident and secure in her practice and advice.",
    rating: 5,
    image: userImg,
  },
  {
    id: 2,
    name: "Sophia Martinez",
    position: "Healthcare Consultant at Mediline",
    review:
      "Dr. Fatima provides exceptional care, always ensuring her patients feel understood. Her expertise and compassion are truly unmatched, and I trust her completely for advice and treatment.",
    rating: 5,
    image: userImg2,
  },
  {
    id: 3,
    name: "John Patterson",
    position: "CEO at Wellness Inc.",
    review:
      "Dr. Fatima is incredibly attentive, offering personalized solutions to every concern. Her dedication and knowledge make her an outstanding professional in her field, inspiring great trust.",
    rating: 5,
    image: userImg3,
  },
  
];

const TestimonialsCom = () => {
  return (
    <div className="bg-bgPrimary py-20 sm:py-24 lg:py-32 px-5">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-primary text-lg font-bold mb-2 text-center leading-[150%]">
          Testimonials
        </h3>
        <h2 className="text-textPrimary text-3xl sm:text-4xl lg:text-5xl font-bold mb-14 lg:mb-28 text-center leading-[120%]">
          What Our Loving Customers Say
        </h2>

        <div className="grid gap-14 lg:gap-10 grid-cols-1 lg:grid-cols-3 justify-center items-center">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-sm mx-auto flex flex-col border border-gray-200"
            >
              <div className="w-full flex justify-between items-center mb-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gray-300 -mt-[4rem] sm:-mt-16"
                />
                <span className="text-[#FFB703] text-xl -mt-5">★★★★★</span>
              </div>

              <p className="text-[#485657] text-sm sm:text-md mb-5 leading-[160%]">
                {testimonial.review}
              </p>
              <div className="w-full">
                <h4 className="text-black font-extrabold text-sm leading-[100%] mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-[#505050] text-xs leading-[100%]">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCom;
