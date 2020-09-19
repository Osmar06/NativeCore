import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {Container} from 'native-base';
import theme from '../../themes';

export default LaunchScreen = () => {
  return (
    <Container
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <Text
        style={{
          color: theme.colors.primary,
          fontSize: 24,
          paddingLeft: 10,
          marginTop: 10,
        }}>
        Give us a second...
      </Text>
    </Container>
  );
};
