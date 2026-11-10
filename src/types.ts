export interface ClinicalArea {
  id: string;
  title: string;
  badge: string;
  category: 'neuro' | 'emocional' | 'relacoes';
  shortDesc: string;
  fullDesc: string;
  symptoms: string[];
  benefits: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  initials: string;
  name: string;
  age: string;
  area: string;
  modality: string;
  content: string;
  highlight: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  modality: 'Presencial (Ed. Torre Vitta Office)' | 'On-line (Todo o Brasil)';
  areaOfInterest: string;
  preferredPeriod: 'Manhã' | 'Tarde' | 'Noite';
  message: string;
}
