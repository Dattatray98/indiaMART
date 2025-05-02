import SmallProductCard from "../ProductCards/SmallProductCard1";

type ProductCard = {
  title: string;
  image?: string;
  description?: string;
};


type ProductContainerProps = {
  heading: string;
  cards: ProductCard[];
};

const ProductContainer = ({ heading, cards }: ProductContainerProps) => {
  return (
    <div className="h-[554px] my-[20px]">
      <div className="mx-[10px]">
        <div className="bg-white border-t-[3px] border-[#2E3192] h-[554px] box-shadow">
          <h1 className="text-[28px] font-style px-[15px] pt-[15px] pb-[5px]">
            <a href="#">{heading}</a>
          </h1>

          <div className="flex">
            <div className="h-[441px] w-[325px] border-1 mx-[20px] my-[15px]">
              <div className="h-[359px]"></div>
            </div>

            <div className="h-[456px] w-[1145px] flex flex-wrap">
              {cards.map((card, index) => (
                <SmallProductCard
                  key={index}
                  title={card.title}
                  image={card.image}
                  description={card.description}
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
