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
            month: 'Month',
            year: 'Year',
            teleconsultation: 'I do teleconsultation',
            step1: 'Personal Data',
            step2: 'Address',
            step3: 'Professional Infos',
            step4: 'Bank account',
            msg: 'Do not delay all your advantages await you',
            step5: 'Bank account',
            confirmPassword: 'Confirm Password',
            city: 'City',
            fullAddress: 'Full Address',
            description: 'Description',
            specialities: 'Specialities',
            professionalId: 'Your professional ID',
            phone: 'Professional phone number',
            monday: 'Monday',
            tuesday: 'Tuesday',
            wednesday: 'Wednesday',
            thursday: 'Thursday',
            friday: 'Friday',
            saturday: 'Saturday',
            postalCode: 'Postal Code',
            officeName: 'Office/Hospital Name',
            and: 'And',
            distantNode: 'Connect to a distant Node',
            alertStep1: 'Basic Personal Informations',
            alertStep2:
              'Information about your address so the patient can easily find you',
            alertStep3: 'Professional Informations',
            alertStep4: 'Your working hours',
            alertStep5:
              'These two keys are required to receive the teleconsultation fee in case you provide it. You can choose to run the IPFS node either on your local machine or on a remote node.',
          },
          login: {
            msg: 'Do not delay all your advantages await you',
            enter_email:
              'Enter your email address and password to access to your personal account',
            more: 'Find out more',
            pwd: 'Password',
            login: 'Login',
            Signin: 'Sign in',
            support: 'Support',
          },
          navbar: {
            profil: 'Profil',
            calendar: 'Calendar',
            support: 'Support',
          },
          profil: {
            firstname: 'First name',
            lastname: 'Last name',
            email: 'Email',
            city: 'City',
            gender: 'Gender',
            male: 'Male',
            female: 'Female',
            dateofbirth: 'Date of birth',
            country: 'Country',
            speciality: 'Speciality',
            adress: 'Adress',
            edit: 'Edit',
          },
          agenda: {
            rdv: 'Next meeting',
            medicalfile: 'Medical file',
            start: 'Start',
          },
          signature: {
            signature:
              'This electronic signature will act as a digital signature so please scan it in a white sheet',
            Upload: 'Upload file',
          },
        },
      },
      fr: {
        translation: {
          form: {
            next: 'Suivant',
            back: 'Précédent',
            firstName: 'Prénom',
            lastName: 'Nom',
            password: 'Mot de passe',
            secretQuest: 'Choisir une question secrète',
            male: 'Homme',
            female: 'Femme',
            day: 'Jour',
            month: 'Mois',
            year: 'Année',
            teleconsultation: 'Je fais de la téléconsultation',
            step1: 'Données personnelles',
            step2: 'Adresse',
            step3: 'Infos professionnelles',
            step4: 'Compte bancaire',
            msg: 'Ne tardez plus tout vos avantages vous attendent',
            step5: 'Compte bancaire',
            confirmPassword: 'Confirmer mot de passe',
            city: 'Ville',
            fullAddress: 'Addresse Complète',
            description: 'Description',
            specialities: 'Spécialités',
            professionalId: 'Votr Id professionnel',
            phone: 'Votre numéro de téléphone professionnel',
            monday: 'Lundi',
            tuesday: 'Mardi',
            wednesday: 'Mercredi',
            thursday: 'Jeudi',
            friday: 'Vendredi',
            saturday: 'Samedi',
            postalCode: 'Code Postal',
            officeName: 'Le nom de votre office/hôpital',
            and: 'et',
            distantNode: 'Se connecter à un noeud distant',
            alertStep1: 'Informations personnelles basiques',
            alertStep2:
              'Informations sur votre adresse pour permettre au patient de vous trouver facilement',
            alertStep3: 'Informations professionnelles',
            alertStep4: 'Vos horaires de travail',
            alertStep5:
              "Ces deux clés sont requis pour recevoir les frais de téléconsultation au cas où vous l'assurez. Vous pouvez choisir de faire tourner le noeud IPFS soit sur votre machine locale ou sur un noeud distant.",
            alertPassword:
              'Cette question est votre seul moyen pour récupérer votre mot de passe!',
          },
          login: {
            msg: 'Ne tardez plus tout vos avantages vous attendent',
            enter_email:
              'Entrez votre adresse e-mail et votre mot de passe pour accéder à votre compte personnel',
            more: 'En savoir plus',
            pwd: 'Mot de passe',
            login: 'Se connecter',
            Signin: 'Connexion',
            support: 'Soutien',
          },
          navbar: {
            profil: 'Profile',
            calendar: 'Calendrier',
            support: 'Soutien',
          },
          profil: {
            firstname: 'Prénom',
            lastname: 'Nom',
            email: 'Email',
            city: 'Ville',
            gender: 'Sexe',
            male: 'Male',
            female: 'Femelle',
            dateofbirth: 'Date de naissance',
            country: 'Pays',
            speciality: 'Specialité',
            adress: 'Adresse',
            edit: 'Modifier',
          },
          agenda: {
            rdv: 'Prochaine Consultation ',
            medicalfile: 'Dossier medicale',
            start: 'Démarrer',
          },
          signature: {
            signature:
              "Cette signatute electronique fera office d'une signature numerique pour cela veuiller la scanner dans une feuille blanche",
            Upload: 'Telecharger un fichier',
          },
        },
      },
    },
  });

export default i18n;
