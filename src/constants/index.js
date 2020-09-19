import {Platform} from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const isIos = !isAndroid;

export const AppState = {
  PUBLIC: 'PUBLIC_LOGIN',
  PRIVATE: 'MAIN_APP',
  AUTH: 'CHECKING_LOGIN',
  UNKNOWN: 'UNKNOWN',
};

export const Locales = {
  ENGLISH: {name: 'en', label: 'English'},
  SPANISH: {name: 'es', label: 'Español'},
};

export const Status = {
  SUCCESS: 'SUCCESS',
  NOT_STARTED: 'NOT_STARTED',
  FETCHING: 'FETCHING',
  FAILED: 'FAILED',
};

export const Storage = {
  LOCALE: 'locale',
  CREDENTIALS: 'credentials',
};
