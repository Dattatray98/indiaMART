import React, { useEffect, useState } from 'react';
import SmallProductCard2 from "../ProductCards/SmallProductCard2"

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  Mimage: string;
  Mimagedis: string;
}
const ProductCardConatainer2 = ({ category }: { category: string }) => {
  const [Products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch('/data.json').then((res) => res.json()).then((data) => {
      setProducts(data[category] || []);
    });
  }, [category]);
  return (
    <div className="h-[445px] my-[20px]">
      <div className="mx-[10px]">
        <div className="bg-white border-t-[3px] border-[#2E3192] h-[460px] box-shadow">
          <h1 className="text-[28px] font-style px-[15px] pt-[15px] pb-[5px]">
            <a href="#">{category.replace(/([A-Z])/g, '$1').trim()}</a>
          </h1>

          <div className="flex">
            <div className="h-[359px] w-[325px] border-1 border-[#EBEBEB] mx-[20px] mt-[15px]">
              <div className="h-[359px]">
                {Products.map((product) => (
                  <img src={product.Mimage} alt="" className='h-[359px] absolute' />
                ))}
                {Products.map((product) => (
                  <h1 className='font-style font-medium text-[18px] absolute bottom-20 text-white left-8'>{product.Mimagedis}</h1>
                ))}
                <button className=" absolute bottom-5 left-10 px-[15px] py-[5px] bg-[#007a6e] text-white rounded-[4px] w-[130px] text-[18px] font-style font-medium">
                  View All
                </button>
              </div>
            </div>

            <div className="h-[374px] w-[1145px] flex flex-wrap">
              {Products.map((product) => (
                <SmallProductCard2
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardConatainer2
