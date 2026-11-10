import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/clinicalData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Olá, Dra. Natália Belmonte! Gostaria de informações sobre horários disponíveis para consulta.'
  );

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-auto">
      
      {/* Tooltip / Balão Amigável */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-white text-[#2B1E24] px-4 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(43,30,36,0.15)] border border-[#D4AF37]/40 text-xs animate-fade-in relative max-w-[220px]">
          <div className="flex flex-col">
            <span className="font-bold text-[#BE185D] text-[11px] leading-tight">
              Olá! Posso te ajudar?
            </span>
            <span className="text-[10px] text-[#4A3E45]">
              Fale diretamente com a Dra. Natália Belmonte
            </span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#786C73] hover:text-[#2B1E24] p-1 cursor-pointer"
            aria-label="Fechar balão"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Triângulo indicador do balão */}
          <div className="absolute -right-2 bottom-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white" />
        </div>
      )}

      {/* Botão Flutuante com Pulso Suave */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 pulse-wa cursor-pointer"
        aria-label="Conversar pelo WhatsApp com Dra. Natalia Belmonte"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        
        {/* Ponto indicador de status online */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
        </span>
      </a>

    </div>
  );
};
