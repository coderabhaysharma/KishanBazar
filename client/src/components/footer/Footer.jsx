import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-red-900 text-white py-4 px-4 md:px-12 text-center flex flex-col items-center justify-between">
        {/* Social Media Links
        <div className="flex flex-row text-lg md:text-2xl gap-3 md:gap-5 mb-2">
          <a href={"https://github.com/DeepakS-Github"} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={"https://www.linkedin.com/in/thisisdeepak/"} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href={"/"}>
            <FaGooglePlusG />
          </a>
          <a href={"https://www.instagram.com/this_is__deepaks/"} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div> */}

        {/* Copyright Text */}
        <p className="text-sm md:text-base mt-2">
          &copy; 2024 <span className="font-bold">KrishiBazaar</span>. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
