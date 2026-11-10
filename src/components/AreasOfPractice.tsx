import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Heart, 
  Activity, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Calendar, 
  FileText, 
  Users, 
  ShieldCheck, 
  Clock, 
  Layers
} from 'lucide-react';
import { 
  NEURO_EVALUATION_DATA, 
  PSYCHOTHERAPY_MODALITIES, 
  CONTACT_INFO 
} from '../data/clinicalData';

interface AreasProps {
  onSelectAreaForBooking: (areaTitle: string) => void;
}

export const AreasOfPractice: React.FC<AreasProps> = ({ onSelectAreaForBooking }) => {
  const [activeTab, setActiveTab] = useState<'neuro' | 'psicoterapia'>('neuro');

  const executiveFunctions = [
    'Memória de Trabalho',
    'Flexibilidade Cognitiva',
    'Controle Inibitório',
    'Planejamento',
    'Resolução de Problemas',
    'Raciocínio Lógico'
  ];

  return (
    <section id="areas" className="py-20 lg:py-28 bg-[#F6F1EC]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#D4AF37]/40 text-[#8C6D1F] mb-4 shadow-xs">
            <span>Especialidades Clínicas &bull; Adultos e Idosos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#2B1E24] tracking-tight mb-4">
            Avaliação Neuropsicológica &amp; Psicoterapia
          </h2>
          <p className="text-base sm:text-lg text-[#4A3E45] font-light leading-relaxed">
            Abordagem ética, humanizada e baseada em evidências científicas pelo <strong>Instituto Albert Einstein - SP</strong> e fundamentada na escuta psicanalítica.
          </p>

          {/* Alternador de Abas */}
          <div className="inline-flex p-1.5 bg-white rounded-full border border-[#EADBCE] shadow-xs mt-6">
            <button
              onClick={() => setActiveTab('neuro')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'neuro'
                  ? 'bg-[#2B1E24] text-white shadow-sm'
                  : 'text-[#4A3E45] hover:text-[#2B1E24]'
              }`}
            >
              <Brain className="w-4 h-4 text-[#D4AF37]" />
              <span>Avaliação Neuropsicológica</span>
            </button>
            <button
              onClick={() => setActiveTab('psicoterapia')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'psicoterapia'
                  ? 'bg-[#BE185D] text-white shadow-sm'
                  : 'text-[#4A3E45] hover:text-[#2B1E24]'
              }`}
            >
              <Heart className="w-4 h-4 text-white" />
              <span>Psicoterapia (Base Psicanalítica)</span>
            </button>
          </div>
        </div>

        {/* Conteúdo Aba 1: Avaliação Neuropsicológica */}
        {activeTab === 'neuro' && (
          <motion.div
            id="avaliacao-neuro"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            {/* Bloco 1: O que é a Avaliação Neuropsicológica? */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/35 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B38728] block mb-2">
                    4. O que é a Avaliação Neuropsicológica?
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1E24] mb-4">
                    Investigação Aprofundada das Funções Cognitivas
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A3E45] font-light leading-relaxed mb-6">
                    {NEURO_EVALUATION_DATA.definition}
                  </p>
                  
                  {/* Aspectos e Funções Executivas */}
                  <div className="pt-4 border-t border-[#F6F1EC]">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-3">
                      Funções Executivas Mapeadas:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {executiveFunctions.map((func, fIdx) => (
                        <span
                          key={fIdx}
                          className="px-3 py-1.5 rounded-xl bg-[#FAF5E8] border border-[#D4AF37]/30 text-xs font-medium text-[#8C6D1F]"
                        >
                          {func}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-[#FAF7F5] rounded-2xl p-6 border border-[#EADBCE]">
                  <div className="flex items-center gap-2 mb-3 text-[#BE185D]">
                    <Users className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Público-Alvo</span>
                  </div>
                  <p className="font-serif text-lg font-bold text-[#2B1E24] mb-2">
                    Adultos e Idosos
                  </p>
                  <p className="text-xs text-[#4A3E45] leading-relaxed mb-4">
                    {NEURO_EVALUATION_DATA.target}
                  </p>
                  <button
                    onClick={() => onSelectAreaForBooking('Avaliação Psicológica')}
                    className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] to-[#D4AF37] shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Agendar Avaliação</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bloco 2: Indicações para Avaliação Neuropsicológica (Item 5 do PDF) */}
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B38728] block mb-1">
                  5. Quais são as indicações para Avaliação Neuropsicológica?
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1E24]">
                  Investigação de Dificuldades de Memória, Atenção e Organização
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {NEURO_EVALUATION_DATA.investigations.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-7 border border-[#EADBCE] hover:border-[#D4AF37]/60 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#BE185D] bg-[#FDF2F8] px-2.5 py-1 rounded-full border border-[#F472B6]/25 inline-block mb-4">
                        {item.badge}
                      </span>
                      <h4 className="font-serif text-xl font-bold text-[#2B1E24] mb-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#786C73] mb-4">
                        {item.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {item.items.map((sub, sIdx) => (
                          <li key={sIdx} className="text-xs text-[#4A3E45] flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => onSelectAreaForBooking('Avaliação Psicológica')}
                      className="w-full py-2.5 px-3 rounded-xl text-center text-xs font-semibold text-[#8C6D1F] bg-[#FAF5E8] hover:bg-[#D4AF37] hover:text-white border border-[#D4AF37]/30 transition-all cursor-pointer"
                    >
                      Solicitar Informações
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloco 3: E depois? Sessão Devolutiva (Item 6 do PDF) */}
            <div className="bg-gradient-to-r from-[#FAF5E8] via-[#FDF2F8] to-white rounded-3xl p-8 border border-[#D4AF37]/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#B38728] shrink-0 border border-[#D4AF37]/30 shadow-xs">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#BE185D] block mb-1">
                    6. {NEURO_EVALUATION_DATA.devolutiveSession.title}
                  </span>
                  <p className="text-sm text-[#2B1E24] leading-relaxed font-normal max-w-3xl">
                    {NEURO_EVALUATION_DATA.devolutiveSession.text}
                  </p>
                </div>
              </div>
              <button
                onClick={() => onSelectAreaForBooking('Avaliação Psicológica')}
                className="shrink-0 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#2B1E24] hover:bg-[#4A3E45] transition-all cursor-pointer"
              >
                Entrar em contato
              </button>
            </div>
          </motion.div>
        )}

        {/* Conteúdo Aba 2: Psicoterapia de Base Psicanalítica (Item 7 do PDF) */}
        {activeTab === 'psicoterapia' && (
          <motion.div
            id="psicoterapia"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            {/* Introdução da Psicoterapia */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#F472B6]/30 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#BE185D] block mb-2">
                  7. Psicoterapia de Base Psicanalítica
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1E24] mb-4">
                  Escuta Singular, Acolhimento e Autoconhecimento
                </h3>
                <p className="text-sm sm:text-base text-[#4A3E45] font-light leading-relaxed mb-4">
                  A psicoterapia de base psicanalítica propicia um espaço protegido para elaborar sofrimentos, padrões repetitivos e conflitos internos. Os atendimentos são oferecidos nas modalidades <strong>On-line</strong> (para todo o Brasil) e <strong>Presencial</strong> no Ed. Torre Vitta Office em Belém.
                </p>
                <div className="p-4 rounded-2xl bg-[#FDF2F8] border border-[#F472B6]/20 text-xs text-[#BE185D] font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>
                    Regulamentada pela <strong>{CONTACT_INFO.regulations.psychotherapy}</strong> do Conselho Federal de Psicologia.
                  </span>
                </div>
              </div>
            </div>

            {/* As 4 Modalidades de Psicoterapia (Tabela do PDF) */}
            <div>
              <div className="mb-6 text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6D1F] block mb-1">
                  Quanto à Modalidade
                </span>
                <h4 className="font-serif text-2xl font-bold text-[#2B1E24]">
                  Qual Formato Faz Sentido para Você?
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PSYCHOTHERAPY_MODALITIES.map((mod) => (
                  <div
                    key={mod.id}
                    className="bg-white rounded-3xl p-7 border border-[#EADBCE] hover:border-[#BE185D]/40 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#BE185D] bg-[#FDF2F8] px-3 py-1 rounded-full border border-[#F472B6]/25">
                          {mod.badge}
                        </span>
                        <Clock className="w-4 h-4 text-[#B38728]" />
                      </div>

                      <h5 className="font-serif text-xl font-bold text-[#2B1E24] mb-3 leading-snug">
                        {mod.name}
                      </h5>

                      <div className="space-y-4 mb-6">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#B38728] mb-1">
                            O que é?
                          </p>
                          <p className="text-xs sm:text-sm text-[#4A3E45] font-light leading-relaxed">
                            {mod.whatIsIt}
                          </p>
                        </div>

                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#BE185D] mb-1">
                            Quando fazer?
                          </p>
                          <p className="text-xs sm:text-sm text-[#4A3E45] font-light leading-relaxed">
                            {mod.whenToDo}
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectAreaForBooking(mod.name)}
                      className="w-full py-3 px-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] to-[#D4AF37] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Agendar Esta Modalidade</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Aviso acolhedor do PDF: Não é necessário se encaixar */}
            <div className="p-6 rounded-3xl bg-white border border-[#D4AF37]/35 shadow-xs text-center max-w-3xl mx-auto">
              <p className="font-serif text-lg sm:text-xl font-medium text-[#2B1E24] leading-relaxed italic mb-2">
                &ldquo;Não é necessário &lsquo;se encaixar&rsquo; em uma categoria para começar, a primeira conversa serve justamente para pensar junto qual formato faz sentido para você neste momento.&rdquo;
              </p>
              <p className="text-xs text-[#786C73]">
                — Natália Belmonte &bull; {CONTACT_INFO.crp}
              </p>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
