import React from 'react';
import {StyleProvider} from 'native-base';
import getTheme from '../components';
import material from '../variables/material';

export const ThemeProvider = (props) => {
  return (
    <StyleProvider style={getTheme(material)}>{props.children}</StyleProvider>
  );
};
