import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef, isMountedRef} from '.';
import Routes from './routes';
import LoginStack from './stacks/LoginStack';
import LaunchScreen from '../screens/app/LaunchScreen';
import {useAppContext} from '../services/auth/AppContext';
import {AppState} from '../constants';
import MainStack from './stacks/MainStack';

const RootNavigation = () => {
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  const {state} = useAppContext();
  console.log(`App State is : ${state}`);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode="none">
        {state === AppState.PRIVATE ? (
          <Stack.Screen name={Routes.MAIN_STACK} component={MainStack} />
        ) : state === AppState.PUBLIC ? (
          <Stack.Screen name={Routes.LOGIN_STACK} component={LoginStack} />
        ) : (
          <Stack.Screen name={Routes.LOADING} component={LaunchScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createStackNavigator();

export default RootNavigation;
