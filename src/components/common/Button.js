import React from 'react';
import {
  Text,
  Icon,
  Spinner,
  Button
} from 'native-base';

export default ({text, loading, icon, ...rest}) => {
  return (
    <Button {...rest}>
      {loading && <Spinner />}
      {icon && <Icon name={icon} type="MaterialIcons" />}
      <Text>{text}</Text>
    </Button>
  );
};
