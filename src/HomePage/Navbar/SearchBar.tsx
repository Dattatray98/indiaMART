import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [isRotated, setIsRotated] = useState<boolean>(false);

  const CitySearchClick = () => {
    setIsRotated(!isRotated);
  };

  return (
    <>
      <div className="h-[35px] rounded-[3px] ml-6 bg-white flex items-center pl-1 gap-1">
        <div className="w-[110px] flex items-center gap-1 relative">

          <img src="/maps-and-flags.png" alt="" className="w-3 cursor-pointer" />
          <b className='text-[14px] font-style'>All India</b>
          <img
            src="/down-arrow.png"
            alt="arrow"
            className={`h-[10px] absolute right-0 transform transition-transform duration-600 ${
              isRotated ? 'rotate-180' : 'rotate-0'
            }`}
            onClick={CitySearchClick}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <div className="w-[360px] p-3 border-l-1 h-[35px] flex items-center">
          <input
            type="text"
            placeholder="Enter Product/Service to search"
            className="bg-transparent w-[400px] h-[35px] outline-none"
          />
        </div>

        <img src="/google-voice.png" alt="voice search" className="w-[30px] h-[33px] cursor-pointer" />

        <div className="flex items-center bg-[#00A699] w-[100px] h-[35px] p-1 gap-2 rounded-r-[3px] cursor-pointer">
          <img src="/search.png" alt="search" className="w-[18px] h-[18px]" />
          <h1 className="text-white">Search</h1>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
