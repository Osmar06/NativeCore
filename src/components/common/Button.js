import React, {useState, useEffect} from 'react';
import {Text, Icon, Spinner, Button} from 'native-base';
import theme from '../../themes';

const CustomButton = ({
  text,
  loading,
  type = 'primary',
  icon,
  bordered,
  transparent,
  ...props
}) => {
  const {colors} = theme;

  const types = {
    light: colors.light,
    primary: colors.primary,
    success: colors.success,
    info: colors.info,
    warning: colors.warning,
    danger: colors.danger,
    dark: colors.dark,
  };

  const getColor = () =>
    !bordered && !transparent ? colors.white : types[type];

  return (
    <Button
      {...{[type]: true}}
      {...props}
      bordered={bordered}
      transparent={transparent}>
      {loading && <Spinner color={getColor()} />}
      {icon && <Icon name={icon} type={theme.iconsType} />}
      <Text>{text}</Text>
    </Button>
  );
};

export default CustomButton;
