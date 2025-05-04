import React, { useEffect, useState } from 'react';
import ProductCategorieCard from "../ProductCards/ProductCategorieCard";

interface Product {
  id: number;
  title: string;
  image: string;
}

const ProductContainer1 = ({ category }: { category: string }) => {
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
    <div className="h-[660px] bg-[#F3F3F3] p-3 my-3">
      <div className="h-[660px] bg-white box-shadow p-4 gap-2 flex-wrap overflow-y-hidden">
        <div className="text-[23px] font-style font-medium text-[#323232]">Categories You May Like</div>

        <div className="h-[593px] flex flex-wrap gap-5">
        {products.map((product) => (
                <ProductCategorieCard
            key={product.id}
            title={product.title}
            image={product.image} id={0}                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer1;
