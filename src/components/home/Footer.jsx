import React from "react";
import Container from "../Extra/Container";
import { FiFacebook } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="py-[100px] px-5 lg:py-[10px]  shadow-2xl">
      <Container>
        <div className=" lg:flex items-center justify-between">
          <div className=" lg:w-[20%]">
            <a className="text-[25px] font-semibold uppercase  " href="#">
              sibbir
            </a>
            <div className="pt-[30px] ">
              <div className="flex items-center gap-x-[20px] pt-[20px] ">
                <a
                  href="#"
                  className="h-[50px] w-[50px] flex items-center justify-center rounded-[4px] shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]"
                >
                  <div className="text-[20px]" href="#">
                    <FiFacebook />
                  </div>
                </a>
                <a
                  href="#"
                  className="h-[50px] w-[50px] flex items-center justify-center rounded-[4px] shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]"
                >
                  <div className="text-[20px]" href="#">
                    <LuLinkedin />
                  </div>
                </a>
                <a
                  href="#"
                  className="h-[50px] w-[50px] flex items-center justify-center rounded-[4px] shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]"
                >
                  <div className="text-[20px]">
                    <LuTwitter />
                  </div>
                </a>
              </div>
            </div>
          </div>
                  <div className="mt-[50px] lg:mt-0">
            <ul className="lg:flex items-center gap-x-[35px]">
              <Link to='/'>
                  <li className=" text-[#e5e7eb] text-[16px] font-roboto uppercase cursor-pointer hover:mb-1 ">home</li>
              </Link>
              <Link to='/about'>
                  <li className=" text-[#e5e7eb] text-[16px] font-roboto uppercase cursor-pointer hover:mb-1 ">about me</li>
              </Link>
              <Link to='/service'>
                  <li className=" text-[#e5e7eb] text-[16px] font-roboto uppercase cursor-pointer hover:mb-1 ">service</li>
              </Link>
              <Link to='/project'>
                  <li className=" text-[#e5e7eb] text-[16px] font-roboto uppercase cursor-pointer hover:mb-1 ">project</li>
              </Link>
              <Link to='/blog'>
                  <li className=" text-[#e5e7eb] text-[16px] font-roboto uppercase cursor-pointer hover:mb-1 ">blog</li>
              </Link>
              <Link to='/contact'>
                  <li className=" text-[#e5e7eb] text-[16px] font-roboto uppercase cursor-pointer hover:mb-1 ">contact</li>
              </Link>
                      </ul>
          </div>
              </div>
              <div className="text-center">
              <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
              </div>
      </Container>
    </div>
  );
};

export default Footer;
