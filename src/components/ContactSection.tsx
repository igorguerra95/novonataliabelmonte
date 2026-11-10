import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle,
  Calendar,
  Building2,
  Users,
  Linkedin,
  Instagram,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { CONTACT_INFO, PSYCHOTHERAPY_MODALITIES } from '../data/clinicalData';
import { BookingFormData } from '../types';

interface ContactSectionProps {
  initialArea?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialArea }) => {
  const resolveArea = (area?: string) => {
    if (!area) return 'Avaliação Psicológica';
    if (area.toLowerCase().includes('avaliação') || area.toLowerCase().includes('neuro')) {
      return 'Avaliação Psicológica';
    }
    if (area.includes('Analítico')) {
      return 'Processo Analítico (Autoconhecimento profundo)';
    }
    if (area.includes('Breve')) {
      return 'Psicoterapia Breve de Orientação Psicanalítica';
    }
    if (area.includes('Focal')) {
      return 'Psicoterapia Focal';
    }
    if (area.includes('Apoio')) {
      return 'Psicoterapia de Apoio / Suporte Emocional';
    }
    return area;
  };

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    modality: 'Presencial (Ed. Torre Vitta Office)',
    areaOfInterest: resolveArea(initialArea),
    preferredPeriod: 'Tarde',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialArea) {
      setFormData(prev => ({ ...prev, areaOfInterest: resolveArea(initialArea) }));
    }
  }, [initialArea]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = encodeURIComponent(
      `Olá, Dra. Natália Belmonte! Gostaria de agendar uma consulta:\n\n` +
      `👤 *Nome:* ${formData.fullName}\n` +
      `📞 *Telefone:* ${formData.phone}\n` +
      `📧 *E-mail:* ${formData.email || 'Não informado'}\n` +
      `📍 *Modalidade:* ${formData.modality}\n` +
      `🧠 *Tipo de Atendimento:* ${formData.areaOfInterest}\n` +
      `🕒 *Período Preferido:* ${formData.preferredPeriod}\n` +
      (formData.message ? `💬 *Mensagem:* ${formData.message}` : '')
    );

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${text}`;
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-20 lg:py-32 bg-[#F6F1EC]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white border border-[#D4AF37]/40 text-[#8C6D1F] mb-4 shadow-xs">
            <MessageCircle className="w-3.5 h-3.5 text-[#BE185D]" />
            <span>2. Dados para Contato &bull; Informações e Atendimento</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#2B1E24] tracking-tight mb-4">
            Inicie Seu Atendimento
          </h2>
          <p className="text-base text-[#4A3E45] font-light leading-relaxed">
            Presencial no <strong>Ed. Torre Vitta Office</strong> (bairro Marco, Belém) ou <strong>On-line para todo o Brasil</strong>. Atendimento ético e individualizado para <strong>Adultos e Idosos</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Coluna 1: Informações de Contato, Redes Sociais e Mapa (5 colunas) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card com Dados Oficiais do PDF */}
            <div className="bg-white rounded-3xl p-8 border border-[#EADBCE] shadow-xs">
              <h3 className="font-serif text-2xl font-bold text-[#2B1E24] mb-6">
                Consultório &amp; Informações
              </h3>

              <div className="space-y-6">
                
                {/* Endereço Exato do PDF */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF5E8] flex items-center justify-center text-[#B38728] shrink-0 border border-[#D4AF37]/25">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#786C73]">
                      Consultório Presencial
                    </p>
                    <p className="text-sm font-semibold text-[#2B1E24] leading-snug">
                      {CONTACT_INFO.address}
                    </p>
                    <p className="text-[11px] text-[#B38728] font-medium mt-0.5">
                      Bairro Marco &bull; Belém - PA
                    </p>
                  </div>
                </div>

                {/* Telefone / WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FDF2F8] flex items-center justify-center text-[#BE185D] shrink-0 border border-[#F472B6]/25">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#786C73]">
                      Telefone &amp; WhatsApp Oficial
                    </p>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent('Olá, Dra. Natália Belmonte! Gostaria de informações sobre horários de consulta.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-[#2B1E24] hover:text-[#BE185D] transition-colors"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                    <p className="text-[11px] text-[#BE185D] font-medium">Link direto para WhatsApp disponível</p>
                  </div>
                </div>

                {/* Público e Abordagem */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF5E8] flex items-center justify-center text-[#B38728] shrink-0 border border-[#D4AF37]/25">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#786C73]">
                      Público-Alvo &amp; Abordagem
                    </p>
                    <p className="text-sm font-semibold text-[#2B1E24]">
                      {CONTACT_INFO.targetAudience}
                    </p>
                    <p className="text-[11px] text-[#786C73]">
                      {CONTACT_INFO.approach} &bull; {CONTACT_INFO.crp}
                    </p>
                  </div>
                </div>

                {/* Horários */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#FDF2F8] flex items-center justify-center text-[#BE185D] shrink-0 border border-[#F472B6]/25">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#786C73]">
                      Atendimento com Hora Marcada
                    </p>
                    <p className="text-xs sm:text-sm text-[#2B1E24] font-medium leading-relaxed">
                      {CONTACT_INFO.hours}
                    </p>
                    <p className="text-[11px] text-[#786C73]">On-line para todo Brasil e Presencial</p>
                  </div>
                </div>

              </div>

              {/* Botão de WhatsApp Direto */}
              <div className="mt-8 pt-6 border-t border-[#F6F1EC]">
                <a
                  href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent('Olá, Dra. Natália Belmonte! Gostaria de conversar sobre horários para consulta.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-2xl text-center text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Conversar Agora no WhatsApp</span>
                </a>
              </div>

              {/* Redes Sociais solicitadas no PDF: Whatsapp | LinkedIn | Blog | Instagram */}
              <div className="mt-6 pt-5 border-t border-[#F6F1EC]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#786C73] mb-3 text-center sm:text-left">
                  Redes Sociais &amp; Artigos:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                  <a
                    href={CONTACT_INFO.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#FAF7F5] hover:bg-[#25D366]/10 text-[#4A3E45] hover:text-[#25D366] transition-colors flex items-center justify-center gap-1.5 border border-[#EADBCE]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={CONTACT_INFO.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#FAF7F5] hover:bg-[#0077B5]/10 text-[#4A3E45] hover:text-[#0077B5] transition-colors flex items-center justify-center gap-1.5 border border-[#EADBCE]"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={CONTACT_INFO.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#FAF7F5] hover:bg-[#E1306C]/10 text-[#4A3E45] hover:text-[#E1306C] transition-colors flex items-center justify-center gap-1.5 border border-[#EADBCE]"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="#faq"
                    className="p-2.5 rounded-xl bg-[#FAF7F5] hover:bg-[#D4AF37]/20 text-[#4A3E45] hover:text-[#8C6D1F] transition-colors flex items-center justify-center gap-1.5 border border-[#EADBCE]"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Blog</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa de Localização no Bairro Marco */}
            <div className="bg-white rounded-3xl p-6 border border-[#EADBCE] shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2B1E24] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#BE185D]" />
                  Localização: Torre Vitta Office
                </span>
                <span className="text-[11px] text-[#786C73]">Marco &bull; Belém</span>
              </div>
              <p className="text-xs text-[#4A3E45] leading-relaxed mb-4">
                Edifício comercial de alto padrão com segurança 24h, recepção corporativa, elevadores modernos e estacionamento rotativo na Tv. Rômulo Maiorana, nº 700.
              </p>
              <div className="w-full h-44 rounded-2xl overflow-hidden border border-[#EADBCE] relative bg-[#FAF7F5]">
                <iframe
                  title="Localização Ed Torre Vitta Office Natalia Belmonte Belem"
                  src="https://maps.google.com/maps?q=Travessa+Romulo+Maiorana+700+Marco+Belem+PA&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Coluna 2: Formulário Inteligente (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D4AF37]/35 shadow-[0_10px_40px_rgba(43,30,36,0.06)] relative">
              
              <div className="mb-8">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#BE185D] bg-[#FDF2F8] border border-[#F472B6]/30 inline-block mb-2">
                  Pré-Agendamento Humanizado
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1E24]">
                  Solicitar Consulta ou Avaliação
                </h3>
                <p className="text-xs sm:text-sm text-[#4A3E45] mt-1">
                  Seus dados e relatos são estritamente sigilosos e protegidos pelo Código de Ética Profissional.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-[#FAF5E8]/60 rounded-2xl border border-[#D4AF37]/50 my-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#2B1E24] mb-2">
                    Mensagem Preparada!
                  </h4>
                  <p className="text-sm text-[#4A3E45] max-w-md mx-auto mb-6">
                    A conversa foi iniciada no WhatsApp da Dra. Natália Belmonte com seus dados preenchidos. Caso não tenha aberto automaticamente, clique abaixo:
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${CONTACT_INFO.phoneRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Abrir no WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-full text-xs font-semibold text-[#4A3E45] bg-white border border-[#EADBCE] hover:bg-[#FAF7F5] cursor-pointer"
                    >
                      Preencher Novamente
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Nome Completo */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Eduardo Silveira"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all bg-[#FAF7F5]/50 focus:bg-white"
                    />
                  </div>

                  {/* Telefone WhatsApp & E-mail */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1.5">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ex: (91) 98264-4888"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all bg-[#FAF7F5]/50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1.5">
                        E-mail de Contato
                      </label>
                      <input
                        type="email"
                        placeholder="Ex: seuemail@exemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all bg-[#FAF7F5]/50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Modalidade de Atendimento */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1.5">
                      Formato de Atendimento *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modality: 'Presencial (Ed. Torre Vitta Office)' })}
                        className={`p-3.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          formData.modality === 'Presencial (Ed. Torre Vitta Office)'
                            ? 'bg-[#FAF5E8] border-[#D4AF37] text-[#8C6D1F] shadow-xs'
                            : 'border-[#EADBCE] text-[#4A3E45] hover:bg-[#FAF7F5]'
                        }`}
                      >
                        <Building2 className="w-4 h-4 text-[#D4AF37]" />
                        <span>Presencial (Torre Vitta Office, Marco)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modality: 'On-line (Todo o Brasil)' })}
                        className={`p-3.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          formData.modality === 'On-line (Todo o Brasil)'
                            ? 'bg-[#FDF2F8] border-[#F472B6] text-[#BE185D] shadow-xs'
                            : 'border-[#EADBCE] text-[#4A3E45] hover:bg-[#FAF7F5]'
                        }`}
                      >
                        <ShieldCheck className="w-4 h-4 text-[#BE185D]" />
                        <span>On-line (Todo o Brasil)</span>
                      </button>
                    </div>
                  </div>

                  {/* Tipo de Atendimento */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1.5">
                      Tipo de Atendimento *
                    </label>
                    <select
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] outline-none text-sm bg-[#FAF7F5]/50 focus:bg-white"
                    >
                      <option value="Avaliação Psicológica">
                        Avaliação Psicológica
                      </option>
                      <option value="Psicoterapia Breve de Orientação Psicanalítica">
                        Psicoterapia Breve de Orientação Psicanalítica
                      </option>
                      <option value="Psicoterapia Focal">
                        Psicoterapia Focal
                      </option>
                      <option value="Psicoterapia de Apoio / Suporte Emocional">
                        Psicoterapia de Apoio / Suporte Emocional
                      </option>
                      <option value="Processo Analítico (Autoconhecimento profundo)">
                        Processo Analítico (Autoconhecimento profundo)
                      </option>
                      <option value="Desejo pensar junto na primeira conversa">
                        Desejo pensar junto na primeira conversa
                      </option>
                    </select>
                  </div>

                  {/* Turno */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1.5">
                      Melhor Período para Atendimento *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Manhã', 'Tarde', 'Noite'] as const).map((period) => (
                        <button
                          key={period}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredPeriod: period })}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer text-center ${
                            formData.preferredPeriod === period
                              ? 'bg-[#2B1E24] text-white border-[#2B1E24]'
                              : 'border-[#EADBCE] text-[#4A3E45] hover:bg-[#FAF7F5]'
                          }`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mensagem Opcional */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1.5">
                      Breve descrição da sua busca (confidencial)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Conte um pouco sobre suas necessidades atuais..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] outline-none text-sm bg-[#FAF7F5]/50 focus:bg-white resize-none"
                    />
                  </div>

                  {/* Botão de Envio */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] via-[#F472B6] to-[#D4AF37] shadow-[0_10px_30px_rgba(190,24,93,0.3)] hover:shadow-[0_15px_40px_rgba(190,24,93,0.45)] transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Entrar em contato</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-[#786C73] text-center pt-2">
                    Ao enviar, você será direcionado para o WhatsApp com a mensagem formatada para a Dra. Natália Belmonte.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
