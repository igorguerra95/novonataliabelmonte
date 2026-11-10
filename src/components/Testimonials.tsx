import React from 'react';
import { Star, Quote, ShieldCheck, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/clinicalData';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-[#F6F1EC]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#D4AF37]/30 text-[#8C6D1F] mb-4 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-[#BE185D]" />
            <span>Vozes de Quem Vivenciou o Processo</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#2B1E24] tracking-tight mb-4">
            Histórias de Transformação e Reconstrução
          </h2>
          <p className="text-base text-[#4A3E45] font-light leading-relaxed">
            Em conformidade estrita com o Código de Ética Profissional do Psicólogo (CFP), as identidades são protegidas por iniciais, preservando a confidencialidade integral das histórias compartilhadas voluntariamente.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item: Testimonial) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EADBCE] hover:border-[#D4AF37]/60 shadow-[0_4px_25px_rgba(43,30,36,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Topo do Depoimento */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#786C73] bg-[#FAF5E8] px-2.5 py-1 rounded-full border border-[#D4AF37]/20">
                    {item.modality}
                  </span>
                </div>

                {/* Frase de Destaque */}
                <p className="font-serif text-xl sm:text-2xl font-semibold text-[#2B1E24] mb-4 leading-snug group-hover:text-[#BE185D] transition-colors">
                  &ldquo;{item.highlight}&rdquo;
                </p>

                {/* Depoimento Completo */}
                <p className="text-sm text-[#4A3E45] font-light leading-relaxed mb-6 italic">
                  {item.content}
                </p>
              </div>

              {/* Autor e Especialidade */}
              <div className="pt-6 border-t border-[#F6F1EC] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FAF5E8] to-[#FDF2F8] border border-[#D4AF37]/30 flex items-center justify-center font-serif font-bold text-[#B38728] text-sm">
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#2B1E24]">
                      {item.name} <span className="font-normal text-xs text-[#786C73]">({item.age})</span>
                    </p>
                    <p className="text-[11px] text-[#BE185D] font-medium">
                      Atendimento para {item.area}
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[11px] text-[#8C6D1F]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Paciente Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota Ética de Rodapé */}
        <div className="mt-12 text-center text-xs text-[#786C73] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span>
            Relatos autorizados para fins de conscientização sobre a importância dos cuidados em saúde mental.
          </span>
        </div>

      </div>
    </section>
  );
};
