import Link from 'next/link';
import { Wine, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-6">
              <Wine className="h-8 w-8 text-gold mr-2" />
              <span className="font-serif text-2xl">Château Reserve</span>
            </div>
            <p className="font-sans text-gray-300 mb-6">
              Purveyors of exceptional wines from the world's most prestigious vineyards since 1897.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-gold">Shop</h3>
            <ul className="space-y-4">
              {['Red Wines', 'White Wines', 'Rosé', 'Champagne', 'Sparkling', 'Wine Gifts'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-gold">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Our Story', 'Vineyards', 'Sustainability', 'Private Events', 'Careers'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-300 hover:text-gold transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-gold">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold mr-3 mt-1" />
                <span className="text-gray-300">contact@chateaureserve.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gold mr-3 mt-1" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 mt-1" />
                <span className="text-gray-300">
                  1234 Vineyard Lane<br />
                  Napa Valley, CA 94558
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Château Reserve. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 text-sm hover:text-gold transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-gold transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-gold transition-colors duration-300">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;