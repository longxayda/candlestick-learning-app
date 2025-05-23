import i18next from 'i18next'

import {initReactI18next} from 'react-i18next'

import {en, vi} from './translations'

const resources = {
    vi: {
        translation: vi
    },
    en: {
        translation: en
    }
}

i18next.use(initReactI18next).init({
    debug: true,
    lng: 'vi',
    compatibilityJSON: 'v4',
    fallbackLng: 'en',
    resources: resources
})

export default i18next;