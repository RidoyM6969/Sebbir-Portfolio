import React, { useState } from "react";
import Container from "../Extra/Container";
import sebbir from "../../assets/sss.jpg"
import { Link, Links } from "react-router";
import { CgMenuRight } from "react-icons/cg";
import { GiCrossMark } from "react-icons/gi";
import sebbirCV from '../../assets/sebbir cv.pdf'



const Menu = () => {

  let [menu, setMenu] = useState(false);

  let MenuShowClick = () => {
    setMenu(!menu)
    
  }

  return (
    <div className=" py-[15px] lg:py-[20px]  shadow-lg fixed top-0 w-full z-[999] bg-[#212428] ">
      <div className=" px-3 lg:px-[30px]  ">
        <div className="flex items-center justify-between">
          <Link to='/'>  
          <div className=" w-[40%] flex items-center gap-x-[10px]">
                <img className="w-[80px] h-[60px] rounded-[50%] shadow-lg " src={sebbir} alt="" />
                <h2 className=" uppercase text-[18px] font-roboto ">sibbir</h2>
          </div>
          </Link>
          <div className={`lg:w-[100%] lg:flex items-center lg:justify-evenly lg:static xl:w-[50%] ${menu == true ? 'bg-[#212428] w-full text-center absolute top-[90px] left-0 transition-all ease-in-out duration-150 ' : 'bg-[#212428] w-full text-center absolute top-[100px] left-[-1300px] transition-all ease-in-out duration-150 '} `}>
            <ul className={`lg:flex items-center lg:gap-x-[25px] xl:gap-x-[50px]`}>
              <li className="pt-[10px] lg:pt-0">
              <Link to='/' className="text-[#c4cfde] uppercase font-sans cursor-pointer hover:text-[#FF013F] " >home</Link>
              </li>
              <li className="pt-[10px] lg:pt-0">
              <Link to='/about' className="text-[#c4cfde] uppercase font-sans cursor-pointer hover:text-[#FF013F] " >about me</Link>
              </li>
              <li className="pt-[10px] lg:pt-0">
              <Link to='/service' className="text-[#c4cfde] uppercase font-sans cursor-pointer hover:text-[#FF013F] ">service</Link>
              </li>
              <li className="pt-[10px] lg:pt-0">
              <Link to='/project' className="text-[#c4cfde] uppercase font-sans cursor-pointer hover:text-[#FF013F] ">project</Link>
              </li>
              <li className="pt-[10px] lg:pt-0">
              <Link to='/blog' className="text-[#c4cfde] uppercase font-sans cursor-pointer hover:text-[#FF013F] ">blog</Link>
              </li>
              <li className="pt-[10px] lg:pt-0">
              <Link to='/contact' className="text-[#c4cfde] uppercase font-sans cursor-pointer hover:text-[#FF013F] ">contact</Link>
              </li>
            </ul>
          <div className=" transition-all hover:delay-150 hover:scale-105 py-[18px] lg:py-0 lg:pl-3 ">
            <a src='' className=" text-[#FF013F] bg-black px-3 py-2  text-[18px] capitalize  lg:px-[15px] lg:py-[10px] lg:tracking-wider shadow-lg rounded-[6px] " download={sebbirCV}  href="#">download CV</a>
          </div>
          </div>
          <div onClick={MenuShowClick} className=" lg:hidden absolute top-[35px] right-[50px] text-[20px] ">
            {menu == true ? <GiCrossMark/> : <CgMenuRight/> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
