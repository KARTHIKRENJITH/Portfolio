import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin  } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex flex-col lg:flex-row justify-between lg:px-32 px-5 bg-white p-5">
      <div className=" flex gap-10">
        <BsInstagram size={32} className=" hover:text-blue transition-all cursor-pointer" />
        <FaFacebook size={32} className=" hover:text-blue-700 transition-all cursor-pointer" />
        <FaLinkedin size={32} className=" hover:text-blue-700 transition-all cursor-pointer" />
        
      </div>
      <div className=" flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
      
      </div>
    </div>
  );
};

export default Footer;
