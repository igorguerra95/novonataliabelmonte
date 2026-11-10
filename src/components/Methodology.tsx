import React from 'react';
import { 
  MessageCircle, 
  Search, 
  BrainCircuit, 
  CheckCircle, 
  ArrowRight,
  Calendar
} from 'lucide-react';

interface MethodologyProps {
  onOpenBooking: () => void;
}

export const Methodology: React.FC<MethodologyProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Primeiro Contato & Triagem Acolhedora',
      icon: MessageCircle,
      desc: 'Você entra em contato pelo WhatsApp ou formulário. Alinhamos sua queixa principal, esclarecemos dúvidas sobre modalidades (presencial ou online) e agendamos a sessão inicial no melhor horário para sua rotina.'
    },
    {
      num: '02',
      title: 'Mapeamento Clínico & Avaliação',
      icon: Search,
      desc: 'Nos primeiros encontros, investigamos profundamente seu histórico de vida, padrões cognitivos, sintomas somáticos e contexto socioafetivo. Para queixas neuropsicológicas, aplicamos a bateria de testagem padronizada.'
    },
    {
      num: '03',
      title: 'Plano Terapêutico Sob Medida',
      icon: BrainCircuit,
      desc: 'Estabelecemos juntos as metas do atendimento. Para psicoterapia, trabalhamos com escuta de base psicanalítica; para avaliação neuropsicológica, utilizamos instrumentos padronizados baseados em evidências científicas.'
    },
    {
      num: '04',
      title: 'Consolidação, Alta & Autonomia',
      icon: CheckCircle,
      desc: 'Conforme os sintomas retrocedem e você domina a regulação emocional e o foco, espaçamos as sessões para quinzenais ou mensais até a alta terapêutica definitiva.'
    }
  ];

  return (
    <section id="metodologia" className="py-20 lg:py-28 bg-[#FAF5E8]/40 border-y border-[#EADBCE]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#D4AF37]/30 text-[#8C6D1F] mb-4 shadow-sm">
            Jornada Clara &amp; Previsível
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#2B1E24] tracking-tight mb-4">
            Como Funciona o Seu Atendimento
          </h2>
          <p className="text-base text-[#4A3E45] font-light leading-relaxed">
            Iniciar a terapia não deve ser motivo de ansiedade. Conheça as quatro etapas estruturadas da nossa parceria clínica, pensadas para o seu conforto do primeiro contato à alta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-[#EADBCE]/80 shadow-[0_4px_20px_rgba(43,30,36,0.03)] hover:shadow-lg hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#D4AF37] group-hover:scale-110 transition-transform">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5E8] flex items-center justify-center text-[#B38728]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#2B1E24] mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A3E45] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F6F1EC] flex items-center text-xs font-semibold text-[#B38728] gap-1 group-hover:text-[#BE185D] transition-colors">
                  <span>Passo {idx + 1} de 4</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] via-[#F472B6] to-[#D4AF37] shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Entrar em contato e iniciar jornada</span>
          </button>
        </div>

      </div>
    </section>
  );
};
