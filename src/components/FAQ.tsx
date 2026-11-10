import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, ShieldCheck, Calendar, BookOpen } from 'lucide-react';
import { FAQS, CONTACT_INFO } from '../data/clinicalData';
import { FAQItem } from '../types';

interface FAQProps {
  onOpenBooking: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenBooking }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FAF7F5] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#D4AF37]/40 text-[#8C6D1F] mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>9. Perguntas Frequentes &bull; Respostas Claras</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#2B1E24] tracking-tight mb-4">
            Dúvidas Frequentes sobre Atendimento
          </h2>
          <p className="text-base text-[#4A3E45] font-light leading-relaxed">
            Esclareça suas dúvidas sobre a avaliação neuropsicológica, o processo de psicoterapia, prazos, alta e as normas do CFP.
          </p>
        </div>

        {/* Faixa das Resoluções CFP (Item 8 do PDF) */}
        <div className="mb-8 p-4 rounded-2xl bg-white border border-[#D4AF37]/35 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[#8C6D1F] font-bold uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-[#D4AF37]" />
            <span>8. Regulamentação Profissional do CFP:</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[#2B1E24]">
            <span className="px-2.5 py-1 rounded-md bg-[#FAF5E8] border border-[#D4AF37]/30 font-medium">
              Psicoterapia: <strong>{CONTACT_INFO.regulations.psychotherapy}</strong>
            </span>
            <span className="px-2.5 py-1 rounded-md bg-[#FDF2F8] border border-[#F472B6]/30 font-medium">
              Avaliação Neuropsicológica: <strong>{CONTACT_INFO.regulations.neuropsychology}</strong>
            </span>
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq: FAQItem) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#EADBCE] overflow-hidden transition-all duration-200 shadow-xs hover:border-[#D4AF37]/60"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#BE185D] block mb-1">
                      {faq.category}
                    </span>
                    <span className="font-serif text-lg sm:text-xl font-semibold text-[#2B1E24] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FAF5E8] flex items-center justify-center shrink-0 transition-transform duration-300 text-[#B38728] ${
                      isOpen ? 'rotate-180 bg-[#BE185D] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm text-[#4A3E45] font-light leading-relaxed border-t border-[#F6F1EC]">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Caixa de Apoio */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#FAF5E8] via-[#FDF2F8] to-white border border-[#D4AF37]/40 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#2B1E24] mb-1">
              Ficou com alguma dúvida sobre o atendimento?
            </h3>
            <p className="text-xs sm:text-sm text-[#4A3E45]">
              Converse diretamente pelo WhatsApp ou agende uma conversa inicial.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] via-[#F472B6] to-[#D4AF37] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Entrar em contato</span>
          </button>
        </div>

      </div>
    </section>
  );
};
