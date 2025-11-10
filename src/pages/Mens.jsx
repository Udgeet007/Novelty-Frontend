import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const Mens = () => {
  const [cart, setCart] = useState([]);

  const suits = [
    { id: 1, name: "Classic Navy Suit", price: 5999, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop" },
    { id: 2, name: "Charcoal Grey Suit", price: 6449, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop" },
    { id: 3, name: "Black Tuxedo", price: 7799, image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=500&fit=crop" },
    { id: 4, name: "Light Grey Suit", price: 5579, image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=500&fit=crop" },
    { id: 5, name: "Royal Blue Suit", price: 8689, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop" },
    { id: 6, name: "Tan Brown Suit", price: 9629, image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400&h=500&fit=crop" },
    { id: 7, name: "Pinstripe Suit", price: 7729, image: "https://images.unsplash.com/photo-1598808503491-ff433c181e42?w=400&h=500&fit=crop" },
    { id: 8, name: "Burgundy Suit", price: 8699, image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=500&fit=crop" },
    { id: 9, name: "Dark Green Suit", price: 7659, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop" },
    { id: 10, name: "Midnight Blue Suit", price: 9719, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop" },
    { id: 11, name: "Checkered Suit", price: 9679, image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&h=500&fit=crop" },
    { id: 12, name: "Slate Grey Suit", price: 9639, image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=500&fit=crop" },
    { id: 13, name: "Pearl White Suit", price: 8749, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop" },
    { id: 14, name: "Beige Linen Suit", price: 9599, image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400&h=500&fit=crop" },
    { id: 15, name: "Olive Suit", price: 6699, image: "https://images.unsplash.com/photo-1598808503491-ff433c181e42?w=400&h=500&fit=crop" },
    { id: 16, name: "Double-Breasted Suit", price: 7889, image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=500&fit=crop" }
  ];

  const addToCart = (suit) => {
    setCart([...cart, suit]);
    alert(`${suit.name} added to cart!`);
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mx-auto">Men's Suit Collection</h1>
          <div className="relative">
            {/* <ShoppingCart className="w-6 h-6 text-gray-700" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )} */}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {suits.map((suit) => (
            <div key={suit.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative pb-[125%] bg-gray-200">
                <img
                  src={suit.image}
                  alt={suit.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{suit.name}</h3>
                <p className="text-lg font-bold text-gray-900 mb-4">Rs{suit.price}</p>
                <button
                  onClick={() => addToCart(suit)}
                  className="w-full bg-[#E95827] hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-start gap-2"
                >
                  {/* <ShoppingCart className="w-4 h-4" /> */}
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Mens;
