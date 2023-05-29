import { useSession } from "next-auth/react";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-black text-white">
      <div className="wrapper flex py-16 border-b border-gray-500">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 w-full"
        >
          <div className="col-span-2 space-y-10">
            <p className="text-xl font-semibold">Cordemy</p>
            <p>
              Our expert instructors deliver top-quality content and
              personalized guidance, ensuring your success. Join us today for an
              unparalleled learning experience.
            </p>
            <div className="flex gap-5 text-2xl">
              <Link
                className="hover:text-gray-400 duration-300"
                href="https://www.linkedin.com/in/sumaiya-rimu/"
                target="_blank"
              >
                <BsLinkedin />
              </Link>
              <Link
                href="https://twitter.com/SumaiyRimu"
                target="_blank"
                className="hover:text-gray-400 duration-300"
              >
                <BsTwitter />
              </Link>
              <Link
                href="https://www.facebook.com/sumaiya.rimu.313"
                target="_blank"
                className="hover:text-gray-400 duration-300"
              >
                <BsFacebook />
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-xl font-semibold pb-5 lg:pb-8">Quicklinks</p>

            <div className="flex flex-col gap-1 lg:gap-3 lg:font-semibold">
              <Link
                href="/"
                className="transition-color hover:text-gray-400 duration-300"
              >
                Home
              </Link>
              <Link
                href="/courses"
                className="hover:text-gray-400 transition-color"
              >
                Courses
              </Link>
              {session && (
                <Link
                  href="/orders"
                  className="hover:text-gray-400 transition-color"
                >
                  Orders
                </Link>
              )}
              <Link
                href="/about"
                className="hover:text-gray-400  transition-color"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-400  transition-color"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-xl font-semibold pb-5 lg:pb-8">Support</p>

            <div className="flex flex-col gap-1 lg:gap-3 lg:font-semibold">
              <Link
                href="/contact"
                className="hover:text-gray-400 duration-300"
              >
                Contact us
              </Link>
              <Link href="/faqs" className="hover:text-gray-400 duration-300">
                FAQS
              </Link>

              <Link
                href="/contact"
                className="hover:text-gray-400 duration-300"
              >
                Help center
              </Link>
              <Link href="/about" className="hover:text-gray-400 duration-300">
                Privacy & Policy
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-xl font-semibold pb-5 lg:pb-8">Support</p>

            <div className="flex flex-col gap-1 lg:gap-3">
              <div>
                <p className="text-lg text-gray-400">Email</p>
                <p>abcd@gmail.com</p>
              </div>
              <div>
                <p className="text-lg text-gray-400">Phone</p>
                <p>+88017543xxxxx</p>
              </div>
              <div>
                <p className="text-lg text-gray-400">Address</p>
                <p>Dhaka,Banglasdesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-10">
        &copy; {new Date().getFullYear()}, Cordemy. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
