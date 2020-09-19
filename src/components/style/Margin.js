import React from 'react';
import {View} from 'native-base';

const Margin = ({
  all = 0,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  children,
}) => {
  const getMargin = () => {
    return all
      ? {margin: all}
      : {
          marginTop: top,
          marginRight: right,
          marginBottom: bottom,
          marginLeft: left,
        };
  };

  return <View style={{...getMargin()}}>{children}</View>;
};

export default Margin;
