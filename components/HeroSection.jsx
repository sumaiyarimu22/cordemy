import Link from "next/link";
import React from "react";
const image =
  "https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const HeroSection = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" h-[calc(100vh-5rem)]  w-screen bg-center bg-no-repeat bg-cover flex flex-col justify-center ps-20 gap-6"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-6xl font-semibold">
        Where Learning Meets Opportunity
      </h1>
      <p className="w-[80%] text-xl">
        Ignite your potential with SkillSphere. Explore expert-led online
        courses for personal and professional growth. Enroll today and unlock
        limitless learning possibilities.
      </p>
      <Link
        href="/courses"
        className="px-6 py-2 bg-black border border-white text-white w-32 rounded-md flex justify-center items-center"
      >
        Explore
      </Link>
    </div>
  );
};

export default HeroSection;
