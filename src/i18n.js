/*import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
  debug: true,
  defaultLanguage: 'en',
  otherLanguages: ['en'],
  preload: ['en'],
  browserLanguageDetection: true,
  serverLanguageDetection: true
})
export default NextI18NextInstance

export const {
  appWithTranslation,
  withTranslation,
  Trans,
} = NextI18NextInstance
*/

// Simplified solution of i18n till next 8 is supported

import React from 'react'
import common from '../public/static/locales/en/common.json'
//import datasourcetable from "../static/locales/en/datasourcetable"
import onboarding from '../public/static/locales/en/onboarding.json'
//import pages from "../static/locales/en/pages"



export const withTranslation = (namespace) => (WrappedComponent, options = {}) => {
  const t = (key) => onboarding[key] || common[key];
  const HOC = props => {
    return <WrappedComponent {...props} t={t} />;
  };
  return HOC;
};

export const Trans = ({i18nKey}) => {
  return onboarding[i18nKey] || common[i18nKey.replace(/.*:(.*)/,"$1")] || `${i18nKey}`
}