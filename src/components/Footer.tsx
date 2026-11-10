import React from 'react';
import { ShieldCheck, Phone, MapPin, Building2, Heart, ArrowUp, Linkedin, Instagram, BookOpen, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/clinicalData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#21161B] text-[#FAF5E8] border-t border-[#D4AF37]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Superior */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Apresentação e Identidade (5 colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Natália Belmonte
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
              Neuropsicologia &amp; Psicologia Clínica &bull; {CONTACT_INFO.crp}
            </p>
            <p className="text-xs sm:text-sm text-[#FAF5E8]/70 leading-relaxed font-light max-w-sm">
              {CONTACT_INFO.education}. Realizo psicoterapia (on-line e presencial) e avaliação neuropsicológica com ética, cuidado e respeito à singularidade de cada pessoa.
            </p>
            <div className="pt-2 flex flex-col gap-1 text-xs text-[#D4AF37]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                Psicoterapia: {CONTACT_INFO.regulations.psychotherapy}
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                Avaliação Neuropsicológica: {CONTACT_INFO.regulations.neuropsychology}
              </span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Navegação
            </p>
            <ul className="space-y-2 text-xs text-[#FAF5E8]/80 font-light">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#avaliacao-neuro" className="hover:text-white transition-colors">
                  Avaliação Neuropsicológica
                </a>
              </li>
              <li>
                <a href="#psicoterapia" className="hover:text-white transition-colors">
                  Psicoterapia Psicanalítica
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre Natália Belmonte
                </a>
              </li>
              <li>
                <a href="#espaco" className="hover:text-white transition-colors">
                  On-line &amp; Ed. Torre Vitta Office
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Contato &amp; Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Localização e Atendimento (4 colunas) */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Consultório &amp; Atendimento
            </p>
            <div className="space-y-3 text-xs text-[#FAF5E8]/80 font-light">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#F472B6] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="hover:underline text-white font-medium"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#F472B6] shrink-0 mt-0.5" />
                <span>Público-Alvo: {CONTACT_INFO.targetAudience}</span>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={CONTACT_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0077B5] flex items-center justify-center transition-colors text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E1306C] flex items-center justify-center transition-colors text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#faq"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-colors text-white"
                aria-label="Blog"
              >
                <BookOpen className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <span>Voltar ao topo</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Faixa Ética e Emergências */}
        <div className="py-6 border-b border-white/10 text-xs text-[#FAF5E8]/60 leading-relaxed space-y-2">
          <p className="text-center sm:text-left">
            <strong>Aviso Legal de Emergência:</strong> A psicoterapia e os atendimentos online não constituem serviço de pronto-socorro ou emergência psiquiátrica. Em situações de crise aguda com risco à vida, procure imediatamente o pronto-atendimento hospitalar mais próximo, acione o <strong>SAMU (192)</strong> ou ligue para o <strong>CVV (188)</strong>.
          </p>
          <p className="text-center sm:text-left">
            Atendimento pautado pelo sigilo profissional e por cuidados com a privacidade, respeitados os limites éticos e legais (Código de Ética do Psicólogo e Resoluções CFP nº 11/2018, nº 13/2022 e nº 31/2022).
          </p>
        </div>

        {/* Direitos Autorais */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF5E8]/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Natália Belmonte. Todos os direitos reservados. {CONTACT_INFO.crp}.
          </p>
          <p className="flex items-center gap-1">
            <span>Ética, confidencialidade, atualização constante e humanização</span>
            <Heart className="w-3.5 h-3.5 text-[#F472B6]" />
          </p>
        </div>

      </div>
    </footer>
  );
};
