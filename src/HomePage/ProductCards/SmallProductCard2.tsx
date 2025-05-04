import React from "react"

interface ProductProps {
  title: string;
  description: string;
  image: string;
}

const SmallProductCard2: React.FC<ProductProps> = ({ title, description, image }) => {
  return (
    <div className=" h-[170px] border-1 w-[358px] mt-[15px] mx-[8px] px-[10px] py-[12px] flex items-center">

      <div className="h-[100px] w-[100px] ml-4">
        <img src={image} alt={title} />
      </div>

      <div className="w-[238px] h-[155px] pl-[15px]">
        <h3 className="font-medium font-style text-[14px] text-[#323232] leading-8">{title}</h3>
        <p className="text-sm leading-6 font-style text-[#323232]">{description}</p>
      </div>

    </div>
  )
}

export default SmallProductCard2
