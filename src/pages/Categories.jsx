'use client';

import React, { useState, useMemo } from 'react';
import { Filter, X } from 'lucide-react';

const staticProducts = [
  { id: 1, name: 'Classic Navy Suit', price: 12999, gender: 'Men', size: ['38', '40', '42', '44'], color: 'Navy', image: 'https://www.pexels.com/photo/man-in-grey-suit-standing-on-stair-1321943/' },
  { id: 2, name: 'Executive Black Suit', price: 15999, gender: 'Men', size: ['40', '42', '44', '46'], color: 'Black', image: '/api/placeholder/300/400' },
  { id: 3, name: 'Premium Grey Suit', price: 18999, gender: 'Men', size: ['38', '40', '42'], color: 'Grey', image: '/api/placeholder/300/400' },
  { id: 4, name: 'Elegant Blazer Set', price: 10999, gender: 'Women', size: ['XS', 'S', 'M', 'L'], color: 'Beige', image: '/api/placeholder/300/400' },
  { id: 5, name: 'Professional Pant Suit', price: 13999, gender: 'Women', size: ['S', 'M', 'L', 'XL'], color: 'Black', image: '/api/placeholder/300/400' },
  { id: 6, name: 'Formal Kids Suit', price: 6999, gender: 'Kids', size: ['4', '6', '8', '10'], color: 'Navy', image: '/api/placeholder/300/400' },
  { id: 7, name: 'Charcoal Business Suit', price: 14999, gender: 'Men', size: ['42', '44', '46'], color: 'Charcoal', image: '/api/placeholder/300/400' },
  { id: 8, name: 'Silk Blend Suit', price: 21999, gender: 'Women', size: ['M', 'L', 'XL'], color: 'Wine', image: '/api/placeholder/300/400' },
  { id: 9, name: 'Little Gentleman Suit', price: 7999, gender: 'Kids', size: ['6', '8', '10', '12'], color: 'Black', image: '/api/placeholder/300/400' },
  { id: 10, name: 'Slim Fit Blue Suit', price: 16999, gender: 'Men', size: ['38', '40', '42'], color: 'Blue', image: '/api/placeholder/300/400' },
  { id: 11, name: 'Corporate Women Suit', price: 12999, gender: 'Women', size: ['XS', 'S', 'M'], color: 'Grey', image: '/api/placeholder/300/400' },
  { id: 12, name: 'Party Wear Kids Suit', price: 8999, gender: 'Kids', size: ['8', '10', '12'], color: 'Maroon', image: '/api/placeholder/300/400' },
];

export default function Categories() {
  const [products] = useState(staticProducts);
  const [selectedGender, setSelectedGender] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 25000]);
  const [sortBy, setSortBy] = useState('default');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const allColors = Array.from(new Set(products.map(p => p.color)));
  const allSizes = Array.from(new Set(products.flatMap(p => p.size)));

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const genderMatch = selectedGender.length === 0 || selectedGender.includes(product.gender);
      const sizeMatch = selectedSizes.length === 0 || product.size.some(size => selectedSizes.includes(size));
      const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return genderMatch && sizeMatch && colorMatch && priceMatch;
    });

    if (sortBy === 'low-to-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'high-to-low') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, selectedGender, selectedSizes, selectedColors, priceRange, sortBy]);

  const formatPrice = (price) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const toggleGender = (gender) => {
    setSelectedGender(prev => 
      prev.includes(gender) 
        ? prev.filter(g => g !== gender)
        : [...prev, gender]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const FilterSidebar = () => (
    <div className="space-y-6 ">
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Gender</h3>
        <div className="space-y-2">
          {['Men', 'Women', 'Kids'].map(gender => (
            <label key={gender} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedGender.includes(gender)}
                onChange={() => toggleGender(gender)}
                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
              />
              <span className="ml-2 text-gray-700">{gender}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
          <input
            type="range"
            min="0"
            max="25000"
            step="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex gap-2">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="Min"
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 25000])}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
        <div className="grid grid-cols-4 gap-2">
          {allSizes.sort().map(size => (
            <button
              key={size}
              onClick={() => toggleSize(size)}
              className={`py-2 px-3 text-sm font-medium rounded-md border transition-all ${
                selectedSizes.includes(size)
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Color</h3>
        <div className="space-y-2">
          {allColors.map(color => (
            <label key={color} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => toggleColor(color)}
                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
              />
              <span className="ml-2 text-gray-700 capitalize">{color}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          setSelectedGender([]);
          setSelectedSizes([]);
          setSelectedColors([]);
          setPriceRange([0, 25000]);
          setSortBy('default');
        }}
        className="w-full py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Our Suits Collection</h1>
            <p className="mt-2 text-gray-600">Premium quality suits for every occasion</p>
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Filter className="w-4 h-4" />
              Filters
              {(selectedGender.length + selectedSizes.length + selectedColors.length > 0) && (
                <span className="ml-1 bg-black text-white text-xs rounded-full px-2 py-0.5">
                  {selectedGender.length + selectedSizes.length + selectedColors.length}
                </span>
              )}
            </button>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Filters</h2>
                <FilterSidebar />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Sort and Results */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-gray-600">
                  Showing {filteredAndSortedProducts.length} of {products.length} products
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="default">Default</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              {filteredAndSortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAndSortedProducts.map(product => (
                    <div
                      key={product.id}
                      className="group cursor-pointer transition-transform hover:scale-[1.02]"
                    >
                      <div className="aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg overflow-hidden mb-4">
                        <div className="bg-gray-200 border-2 border-dashed rounded-lg w-full h-96 group-hover:opacity-90 transition-opacity" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 group-hover:text-black transition-colors">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">{product.gender}'s Suit</p>
                        <div className="mt-2 flex items-center justify-between">
                          <p className="text-lg font-semibold text-gray-900">
                            {formatPrice(product.price)}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">Sizes:</span>
                            <div className="flex gap-1">
                              {product.size.slice(0, 3).map(size => (
                                <span key={size} className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                                  {size}
                                </span>
                              ))}
                              {product.size.length > 3 && (
                                <span className="text-xs text-gray-500">+{product.size.length - 3}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No products found matching your filters.</p>
                  <button
                    onClick={() => {
                      setSelectedGender([]);
                      setSelectedSizes([]);
                      setSelectedColors([]);
                      setPriceRange([0, 25000]);
                    }}
                    className="mt-4 text-sm font-medium text-black hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filters Modal */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileFiltersOpen(false)} />
            <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-white p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterSidebar />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
        }
        
        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: black;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </>
  );
}