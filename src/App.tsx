/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AreasOfPractice } from './components/AreasOfPractice';
import { About } from './components/About';
import { Methodology } from './components/Methodology';
import { ModalitySection } from './components/ModalitySection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedAreaForBooking, setSelectedAreaForBooking] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setSelectedAreaForBooking(undefined);
    setIsBookingModalOpen(true);
  };

  const handleSelectArea = (areaTitle: string) => {
    setSelectedAreaForBooking(areaTitle);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-[#2B1E24] selection:bg-[#F472B6]/25 selection:text-[#9D174D]">
      {/* Barra de Navegação Fixa / Sticky */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Conteúdo Principal com Estrutura Obrigatória: inicio -> areas -> sobre -> contato */}
      <main className="flex-grow">
        {/* Seção 1: Início (Hero) */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Seção 2: Áreas de Atuação */}
        <AreasOfPractice onSelectAreaForBooking={handleSelectArea} />

        {/* Seção 3: Sobre a Especialista */}
        <About onOpenBooking={handleOpenBooking} />

        {/* Metodologia & Jornada Terapêutica */}
        <Methodology onOpenBooking={handleOpenBooking} />

        {/* Modalidades: Presencial Belém & Online */}
        <ModalitySection onOpenBooking={handleOpenBooking} />

        {/* Depoimentos Éticos */}
        <Testimonials />

        {/* Perguntas Frequentes (FAQ) */}
        <FAQ onOpenBooking={handleOpenBooking} />

        {/* Seção 4: Contato & Pré-agendamento */}
        <ContactSection initialArea={selectedAreaForBooking} />
      </main>

      {/* Rodapé Nobre */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* Modal Interativo de Agendamento */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedArea={selectedAreaForBooking}
      />
    </div>
  );
}
