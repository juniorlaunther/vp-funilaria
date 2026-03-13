/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { 
  Phone, 
  Instagram, 
  MapPin, 
  Clock, 
  Camera, 
  ShieldCheck, 
  Star, 
  ChevronRight, 
  Menu, 
  X,
  CheckCircle2,
  Zap,
  Award
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PRIMARY_COLOR = '#e70c08';
const WHATSAPP_LINK = 'https://wa.me/5511995117080?text=Olá! Gostaria de um orçamento para o meu veículo.';
const INSTAGRAM_LINK = 'https://www.instagram.com/vpexpress_funilaria';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Hero Entrance
    const ctx = gsap.context(() => {
      gsap.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
      });

      // Scroll Reveal for sections
      const sections = document.querySelectorAll('.scroll-reveal');
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      });

      // Header background change on scroll
      ScrollTrigger.create({
        start: 'top -50',
        onUpdate: (self) => {
          setIsScrolled(self.scroll() > 50);
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-red-100 selection:text-red-600 overflow-x-hidden">
      
      {/* HEADER */}
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://lh3.googleusercontent.com/d/1teQXAEIvk9Xo435U92wD-3EPNa88BkU1" 
              alt="VP Funilaria Express Logo" 
              className={`h-12 w-auto object-contain transition-all duration-300 ${
                !isScrolled ? 'brightness-0 invert' : ''
              }`}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${
            isScrolled ? 'text-slate-900' : 'text-white'
          }`}>
            <a href="#servicos" className="hover:text-[#e70c08] transition-colors">Serviços</a>
            <a href="#diferenciais" className="hover:text-[#e70c08] transition-colors">Diferenciais</a>
            <a href="#sobre" className="hover:text-[#e70c08] transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-[#e70c08] transition-colors">Contato</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#e70c08] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition-all shadow-lg shadow-red-500/20 active:scale-95"
            >
              <Phone size={16} />
              Orçamento Grátis
            </a>
            <button 
              className={`md:hidden p-2 transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Serviços</a>
            <a href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Diferenciais</a>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Sobre</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Contato</a>
            <a href={WHATSAPP_LINK} className="bg-[#e70c08] text-white p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2">
              <Phone size={20} /> WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1vUq8axcqLJaPrT81zt2cHDx_V6d9G2uS" 
            alt="VP Funilaria Express - Oficina"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl hero-content">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} /> A MELHOR FUNILARIA DO SACOMÃ
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Seu carro novo de novo, <span className="text-[#e70c08]">sem burocracia.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Especialistas em funilaria e pintura premium. Orçamento rápido por foto e entrega ágil para você não ficar a pé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={WHATSAPP_LINK}
                className="bg-[#e70c08] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-red-700 transition-all hover:-translate-y-1 shadow-xl shadow-red-600/30"
              >
                <Camera size={20} /> Orçamento por Foto
              </a>
              <a 
                href="#servicos"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center scroll-reveal">
              <div className="text-3xl sm:text-4xl font-black text-[#e70c08] mb-1">30min</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Orçamento por Foto</div>
            </div>
            <div className="text-center scroll-reveal">
              <div className="text-3xl sm:text-4xl font-black text-[#e70c08] mb-1">R$399</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Pintura a partir de</div>
            </div>
            <div className="text-center scroll-reveal">
              <div className="text-3xl sm:text-4xl font-black text-[#e70c08] mb-1">100%</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Garantia de Cor</div>
            </div>
            <div className="text-center scroll-reveal">
              <div className="text-3xl sm:text-4xl font-black text-[#e70c08] mb-1">+10k</div>
              <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">Carros Atendidos</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="servicos" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-red-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Soluções <span className="text-[#e70c08]">Completas</span></h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Equipamentos de última geração e profissionais altamente qualificados para cuidar do seu patrimônio.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Funilaria Express",
                desc: "Reparos rápidos de amassados e colisões leves com precisão milimétrica.",
                icon: <Zap className="text-[#e70c08]" size={32} />,
                img: "https://lh3.googleusercontent.com/d/1axtn0CC2IsoxyYcIsv-FK4m4YyZQU8M3"
              },
              {
                title: "Pintura Premium",
                desc: "Laboratório de tintas próprio para garantir a fidelidade total da cor original.",
                icon: <Award className="text-[#e70c08]" size={32} />,
                img: "https://lh3.googleusercontent.com/d/1ibz6ZBVEFTJkJoGOPE5t2aZWnmdzZM2k"
              },
              {
                title: "Polimento Cristalizado",
                desc: "Proteção e brilho intenso para a pintura do seu veículo por muito mais tempo.",
                icon: <Star className="text-[#e70c08]" size={32} />,
                img: "https://lh3.googleusercontent.com/d/1NMN81cUgz5dFt1Y7NNT51Kj2JbKTezVw"
              }
            ].map((service, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 scroll-reveal">
                <div className="h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <a href={WHATSAPP_LINK} className="text-[#e70c08] font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                    Saiba mais <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENTO GRID DIFFERENTIALS */}
      <section id="diferenciais" className="py-12 md:py-16 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Por que escolher a <span className="text-[#e70c08]">VP Express?</span></h2>
            <p className="text-slate-400">Inovação e agilidade que o mercado tradicional não oferece.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card */}
            <div className="md:col-span-2 bg-slate-800/50 border border-slate-700 p-8 rounded-3xl flex flex-col justify-between scroll-reveal">
              <div>
                <Camera className="text-[#e70c08] mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">Orçamento Digital em 30 Minutos</h3>
                <p className="text-slate-400 max-w-md">Não perca tempo se deslocando. Envie fotos pelo WhatsApp e receba seu orçamento detalhado em tempo recorde.</p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-700 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-slate-400 font-medium">+50 orçamentos hoje</span>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="bg-[#e70c08] p-8 rounded-3xl flex flex-col justify-between scroll-reveal">
              <Zap size={40} className="mb-6" />
              <div>
                <h3 className="text-2xl font-bold mb-2">Pintura Express</h3>
                <p className="text-white/80 text-sm">Tecnologia de secagem rápida para reparos no mesmo dia.</p>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl flex flex-col justify-between scroll-reveal">
              <ShieldCheck className="text-[#e70c08] mb-6" size={40} />
              <div>
                <h3 className="text-xl font-bold mb-2">Garantia Premium</h3>
                <p className="text-slate-400 text-sm">Garantia total em todos os serviços de funilaria e pintura.</p>
              </div>
            </div>

            {/* Medium Card */}
            <div className="md:col-span-2 bg-slate-800/50 border border-slate-700 p-8 rounded-3xl flex flex-col md:flex-row gap-8 items-center scroll-reveal">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Localização Estratégica</h3>
                <p className="text-slate-400 mb-6">Estamos no coração do Sacomã, com fácil acesso e segurança para seu veículo.</p>
                <div className="flex items-center gap-2 text-[#e70c08] font-bold">
                  <MapPin size={18} /> Rua Taquarichim 168, São Paulo
                </div>
              </div>
              <div className="hidden md:flex md:w-1/3 h-40 bg-slate-800 rounded-2xl items-center justify-center overflow-hidden relative">
                <MapPin size={80} className="text-[#e70c08] opacity-10 blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-red-600/5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="sobre" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 scroll-reveal">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-50 rounded-full z-0"></div>
                <img 
                  src="https://lh3.googleusercontent.com/d/1SuJxAaHANdliEYRJZ86DvCaYcRyo9-6_" 
                  alt="Nossa Oficina VP Express" 
                  className="relative z-10 rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 hidden sm:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-[#e70c08]">
                      <Award size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-lg leading-none">Referência</div>
                      <div className="text-slate-500 text-sm">no Sacomã</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 scroll-reveal">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">Tradição e <span className="text-[#e70c08]">Tecnologia</span> lado a lado.</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A VP Funilaria Express nasceu com o propósito de revolucionar o mercado de reparação automotiva no Sacomã. Entendemos que seu carro é essencial para sua rotina, por isso focamos em agilidade sem abrir mão da perfeição técnica.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Utilizamos os melhores materiais do mercado e processos otimizados que nos permitem oferecer preços competitivos e prazos que as oficinas tradicionais não conseguem cumprir.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Equipe técnica certificada",
                  "Laboratório de cores computadorizado",
                  "Cabine de pintura profissional",
                  "Atendimento personalizado via WhatsApp"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-slate-700">
                    <CheckCircle2 className="text-[#e70c08]" size={20} /> {item}
                  </li>
                ))}
              </ul>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-[#e70c08] transition-colors">
                <Instagram size={20} /> Siga-nos no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-12 md:py-16 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">O que dizem nossos <span className="text-[#e70c08]">Clientes</span></h2>
            <div className="flex justify-center gap-1 text-yellow-400">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Santos",
                text: "Fiz o orçamento pelo WhatsApp e em 30 minutos já sabia o valor. O serviço ficou impecável, cor idêntica à original.",
                car: "VW Golf"
              },
              {
                name: "Juliana Lima",
                text: "Melhor funilaria do Sacomã! Preço justo e entrega no prazo. Recomendo muito o polimento deles também.",
                car: "Hyundai HB20"
              },
              {
                name: "Marcos Oliveira",
                text: "Atendimento nota 10. Pintaram o para-choque do meu carro e ficou perfeito. O preço de R$399 é real e a qualidade é premium.",
                car: "Toyota Corolla"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 scroll-reveal">
                <p className="text-slate-600 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">{testimonial.car}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contato" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-[#e70c08] rounded-[2rem] p-8 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-red-600/40 scroll-reveal">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">Pronto para deixar seu carro <br className="hidden sm:block" /> como novo?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Não deixe o amassado ou o risco desvalorizar seu veículo. Fale agora com nossa equipe e tenha o melhor custo-benefício de São Paulo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={WHATSAPP_LINK}
                className="bg-white text-[#e70c08] px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                <Phone size={24} /> Chamar no WhatsApp
              </a>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-white/70">
              <div className="flex items-center gap-2">
                <Clock size={16} /> Seg a Sex: 08h às 18h
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> Sacomã, São Paulo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 md:py-12 border-t border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <img 
                src="https://lh3.googleusercontent.com/d/1teQXAEIvk9Xo435U92wD-3EPNa88BkU1" 
                alt="VP Funilaria Express Logo" 
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <a href="#servicos" className="hover:text-[#e70c08] transition-colors">Serviços</a>
              <a href="#diferenciais" className="hover:text-[#e70c08] transition-colors">Diferenciais</a>
              <a href="#sobre" className="hover:text-[#e70c08] transition-colors">Sobre</a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#e70c08] transition-colors">Instagram</a>
            </div>
            <div className="flex gap-4">
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#e70c08] hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#e70c08] hover:text-white transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium pt-8 border-t border-slate-50">
            <div>© 2026 VP Funilaria Express. Todos os direitos reservados.</div>
            <div className="flex items-center gap-4">
              <span>Rua Taquarichim 168, Sacomã - SP</span>
              <span className="hidden sm:block">|</span>
              <span>CNPJ: 00.000.000/0001-00</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
