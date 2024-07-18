import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const options = {
    order: [
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
        'path',
        'subdomain',
    ],
    lookupCookie: 'lng',
    lookupLocalStorage: 'lng',
    lookupSessionStorage: 'lng',
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,
    caches: ['localStorage', 'cookie'],
}

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    persian: 'Persian',
                    english: 'English',
                },
            },
            fa: {
                translation: {
                    persian: 'فارسی',
                    english: 'انگلیسی',
                },
            },
        },
        // lng: 'fa', // اگر از شناسایی زبان استفاده می‌کنید، این گزینه را حذف کنید
        fallbackLng: 'en',
        supportedLngs: ['fa', 'en'],
        detection: options,

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    })

export const direction = (lng) => (lng === 'fa' || lng === 'ar' ? 'rtl' : 'ltr')

i18n.on('languageChanged', (lng) => {
    document.documentElement.dir = direction(lng)
})

export default i18n
