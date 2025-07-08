import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from './locales/translations/en.json'
import translationDE from './locales/translations/de.json'
import translationFR from './locales/translations/fr.json'


const resources={
    en:{
        translation:translationEN
    },
    de:{
        translation:translationDE
    },
    fr:{
         translation:translationFR
    }

}
i18n.use(LanguageDetector).use(initReactI18next)
.init(
    {
        fallbackLng:'en',
        debug:true,
        resources
    }
)

export default i18n;