import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from '../routes';
import {AppIntroScreen, LoginScreen} from '../../screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={Routes.APP_INTRO}>
      <Stack.Screen name={Routes.APP_INTRO} component={AppIntroScreen} />
      <Stack.Screen name={Routes.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};
