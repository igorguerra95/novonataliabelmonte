export interface NeuroIndication {
  title: string;
  category: string;
  description: string;
  items: string[];
}

export interface PsychotherapyModality {
  id: string;
  name: string;
  whatIsIt: string;
  whenToDo: string;
  badge: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const CONTACT_INFO = {
  name: 'Natália Belmonte',
  crp: 'CRP 10/12139',
  title: 'Neuropsicologia e Psicologia Clínica',
  approach: 'Psicoterapia de base psicanalítica',
  education: 'Pós-graduanda em Neuropsicologia pelo Instituto de Ensino e Pesquisa Albert Einstein - SP',
  targetAudience: 'Adultos e Idosos',
  phone: '(91) 98264-4888',
  phoneRaw: '5591982644888',
  address: 'Tv. Rômulo Maiorana, nº 700 - Marco. Ed. Torre Vitta Office, sala 1506',
  neighborhood: 'Marco',
  city: 'Belém - PA',
  cep: '66093-005',
  hours: 'Segunda a Sexta: 08:00 às 20:00 • Sábados: 08:00 às 13:00 (hora marcada)',
  email: 'contato@nataliabelmonte.com.br',
  slogan: 'Avaliação Neuropsicológica baseada em Evidências e espaço de psicoterapia seguro, acolhedor e sem julgamentos.',
  regulations: {
    psychotherapy: 'Resolução CFP Nº 13/2022',
    neuropsychology: 'Resolução CFP Nº 31/2022'
  },
  socialLinks: {
    whatsapp: 'https://wa.me/5591982644888',
    linkedin: 'https://www.linkedin.com/in/nataliabelmonte',
    instagram: 'https://www.instagram.com/nataliabelmonte.psi',
    blog: '#artigos'
  }
};

export const CLINICAL_VALUES = [
  {
    title: 'Ética & Sigilo Absoluto',
    desc: 'Atendimento pautado pelo rigor ético e sigilo profissional, respeitados os limites legais e as resoluções do CFP.'
  },
  {
    title: 'Confidencialidade Rigorosa',
    desc: 'Privacidade total em cada etapa do atendimento, seja presencial ou online em ambiente criptografado.'
  },
  {
    title: 'Atualização Constante',
    desc: 'Formação continuada de excelência pelo Instituto de Ensino e Pesquisa Albert Einstein - SP.'
  },
  {
    title: 'Humanização & Singularidade',
    desc: 'Cuidado individualizado, sensível e atento à história única e ao ritmo de cada pessoa.'
  }
];

export const NEURO_EVALUATION_DATA = {
  definition:
    'A avaliação neuropsicológica investiga aspectos como atenção, memória, linguagem, aprendizagem e funções executivas (memória de trabalho, flexibilidade cognitiva, controle inibitório, planejamento, resolução de problemas e raciocínio). Por meio de entrevistas, observações e instrumentos adequados à demanda, busca compreender recursos e dificuldades e oferecer informações para os próximos passos.',
  target: 'Pode ajudar adultos e idosos a investigar dificuldades de memória, atenção, linguagem, organização e outras funções cognitivas.',
  investigations: [
    {
      id: 'neurodesenvolvimento',
      title: 'Condições do Neurodesenvolvimento',
      badge: 'Investigação Especializada',
      description: 'Mapeamento cognitivo detalhado em adultos para:',
      items: [
        'TDAH (Transtorno do Déficit de Atenção com Hiperatividade)',
        'TEA (Transtorno do Espectro Autista)',
        'Transtornos de aprendizagem e comunicação',
        'Transtornos motores e do desenvolvimento intelectual'
      ]
    },
    {
      id: 'declinio-cognitivo',
      title: 'Declínio Cognitivo & Transtornos Neurocognitivos',
      badge: 'Atenção ao Adulto e Idoso',
      description: 'Diferenciação precisa entre envelhecimento típico e alterações clínicas:',
      items: [
        'Comprometimento Cognitivo Leve (CCL)',
        'Demências (Alzheimer, Demência Vascular, Corpos de Lewy, Frontotemporal)',
        'Lapsos de memória frequentes com impacto funcional',
        'Perda progressiva de autonomia nas atividades diárias'
      ]
    },
    {
      id: 'neurologicas-lesoes',
      title: 'Condições Neurológicas & Lesões Cerebrais',
      badge: 'Reabilitação & Laudo Técnico',
      description: 'Alterações cognitivas associadas a quadros neurológicos ou adquiridos:',
      items: [
        'Dificuldades após Acidente Vascular Cerebral (AVC)',
        'Traumatismo Cranioencefálico (TCE)',
        'Epilepsia e síndromes convulsivas',
        'Doença de Parkinson e Esclerose Múltipla'
      ]
    }
  ],
  devolutiveSession: {
    title: 'E depois? A Sessão Devolutiva',
    text: 'Na sessão devolutiva, é conversado sobre os resultados, dificuldades e forças, recomendações possíveis e orientação para próximos passos e encaminhamentos quando necessário.'
  }
};

export const PSYCHOTHERAPY_MODALITIES: PsychotherapyModality[] = [
  {
    id: 'breve',
    name: 'Psicoterapia Breve de Orientação Psicanalítica',
    badge: 'Tempo Delimitado',
    whatIsIt: 'Processo com tempo delimitado e foco combinado em conjunto, para trabalhar uma questão específica com escuta analítica.',
    whenToDo: 'Em momentos de crise, transição ou sintoma pontual.'
  },
  {
    id: 'focal',
    name: 'Psicoterapia Focal',
    badge: 'Foco Circunscrito',
    whatIsIt: 'Trabalho concentrado em um núcleo de sofrimento ou conflito definido no início.',
    whenToDo: 'Quando existe um ponto específico que causa sofrimento e se deseja trabalhar de forma circunscrita, sem abrir um processo longo.'
  },
  {
    id: 'apoio',
    name: 'Psicoterapia de Apoio / Suporte Emocional',
    badge: 'Sustentação & Acolhimento',
    whatIsIt: 'Processo voltado a sustentar a pessoa em um momento difícil, ajudando-a a organizar o que está vivendo.',
    whenToDo: 'Em crises, doenças, perdas, sobrecarga ou situações de grande estresse, quando o objetivo imediato é recuperar equilíbrio e capacidade de enfrentamento.'
  },
  {
    id: 'analitico',
    name: 'Processo Analítico',
    badge: 'Autoconhecimento Profundo',
    whatIsIt: 'Processo mais amplo, voltado ao autoconhecimento profundo e à elaboração de questões recorrentes.',
    whenToDo: 'Quando há sofrimento que se repete, padrões relacionais que incomodam ou desejo de compreender-se com mais profundidade.'
  }
];

export const FORMAT_COMPARISON = {
  title: 'Como decidir o formato da psicoterapia?',
  online: {
    title: 'On-Line',
    badge: 'Brasil e Exterior',
    points: [
      'Ampliação do acesso com equidade e sigilo.',
      'Flexibilidade de rotina e economia de tempo.',
      'Contrato terapêutico claro e transparência.',
      'Conformidade com a Resolução CFP nº 11/2018.'
    ]
  },
  presencial: {
    title: 'Presencial',
    badge: 'Ed. Torre Vitta Office - Marco, Belém',
    points: [
      'Eliminação de variáveis tecnológicas que podem interferir na sessão.',
      'Espaço seguro e acolhedor, que favorece o sigilo e a concentração.',
      'Contrato terapêutico claro e transparência.',
      'Ambiente privativo preparado especialmente para o seu momento.'
    ]
  },
  commonPrinciple:
    'O atendimento é pautado pelo sigilo profissional e por cuidados com a privacidade, respeitados os limites éticos e legais.'
};

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Avaliação Neuropsicológica',
    question: 'Avaliação Psicológica é igual a Avaliação Neuropsicológica?',
    answer:
      'A avaliação psicológica é um processo amplo para investigar questões psicológicas. A avaliação neuropsicológica é voltada especialmente à compreensão de funções cognitivas, como memória, atenção e linguagem, considerando também aspectos emocionais, comportamentais e o cotidiano da pessoa. Ambas podem integrar entrevista, observação e instrumentos.'
  },
  {
    id: 'faq-2',
    category: 'Duração da Avaliação',
    question: 'Quanto tempo demora uma Avaliação Neuropsicológica?',
    answer:
      'Não existe um prazo único que sirva para todos os casos. A duração depende da demanda, dos procedimentos necessários e de fatores como análise de documentos ou informações complementares, pausas e adaptações. Após conhecer a demanda, é possível combinar uma estimativa. O processo também inclui análise dos dados, devolutiva e, conforme a finalidade, elaboração do documento psicológico.'
  },
  {
    id: 'faq-3',
    category: 'Processo Terapêutico & Alta',
    question: 'Como funciona o processo de psicoterapia e alta?',
    answer:
      'No início, conversamos sobre o motivo da procura, sua história, o que você gostaria de trabalhar e como será o atendimento. A frequência, os honorários e outros combinados são explicados antes do início. O encerramento é conversado ao longo do processo, considerando o percurso, as necessidades atuais e os próximos passos. Quando necessário, pode ser feito encaminhamento.'
  },
  {
    id: 'faq-4',
    category: 'Regulamentação CFP',
    question: 'Quais resoluções do Conselho Federal de Psicologia regulamentam os atendimentos?',
    answer:
      'A Psicoterapia é regulamentada pela Resolução CFP Nº 13/2022 e a Avaliação Neuropsicológica pela Resolução CFP Nº 31/2022. Os atendimentos online seguem as diretrizes da Resolução CFP nº 11/2018, garantindo segurança ética e técnica integral.'
  },
  {
    id: 'faq-5',
    category: 'Público-Alvo',
    question: 'Qual o público atendido no consultório e online?',
    answer:
      'O atendimento é direcionado a Adultos e Idosos, tanto na psicoterapia de base psicanalítica quanto na avaliação neuropsicológica e investigação de queixas cognitivas.'
  },
  {
    id: 'faq-6',
    category: 'Reembolso & Planos',
    question: 'Como funciona o reembolso junto ao plano de saúde?',
    answer:
      'Os atendimentos são particulares, emitindo-se recibo e nota fiscal profissional detalhados conforme as exigências da Receita Federal e do CFP, para que você solicite o reembolso integral ou parcial junto ao seu convênio de saúde.'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    initials: 'M. S.',
    name: 'M. S.',
    age: '44 anos',
    area: 'Psicoterapia Focal',
    modality: 'Presencial (Torre Vitta Office)',
    highlight: 'Um espaço de escuta profunda onde me senti compreendido desde a primeira sessão.',
    content:
      'Procurei a Natália em um momento de transição e sobrecarga intensa. A escuta psicanalítica e a clareza do contrato terapêutico me ajudaram a reorganizar minhas prioridades com respeito aos meus próprios limites.'
  },
  {
    id: '2',
    initials: 'R. B.',
    name: 'R. B.',
    age: '68 anos',
    area: 'Avaliação Neuropsicológica (Memória)',
    modality: 'Presencial (Marco)',
    highlight: 'A sessão devolutiva trouxe clareza e alívio para toda a família.',
    content:
      'Estávamos apreensivos com lapsos de memória frequentes. A avaliação foi extremamente cuidadosa, ética e humanizada. A sessão devolutiva nos entregou um mapa claro dos próximos passos e orientações médicas.'
  },
  {
    id: '3',
    initials: 'L. T.',
    name: 'L. T.',
    age: '33 anos',
    area: 'Avaliação de TDAH Adulto',
    modality: 'Presencial & Online',
    highlight: 'Investigação criteriosa e acolhedora com base em evidências.',
    content:
      'A pós-graduação da Natália no Einstein se reflete em cada teste e explicação. Finalmente compreendi meu funcionamento cognitivo sem culpas, com um laudo técnico completo e acolhedor.'
  },
  {
    id: '4',
    initials: 'C. M.',
    name: 'C. M.',
    age: '52 anos',
    area: 'Psicoterapia de Apoio',
    modality: 'On-line',
    highlight: 'A psicoterapia online me proporcionou sustentação num momento de luto e dor.',
    content:
      'Moro fora de Belém e poder contar com o acolhimento seguro da Natália semanalmente foi determinante para eu recuperar meu equilíbrio e seguir em frente.'
  }
];
