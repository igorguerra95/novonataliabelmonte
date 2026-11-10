import React, { useState, useEffect } from 'react';
import { X, Calendar, Building2, Video, CheckCircle2, ShieldCheck, Send, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, PSYCHOTHERAPY_MODALITIES } from '../data/clinicalData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedArea?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedArea
}) => {
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
    areaOfInterest: resolveArea(preselectedArea),
    preferredPeriod: 'Tarde',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedArea) {
      setFormData(prev => ({ ...prev, areaOfInterest: resolveArea(preselectedArea) }));
    }
  }, [preselectedArea]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, Dra. Natália Belmonte! Gostaria de informações sobre agendamento:\n\n` +
      `👤 *Nome:* ${formData.fullName}\n` +
      `📞 *Telefone:* ${formData.phone}\n` +
      `📧 *E-mail:* ${formData.email || 'Não informado'}\n` +
      `📍 *Modalidade:* ${formData.modality}\n` +
      `🧠 *Tipo de Atendimento:* ${formData.areaOfInterest}\n` +
      `🕒 *Período:* ${formData.preferredPeriod}\n` +
      (formData.message ? `💬 *Mensagem:* ${formData.message}` : '')
    );

    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${text}`;
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose} 
      />

      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-[#D4AF37]/35 z-10 overflow-hidden my-8">
        
        {/* Cabeçalho */}
        <div className="bg-gradient-to-r from-[#2B1E24] to-[#4A3E45] p-6 text-white flex items-center justify-between border-b border-[#D4AF37]/40">
          <div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#D4AF37] block mb-1">
              {CONTACT_INFO.crp} &bull; {CONTACT_INFO.education}
            </span>
            <h3 className="font-serif text-2xl font-bold">
              Agendamento com Natália Belmonte
            </h3>
            <p className="text-xs text-[#FAF5E8]/80 mt-0.5">
              Ed. Torre Vitta Office (Marco, Belém) &bull; On-line para todo Brasil
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Formulário */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#2B1E24] mb-2">
                Solicitação Direcionada!
              </h4>
              <p className="text-xs sm:text-sm text-[#4A3E45] leading-relaxed mb-6">
                Abrimos o WhatsApp da Dra. Natália Belmonte com seus dados pré-preenchidos. Nossa equipe responderá em breve com os horários disponíveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${CONTACT_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirmar no WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full text-xs font-semibold text-[#4A3E45] bg-[#FAF7F5] border border-[#EADBCE] hover:bg-white cursor-pointer"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Carlos Eduardo"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] outline-none text-sm bg-[#FAF7F5]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ex: (91) 98264-4888"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] outline-none text-sm bg-[#FAF7F5]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="Ex: seuemail@dominio.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] outline-none text-sm bg-[#FAF7F5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1">
                  Formato de Atendimento *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, modality: 'Presencial (Ed. Torre Vitta Office)' })}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      formData.modality === 'Presencial (Ed. Torre Vitta Office)'
                        ? 'bg-[#FAF5E8] border-[#D4AF37] text-[#8C6D1F]'
                        : 'border-[#EADBCE] text-[#4A3E45] hover:bg-[#FAF7F5]'
                    }`}
                  >
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Presencial Belém</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, modality: 'On-line (Todo o Brasil)' })}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      formData.modality === 'On-line (Todo o Brasil)'
                        ? 'bg-[#FDF2F8] border-[#F472B6] text-[#BE185D]'
                        : 'border-[#EADBCE] text-[#4A3E45] hover:bg-[#FAF7F5]'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>On-line Brasil</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1">
                  Tipo de Atendimento *
                </label>
                <select
                  value={formData.areaOfInterest}
                  onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] outline-none text-sm bg-[#FAF7F5]"
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

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1">
                  Preferência de Turno *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Manhã', 'Tarde', 'Noite'] as const).map((period) => (
                    <button
                      key={period}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredPeriod: period })}
                      className={`py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
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

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B1E24] mb-1">
                  Mensagem confidencial (opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Conte um pouco sobre sua busca..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#EADBCE] focus:border-[#D4AF37] outline-none text-sm bg-[#FAF7F5] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#BE185D] via-[#F472B6] to-[#D4AF37] shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Entrar em contato</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#786C73] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>100% Sigilo profissional e ético &bull; {CONTACT_INFO.crp}</span>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
