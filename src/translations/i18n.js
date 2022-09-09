import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

//import lang. files
import { TRANSLATIONS_EN } from "./en/translations";
import { TRANSLATIONS_ZH } from "./zh/translations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      //other languages will come here
      zh: {
        translation: TRANSLATIONS_ZH
      }
    },
  });

i18n.changeLanguage("en");