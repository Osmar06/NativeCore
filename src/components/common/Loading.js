import React from 'react';
import {Spinner} from 'native-base';
import theme from '../../themes';

const Loading = ({loading, children}) =>
  loading ? <Spinner color={theme.colors.primary} /> : children;

export default Loading;
