import React from "react";
const image =
  "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const HeroSection = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" h-[calc(100vh-5rem)]  w-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default HeroSection;
