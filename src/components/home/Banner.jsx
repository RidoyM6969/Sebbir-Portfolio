import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import Container from '../Extra/Container'
import sebbir from "../../assets/sebbir.png"
import { FiFacebook } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";





const Banner = () => {

  return (
    <div className=' px-5 pt-[150px] pb-[350px] md:pb-[400px]  lg:py-[160px]  relative '>
      <Container>
        <div className="lg:flex lg:justify-between">
          <div className="lg:w-[50%]">
            <div className="">
            <h6 className='text-[#c4cfde] text-[14px] font-semibold uppercase mb-[20px] tracking-widest '>welcome to my world</h6>
            <h1 className=' text-[30px] lg:text-[50px] xl:text-[60px] font-bold capitalize mb-[22px] tracking-[1px] font-roboto '>hi, i'm <span className='text-[#ff014f]'>sibbir hossin</span> <br />
                <span className=' lowercase '> <span className='text-[20px] lg:text-[50px] '>a</span> <span className='text-[10px] md:text-[12px] lg:text-[35px] xl:text-[20px] capitalize'>
                <TypeAnimation 
                sequence={[
                  'lead genaration expert',
                  1000,
                  'food for Hamsters',
                  1000,
                  'We produce Pigs',
                  1000,
                ]}
                wrapper="span"
                speed={0}
                style={{  fontSize: '2em', display: 'inline-block ' }}
                repeat={Infinity}
              />
                </span>
                </span>
            </h1>
            <p className='text-[#c4cfde] xl:w-[680px]'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
            </div>
            <div className="pt-[50px] lg:pt-[125px]">
              <span className='uppercase text-[#c4cfde] text-[14px] '>find with me</span>
              <div className="flex items-center gap-x-[20px] pt-[20px]">
                <a href="#" className="h-[50px] w-[50px] flex items-center justify-center rounded-[4px] shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
                  <div className='text-[20px]' href="#"><FiFacebook/></div>
                  </a>
                <a href="#" className="h-[50px] w-[50px] flex items-center justify-center rounded-[4px] shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
                  <div className='text-[20px]' href="#"><LuLinkedin/></div>
                  </a>
                <a href="#" className="h-[50px] w-[50px] flex items-center justify-center rounded-[4px] shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
                  <div className='text-[20px]' ><LuTwitter/></div>
                  </a>
              </div>
            </div>
          </div>
          <div className="lg:w-[45%] relative top-[77px] lg:top-[50px]  ">
            <div className="absolute h-[180px] w-[180px] top-[60px] left-[70px] md:h-[250px] md:w-[250px] md:left-[350px] md:top-[55px] lg:w-[300px] lg:h-[300px] lg:top-[24px] lg:left-[70px] xl:w-[350px] xl:h-[370px] xl:top-[108px] xl:right-[175px] scale-125 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            </div>
            <div className="absolute top-[-51px] left-[0px] md:top-[-90px] md:left-[280px] lg:top-[-68px] lg:left-[0px]">
              <img className=' w-[400px] md:w-[500px] lg:w-[600px]' src={sebbir } alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
