import Link from 'next/link';
import { Wine, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/images/logo2.png"
                alt="Vino Veritas Logo"
                width={32}
                height={32}
                className="h-12 w-auto mr-2"
              />
              <span className="font-serif text-2xl">Vino Veritas</span>
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
            <h3 className="font-serif text-xl mb-6 text-gold">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold mr-3 mt-1" />
                <span className="text-gray-300">contato@vinoveritas.com.br</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gold mr-3 mt-1" />
                <span className="text-gray-300">(21) 97709-8080</span>
              </li>
              <li className="flex items-start">
                <Link target="_blank"
                  rel="noopener noreferrer" href={'https://www.google.com/maps/place/Av.+das+Am%C3%A9ricas,+4200+-+Bloco+7+-+Sala+112A+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ,+22640-102/@-22.9993704,-43.3534116,17z/data=!3m1!4b1!4m6!3m5!1s0x9bda3f544559d9:0x6e589e796a3fb93b!8m2!3d-22.9993704!4d-43.3534116!16s%2Fg%2F11pk9xstnn?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoASAFQAw%3D%3D'}>
                  <MapPin className="h-5 w-5 text-gold mr-3 mt-1" />
                  <span className="text-gray-300">
                    Av. das Américas, 4200 - Bloco 7 - Sala 112A<br />
                    Barra da Tijuca, Rio de Janeiro - RJ, 22640-907
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Vino Veritas. Todos os direitos reservados.
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