import React from "react";
import Container from "../Extra/Container";
import hand from "../../assets/hand.png";
import { FiFacebook } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";

const From = () => {
  return (
    <div className="py-[150px]">
      <Container>
        <div className=" lg:flex items-center justify-between">
          <div className="lg:w-[30%] flex itmes-center justify-center p-9 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
            <div className="">
              <img className=" rounded-[7px] " src={hand} alt="" />
              <h3 className=" text-[#e4e6ea] text-[29px] font-bold py-[20px] capitalize ">sibbir hossin</h3>
              <span className="text-[#878E99] text-[16px] capitalize">b2b lead spacialized</span>
              <p className="text-[18px] text-[#878E99] pt-[18px]">
                I am available for grow your business work. Connect with me via
                and call in to my account.
                          </p>
                          <div className="flex items-center gap-x-4 pt-3">
                              <span className="text-[16px] capitalize text-[#878E99]">phone :</span>
                              <span className="text-[#e4e6ea] text-[15px] ">+880 17 .........</span>
                    </div>
                          <div className="flex items-center gap-x-4 pt-3">
                              <span className="text-[16px] capitalize text-[#878E99]">email :</span>
                              <span className="text-[#e4e6ea] text-[15px] ">...........@gmail.com</span>
                    </div>
              <div className="pt-[60px]">
                <span className="uppercase text-[#c4cfde] text-[14px] ">
                  find with me
                </span>
                <div className="flex items-center gap-x-[20px] pt-[20px]">
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
          </div>
          <div className="lg:w-[50%]">
            <section class="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] dark:bg-gray-900 w-full">
              <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#f9004d] dark:text-white">
                  Contact Us
                </h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-[#c4cfde] dark:text-gray-400 sm:text-xl">
                  If you need unlimited leads, you can contact me.
                </p>
                <form action="#" class="space-y-8">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-[#c4cfde] dark:text-gray-300"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      class="shadow-sm bg-[#191b1e] border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="subject"
                      class="block mb-2 text-sm font-medium text-[#c4cfde] dark:text-gray-300"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      class="block p-3 w-full text-sm text-white bg-[#191b1e] rounded-lg border border-gray-300 shadow-xl focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Let us know how can i help you"
                      required
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <label
                      for="message"
                      class="block mb-2 text-sm font-medium text-[#c4cfde] dark:text-gray-400"
                    >
                      Your message
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      class="block p-2.5 w-full text-sm text-white bg-[#191b1e] rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    class=" py-3 px-5 text-sm font-medium text-center text-white hover:text-[#f9004d] rounded-lg bg-[#191b1e] sm:w-fit hover:bg-primary-800  focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default From;
