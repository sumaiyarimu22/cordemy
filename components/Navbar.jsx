import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="h-20 bg-black text-gray-400 flex items-center">
      <div className="wrapper flex justify-between items-center">
        <Link href="/" className="text-white font-semibold">
          Cordemy
        </Link>
        <div className="flex gap-5 justify-between">
          <Link href="/" className="hover:text-white transition-color">
            Home
          </Link>
          <Link href="/courses" className="hover:text-white transition-color">
            Courses
          </Link>
          <Link href="/about" className="hover:text-white transition-color">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-color">
            Contact
          </Link>
        </div>
        <div>
          <Button
            href="/login"
            className="hover:text-white transition-color"
            placeholder="Sign in"
            color="secondary"
            size="default"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
