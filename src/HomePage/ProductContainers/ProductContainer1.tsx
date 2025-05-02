import ProductCategorieCard from "../ProductCards/ProductCategorieCard";

type ProductCard = {
  ButtonName: string;
};

const productCards: ProductCard[] = [
  {
    ButtonName: "Get Quotes",
  },
  {
    ButtonName: "Get Quotes",
  },
  {
    ButtonName: "Get Quotes",
  },
  {
    ButtonName: "Get Quotes",
  },
  {
    ButtonName: "Get Quotes",
  },
  {
    ButtonName: "Get Quotes",
  },
  {
    ButtonName: "Get Quotes",
  },
  {
    ButtonName: "Get Quotes",
  },
  {
    ButtonName: "Get Quotes",
  },
  {
    ButtonName: "Get Quotes",
  },

];

const ProductContainer1 = () => {
  return (
    <div className="h-[660px] bg-[#F3F3F3] p-3 mt-3">
      <div className="h-[660px] bg-white box-shadow p-4 gap-2 flex-wrap overflow-y-hidden">
        <div className="text-[23px] font-style font-medium text-[#323232]">Categories You May Like</div>

        <div className="h-[593px] flex flex-wrap gap-5">
          {productCards.map((card, index) => (
            <ProductCategorieCard
              key={index}
              ButtonName={card.ButtonName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductContainer1;
