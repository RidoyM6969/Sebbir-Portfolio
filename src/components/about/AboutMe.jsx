import React from "react";
import Container from "../Extra/Container";
import about from "../../assets/about.png"

const AboutMe = () => {
  return (
    <div className=" px-5 text-[20px] py-[150px]">
      <Container>
      <h2 className=" text-[#c4cfde] text-[25px] md:text-[40px] lg:text-[60px] font-bold capitalize py-[33px] ">
                about me
              </h2>
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-[30%]">
            <div className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] flex items-center justify-center">
            <img className=" py-[20px] md:w-[300px] lg:w-[600px]" src={about} alt="" />
            </div>
          </div>
          <div className="lg:w-[60%]">

        <b className="lg:text-[22px] text-[#ff014f]">Sibbir</b> is a dynamic
        professional with a passion for helping businesses unlock their
        potential through effective lead generation strategies. With [X years of
        experience or a strong foundation in B2B lead generation], Sibbir has a
        proven track record of connecting businesses with their ideal clients,
        driving sustainable growth, and enhancing ROI. Sibbir’s expertise lies
        in crafting tailored approaches that not only attract high-quality leads
        but also nurture them into lasting business relationships. By leveraging
        cutting-edge tools, data-driven insights, and a deep understanding of
        market dynamics, Sibbir ensures that every campaign delivers measurable
        success. What Sets Sibbir Apart:
        <div className="py-[60px]">
          <ul>
            <li>
              * Comprehensive knowledge of lead generation techniques, from
              inbound marketing to targeted outreach.
            </li>
            <li>
              * Exceptional communication and networking skills to build
              meaningful client connections.
            </li>
            <li>
              * A results-driven mindset focused on delivering tangible outcomes
              for every partner.
            </li>
          </ul>
        </div>
        <p>
          Sibbir is ready to collaborate with you to elevate your business and
          achieve your growth goals. Let’s connect today to explore
          opportunities for success!
        </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
