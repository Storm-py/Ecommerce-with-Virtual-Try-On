// components/ProductFilters.js
import React, { useState } from 'react';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi2';

const ProductFilters = () => {
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    size: true,
    color: true,
    sale: true,
    brand: true
  });

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['#000000', '#FF0000', '#00FF00', '#0000FF', '#FFFFFF', '#FFFF00'];
  const brands = ['Adidas', 'Nike', 'Puma', 'Gucci', 'Louis Vuitton', 'Balenciaga'];

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="w-72 pr-4 border-r border-gray-200">
      {/* Categories Filter */}
      <div className="border-b border-gray-200 pb-6">
        <div 
          className="flex justify-between items-center cursor-pointer py-4"
          onClick={() => toggleSection('categories')}
        >
          <h3 className="font-semibold">CATEGORIES</h3>
          {openSections.categories ? <HiChevronUp /> : <HiChevronDown />}
        </div>
        {openSections.categories && (
          <div className="space-y-2">
            {['Men', 'Women', 'Kids', 'Baby', 'Shoes', 'Bags', 'Accessories'].map((category) => (
              <div key={category} className="flex items-center justify-between hover:text-primary">
                <span className="text-sm cursor-pointer">{category}</span>
                <span className="text-gray-400 text-xs">(0)</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="border-b border-gray-200 py-6">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('price')}
        >
          <h3 className="font-semibold">PRICE</h3>
          {openSections.price ? <HiChevronUp /> : <HiChevronDown />}
        </div>
        {openSections.price && (
          <div className="mt-4">
            <input 
              type="range" 
              min="0" 
              max="1000" 
              className="w-full accent-black"
            />
            <div className="flex justify-between text-sm mt-2">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div className="border-b border-gray-200 py-6">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('size')}
        >
          <h3 className="font-semibold">SIZE</h3>
          {openSections.size ? <HiChevronUp /> : <HiChevronDown />}
        </div>
        {openSections.size && (
          <div className="grid grid-cols-3 gap-2 mt-4">
            {sizes.map(size => (
              <button 
                key={size}
                className="border border-gray-200 p-2 text-sm hover:border-black"
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div className="border-b border-gray-200 py-6">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('color')}
        >
          <h3 className="font-semibold">COLOR</h3>
          {openSections.color ? <HiChevronUp /> : <HiChevronDown />}
        </div>
        {openSections.color && (
          <div className="grid grid-cols-6 gap-2 mt-4">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border border-gray-200 cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Sale Filter */}
      <div className="border-b border-gray-200 py-6">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('sale')}
        >
          <h3 className="font-semibold">SALE</h3>
          {openSections.sale ? <HiChevronUp /> : <HiChevronDown />}
        </div>
        {openSections.sale && (
          <div className="mt-4 flex items-center gap-2">
            <input type="checkbox" id="sale" className="accent-black" />
            <label htmlFor="sale" className="text-sm">On Sale</label>
          </div>
        )}
      </div>

      {/* Brand Filter */}
      <div className="border-b border-gray-200 py-6">
        <div 
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection('brand')}
        >
          <h3 className="font-semibold">BRAND</h3>
          {openSections.brand ? <HiChevronUp /> : <HiChevronDown />}
        </div>
        {openSections.brand && (
          <div className="space-y-2 mt-4">
            {brands.map(brand => (
              <div key={brand} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="accent-black" />
                  <span className="text-sm">{brand}</span>
                </div>
                <span className="text-gray-400 text-xs">(0)</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilters;