
import SmallProductCard1 from '../ProductCards/SmallProductCard1'

const ProductContainer = () => {
  return (
    <div className="h-[554px] my-[20px]">
      <div className="mx-[10px]">
        <div className="bg-white border-t-[3px] border-[#2E3192] h-[554px] box-shadow">
          <h1 className="text-[28px] font-style px-[15px] pt-[15px] pb-[5px]">
            <a href="#">this is heading</a>
          </h1>

          <div className="flex">
            <div className="h-[441px] w-[325px] border-1 mx-[20px] my-[15px]">
              <div className="h-[441px]"></div>
            </div>

            <div className="h-[456px] w-[1145px] flex flex-wrap">

              <SmallProductCard1 />
              <SmallProductCard1 />
              <SmallProductCard1 />
              <SmallProductCard1 />
              <SmallProductCard1 />
              <SmallProductCard1 />
              <SmallProductCard1 />
              <SmallProductCard1 />
              <SmallProductCard1 />

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductContainer
