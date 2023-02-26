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

i18next.use(initReactI18next).init({
  resources,
  lng: "ru", // default language
});

export default i18next;
