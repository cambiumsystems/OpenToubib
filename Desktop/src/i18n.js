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
            step4:"Bank account",
            msg:"Do not delay all your advantages await you"
            
          },
          login: {
            msg:"Do not delay all your advantages await you",
            enter_email:"Enter your email address and password to access to your personal account",
            more:"Find out more",
            pwd:"Password",
            login:"Login",
            Signin:"Sign in",
            support:"Support"
          },
          navbar:{
            profil:"Profil",
            calendar:"Calendar",
            support:"Support"
          },
          profil :{
           firstname:"First name",
           lastname:"Last name",
           email:"Email",
           city:"City",
           gender:"Gender",
           male:"Male",
           female:"Female",
           dateofbirth:"Date of birth",
           country:"Country",
           speciality:"Speciality",
           adress:"Adress",
           edit:"Edit"
          },
          agenda:{
            rdv:"Next meeting",
            medicalfile:"Medical file",
            start:"Start"
          },
          signature:{
            signature:"This electronic signature will act as a digital signature so please scan it in a white sheet",
            Upload:"Upload file"
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
            step4:"Compte bancaire",
            msg:"Ne tardez plus tout vos avantages vous attendent"
           
          }, 
          login: {
            msg:"Ne tardez plus tout vos avantages vous attendent",
            enter_email:"Entrez votre adresse e-mail et votre mot de passe pour accéder à votre compte personnel",
            more:"En savoir plus",
            pwd:"Mot de passe",
            login:"Se connecter",
            Signin:"Connexion",
            support:"Soutien"
          },
          navbar:{
            profil:"Profile",
            calendar:"Calendrier",
            support:"Soutien"
          },
          profil:{
           firstname:"Prénom",
           lastname:"Nom",
           email:"Email",
           city:"Ville",
           gender:"Sexe",
           male:"Male",
           female:"Femelle",
           dateofbirth:"Date de naissance",
           country:"Pays",
           speciality:"Specialité",
           adress:"Adresse",
           edit:"Modifier"
          },
          agenda:{
            rdv:"Prochaine Consultation ",
            medicalfile:"Dossier medicale",
            start:"Démarrer"
          },
          signature:{
            signature:"Cette signatute electronique fera office d'une signature numerique pour cela veuiller la scanner dans une feuille blanche",
            Upload:"Telecharger un fichier"
         
          }
          }
        }
      },
    },
);

export default i18n;
