import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from "i18next-browser-languagedetector";

const resources = {
    en: {
        dashboard: {
            title: 'Title',
            titleHint: 'Please, provide a title for your content.',
            description: 'Description',
            descritionPlaceholder: 'Write about ReactJS form validation. Provide a real life examples.',
            descriptionHint: 'Please, provide a description for your content.',
            generate: 'Generate',
            profile: 'Profile',
            logout: 'Logout',
        },
    },
    uz: {
        dashboard: {
            title: 'Sarlavha',
            titleHint: 'Iltimos, kontentingiz uchun nom bering.',
            description: 'Tavsifi',
            descritionPlaceholder: 'ReactJS formasini tekshirish haqida yozing. Amaliy misollar taqdim eting.',
            descriptionHint: 'Iltimos, kontentingiz uchun tavsif bering.',
            generate: 'Yaratish',
            profile: 'Profil',
            logout: 'Chiqish',
        },
    }
};

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        resources,
        interpolation: {
            escapeValue: false,
        },
        fallbackLng: 'en',
        detection: {
            order: ['localStorage']
        }
    });

export default i18n;