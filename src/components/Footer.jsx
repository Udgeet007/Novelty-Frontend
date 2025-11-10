import React from 'react';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'; // npm install lucide-react

const Footer = () => {
  const linkSections = [
    {
      title: 'Shop',
      links: ['New Arrivals', 'Men', 'Women', 'Accessories', 'Sale'],
    },
    {
      title: 'Support',
      links: ['Size Guide', 'Shipping Info', 'Returns', 'Contact Us', 'FAQs'],
    },
    {
      title: 'Company',
      links: ['About VOLTAS', 'Careers', 'Press', 'Sustainability', 'Store Locator'],
    },
  ];

  const socialLinks = [
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wider mb-2">
              Novelty
            </h1>
            <p className="text-sm text-gray-400 tracking-wide mb-6">
              Timeless. Bold. Unapologetic.
            </p>
            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              Premium streetwear crafted for those who define the trend, not follow it.
            </p>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                Stay Connected
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-900 text-white px-4 py-2 text-sm flex-1 outline-none border border-gray-800 focus:border-white transition"
                />
                <button className="bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-200 transition">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Link Sections */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {linkSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-sm uppercase tracking-wider text-white mb-5">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 text-sm hover:text-white transition duration-300 ease-in-out hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition flex items-center gap-1">
              <Mail className="w-3 h-3" />
              <span>hello@novelty.com</span>
            </a>
            <a href="#" className="hover:text-white transition flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>+91 555-123-4567</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-500 hover:text-white transition transform hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} VOLTAS. All rights reserved. | 
          <a href="#" className="hover:text-white mx-1">Privacy Policy</a> | 
          <a href="#" className="hover:text-white ml-1">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;