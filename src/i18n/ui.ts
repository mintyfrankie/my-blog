import { config } from 'site.config'

export const languages = {
  en: 'English',
  fr: 'Français',
  zh: '中文',
}

export const defaultLang = 'en'

export const ui = {
  en: {
    title: config.siteTitle,
    TranslatedBanner: 'Experimental: this article is translated by AI.',
  },
  fr: {
    title: config.siteTitle,
    TranslatedBanner: "Expérimental : cet article est traduit par l'IA.",
  },
  zh: {
    title: config.siteTitleZh,
    TranslatedBanner: '测试：本文经由 AI 翻译。',
  },
} as const
