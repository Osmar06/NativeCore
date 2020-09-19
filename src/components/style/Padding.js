import React from 'react';
import {View} from 'native-base';

const Paddding = ({
  all = 0,
  top = 0,
  left = 0,
  bottom = 0,
  right = 0,
  children,
}) => {
  const getPadding = () => {
    return all
      ? {padding: all}
      : {
          paddingTop: top,
          paddingRight: right,
          paddingBottom: bottom,
          paddingLeft: left,
        };
  };

  return <View style={{...getPadding()}}>{children}</View>;
};

export default Paddding;
