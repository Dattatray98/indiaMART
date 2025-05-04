
import React from "react";

interface ProductProps {
  id: number;
  title: string;
  image: string;
}
const ProductCategorieCard: React.FC<ProductProps> = ({ title, image }) => {
  return (
    <div>
      <div className="relative border-1 border-[#EBEBEB] box-shadow rounded-[8px] w-[270px] h-[280px] flex justify-center pb-15 hover:box-hover-shadow">
        <img
          src={image}
          alt={title}
          className="w-[125px] h-[125px] mt-5"
        />
        <h3 className="absolute bottom-[80px] font-style font-medium text-[15px] text-[#1b1d1d]">{title}</h3>
        <button className="absolute bottom-[15px] border-2 py-[8px] px-[5px] w-[238px] mx-[14px] rounded-[6px] bg-[#2e3192]  text-white font-style font-medium ">
          Get Quotes
        </button>
      </div>
    </div>
  );
};

export default ProductCategorieCard;
