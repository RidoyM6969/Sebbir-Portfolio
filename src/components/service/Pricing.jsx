import React from "react";
import Container from "../Extra/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Pricing = () => {
  return (
    <div className="py-[150px] px-2">
      <Container>
        <div className="lg:flex justify-between">
          <div className="lg:w-[40%] flex items-center justify-center   ">
            <div className="">
              <h6 className=" text-[#f9004d] text-[14px] uppercase ">
                service
              </h6>
              <h2 className=" text-[#c4cfde] text-[60px] font-bold ">
                pricing
              </h2>
            </div>
          </div>
          <div className="lg:w-[50%] rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
            <Tabs>
              <TabList className="flex items-center justify-between gap-x-1">
                <Tab className=" shadow-[0px_4px_19px_7px_rgba(234,_179,_8,_0.5)] w-full h-[50px] text-center flex items-center justify-center cursor-pointer border-none ">
                  Basic
                </Tab>
                <Tab className=" shadow-[0px_4px_6px_3px_rgba(34,_197,_94,_0.5)] w-full h-[50px] text-center flex items-center justify-center cursor-pointer">
                  Stander
                </Tab>
                <Tab className=" shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] w-full h-[50px] text-center flex items-center justify-center cursor-pointer">
                  Premium
                </Tab>
              </TabList>

              <TabPanel>
                <div className="pt-[30px] ">
                  <div class="flex flex-col p-6 w-full h-[420px]  text-gray-900 bg-[#212428] rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white relative">
                    <div className="flex items-center justify-between">
                      <h3 class="mb-5 text-[#c4cfde] text-[27px] font-semibold">
                        250 Targeted b2b leads
                      </h3>
                      <div class="flex justify-center items-center mb-4 h-[70px] w-[100px] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] bg-[#0000001f]  ">
                        <span class=" text-[#ff014f] mr-2 text-3xl font-extrabold ">
                          $10
                        </span>
                      </div>
                    </div>
                    <p class="font-light text-[#878e99] sm:text-lg dark:text-gray-400 pb-[30px]">
                      I'll provide you with 250 b2b lead, prospect leads,
                      LinkedIn leads database
                    </p>
                    {/* <!-- List --> */}
                    <ul role="list" class="mb-8 space-y-4 text-left">
                      <li class="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-[#c4cfde]">
                          Formatting & clean up
                        </span>
                      </li>
                      <li class="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-[#c4cfde]">250 email sends</span>
                      </li>
                    </ul>
                    <a
                      href="#"
                      class="text-[#f9004d] w-full bg-[#00000032] hover:bg-[#0000006e] focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 transition-all absolute bottom-[20px] left-0  "
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="pt-[30px] ">
                  <div class="flex flex-col p-6 w-full h-[420px]  text-gray-900 bg-[#212428] rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white relative">
                    <div className="flex items-center justify-between">
                      <h3 class="mb-5 text-[#c4cfde] text-[27px] font-semibold">
                        500 Targeted b2b leads
                      </h3>
                      <div class="flex justify-center items-center mb-4 h-[70px] w-[100px] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] bg-[#0000001f]  ">
                        <span class=" text-[#ff014f] mr-2 text-3xl font-extrabold ">
                          $29
                        </span>
                      </div>
                    </div>
                    <p class="font-light text-[#878e99] sm:text-lg dark:text-gray-400 pb-[30px]">
                      I'll provide you with 500 b2b lead, prospect leads,
                      LinkedIn leads database
                    </p>
                    {/* <!-- List --> */}
                    <ul role="list" class="mb-8 space-y-4 text-left">
                      <li class="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-[#c4cfde]">
                          Formatting & clean up
                        </span>
                      </li>
                      <li class="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-[#c4cfde]">250 email sends</span>
                      </li>
                    </ul>
                    <a
                      href="#"
                      class="text-[#f9004d] w-full bg-[#00000032] hover:bg-[#0000006e] focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 transition-all absolute bottom-[20px] left-0  "
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="pt-[30px] ">
                  <div class="flex flex-col p-6 w-full h-[420px]  text-gray-900 bg-[#212428] rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white relative">
                    <div className="flex items-center justify-between">
                      <h3 class="mb-5 text-[#c4cfde] text-[27px] font-semibold">
                        1000 Targeted b2b leads
                      </h3>
                      <div class="flex justify-center items-center mb-4 h-[70px] w-[100px] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] bg-[#0000001f]  ">
                        <span class=" text-[#ff014f] mr-2 text-3xl font-extrabold ">
                          $85
                        </span>
                      </div>
                    </div>
                    <p class="font-light text-[#878e99] sm:text-lg dark:text-gray-400 pb-[30px]">
                      I'll provide you with 1000 b2b lead, prospect leads,
                      LinkedIn leads database
                    </p>
                    {/* <!-- List --> */}
                    <ul role="list" class="mb-8 space-y-4 text-left">
                      <li class="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-[#c4cfde]">
                          Formatting & clean up
                        </span>
                      </li>
                      <li class="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-[#c4cfde]">250 email sends</span>
                      </li>
                    </ul>
                    <a
                      href="#"
                      class="text-[#f9004d] w-full bg-[#00000032] hover:bg-[#0000006e] focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 transition-all absolute bottom-[20px] left-0  "
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
