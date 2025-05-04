import React from "react"

const RequirementContainer = () => {
  return (
    <div className="px-[15px]">
      <div className="h-[346px] py-[15px]">
        <div className="flex border-1 border-[#f6f6f6] box-shadow">
          <div className=" relative h-[279px] w-[500px] mt-[32px] ml-[60px]">
              <div>
                <h1 className="font-style text-[37px] w-[400px]">Get <b>free</b> quotes from multiple sellers
                </h1>
              </div>
            <div className="absolute w-full bottom-0 flex =justify-evenly">
              <div className="flex flex-wrap w-20 justify-center">
              <img src="/tellneed.png" alt="" className="w-20 h-20 mb-3" />
                <h1 className="font-style text-[14px] leading-1">tell us</h1>
                <b className="font-style text-[14px]">You Need</b>
              </div>

              <div className="flex flex-wrap w-30 justify-center">
              <img src="/letter-box.png" alt="" className="w-20 h-20 mb-3" />
                <h1 className="font-style leading-5 text-center text-[14px]">Receive free quotes
                from</h1>
                <b className="font-style ">sellers</b>
              </div>

              <div className="flex flex-wrap w-20 justify-center ">
              <img src="/trust-deal.png" alt="" className="w-20 h-20" />
                <h1 className="font-style leading-0 text-[15px] text-center">Seal the
               </h1>
                <b className="font-style leading-0 text-[15px] text-center"> Deal</b>
              </div>
             
             
            </div>
          </div>
          <div className="h-[311px] w-[660px] pt-[35px] pl-[90px] ">
            <div>
              <h1 className="font-style font-medium text-[20px]">Tell us your Requirement</h1>
              <h2 className="font-style text-[16px]">Tell Us What Are You Looking For?</h2>
            </div>
            <div className="w-[560px] h-[35px] border-1 border-[#bcbcbc] pl-2 my-[15px] flex items-center rounded-[2px]"><input type="text" placeholder="Enter Product/Service Name" className="font-style w-[550px] text-[14px] outline-none" /></div>

            <button className="px-[20px] py-[10px] bg-[#007a6e] text-white rounded-[4px] w-[250px] text-[20px] font-style font-medium ml-38">
              Submit Requirement
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequirementContainer
