// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import navbarEn from "./translation/en/navbar.json";
import navbarAr from "./translation/ar/navbar.json";
import indexAr from "./translation/ar/index.json";
import indexEn from "./translation/en/index.json";
import authAr from "./translation/ar/auth.json";
import authEn from "./translation/en/auth.json";
import navbarTr from "./translation/tr/navbar.json";
import indexTr from "./translation/tr/index.json";
import authTr from "./translation/tr/auth.json";

const resources = {
  en: {
    navbar: { ...navbarEn },
    index: { ...indexEn },
    auth: { ...authEn },
  },
  ar: {
    navbar: { ...navbarAr },
    index: { ...indexAr },
    auth: { ...authAr },
  },
  tr: {
    navbar: { ...navbarTr },
    index: { ...indexTr },
    auth: { ...authTr },
  }
};

// Set initial language directly from localStorage
const savedLanguage = localStorage.getItem("i18nextLng") || "en";

i18n
  .use(initReactI18next)
  .init({
    lng: savedLanguage, // Use saved language as initial language
    fallbackLng: false, // Disable fallback language
    resources,
    debug: true,
    ns: ["navbar", "index", "auth"],
    defaultNS: "navbar",
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
