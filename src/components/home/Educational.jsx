import React from 'react'
import Container from '../Extra/Container'

const Educational = () => {
  return (
      <div className='py-[20px] px-5 lg:py-[100px] xl:px-0  '>
          <Container>
              <h2 className=' text-[#c4cfde] text-[23px] lg:text-[36px] font-bold font-roboto capitalize '>educational quality</h2>
              <div className="lg:flex items-center justify-between">
                  <div className=" h-[100px] w-full mt-5 p-3 lg:h-[250px] lg:w-[600px] rounded-lg flex items-center  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] lg:p-5 lg:mt-7 ">
                      <div className="">
                        <h3 className='text-[17px] md:text-[22px] lg:text-[25px] capitalize font-semibold font-roboto  '>BBA in accounting at "kushtia islamia college (present)</h3>
                      </div>
                  </div>
                  <div className="lg:w-[2px] lg:h-[250px] border-2  border-[#17191c]"></div>
                  <div className=" h-[100px] w-full mt-5 p-3 lg:h-[250px] lg:w-[600px] rounded-lg flex items-center  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] lg:p-5 lg:mt-7">
                      <div className="">
                        <h3 className='text-[17px] md:text-[22px] lg:text-[25px] capitalize font-semibold font-roboto  '>HSC in business group at rajshahi govt. college</h3>
                      <span className='text-[14px] lg:text-[20px] font-semibold  '>in 2020 with a cgpa ( 4.50 out of 5.00 )</span>

                      </div>
                  </div>
              </div>
              <div className="lg:flex items-center justify-between">
                  <div className=" h-[100px] w-full mt-5 p-3 lg:h-[250px] lg:w-[600px] rounded-lg flex items-center  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] lg:p-5 lg:mt-7">
                      <div className="">
                      <h3 className='text-[17px] md:text-[22px] lg:text-[25px] capitalize font-semibold font-roboto  '>SSC in science at rajshahi govt. school</h3>
                      <span className='text-[14px] lg:text-[20px] font-semibold  '>in 2020 with a cgpa ( 4.50 out of 5.00 ) </span>
                      </div>
                  </div>
                  <div className="lg:w-[2px] lg:h-[250px] border-2  border-[#17191c]"></div>
                  <div className=" h-[100px] w-full mt-5 p-3 lg:h-[250px] lg:w-[600px] rounded-lg flex items-center  shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] lg:p-5 lg:mt-7">
                       <h3 className='text-[17px] md:text-[22px] lg:text-[25px] capitalize font-semibold font-roboto'>skill certificate</h3>
                  </div>
              </div>
          </Container>
      
    </div>
  )
}

export default Educational
