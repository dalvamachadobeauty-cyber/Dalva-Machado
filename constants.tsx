import { TranslationData } from './types';
import { Phone, MessageCircle, Instagram, MapPin, Calendar, Star } from 'lucide-react';

export const ASSETS = {
  logo: 'https://firebrick-gnu-653227.hostingersite.com/wp-content/uploads/2026/02/Logo-Dalva-Machado-Beauty.jpg',
  heroBg: 'https://firebrick-gnu-653227.hostingersite.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-16-at-7.48.22-PM.jpeg',
  beforeAfter: 'https://linkbioinsta.com/wp-content/uploads/2026/02/Dalva-Machado-Instagram.jpg',
  courseVideo: 'https://www.youtube.com/embed/xQOV5Rxayvk',
  instagramUrl: 'https://www.instagram.com/dalvamachadobeauty/',
  googleReviewUrl: 'https://g.page/r/CaeHMgTuVO72EBM/review',
  mapsLink: 'https://www.google.com/maps/dir//1840+Park+St,+Hartford,+CT+06106',
  phone: '+1 (860) 869-3503',
  phoneRaw: '+18608693503',
  whatsappLink: 'https://wa.me/18608693503',
  smsLink: 'sms:+18608693503?body=Hi%20Dalva!%20I%20want%20to%20book%20an%20appointment.%20Can%20you%20share%20availability%20and%20pricing%3F',
  smsLinkPt: 'sms:+18608693503?body=Oi%20Dalva!%20Quero%20agendar%20um%20horário.%20Pode%20me%20passar%20valores%20e%20disponibilidade%3F',
  smsLinkEs: 'sms:+18608693503?body=Hola%20Dalva!%20Quiero%20agendar%20una%20cita.%20¿Me%20puedes%20dar%20precios%20y%20disponibilidad%3F',
  smsLinkCourse: 'sms:+18608693503?body=Hi%20Dalva!%20I%27d%20like%20more%20information%20about%20the%20Brazilian%20Wax%20course!',
  smsLinkCoursePt: 'sms:+18608693503?body=Oi%20Dalva!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20curso%20de%20Depila%C3%A7%C3%A3o%20Brasileira!',
  smsLinkCourseEs: 'sms:+18608693503?body=Hola%20Dalva!%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20curso%20de%20Depilaci%C3%B3n%20Brasile%C3%B1a!'
};

export const COLORS = {
  primary: '#E18FB1',
  text: '#1A1A1B',
  bg: '#FFFFFF',
};

export const TRANSLATIONS: TranslationData = {
  en: {
    nav: {
      reviews: 'Reviews',
    },
    hero: {
      subheadline: 'Brazilian Waxing • Vajacial • Massage • Facial • Head Spa',
      cta_sms: 'Text to Book',
      cta_call: 'Call Now',
      cta_whatsapp: 'WhatsApp',
      microcopy: 'Fastest response: Text Message.',
    },
    about: {
      title: 'About Me',
      description: 'I am Dalva Machado, esthetician and owner of Dalva Machado Beauty. With 18 years of experience in the USA, I offer exclusive treatments at our SPA in Hartford, combining technique and care to enhance your natural beauty.',
    },
    services: {
      title: 'Services',
      intro: '',
      categories: [
        {
          category: 'Signature Treatments',
          items: [
            { 
              title: 'Brazilian Waxing', 
              description: 'A complete hair removal treatment that removes hair from the entire bikini area (front, back, and everything in between). This service ensures smooth, hair-free skin for weeks using high-quality wax designed for sensitive areas.' 
            },
            { 
              title: 'Vajacial', 
              description: 'A specialized skin treatment performed after hair removal to treat the bikini line. It includes cleansing, exfoliation, extraction of ingrown hairs, and a soothing mask to hydrate the skin and prevent irritation.' 
            },
            { 
              title: 'Massage', 
              description: 'A therapeutic body treatment designed to relieve muscle tension, reduce stress, and improve circulation. Whether it is a deep tissue or relaxation session, it promotes overall physical and mental well-being.' 
            },
            { 
              title: 'Facial', 
              description: 'A professional skincare treatment that deeply cleanses, exfoliates, and nourishes the face. It is customized to your skin type to treat concerns like acne, dryness, or aging, leaving your complexion glowing and refreshed.' 
            },
            { 
              title: 'Head Spa', 
              description: 'A revitalizing "facial for the scalp" that combines deep cleansing with a relaxing head and neck massage. It removes buildup, stimulates hair follicles, and provides a deeply calming sensory experience.' 
            },
            {
              title: 'Foot Spa',
              description: 'Exfoliation, massage, foot soak, and hydration.'
            },
            {
              title: 'Hand Spa',
              description: 'Exfoliation, massage, hand soak, and hydration.'
            }
          ],
        },
      ],
    },
    results: {
      title: 'Results',
      caption: 'Before & After — natural-finish work. Results vary by skin type and aftercare.',
      trust: 'We personalize the design to your face and goals. Ask by text for availability and pricing.',
    },
    course: {
      title: 'In-Person Professional Brazilian Wax Course',
      headline: 'Complete training with technique, real practice, and high market demand.',
      cta: 'Inquire about Courses',
    },
    faq: {
      title: 'FAQ',
      items: [
        {
          question: 'How long does a Brazilian Wax last?',
          answer: 'Typically, results last between 3 to 4 weeks. Since hair is removed from the root, it grows back finer and thinner over time. We recommend scheduling sessions every 4 weeks for best results.',
        },
        {
          question: 'What is a Vajacial and when should I get one?',
          answer: 'A Vajacial is a revitalizing skin treatment for the bikini line that treats ingrown hairs and irritation. It is best performed 7 to 10 days after waxing to help new hair break through the skin smoothly.',
        },
        {
          question: 'Does a Head Spa help with hair growth?',
          answer: 'Yes! Beyond deep relaxation, a Head Spa unclogs hair follicles and stimulates scalp circulation. This process is essential for promoting healthier, stronger, and faster hair growth.',
        },
        {
          question: 'What is the difference between Swedish and Deep Tissue Massage?',
          answer: 'Swedish massage focuses on overall relaxation and light tension. Deep Tissue uses firmer pressure to reach deeper muscle layers, making it ideal for chronic pain, muscle knots, and recovery.',
        },
      ],
    },
    hours: {
      title: 'Hours',
      days: [
        { day: 'Monday - Saturday', time: '9:00 AM - 6:00 PM' },
      ],
    },
    actions: {
      sms: 'Text to Book',
      services: 'Services & Pricing',
      results: 'Before & After',
      reviews: 'Review us on Google',
      call_text: 'Call / Text',
      instagram: 'Instagram',
    },
    map: {
      address: '1840 Park St, Hartford, CT',
      directions_btn: 'Get Directions',
    },
    sticky: {
      text: 'Book by Text',
      button: 'Text Now',
    },
  },
  pt: {
    nav: {
      reviews: 'Avaliações',
    },
    hero: {
      subheadline: 'Depilação Brasileira • Vajacial • Massagem • Facial • Head Spa',
      cta_sms: 'Agendar por Texto',
      cta_call: 'Ligar Agora',
      cta_whatsapp: 'WhatsApp',
      microcopy: 'Resposta mais rápida: Mensagem de Texto.',
    },
    about: {
      title: 'Sobre Mim',
      description: 'Sou Dalva Machado, esteticista e proprietária do Dalva Machado Beauty. Com 18 anos de experiência nos EUA, ofereço tratamentos exclusivos em nosso SPA em Hartford, unindo técnica e cuidado para realçar sua beleza natural.',
    },
    services: {
      title: 'Serviços',
      intro: '',
      categories: [
        {
          category: 'Tratamientos Exclusivos',
          items: [
            { 
              title: 'Brazilian Waxing (Depilação Brasileira)', 
              description: 'Tratamento completo que remove os pelos de toda a área do biquíni (frente, verso e tudo entre eles). Garante pele lisa por semanas usando cera de alta qualidade para áreas sensíveis.' 
            },
            { 
              title: 'Vajacial', 
              description: 'Tratamento especializado pós-depilação para a linha do biquíni. Inclui limpeza, esfoliação, extração de pelos encravados e máscara calmante para hidratar e prevenir irritação.' 
            },
            { 
              title: 'Massagem', 
              description: 'Tratamento terapêutico para aliviar tensão muscular, reduzir estresse e melhorar circulação. Seja tecido profundo ou relaxamento, promove bem-estar físico e mental.' 
            },
            { 
              title: 'Facial (Limpeza de Pele)', 
              description: 'Tratamento profissional que limpa, esfolia e nutre o rosto. Personalizado para seu tipo de pele (acne, ressecamento, envelhecimento) para uma tez radiante.' 
            },
            { 
              title: 'Head Spa', 
              description: 'Um "facial para o couro cabeludo" revitalizante. Combina limpeza profunda com massagem relaxante na cabeça e pescoço. Remove resíduos e estimula os folículos.' 
            },
            {
              title: 'Foot Spa',
              description: 'Esfoliação, massagem, escalda-pés e hidratação.'
            },
            {
              title: 'Hand Spa',
              description: 'Esfoliação, massagem, imersão e hidratação.'
            }
          ],
        },
      ],
    },
    results: {
      title: 'Resultados',
      caption: 'Antes e Depois — acabamento natural. Os resultados variam conforme o tipo de pele.',
      trust: 'Personalizamos o design para o seu rosto. Pergunte por mensagem sobre valores e horários.',
    },
    course: {
      title: 'Curso Presencial de Brazilian Wax Profissional',
      headline: 'Formação completa com técnica, prática real e alta demanda no mercado.',
      cta: 'Saiba mais sobre o Curso',
    },
    faq: {
      title: 'Perguntas Frequentes',
      items: [
        {
          question: 'Quanto tempo dura a Depilação Brasileira?',
          answer: 'Normalmente, os resultados duram de 3 a 4 semanas. Como o pelo é removido pela raiz, ele cresce mais fino e ralo com o tempo. Recomendamos agendar sessões a cada 4 semanas.',
        },
        {
          question: 'O que é um Vajacial e quando devo fazer?',
          answer: 'O Vajacial é um tratamento revitalizante para a linha do biquíni que trata pelos encravados e irritação. É melhor realizado de 7 a 10 dias após a depilação.',
        },
        {
          question: 'O Head Spa ajuda no crescimento do cabelo?',
          answer: 'Sim! Além de relaxar, o Head Spa desobstrui folículos e estimula a circulação. Esse processo é essencial para promover crescimento de cabelo mais saudável e forte.',
        },
        {
          question: 'Qual a diferença entre Massagem Sueca e Deep Tissue?',
          answer: 'A Sueca foca no relaxamento geral. A Deep Tissue usa pressão mais firme para atingir camadas profundas, ideal para dores crônicas e nós musculares.',
        },
      ],
    },
    hours: {
      title: 'Horários',
      days: [
        { day: 'Segunda - Sábado', time: '09:00 - 18:00' },
      ],
    },
    actions: {
      sms: 'Agendar por Texto',
      services: 'Serviços e Preços',
      results: 'Antes e Depois',
      reviews: 'Avalie-nos no Google',
      call_text: 'Ligar / Texto',
      instagram: 'Instagram',
    },
    map: {
      address: '1840 Park St, Hartford, CT',
      directions_btn: 'Como Chegar',
    },
    sticky: {
      text: 'Agendar agora',
      button: 'Enviar Texto',
    },
  },
  es: {
    nav: {
      reviews: 'Reseñas',
    },
    hero: {
      subheadline: 'Depilación Brasileña • Vajacial • Masaje • Facial • Head Spa',
      cta_sms: 'Agendar por Texto',
      cta_call: 'Llamar Ahora',
      cta_whatsapp: 'WhatsApp',
      microcopy: 'Respuesta más rápida: Mensaje de Texto.',
    },
    about: {
      title: 'Sobre Mí',
      description: 'Soy Dalva Machado, esteticista y propietaria de Dalva Machado Beauty. Con 18 años de experiencia en los EE. UU., ofrezco tratamientos exclusivos en nuestro SPA en Hartford, uniendo técnica y cuidado para realzar su belleza natural.',
    },
    services: {
      title: 'Servicios',
      intro: '',
      categories: [
        {
          category: 'Tratamientos Exclusivos',
          items: [
            { 
              title: 'Depilación Brasileña', 
              description: 'Tratamiento completo que elimina el vello de toda el área del bikini. Asegura una piel suave durante semanas usando cera de alta calidad para áreas sensibles.' 
            },
            { 
              title: 'Vajacial', 
              description: 'Tratamiento especializado post-depilación para la línea del bikini. Incluye limpieza, exfoliación, extracción de vellos encarnados y mascarilla calmante.' 
            },
            { 
              title: 'Masaje', 
              description: 'Tratamiento terapéutico para aliviar la tensión muscular, reducir el estrés y mejorar la circulación. Promueve el bienestar físico y mental general.' 
            },
            { 
              title: 'Facial', 
              description: 'Tratamiento profesional que limpia, exfolia y nutre el rostro. Personalizado para tu tipo de piel (acné, sequedad, envejecimiento) para una tez radiante.' 
            },
            { 
              title: 'Head Spa', 
              description: 'Un "facial para el cuero cabelludo" revitalizante. Combina limpieza profunda con masaje relajante de cabeza y cuello. Elimina residuos y estimula los folículos.' 
            },
            {
              title: 'Foot Spa',
              description: 'Exfoliación, masaje, baño de pies e hidratación.'
            },
            {
              title: 'Hand Spa',
              description: 'Exfoliación, masaje, baño de manos e hidratación.'
            }
          ],
        },
      ],
    },
    results: {
      title: 'Resultados',
      caption: 'Antes y Después — acabado natural. Los resultados varían según el tipo de piel.',
      trust: 'Personalizamos el diseño para tu rostro. Pregunta por mensaje sobre disponibilidad y precios.',
    },
    course: {
      title: 'Curso Presencial de Depilación Brasileña Profesional',
      headline: 'Formación completa con técnica, práctica real y alta demanda en el mercado.',
      cta: 'Info sobre Cursos',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        {
          question: '¿Cuánto dura una Depilación Brasileña?',
          answer: 'Típicamente, los resultados duran entre 3 a 4 semanas. Dado que el vello se elimina de raíz, vuelve a crecer más fino con el tiempo. Recomendamos sesiones cada 4 semanas.',
        },
        {
          question: '¿Qué es un Vajacial y cuándo debo hacerme uno?',
          answer: 'Un Vajacial es un tratamiento revitalizante para la piel del bikini que trata vellos encarnados. Se realiza mejor de 7 a 10 días después de la depilación.',
        },
        {
          question: '¿El Head Spa ayuda al crecimiento del cabello?',
          answer: '¡Sí! Además de la relajación, el Head Spa destapa los folículos y estimula la circulación. Esencial para promover un crecimiento del cabello más sano y fuerte.',
        },
        {
          question: '¿Diferencia entre masaje Sueco y Tejido Profundo?',
          answer: 'El masaje Sueco se enfoca en la relajación general. El de Tejido Profundo (Deep Tissue) usa presión más firme para llegar a capas profundas, ideal para dolor crónico.',
        },
      ],
    },
    hours: {
      title: 'Horarios',
      days: [
        { day: 'Lunes - Sábado', time: '09:00 - 18:00' },
      ],
    },
    actions: {
      sms: 'Agendar por Texto',
      services: 'Servicios y Precios',
      results: 'Antes y Después',
      reviews: 'Reseñanos en Google',
      call_text: 'Llamar / Texto',
      instagram: 'Instagram',
    },
    map: {
      address: '1840 Park St, Hartford, CT',
      directions_btn: 'Cómo Llegar',
    },
    sticky: {
      text: 'Agendar ahora',
      button: 'Enviar Texto',
    },
  },
};