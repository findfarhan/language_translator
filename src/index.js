import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files for each language
import enTranslation from './translations/en.json';
import frTranslation from './translations/fr.json';
import ruTranslation from './translations/ru.json';
import urTranslation from './translations/ur.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    fr: { translation: frTranslation },
    ru: { translation: ruTranslation },
    ur: { translation: urTranslation },
  },
  lng: 'en', // Set the default language here
  fallbackLng: 'en', // Fallback language if the translation is missing for the current language
  interpolation: {
    escapeValue: false,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>
);

reportWebVitals();
