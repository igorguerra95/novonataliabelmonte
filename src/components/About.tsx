import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  GraduationCap, 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  CheckCircle2, 
  Calendar,
  Lock,
  RefreshCw,
  Users
} from 'lucide-react';
import { CONTACT_INFO, CLINICAL_VALUES } from '../data/clinicalData';
import nataliaAboutImg from '../assets/images/regenerated_image_1794310793727.png';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const credentials = [
    {
      icon: Award,
      title: 'Pós-Graduação em Neuropsicologia',
      institution: 'Instituto de Ensino e Pesquisa Albert Einstein - SP',
      desc: 'Formação de excelência técnica para avaliação neuropsicológica, funções cognitivas e laudos clínicos.'
    },
    {
      icon: GraduationCap,
      title: 'Graduação em Psicologia',
      institution: CONTACT_INFO.crp,
      desc: 'Habilitação profissional com atuação pautada pelo Código de Ética do CFP e respeito à singularidade.'
    },
    {
      icon: Heart,
      title: 'Psicoterapia de Base Psicanalítica',
      institution: 'Adultos e Idosos',
      desc: 'Escuta analítica aprofundada para elaboração de conflitos, momentos de crise e autoconhecimento.'
    },
    {
      icon: ShieldCheck,
      title: 'Conformidade Regulatória CFP',
      institution: 'Resoluções nº 13/2022 e nº 31/2022',
      desc: 'Prática clínica e de testagem 100% regulamentadas pelo Conselho Federal de Psicologia.'
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-[#FAF7F5] relative overflow-hidden">
      {/* Detalhes de Fundo */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#F472B6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bloco Biográfico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna da Foto da Especialista (5 colunas) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              
              <div className="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-gradient-to-tr from-[#FAF5E8] via-white to-[#FDF2F8] shadow-[0_20px_50px_rgba(43,30,36,0.08)] border border-[#D4AF37]/40">
                <div className="rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] max-h-[440px] sm:max-h-[520px] lg:max-h-none bg-[#F6F1EC] w-full">
                  <img
                    src={nataliaAboutImg}
                    alt="Natália Belmonte Psicóloga e Neuropsicóloga"
                    className="w-full h-full object-cover object-[center_18%] sm:object-[center_15%] transition-transform duration-700 hover:scale-105 brightness-[1.01] contrast-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Selo com CRP do PDF */}
                <div className="absolute -bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md py-3 px-5 rounded-2xl shadow-xl border border-[#D4AF37]/35 text-center">
                  <p className="font-serif text-lg font-bold text-[#2B1E24]">
                    Natália Belmonte
                  </p>
                  <p className="text-xs text-[#BE185D] font-bold tracking-widest uppercase">
                    {CONTACT_INFO.crp} &bull; Belém - PA
                  </p>
                  <p className="text-[10px] text-[#786C73] mt-0.5 font-medium">
                    {CONTACT_INFO.education}
                  </p>
                </div>
              </div>

              {/* Box de Cuidado e Singularidade */}
              <div className="mt-12 bg-white/95 p-5 rounded-2xl border border-[#EADBCE] shadow-xs text-center">
                <p className="font-serif italic text-sm text-[#4A3E45] leading-relaxed">
                  &ldquo;Oferecer psicoterapia e Avaliação Psicológica com ética, cuidado e respeito à singularidade de cada pessoa.&rdquo;
                </p>
                <p className="text-[11px] text-[#B38728] font-bold mt-2 uppercase tracking-wider">
                  — Natália Belmonte
                </p>
              </div>

            </div>
          </div>

          {/* Coluna de Apresentação Oficial (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#F472B6]/40 text-[#BE185D] mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>3. Texto de Apresentação</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#2B1E24] tracking-tight mb-6">
              Ética, rigor técnico e escuta atenta à singularidade de cada história.
            </h2>

            {/* Texto Literal do PDF */}
            <div className="p-6 rounded-2xl bg-white border-l-4 border-l-[#BE185D] border border-[#EADBCE] shadow-xs mb-8">
              <p className="text-base sm:text-lg text-[#2B1E24] font-normal leading-relaxed">
                &ldquo;Olá, sou <strong className="font-semibold text-[#BE185D]">Natália Belmonte</strong>, psicóloga {CONTACT_INFO.crp}, pós graduanda em Neuropsicologia Instituto de Ensino e Pesquisa Albert Einstein - SP. Realizo psicoterapia, on-line e presencial, e avaliação neuropsicológica. Tenho como objetivo oferecer psicoterapia e Avaliação Psicológica com ética, cuidado e respeito à singularidade de cada pessoa.&rdquo;
              </p>
            </div>

            {/* Grid de Formação e Credenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {credentials.map((cred, idx) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-[#EADBCE]/80 hover:border-[#D4AF37]/50 shadow-xs transition-all"
                  >
                    <div className="flex items-start gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF5E8] flex items-center justify-center text-[#B38728] shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-xs text-[#2B1E24] leading-snug">
                          {cred.title}
                        </h4>
                        <p className="text-[11px] font-bold text-[#BE185D]">
                          {cred.institution}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-[#786C73] leading-relaxed">
                      {cred.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Botão de Contato */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] via-[#F472B6] to-[#D4AF37] shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Entrar em contato</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-[#786C73]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>100% Sigilo profissional e ético</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bloco dos Valores do PDF (Ética, Confidencialidade, Atualização constante, Humanização) */}
        <div className="mt-20 pt-16 border-t border-[#EADBCE]/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B38728] block mb-1">
              Pilares Fundamentais
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2B1E24]">
              Valores que Orientam a Prática Clínica
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-[#EADBCE] shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#FDF2F8] text-[#BE185D] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2B1E24] mb-2">Ética</h4>
              <p className="text-xs text-[#4A3E45] leading-relaxed">
                Compromisso incondicional com as normas do CFP e respeito absoluto aos limites éticos e legais.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#EADBCE] shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#FAF5E8] text-[#B38728] flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2B1E24] mb-2">Confidencialidade</h4>
              <p className="text-xs text-[#4A3E45] leading-relaxed">
                100% sigilo profissional em sessões presenciais ou online através de plataformas seguras.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#EADBCE] shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#FAF5E8] text-[#B38728] flex items-center justify-center mb-4">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2B1E24] mb-2">Atualização Constante</h4>
              <p className="text-xs text-[#4A3E45] leading-relaxed">
                Aprimoramento contínuo no Instituto de Ensino e Pesquisa Albert Einstein - SP.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#EADBCE] shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-[#FDF2F8] text-[#BE185D] flex items-center justify-center mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2B1E24] mb-2">Humanização</h4>
              <p className="text-xs text-[#4A3E45] leading-relaxed">
                Escuta sensível, acolhedora e atenta à singularidade e ao sofrimento individual.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
