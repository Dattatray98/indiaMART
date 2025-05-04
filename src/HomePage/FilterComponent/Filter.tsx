import React from 'react'

const Filter = () => {
  return (
    <div className='h-[60px] flex items-center gap-5'>
      <h3 className='font-style font-medium text-[18px] px-4 border-r-2 border-black cursor-default'>Advance Filtters </h3>
      <div className='flex gap-5 items-center'>
      <a href="/FilteredPages/Electronics.tsx"  target="_blank" rel="noopener noreferrer" className='font-style font-medium text-[17px]'>Electronics</a>
      <a href="/FilteredPages/Grocery.tsx" target="_blank" rel="noopener noreferrer" className='font-style font-medium text-[17px] '>Grocery</a>
      <a href="/FilteredPages/PharmaceuticalsPage.tsx" target="_blank" rel="noopener noreferrer"  className='font-style font-medium text-[17px] '>Pharmaceuticals</a>
      <a href="/FilteredPages/FashionPage.tsx" target="_blank" rel="noopener noreferrer" className='font-style font-medium text-[17px] '>Fashion</a>
      <a href="#" className='font-style font-medium text-[17px] '>Home & Furniture</a>
      <a href="#" className='font-style font-medium text-[17px] '>Beauty & Personal Care</a>
      <a href="#" className='font-style font-medium text-[17px] '>Health & Wellness</a>
      <a href="#" className='font-style font-medium text-[17px] '>Kids Toys</a>
      <a href="#" className='font-style font-medium text-[17px] '>Books</a>
      <a href="#" className='font-style font-medium text-[17px] '>Sports</a>
      <a href="#" className='font-style font-medium text-[17px] '>Stationery</a>
      <a href="#" className='font-style font-medium text-[17px] '>Pets</a>
      </div>
    </div>
  )
}

export default Filter
