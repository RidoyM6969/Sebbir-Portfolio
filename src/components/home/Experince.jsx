import React from 'react'
import Container from '../Extra/Container'

const Experince = () => {
  return (
    <div className='py-[100px]'>
          <Container>
        <div className=" flex flex-wrap  lg:flex items-center justify-evenly">
          <div className=" h-[60px] w-[160px] px-2 py-1 md:h-[80px] md:w-[200px] md:px-5 md:py-2 lg:h-[120px] lg:w-[300px]  lg:px-5 lg:py-2 text-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <h4 className=' text-[#FF014F] lg:text-[50px] font-bold uppercase'>70+</h4>
            <span className='text-[14px] lg:text-[19px] capitalize'>client's project</span>
          </div>
          <div className=" h-[60px] w-[160px] px-2 py-1 md:h-[80px] md:w-[200px] md:px-5 md:py-2 lg:h-[150px] lg:w-[300px]  lg:px-5 lg:py-2 text-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <h4 className=' text-[#FF014F] lg:text-[60px] font-bold uppercase'>3 year's </h4>
            <span className='text-[14px] lg:text-[19px] capitalize'>experiences</span>
          </div>
          <div className=" mt-3 h-[60px] w-[160px] px-2 py-1 md:h-[80px] md:w-[200px] md:px-5 md:py-2 lg:pt-0 lg:h-[120px] lg:w-[300px]  lg:px-5 lg:py-2 text-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <h4 className=' text-[#FF014F] lg:text-[50px] font-bold uppercase'>300+</h4>
            <span className='text-[14px] lg:text-[19px] capitalize'>client's satisfaction</span>
          </div>
              </div>
      </Container>
    </div>
  )
}

export default Experince
