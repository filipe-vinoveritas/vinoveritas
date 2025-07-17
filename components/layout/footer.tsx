import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

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
              A Vino Veritas é uma loja tradicional e honesta, com respeito aos momento especiais que a jornada do vinho acompanha e proporciona.
            </p>
            <div className="flex space-x-4">
              <Link target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/vinoveritasbr" className="text-[#0866FF] hover:text-gold transition-colors duration-300">
                <FiFacebook className="h-5 w-5" />
              </Link>
              <Link target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/vinoveritasbr" className="text-[#FF0069] hover:text-gold transition-colors duration-300">
                <FiInstagram className="h-5 w-5" />
              </Link>
              <Link target='_blank' rel='noopener noreferrer' href="https://www.youtube.com/@vinoveritasbr" className="text-[#FF0000] hover:text-gold transition-colors duration-300">
                <FiYoutube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Payments Column */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-gold">Formas de pagamento</h3>
            <div className="flex flex-wrap gap-1">
              {['american', 'diners', 'elo', 'hipercard', 'master', 'visa', 'pix', 'boleto', 'hiper', 'bb', 'bradesco'].map((item) => (
                <div key={item}>
                  <Image
                    src={`/images/${item.toLowerCase().replace(/\s+/g, '-')}.png`}
                    alt={item}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain mr-2"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-gold">Institucional</h3>
            <ul className="space-y-4">
              {['Notícias', 'Fale Conosco'].map((item) => (
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
            <h3 className="font-serif text-xl my-6 text-gold">Selos de Segurança</h3>
            <Link target='_blank' rel='noopener noreferrer' href="https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fwww.vinoveritas.com.br">
              <Image
                src="/images/google.png"
                alt="selo lojaprotegida"
                width={150}
                height={50}
                className="h-10 w-auto bg-white rounded-sm p-1 mb-3"
              />
            </Link>
            <Link target='_blank' rel='noopener noreferrer' href="https://www.lojaprotegida.com.br/1218868">
              <Image
                src="/images/selo_lojaprotegida.png"
                alt="selo lojaprotegida"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
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
              Política de Privacidade
            </Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-gold transition-colors duration-300">
              Sobre nós
            </Link>
            <Link href="#" className="text-gray-400 text-sm hover:text-gold transition-colors duration-300">
              Trocas e Devoluções
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;