"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, ShoppingBag, Search, Wine } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { AuthDialog } from '@/app/auth/signin/auth-dialog';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled 
            ? 'bg-white bg-opacity-95 shadow-md py-3' 
          // : 'bg-[#faf8f5] bg-opacity-90 shadow-sm py-6'
          : 'bg-white bg-opacity-95 shadow-sm py-6'
        )}
      >
        <div className="container-custom mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
            <Image
                src="/images/logo.png"
                alt="Vino Veritas Logo"
                width={32}
                height={32}
                className="h-12 w-auto mr-2"
              />
              {/* <Wine className={cn('h-8 w-8 mr-2', scrolled ? 'text-burgundy' : 'text-gold')} /> */}
              <span className=
                'font-serif text-2xl tracking-wide text-burgundy'
                // scrolled ? 'text-burgundy' : 'text-white'
              >
                Vino Veritas
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                ['Coleções', 'collections'],
                ['Regiões', 'regions'],
                ['Safras', 'vintages'],
                ['Exclusivos', 'exclusives'],
                ['Vinhos', 'wines']
              ].map(([label, path]) => (
                <Link 
                  key={path} 
                  href={`/${path}`}
                  className={cn(
                    'font-sans text-sm uppercase tracking-wide text-charcoal transition-colors duration-300 hover:text-gold',
                    // scrolled ? 'text-charcoal' : 'text-white'
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <button className={cn(
                'hover:text-gold transition-colors duration-300 text-charcoal',
                // scrolled ? 'text-charcoal' : 'text-white'
              )}>
                <Search className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setIsAuthOpen(true)}
                className={cn(
                  'hover:text-gold transition-colors duration-300 text-charcoal',
                  // scrolled ? 'text-charcoal' : 'text-white'
                )}
              >
                <User className="h-5 w-5" />
              </button>
              <button className={cn(
                'hover:text-gold transition-colors duration-300 relative text-charcoal',
                // scrolled ? 'text-charcoal' : 'text-white'
              )}>
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-burgundy text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu} 
              className={cn(
                'md:hidden focus:outline-none text-charcoal',
                // scrolled ? 'text-charcoal' : 'text-white'
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute w-full left-0 top-full shadow-lg animate-slide-down">
            <div className="container-custom py-6 flex flex-col">
              <nav className="flex flex-col space-y-4 mb-6">
                {[
                  ['Coleções', 'collections'],
                  ['Regiões', 'regions'],
                  ['Safras', 'vintages'],
                  ['Exclusivos', 'exclusives'],
                  ['Vinhos', 'vinhos']
                ].map(([label, path]) => (
                  <Link 
                    key={path} 
                    href={`/${path}`}
                    className="font-sans text-charcoal text-lg hover:text-burgundy transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                <button className="flex items-center text-charcoal hover:text-burgundy transition-colors duration-300">
                  <Search className="h-5 w-5 mr-2" />
                  <span>Buscar</span>
                </button>
                <button 
                  onClick={() => {
                    setIsAuthOpen(true);
                    setIsOpen(false);
                  }}
                  className="flex items-center text-charcoal hover:text-burgundy transition-colors duration-300"
                >
                  <User className="h-5 w-5 mr-2" />
                  <span>Conta</span>
                </button>
                <button className="flex items-center text-charcoal hover:text-burgundy transition-colors duration-300">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  <span>Carrinho (0)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <AuthDialog isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Header;