import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEnglish from "./translation/english.json";
import translationRussian from "./translation/russian.json";

const resources = {
  en: {
    translation: translationEnglish,
  },
  ru: {
    translation: translationRussian,
  },
};

const getLanguage = (): string => {
  const lang = localStorage.getItem("language");
  if (lang) {
    return lang as string;
  }
  return "en";
};

i18next.use(initReactI18next).init({
  resources,
  lng: getLanguage(), // default language
});

const lng = localStorage.getItem("language");
if (!lng) {
  localStorage.setItem("language", "en");
}

export default i18next;
