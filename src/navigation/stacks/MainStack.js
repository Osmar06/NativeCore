import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from '../routes';
import {
  HomeScreen,
  ResourceScreen,
  UserDetailScreen,
  UsersScreen,
} from '../../screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={Routes.HOME}>
      <Stack.Screen name={Routes.HOME} component={HomeScreen} />
      <Stack.Screen name={Routes.USERS} component={UsersScreen} />
      <Stack.Screen name={Routes.USER_DETAIL} component={UserDetailScreen} />
      <Stack.Screen name={Routes.RESOURCES} component={ResourceScreen} />
    </Stack.Navigator>
  );
};
