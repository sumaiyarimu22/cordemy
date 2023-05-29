import React from "react";

const SectionHeader = ({ span, h2, p }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="flex items-center flex-col text-center gap-1"
    >
      <span className="uppercase text-sm font-bold tracking-widest">
        {span}
      </span>
      <h2 className="text-3xl">{h2}</h2>
      <p className="lg:w-3/5 text-sm lg:text-base text-gray-500">{p}</p>
    </div>
  );
};

export default SectionHeader;
