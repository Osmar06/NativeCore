import React from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef();
export const isMountedRef = React.createRef();

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
const navigate = (routeName, params) => {
  console.log(`NAVIGATION: To: ${routeName}, Params:`, params);

  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(routeName, params);
  }
};

const navigateAndReset = (routeName, params) => {
  if (isMountedRef.current && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.replace(routeName, params));
  }
};

const goBack = () => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.goBack();
  }
};

export const NavigationService = {
  navigate,
  goBack,
  navigateAndReset,
};
