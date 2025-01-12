import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Container from "../Extra/Container";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";



function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="absolute bottom-[-50px] right-[20px] lg:absolute  lg:top-[-50px] lg:right-[20px] w-[40px] h-[40px]  flex items-center justify-center bg-[#00000034] shadow-2xl hover:text-[#FF183F]  "
  
        onClick={onClick}
      ><IoMdArrowForward/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className="absolute bottom-[-50px] left-[20px]  lg:absolute lg:top-[-50px] lg:right-[80px] w-[40px] h-[40px]  flex items-center justify-center bg-[#00000034] shadow-2xl hover:text-[#FF184F]  "
        onClick={onClick}
      ><IoArrowBackSharp/></div>
    );
}
  
const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="py-[30px] lg:py-[120px] text-center">
      <Container>
        <div className="">
          <span className=" text-[#FF184F] text-[16px] font-normal ">
            what caient's say
          </span>
          <h2 className=" text-[#c4cfde] text-[32px] lg:text-[62px] font-bold font-roboto">
            Testimonial
          </h2>
        </div>
        <div className="lg:w-full mx-auto pt-3">
          <Slider {...settings}>
            <div>
            <section class="bg-[#00000034] dark:bg-gray-900 h-[400px] py-3 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] ">
            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 ">
                <figure class="max-w-screen-md mx-auto">
                    <svg class="h-[30px] lg:h-12 mx-auto mb-3  text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                    </svg> 
                    <blockquote>
                        <p class=" text-[15px] md:text-[18px] lg:text-xl font-medium text-[#c4cfde] dark:text-white">"This user did not seem to grasp the requirements for this task, although it delivered a different list after the revision, the data provided was not completely targeted to my requirements. In total, I have 38 usables leads out the 200 she provided (after the revision) The data provided when outside of the target country, different industries, and provided useless contact information such as toll free numbers. More was expected from this service."</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center mt-6 space-x-3">
                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div class="pr-3 font-medium text-[#c4cfde] dark:text-white">Micheal Gough</div>
                            <div class="pl-3 text-sm font-light text-[#FF184F] dark:text-gray-400">CEO at Google</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            </section>
            </div>
            <div>
            <section class="bg-[#00000034] dark:bg-gray-900 h-[400px] py-3 ">
            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
                <figure class="max-w-screen-md mx-auto">
                    <svg class="h-[30px] lg:h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                    </svg> 
                    <blockquote>
                        <p class=" text-[15px] md:text-[18px] lg:text-xl font-medium text-[#c4cfde] dark:text-white">"This user did not seem to grasp the requirements for this task, although it delivered a different list after the revision, the data provided was not completely targeted to my requirements. In total, I have 38 usables leads out the 200 she provided (after the revision) The data provided when outside of the target country, different industries, and provided useless contact information such as toll free numbers. More was expected from this service."</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center mt-6 space-x-3">
                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div class="pr-3 font-medium text-[#c4cfde] dark:text-white">Micheal Gough</div>
                            <div class="pl-3 text-sm font-light text-[#FF184F] dark:text-gray-400">CEO at Google</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            </section>
            </div>
            <div>
            <section class="bg-[#00000034] dark:bg-gray-900 h-[400px] py-3 ">
            <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
                <figure class="max-w-screen-md mx-auto">
                    <svg class="h-[30px] lg:h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                    </svg> 
                    <blockquote>
                        <p class="text-[15px] md:text-[18px] lg:text-xl font-medium text-[#c4cfde] dark:text-white">"This user did not seem to grasp the requirements for this task, although it delivered a different list after the revision, the data provided was not completely targeted to my requirements. In total, I have 38 usables leads out the 200 she provided (after the revision) The data provided when outside of the target country, different industries, and provided useless contact information such as toll free numbers. More was expected from this service."</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-center mt-6 space-x-3">
                        <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div class="pr-3 font-medium text-[#c4cfde] dark:text-white">Micheal Gough</div>
                            <div class="pl-3 text-sm font-light text-[#FF184F] dark:text-gray-400">CEO at Google</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            </section>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
