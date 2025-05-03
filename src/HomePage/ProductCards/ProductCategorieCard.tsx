import React from "react";

type ProductCategorieCardProps = {
  ButtonName: string;
};

const ProductCategorieCard = ({ ButtonName }: ProductCategorieCardProps) => {
  return (
    <div>
      <div className="relative border-2 rounded-[8px] w-[270px] h-[280px] flex justify-center pb-15">
        <img
          src="/image.png"
          alt="product img"
          className="w-[125px] h-[125px] mt-5"
        />
        <button className="absolute bottom-[15px] border-2 py-[8px] px-[5px] w-[238px] mx-[14px] rounded-[6px] bg-[#2e3192]  text-white font-style font-medium ">
          {ButtonName}
        </button>
      </div>
    </div>
  );
};

export default ProductCategorieCard;
