import React from "react";

const Accordion = () => {
  return (
    <div className="max-w-6xl mx-auto pt-20 md:pt-[130px] px-5 md:px-0">
      <h3 className="text-[28px] md:text-[48px] font-bold text-textPrimary text-center mb-[55px] px-4 md:px-0">
        Frequently Asked Questions
      </h3>
      <div className="collapse collapse-plus bg-white border-borderPrimary border-[2px] rounded-[10px] p-2 lg:p-7 mb-5">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-[19px] font-bold leading-[130%] text-primary">
          1. Is IV Infusion Therapy safe?
        </div>
        <div className="collapse-content text-textSecondary text-[15px] font-normal leading-[150%]">
          <p>
            All vitamins and nutrients used at NeuMed are FDA approved and go
            through high levels of testing. Every IV therapy treatment is
            administered by registered nurses and performed under a medical
            director
          </p>
          <br />
          <p>
            Before an IV infusion is ever started on a client, vitals signs are
            recorded and their health history evaluated to ensure a safe
            experience.
          </p>
          <br />
          <p>
            Once the treatment has finished, clients can resume most, if not all
            activities immediately with the exception of extremely heavy
            lifting.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white border-borderPrimary border-[2px] rounded-[10px] p-2 lg:p-7">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-[19px] font-bold leading-[130%] text-primary">
          2. Is IV therapy covered by health insurance?
        </div>
        <div className="collapse-content text-textSecondary text-[15px] font-normal leading-[150%]">
          <p>
            All vitamins and nutrients used at NeuMed are FDA approved and go
            through high levels of testing. Every IV therapy treatment is
            administered by registered nurses and performed under a medical
            director
          </p>
          <br />
          <p>
            Before an IV infusion is ever started on a client, vitals signs are
            recorded and their health history evaluated to ensure a safe
            experience.
          </p>
          <br />
          <p>
            Once the treatment has finished, clients can resume most, if not all
            activities immediately with the exception of extremely heavy
            lifting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
