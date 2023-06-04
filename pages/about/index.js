import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const data = {
  title: "About Us",
  subtitle: "Empowering learners to achieve their goals",
  description:
    "Welcome to our course selling website, where we aim to provide high-quality educational courses to help learners acquire new skills, advance their careers, and achieve their personal and professional goals. We believe that learning should be accessible to everyone, regardless of their background or location.",
  mission: "Our Mission",
  missionDescription:
    "Our mission is to empower individuals with the knowledge and skills they need to succeed in today's rapidly evolving world. We strive to offer a diverse range of courses across various disciplines, taught by industry experts and experienced professionals. By providing flexible learning options and a user-friendly platform, we aim to make education accessible and enjoyable for all.",
  whyChooseUs: "Why Choose Us",
  whyChooseUsList: [
    "Wide selection of courses from beginner to advanced levels",
    "Expert instructors with real-world experience",
    "Flexible learning options, including self-paced and scheduled courses",
    "High-quality course materials and interactive learning resources",
    "Affordable pricing and occasional discounts",
    "Certificates of completion for successful course graduates",
    "Dedicated customer support to assist learners throughout their journey",
  ],
  team: "Our Team",
  teamMembers: [
    {
      id: 1,
      img: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "John Smith",
      position: "Founder & CEO",
      description:
        "With a passion for education and technology, John founded our course selling website to bridge the gap between learners and quality education. He brings years of experience in the e-learning industry and strives to create an exceptional learning experience for our users.",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/7516387/pexels-photo-7516387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Emily Johnson",
      position: "Head of Instruction",
      description:
        "Emily is responsible for ensuring the quality and relevance of our course content. With her extensive background in curriculum development and instructional design, she oversees our team of talented instructors and ensures that our courses meet the highest standards of educational excellence.",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/7605974/pexels-photo-7605974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "David Thompson",
      position: "Customer Support Manager",
      description:
        "David leads our dedicated customer support team. With his strong commitment to customer satisfaction, he ensures that learners receive timely assistance, resolve any issues they encounter, and have a smooth learning experience on our platform.",
    },
  ],
};

const AboutPage = () => {
  return (
    <div className="min-h-screen wrapper flex flex-col gap-10 py-16">
      <div className="">
        <SectionHeader
          span={data.title}
          h2={data.subtitle}
          p={data.description}
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold pb-5">{data.team}</h2>
        <div className="">
          {data.teamMembers.map((mamber) => (
            <div
              key={mamber.id}
              className=" py-5 space-y-5 md:space-y-0 md:flex md:gap-10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className=" w-[18rem] h-[14rem]">
                <Image
                  src={mamber.img}
                  alt={mamber.name}
                  width={640}
                  height={360}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-2xl font-semibold">{mamber.name}</p>
                <p className="font-bold text-gray-500">{mamber.position}</p>
                <p className="md:w-[25rem] lg:w-[35rem]">
                  {mamber.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 space-y-5 md:space-y-0 gap-10">
        <div
          className="our-mission "
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p className="text-2xl font-semibold">{data.mission}</p>
          <p className="text-lg">{data.description}</p>
        </div>
        <div
          className="whyChooseUs "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p className="text-2xl font-semibold">{data.whyChooseUs}</p>
          <div className="text-lg ">
            {data.whyChooseUsList.map((item, i) => (
              <div key={i}>
                {i + 1}. {item} <br />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
