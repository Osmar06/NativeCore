import React from 'react';

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
  navigate(routeName, params);
  reset();
};

const goBack = () => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.goBack();
  }
};

const reset = () => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.reset();
  }
};

export const NavigationService = {
  navigate,
  goBack,
  reset,
  navigateAndReset,
};
