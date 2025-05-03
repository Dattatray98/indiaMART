import React from "react"


const BrandContainer = () => {
  return (
    <div>
      <div className="h-[360px] mx-[10px] box-shadow bg-white">
        <div className="mt-[20px] h-[360px] p-[15px]">
          <h3 className="text-[28px] text-[#323232] font-style font-medium">Explore products from Premium Brands</h3>
          <div className="flex flex-wrap items-center gap-x-[110px] p-[15px]">
            <a href="#"><img src="/brand1.png" alt="" className="w-[170px]" /></a>
            <a href="#"><img src="/brand2.png" alt="" className="w-[110px]" /></a>
            <a href="#"><img src="/brand3.png" alt="" className="w-[150px]" /></a>
            <a href="#"><img src="/brand4.png" alt="" className="w-[150px]" /></a>
            <a href="#"><img src="/brand5.png" alt="" className="w-[150px]" /></a>
            <a href="#"><img src="/brand6.png" alt="" className="w-[150px]" /></a>
            {/* <a href="#"><img src="/brand6.png" alt="" className="w-[150px]" /></a>
            <a href="#"><img src="/brand6.png" alt="" className="w-[150px]" /></a>
            <a href="#"><img src="/brand6.png" alt="" className="w-[150px]" /></a>
            <a href="#"><img src="/brand6.png" alt="" className="w-[150px]" /></a>
            <a href="#"><img src="/brand6.png" alt="" className="w-[150px]" /></a>
            <a href="#"><img src="/brand6.png" alt="" className="w-[150px]" /></a>
             */}

          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandContainer
