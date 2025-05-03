import React from "react"

const ProductSlide = () => {
  return (
    <div className='h-[384px] py-[15px] bg-[#F3F3F3] '>
      <div className='h-[350px] bg-white flex mx-[10px] box-shadow'>

        <div className='w-[370px] h-[347px] ml-[20p]'>
          <div className="pt-[50px] px-[15px] ">
          <h1 className="font-style text-[36px] text-[#323232] flex flex-wrap leading-10">We Connect
            <span>
              <b>buyers </b> 
              & 
              <b> Sellers</b>
            </span>
          </h1>
          <p className="font-style leading-5 mt-2">IndiaMART is india's largest online B2B marketplace, connecting buyers with suppliers</p>
          </div>
          <div className="mt-4 flex gap-4 justify-center">
            <span className=" flex flex-wrap justify-center">
            <img src="/trust.png" alt="image"  className="w-[40px] h-[40px]"/>
            <h3>Trusted Platfrom</h3>
            </span>
            <span className=" flex-wrap">
            <img src="/security.png" alt="image"  className="w-[30px] h-[30px] mt-1"/>
            <h3>Trusted Platfrom</h3>
            </span>
            <span className=" flex flex-wrap justify-center">
            <img src="/asisst.png" alt="image"  className="w-[30px] h-[30px]"/>
            <h3>Trusted Platfrom</h3>
            </span>
          </div>
        </div>


        <div className='w-[1000px] h-[347px] px-[15px] flex items-center justify-center'>
          <div className='w-[920px] h-[346px] '>
            <a href="https://youtu.be/M9otyTcg0LU"  target="_blank" rel="noopener noreferrer" ><img src="/SlideVideo.png" alt="videobanner" className= "w-[920px] h-[347px] "/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSlide
