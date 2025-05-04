import React from "react";


interface ProductProps {
  title: string;
  description: string;
  image: string;
}

const SmallProductCard1: React.FC<ProductProps> = ({ title, description, image }) => {
  return (
    <div className="h-[135px] border-1 border-[#EBEBEB] w-[358px] mt-[15px] mx-[8px] px-[10px] py-[12px] flex items-center">
      {/* Display the product image */}
      <div className="h-[100px] w-[100px] ml-4">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* Display product title and description */}
      <div className="w-[238px] h-[112px] pl-[15px]">
        <h3 className="font-medium font-style text-[14px] text-[#323232] leading-8">{title}</h3>
        <p className="text-sm leading-6 font-style text-[#323232]">{description}</p>
      </div>
    </div>
  );
};

export default SmallProductCard1;
