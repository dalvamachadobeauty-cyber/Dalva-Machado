
export type Language = 'en' | 'pt' | 'es';

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Content {
  nav: {
    reviews: string;
  };
  hero: {
    subheadline: string;
    cta_sms: string;
    cta_call: string;
    cta_whatsapp: string;
    microcopy: string;
  };
  about: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    intro: string;
    categories: ServiceCategory[];
    // pricing_note removed
  };
  results: {
    title: string;
    caption: string;
    trust: string;
  };
  course: {
    title: string;
    headline: string;
    cta: string;
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  hours: {
    title: string;
    days: { day: string; time: string }[];
  };
  actions: {
    sms: string;
    services: string;
    results: string;
    reviews: string;
    call_text: string;
    instagram: string;
  };
  map: {
    address: string;
    directions_btn: string;
  };
  sticky: {
    text: string;
    button: string;
  };
}

export interface TranslationData {
  en: Content;
  pt: Content;
  es: Content;
}