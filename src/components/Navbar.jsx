import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Heart, User, ChevronDown } from 'lucide-react'; 
import logo from '../assets/Novelty.webp';
import { Link } from 'react-router-dom';

const NavLinks = [
  { 
    name: 'Categories', 
    href: '/categories',
    dropdown: null
  },
  { 
    name: 'Mens', 
    href: '/mens',
    dropdown: [
      { name: 'Shirts', href: '/mens/shirts' },
      { name: 'Pants', href: '/mens/pants' },
      { name: 'Suits', href: '/mens/suits' },
      { name: 'Shoes', href: '/mens/shoes' },
      { name: 'Accessories', href: '/mens/accessories' },
    ]
  },
  { 
    name: 'Womens', 
    href: '/womans',
    dropdown: [
      { name: 'Dresses', href: '/womens/dresses' },
      { name: 'Tops', href: '/womens/tops' },
      { name: 'Bottoms', href: '/womens/bottoms' },
      { name: 'Shoes', href: '/womens/shoes' },
      { name: 'Accessories', href: '/womens/accessories' },
    ]
  },
  { 
    name: 'Kids', 
    href: '/kids',
    dropdown: [
      { name: 'Boys', href: '/kids/boys' },
      { name: 'Girls', href: '/kids/girls' },
      { name: 'Infants', href: '/kids/infants' },
      { name: 'Shoes', href: '/kids/shoes' },
      { name: 'Toys', href: '/kids/toys' },
    ]
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="bg-[#F8ECD7] shadow-md top-0 z-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
          <Link to="/" className="text-gray-900 text-2xl font-serif tracking-widest uppercase cursor-pointer">
            <img src={logo} alt="Brand Logo" className="h-20 w-[100%] inline-block mr-2 mt-5 rounded-2xl cursor-pointer"/>
          </Link>
        </div>
        
        <div className="flex items-center justify-between h-30 relative">
          {/* 1. Left Nav Links (Hidden on Mobile, Below Logo on Desktop) */}
          <div className="hidden lg:flex flex-1 justify-start">
            <div className="flex space-x-8">
              {NavLinks.map((link, index) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wider uppercase transition duration-150 flex items-center"
                  >
                    {link.name}
                    {link.dropdown 
                    && (
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    )
                    }
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && activeDropdown === index && (
                    <div className="absolute left-0 top-full mt-1 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                      {link.dropdown.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.href}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-[#F8ECD7] hover:text-gray-900 transition-colors duration-150 text-sm"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3. Right Icons & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <Link to="/appointment" className="text-gray-900 hover:text-gray-700 p-2">
              <button className='bg-[#e04e1c] py-2 px-5 rounded-md text-white'>Appointment</button>
            </Link>
            <Link to="/profile" className="text-gray-900 hover:text-gray-700 p-2">
              <User className="h-6 w-6" />
            </Link>
            
            <Link to="/wishlist" className="text-amber-700 hover:text-amber-900 p-2">
              <Heart className="h-6 w-6" />
            </Link>
            
            <Link to="/cart" className="text-gray-900 hover:text-gray-700 p-2 relative">
              <ShoppingCart className='h-6 w-6'/>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-gray-900 text-white text-xs font-bold -mt-1 -mr-1">
                2
              </span>
            </Link>

            {/* Mobile Menu Button (Hamburger) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="lg:hidden p-2 text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (Always hidden on large screens) */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden border-t border-gray-100`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NavLinks.map((link) => (
            <div key={link.name}>
              <Link
                to={link.href}
                className="text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
              {/* Mobile Dropdown Items */}
              {link.dropdown && (
                <div className="pl-4 space-y-1">
                  {link.dropdown.map((dropItem) => (
                    <Link
                      key={dropItem.name}
                      to={dropItem.href}
                      className="text-gray-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-sm"
                    >
                      {dropItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




// import React, { useState } from 'react';
// import { Menu, X, ShoppingCart, Heart, User } from 'lucide-react'; 
// import logo from '../assets/Novelty.webp';
// import { Link } from 'react-router-dom';

// const NavLinks = [
//   { name: 'Categories', href: '/categories' },
//   { name: 'Mens', href: '/mens' },
//   { name: 'Womens', href: '/womans' },
//   { name: 'Kids', href: '/kids' },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-[#F8ECD7] shadow-md  top-0 z-50">
//       <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
//          <div className="absolute left-1/2 transform -translate-x-1/2">
//             <Link to="/" className="text-gray-900 text-2xl font-serif tracking-widest uppercase ">
//               <img src={logo} alt="Brand Logo" className="h-20 w-[100%] inline-block mr-2 mt-5 rounded-2xl"/>
//             </Link>
//           </div>
//         <div className="flex items-center justify-between h-30 relative">

//           {/* 1. Left Nav Links (Hidden on Mobile, Below Logo on Desktop) */}
//           <div className="hidden lg:flex flex-1 justify-start">
//             <div className="flex space-x-8">
//               {NavLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium tracking-wider uppercase transition duration-150"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </div>
          
//           {/* 2. Center Brand Logo */}
         

//           {/* 3. Right Icons & Mobile Menu Button */}
//           <div className="flex items-center space-x-2">
//             {/* <div>
//               <input className='w-40 h-8 border-r-4 bg-white outline-none'/>
//             </div> */}
//             {/* Icons: User, Heart, Cart */}
//               <Link to="/appointment" className="text-gray-900 hover:text-gray-700 p-2">
//              <button className='bg-[#e04e1c] py-2 px-5 rounded-md text-white'>Appointment</button>
//             </Link>
//             <Link to="/profile" className="text-gray-900 hover:text-gray-700 p-2">
//               <User className="h-6 w-6" />
//             </Link>
            
//             <Link to="/wishlist" className="text-amber-700 hover:text-amber-900 p-2">
//               <Heart className="h-6 w-6" />
//             </Link>
            
//             <Link to="/cart" className="text-gray-900 hover:text-gray-700 p-2 relative">
//               {/* <ShoppingBag className="h-6 w-6" /> */}
//               <ShoppingCart className='h-6 w-6'/>
//               {/* Optional: Cart Item Count Badge */}
//               <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-gray-900 text-white text-xs font-bold -mt-1 -mr-1">
//                 2
//               </span>
//             </Link>

//             {/* Mobile Menu Button (Hamburger) */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="lg:hidden p-2 text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Content (Always hidden on large screens) */}
//       <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden border-t border-gray-100`} id="mobile-menu">
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           {NavLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.href}
//               className="text-gray-900 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;