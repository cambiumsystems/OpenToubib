import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          form: {
            next: 'Next',
            back: 'Back',
            firstName: 'First Name',
            lastName: 'Last Name',
            password: 'Password',
            gender: 'Genre',
            secretQuest: 'Choose a secret Question',
            male: 'Male',
            female: 'Female',
            day: 'Day',
            month: "Month",
            year: "Year",
            teleconsultation: "I do teleconsultation",
            step1: "Personal Data",
            step2: "Address",
            step3:"Professional Infos",
            step4:"Bank account"
          },
          inscription: {
            
          }
        }
      },
      fr: {
        translation: {
          form:{
            next: 'Suivant',
            back: 'Précédent',
            firstName: 'Prénom',
            lastName: 'Nom',
            password: 'Mot de passe',
            secretQuest: 'Choisir une question secrète',
            male: 'Homme',
            female: 'Femme',
            day: 'Jour',
            month: "Mois",
            year: "Année",
            teleconsultation: "Je fais de la téléconsultation",
            step1: "Données personnelles",
            step2: "Adresse",
            step3:"Infos professionnelles",
            step4:"Compte bancaire"
          }
          }
        }
      },
    },
);

export default i18n;
