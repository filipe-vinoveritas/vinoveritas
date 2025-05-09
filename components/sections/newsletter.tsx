"use client"

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Inscrito com o email:', email);
    setEmail('');
    // Show success message or notification
  };

  return (
    <section 
      ref={ref} 
      className="section-padding bg-burgundy text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center bg-white/10 rounded-full p-3 mb-6">
            <Mail className="h-6 w-6 text-gold" />
          </div>
          
          <h2 className={cn(
            "text-3xl md:text-4xl font-serif mb-4 transition-all duration-1000",
            inView ? "opacity-100" : "opacity-0 translate-y-6"
          )}>
            Clube do Vinho
          </h2>
          
          <p className={cn(
            "text-lg text-gray-200 mb-8 transition-all duration-1000 delay-200",
            inView ? "opacity-100" : "opacity-0"
          )}>
            Inscreva-se para receber ofertas exclusivas, recomendações de vinhos e convites para eventos privados de degustação. Novos membros recebem 15% de desconto na primeira compra.
          </p>
          
          <form 
            onSubmit={handleSubmit}
            className={cn(
              "transition-all duration-1000 delay-300",
              inView ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="Seu endereço de email"
                className="flex-grow py-3 px-4 rounded-md border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gold"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="btn-gold whitespace-nowrap"
              >
                Inscrever-se Agora
              </button>
            </div>
            <p className="text-sm text-gray-300">
              Ao se inscrever, você concorda com nossa Política de Privacidade e consente em receber nossos emails de marketing. Você pode cancelar a inscrição a qualquer momento.
            </p>
          </form>
          
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 transition-all duration-1000 delay-500",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            {[
              {
                title: "Curadorias Mensais",
                description: "Receba vinhos selecionados por especialistas entregues em sua porta todo mês."
              },
              {
                title: "Descontos para Membros",
                description: "Aproveite preços exclusivos em todas as compras e coleções especiais."
              },
              {
                title: "Eventos Privados",
                description: "Acesso a degustações exclusivas e jantares com produtores de vinho."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="font-serif text-lg mb-2 text-gold">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;