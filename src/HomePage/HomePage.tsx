import Navbar from "./Navbar/Navbar"
import BrandContainer from "./ProductContainers/BrandContainer"
import CitySupplierContainer from "./ProductContainers/CitySuppierContainer"

import ProductSlide from "./ProductContainers/ProductSlide"
import ProductCardContainer2 from "./ProductContainers/ProductCardConatainer2"
import ProductContainer from "./ProductContainers/ProductContainer"
import ProductContainer1 from "./ProductContainers/ProductContainer1"
import RequirementContainer from "./ProductContainers/RequirementContainer"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <ProductContainer1 />
      <ProductSlide />
      <div className="h-[80px] mx-[10px] border-2">Advertisement</div>
      <ProductContainer />
      <ProductContainer />
      <ProductCardContainer2 />
      <div className="h-[80px] mx-[10px] border-2">Advertisement</div>
      <ProductCardContainer2 />
      <ProductContainer />
      <ProductContainer />
      <ProductContainer />
      <RequirementContainer />
      <ProductContainer />
      <ProductCardContainer2 />
      <CitySupplierContainer />
      <ProductCardContainer2 />
      <ProductCardContainer2 />
      <div className="h-[128px] mx-[10px] my-[20px] border-2"></div>
      <BrandContainer />
      <div className="mt-[20px]">
        <div className="h-[308px] mx-[10px] shadow bg-white">
          <div className="h-[308px] p-[15px]">
            <h3 className="text-[28px] text-[#323232] font-medium">More for You</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
