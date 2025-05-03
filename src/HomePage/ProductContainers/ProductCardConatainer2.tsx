import React from "react"
import SmallProductCard2 from "../ProductCards/SmallProductCard2"


const ProductCardConatainer2 = () => {
  return (
    <div className="h-[445px] my-[20px]">
      <div className="mx-[10px]">
        <div className="bg-white border-t-[3px] border-[#2E3192] h-[460px] box-shadow">
          <h1 className="text-[28px] font-style px-[15px] pt-[15px] pb-[5px]">
            <a href="#">this is heading</a>
          </h1>

          <div className="flex">
            <div className="h-[359px] w-[325px] border-1 mx-[20px] mt-[15px]">
              <div className="h-[359px]"></div>
            </div>

            <div className="h-[374px] w-[1145px] flex flex-wrap">
              <SmallProductCard2 />
              <SmallProductCard2 />
              <SmallProductCard2 />
              <SmallProductCard2 />
              <SmallProductCard2 />
              <SmallProductCard2 />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardConatainer2
