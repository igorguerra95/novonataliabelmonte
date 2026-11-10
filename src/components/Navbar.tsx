import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/clinicalData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Avaliação Neuropsicológica', href: '#avaliacao-neuro' },
    { label: 'Psicoterapia', href: '#psicoterapia' },
    { label: 'Sobre a Psicóloga', href: '#sobre' },
    { label: 'On-line e Presencial', href: '#espaco' },
    { label: 'Dúvidas Frequentes', href: '#faq' },
    { label: 'Contato', href: '#contato' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Topo Institucional de Credibilidade */}
      <div className="bg-[#2B1E24] text-[#FAF5E8] text-xs py-2 px-4 border-b border-[#D4AF37]/30 tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-[#FAF5E8]">
              Ed. Torre Vitta Office, sala 1506 (Marco, Belém) &bull; On-line para todo Brasil &bull; Adultos e Idosos
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-light text-[#D4AF37]">
            <span className="flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              {CONTACT_INFO.crp}
            </span>
            <span className="hidden md:inline">•</span>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="hover:underline flex items-center gap-1 text-[#FAF7F5]"
            >
              <Phone className="w-3 h-3 text-[#F472B6]" />
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Barra de Navegação Principal */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(43,30,36,0.06)] border-b border-[#F472B6]/15 py-3'
            : 'bg-[#FAF7F5]/95 backdrop-blur-sm border-b border-[#EADBCE]/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logotipo Editorial */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="group flex flex-col text-left focus:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#2B1E24] group-hover:text-[#9D174D] transition-colors flex items-center gap-1.5">
                Natália Belmonte
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#B38728] font-bold">
                Neuropsicologia &amp; Psicologia Clínica &bull; {CONTACT_INFO.crp}
              </span>
            </a>

            {/* Menu Desktop */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-1.5 text-[13px] font-medium text-[#4A3E45] hover:text-[#BE185D] transition-colors rounded-full hover:bg-[#FDF2F8]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Ação Primária Desktop */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] via-[#F472B6] to-[#D4AF37] hover:shadow-[0_8px_25px_rgba(244,114,182,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Entrar em contato</span>
              </button>
            </div>

            {/* Botão Menu Mobile */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-[#BE185D] cursor-pointer"
              >
                Contato
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#2B1E24] hover:bg-[#FDF2F8] focus:outline-none transition-colors cursor-pointer"
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Menu Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#FAF7F5] shadow-2xl p-6 flex flex-col justify-between border-l border-[#D4AF37]/30 z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EADBCE]">
                <div>
                  <span className="font-serif text-xl font-bold text-[#2B1E24]">Natália Belmonte</span>
                  <p className="text-[10px] text-[#B38728] font-bold uppercase tracking-widest">
                    {CONTACT_INFO.crp}
                  </p>
                  <p className="text-[10px] text-[#786C73]">
                    {CONTACT_INFO.approach}
                  </p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-[#4A3E45] hover:bg-[#FDF2F8] cursor-pointer"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-3 text-sm font-medium text-[#2B1E24] hover:bg-[#FDF2F8] hover:text-[#BE185D] rounded-xl transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-[#D4AF37] text-xs">→</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#EADBCE] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] via-[#F472B6] to-[#D4AF37] shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Entrar em contato</span>
              </button>

              <div className="text-center text-xs text-[#786C73]">
                <p className="font-medium text-[#2B1E24]">Ed. Torre Vitta Office, sala 1506</p>
                <p className="text-[11px] text-[#4A3E45]">{CONTACT_INFO.address}</p>
                <p className="mt-1 font-semibold text-[#B38728]">{CONTACT_INFO.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
