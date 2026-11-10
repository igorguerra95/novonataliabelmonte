import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  CheckCircle2, 
  Calendar,
  Brain,
  MapPin,
  Award,
  Users
} from 'lucide-react';
import { CONTACT_INFO, CLINICAL_VALUES } from '../data/clinicalData';
import nataliaHeroImg from '../assets/images/regenerated_image_1794310440881.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } 
    }
  };

  const badges = [
    { label: 'Público-Alvo: Adultos e Idosos', icon: Users },
    { label: 'Instituto Albert Einstein - SP', icon: Award },
    { label: 'Psicoterapia de Base Psicanalítica', icon: Heart },
    { label: '100% Sigilo Profissional e Ético', icon: ShieldCheck }
  ];

  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-[#FDF2F8] via-[#FAF5E8]/60 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#F472B6]/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-[-100px] w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna Editorial (7 colunas) */}
          <motion.div
            className="lg:col-span-7 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Pill Badge Superior */}
            <motion.div variants={itemVariants} className="inline-flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-white border border-[#D4AF37]/40 text-[#8C6D1F] shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                Neuropsicologia &amp; Psicologia Clínica
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-[#BE185D] bg-[#FDF2F8] border border-[#F472B6]/30">
                {CONTACT_INFO.crp}
              </span>
            </motion.div>

            {/* Headline Principal do PDF */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-[#2B1E24] text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.03em] mb-6"
            >
              Avaliação Neuropsicológica baseada em Evidências e espaço de psicoterapia{' '}
              <span className="italic font-normal text-[#BE185D] relative inline-block">
                seguro, acolhedor
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-[#D4AF37]/50"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M0 15 Q 50 0 100 15"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              e sem julgamentos.
            </motion.h1>

            {/* Subheadline com Apresentação do PDF */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#4A3E45] font-light leading-relaxed mb-6 max-w-2xl"
            >
              Olá, sou <strong className="font-semibold text-[#2B1E24]">Natália Belmonte</strong>, psicóloga {CONTACT_INFO.crp}, pós-graduanda em Neuropsicologia pelo <strong>Instituto de Ensino e Pesquisa Albert Einstein - SP</strong>. Realizo psicoterapia de base psicanalítica (on-line e presencial) e avaliação neuropsicológica para <strong>adultos e idosos</strong> com ética, cuidado e respeito à singularidade de cada pessoa.
            </motion.p>

            {/* Destaques Rápidos em Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 max-w-xl">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4A3E45] bg-white/80 p-3 rounded-xl border border-[#EADBCE]/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Ed. Torre Vitta Office, sala 1506 &bull; <strong>Marco, Belém</strong></span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4A3E45] bg-white/80 p-3 rounded-xl border border-[#EADBCE]/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#BE185D] shrink-0" />
                <span>Atendimento <strong>On-line para todo o Brasil</strong></span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4A3E45] bg-white/80 p-3 rounded-xl border border-[#EADBCE]/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span><strong>Psicoterapia de base psicanalítica</strong></span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4A3E45] bg-white/80 p-3 rounded-xl border border-[#EADBCE]/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#BE185D] shrink-0" />
                <span>Pós-graduação <strong>Albert Einstein - SP</strong></span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] via-[#F472B6] to-[#D4AF37] shadow-[0_10px_30px_rgba(190,24,93,0.3)] hover:shadow-[0_15px_40px_rgba(190,24,93,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#avaliacao-neuro"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-[#2B1E24] bg-white border border-[#EADBCE] hover:border-[#D4AF37] hover:bg-[#FAF5E8]/60 transition-all shadow-xs cursor-pointer"
              >
                <span>Conhecer Avaliação Neuropsicológica</span>
              </a>
            </motion.div>

            {/* Selo dos Valores */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[#786C73]"
            >
              <span className="font-semibold text-[#8C6D1F]">Valores:</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#EADBCE]">Ética</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#EADBCE]">Confidencialidade</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#EADBCE]">Atualização constante</span>
              <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#EADBCE]">Humanização</span>
            </motion.div>
          </motion.div>

          {/* Coluna Visual (5 colunas) */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Moldura Dourada com Responsividade Impecável para Todos os Dispositivos */}
              <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-[#FAF5E8] via-white to-[#FDF2F8] shadow-[0_20px_50px_rgba(43,30,36,0.12)] border border-[#D4AF37]/40">
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/5] max-h-[460px] sm:max-h-[540px] lg:max-h-none bg-[#FAF7F5] w-full">
                  <img
                    src={nataliaHeroImg}
                    alt="Natália Belmonte Psicóloga e Neuropsicóloga"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                    className="w-full h-full object-cover object-[center_18%] sm:object-[center_16%] lg:object-[center_18%] transition-transform duration-700 hover:scale-105 brightness-[1.01] contrast-[1.02]"
                    loading="eager"
                  />
                  {/* Gradiente de proteção para legibilidade em qualquer tela */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1E24]/90 via-[#2B1E24]/25 to-transparent pointer-events-none" />
                  
                  {/* Legenda adaptada para mobile, tablet e desktop */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white pointer-events-none">
                    <p className="font-serif text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm">
                      Natália Belmonte
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#FAF5E8] tracking-wider uppercase font-medium mt-0.5">
                      Psicóloga &bull; {CONTACT_INFO.crp}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#D4AF37] mt-0.5 font-normal leading-snug">
                      Pós-graduanda em Neuropsicologia &bull; Albert Einstein - SP
                    </p>
                  </div>
                </div>

                {/* Card Flutuante 1: Avaliação Neuropsicológica (Adaptado para tablet e desktop) */}
                <div className="absolute -top-4 -left-3 sm:-top-5 sm:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.2)] border border-[#D4AF37]/35 max-w-[190px] sm:max-w-[220px] hidden sm:block">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#FAF5E8] flex items-center justify-center text-[#B38728] shrink-0">
                      <Brain className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs font-bold text-[#2B1E24] leading-tight">Avaliação Neuropsicológica</p>
                      <p className="text-[9px] sm:text-[10px] text-[#786C73]">Adultos e Idosos</p>
                    </div>
                  </div>
                </div>

                {/* Card Flutuante 2: Consultório (Com proteção contra overflow em telas pequenas) */}
                <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-4 md:-right-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-[0_10px_30px_rgba(190,24,93,0.18)] border border-[#F472B6]/30 max-w-[200px] xs:max-w-[220px] sm:max-w-[240px]">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#FDF2F8] flex items-center justify-center text-[#BE185D] shrink-0">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs font-bold text-[#2B1E24] leading-tight">Ed. Torre Vitta Office</p>
                      <p className="text-[9px] sm:text-[10px] text-[#786C73]">Sala 1506 &bull; Marco, Belém</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Tag de Regulamentação CFP */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[11px] font-medium text-[#786C73]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Psicoterapia: {CONTACT_INFO.regulations.psychotherapy}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#BE185D]" />
                  Avaliação Neuropsicológica: {CONTACT_INFO.regulations.neuropsychology}
                </span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Faixa dos 4 Valores Centrais do PDF */}
        <div className="mt-16 pt-10 border-t border-[#EADBCE]/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CLINICAL_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-[#EADBCE]/70 hover:border-[#D4AF37]/50 shadow-xs transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF5E8] flex items-center justify-center text-[#B38728] text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#2B1E24]">
                    {val.title}
                  </h4>
                </div>
                <p className="text-xs text-[#4A3E45] font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
