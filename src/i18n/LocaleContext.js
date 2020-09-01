import './i18n';
import React from 'react';
import I18n from 'i18n-js';
import useStorage from '../services/AsyncStorage';
import {Locales} from '../constants';
import translateOrFallback from './TranslateFallback';

const LocaleContext = React.createContext();

export const LocaleContextProvider = (props) => {
  const [locale, changeLocale] = useStorage('@language', Locales.ENGLISH);
  I18n.locale = locale.name;

  const changeLocale = (locale) => {
    I18n.locale = locale.name;
    changeLocale(locale);
  };

  return (
    <LocaleContext.Provider
      value={{
        ...I18n,
        localeProvider: locale,
        t: translateOrFallback,
        changeLocale: changeLocale,
      }}>
      {props.children}
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
