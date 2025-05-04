import React, { useEffect, useState } from 'react';
import SmallProductCard1 from '../ProductCards/SmallProductCard1';
import { button, image, img } from 'framer-motion/client';

// Define a TypeScript interface for product data
interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  Mimage: string;
  Mimagedis: string;
}

const ProductContainer = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/data.json') // Fetch data from your JSON file
      .then((res) => res.json())
      .then((data) => {
        // Filter data based on category
        setProducts(data[category] || []);
      });
  }, [category]); // Dependency on category to re-fetch if the category changes

  return (
    <div className="h-[554px] my-[20px]">
      <div className="mx-[10px]">
        <div className="bg-white border-t-[3px] border-[#2E3192] h-[554px] box-shadow">
          <h1 className="text-[28px] font-style px-[15px] pt-[15px] pb-[5px]">
            <a href="#">{category.replace(/([A-Z])/g, ' $1').trim()}</a> {/* Display category name */}
          </h1>

          <div className="flex">
            <div className="h-[441px] w-[325px] border-1 border-[#EBEBEB] mx-[20px] my-[15px]">
              <div className=" relative h-[441px]">
              {products.map((product) => (
                <img src={product.Mimage} alt=""  className='h-[441px] absolute'/>
              ))}
               {products.map((product) => (
              <h1 className='font-style font-medium text-[18px] absolute bottom-20 text-white left-8'>{product.Mimagedis}</h1>
              ))}
               <button className=" absolute bottom-5 left-10 px-[15px] py-[5px] bg-[#007a6e] text-white rounded-[4px] w-[130px] text-[18px] font-style font-medium">
                View All
            </button>
              </div>
            </div>

            <div className="h-[456px] w-[1145px] flex flex-wrap">
              {/* Map over the products and pass data to SmallProductCard1 */}
              {products.map((product) => (
                <SmallProductCard1
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
