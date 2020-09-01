import React from 'react';
import {StyleProvider, Root} from 'native-base';
import platform from './themes/nativebase/variables/platform';
import getTheme from './themes/nativebase/components';
import RootNavigator from './navigation/RootNavigation';
import {StoreProvider} from 'easy-peasy';
import createStore from './store';
import {AppContextProvider} from './services/auth/AppContext';

const store = createStore();
const RootApp = () => {
  return (
    <StoreProvider store={store}>
      <StyleProvider style={getTheme(platform)}>
        <Root>
          <AppContextProvider>
            <RootNavigator />
          </AppContextProvider>
        </Root>
      </StyleProvider>
    </StoreProvider>
  );
};

export default RootApp;
