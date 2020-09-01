import React from 'react';
import {Text, ActivityIndicator} from 'react-native';
import {Container} from 'native-base';
import config from '../../themes';

export default LaunchScreen = () => {
  return (
    <Container
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large" color={config.primaryColor} />
      <Text
        style={{
          color: config.primaryColor,
          fontSize: 24,
          paddingLeft: 10,
          marginTop: 10,
        }}>
        Give us a second...
      </Text>
    </Container>
  );
};
