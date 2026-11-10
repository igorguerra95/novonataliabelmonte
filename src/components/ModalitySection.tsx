import React from 'react';
import { 
  MapPin, 
  Video, 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck, 
  Building2, 
  Calendar,
  Lock,
  Globe2,
  Sparkles
} from 'lucide-react';
import { CONTACT_INFO, FORMAT_COMPARISON } from '../data/clinicalData';
import presencialOfficeImg from '../assets/images/regenerated_image_1794311942145.jpg';
import onlineTherapyImg from '../assets/images/regenerated_image_1794312211169.webp';

interface ModalityProps {
  onOpenBooking: () => void;
}

export const ModalitySection: React.FC<ModalityProps> = ({ onOpenBooking }) => {
  return (
    <section id="espaco" className="py-20 lg:py-32 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#D4AF37]/40 text-[#8C6D1F] mb-4 shadow-xs">
            7. Psicoterapia: Formatos de Atendimento
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#2B1E24] tracking-tight mb-4">
            Como Decidir o Formato de Psicoterapia?
          </h2>
          <p className="text-base text-[#4A3E45] font-light leading-relaxed">
            Tanto a modalidade on-line quanto a presencial oferecem contrato terapêutico claro, transparência e acolhimento rigoroso com base no Código de Ética do CFP.
          </p>
        </div>

        {/* Tabela / Grid Comparativo On-Line vs Presencial (Item 7.a do PDF) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10">
          
          {/* Coluna 1: On-Line */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADBCE] hover:border-[#F472B6]/50 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDF2F8] text-[#BE185D] border border-[#F472B6]/30 flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5" />
                  {FORMAT_COMPARISON.online.title}
                </span>
                <span className="text-xs text-[#786C73]">
                  {FORMAT_COMPARISON.online.badge}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#2B1E24] mb-4">
                Atendimento Psicológico On-Line
              </h3>

              <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 relative bg-[#FAF7F5]">
                <img
                  src={onlineTherapyImg}
                  alt="Psicoterapia on-line com Natália Belmonte"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-[#F472B6]" />
                  Acesso seguro para todo o território nacional
                </span>
              </div>

              <ul className="space-y-3.5 mb-8">
                {FORMAT_COMPARISON.online.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A3E45]">
                    <CheckCircle2 className="w-4 h-4 text-[#BE185D] shrink-0 mt-0.5" />
                    <span className="font-medium">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] to-[#F472B6] hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Video className="w-4 h-4" />
              <span>Agendar Sessão On-line</span>
            </button>
          </div>

          {/* Coluna 2: Presencial */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADBCE] hover:border-[#D4AF37]/60 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF5E8] text-[#8C6D1F] border border-[#D4AF37]/35 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  {FORMAT_COMPARISON.presencial.title}
                </span>
                <span className="text-xs text-[#786C73]">
                  Bairro Marco &bull; Belém - PA
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#2B1E24] mb-4">
                Consultório no Ed. Torre Vitta Office
              </h3>

              <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 relative bg-[#FAF7F5]">
                <img
                  src={presencialOfficeImg}
                  alt="Consultório Ed. Torre Vitta Office Natália Belmonte Belém"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {CONTACT_INFO.address}
                </span>
              </div>

              <ul className="space-y-3.5 mb-8">
                {FORMAT_COMPARISON.presencial.points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A3E45]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="font-medium">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider text-[#2B1E24] bg-[#FAF5E8] hover:bg-[#D4AF37] hover:text-white border border-[#D4AF37]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta Presencial</span>
            </button>
          </div>

        </div>

        {/* Faixa Ética Comum do PDF */}
        <div className="bg-white rounded-2xl p-6 border border-[#D4AF37]/35 shadow-xs text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          <ShieldCheck className="w-6 h-6 text-[#D4AF37] shrink-0" />
          <p className="text-xs sm:text-sm text-[#2B1E24] font-medium leading-relaxed">
            &ldquo;{FORMAT_COMPARISON.commonPrinciple}&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
};
