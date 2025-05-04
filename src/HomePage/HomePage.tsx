import Navbar from "./Navbar/Navbar"
import BrandContainer from "./ProductContainers/BrandContainer"
import CitySupplierContainer from "./ProductContainers/CitySuppierContainer"

import ProductSlide from "./ProductContainers/ProductSlide"
import ProductCardContainer2 from "./ProductContainers/ProductCardConatainer2"
import ProductContainer from "./ProductContainers/ProductContainer"
import ProductContainer1 from "./ProductContainers/ProductContainer1"
import RequirementContainer from "./ProductContainers/RequirementContainer"
import React from "react"
import Filter from "./FilterComponent/Filter"

const HomePage = () => {
  return (
    <>
      <Navbar />
      
      <Filter />
      <ProductContainer1 category={"Categories You May Like"} />
      <ProductSlide />
      <div className="h-[80px] mx-[10px] flex justify-center"><img src="add2.png" alt="Advertisement" className=" h-[80px]" /></div>
      <ProductContainer category={"Building Construction Material & Equipment"} />
      <ProductContainer category={"Electronics & Electrical Goods & Supplies"} />
      <ProductCardContainer2 category={"Pharmaceutical Drug, Medicine, Medical Care & Consultation"} />
      <div className="h-[100px] mx-[10px] flex justify-center"><img src="add1.png" alt="Advertisement" className=" h-[99px]" /></div>
      <ProductContainer category={"Industrial Plants, Machinery & Equipment"} />
      <ProductContainer category={"Industrial & Engineering Products, Spares and Supplies"} />
      <ProductContainer category={"Food, Agriculture & Farming"} />
      <RequirementContainer />
      <ProductContainer category={"Apparel, Clothing & Garments"} />
      <BrandContainer />
    </>
  )
}

export default HomePage
