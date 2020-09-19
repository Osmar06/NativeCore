import React from 'react';
import {Item, Input, Label, Icon, View} from 'native-base';
import theme from '../../themes';

const InputNumber = ({
  label,
  iconSufix,
  iconPrefix,
  onValueChange,
  ...props
}) => {
  const {floatingLabel, fixed, regular, error} = props;
  const getIconPrefix = () =>
    iconPrefix ? (
      <Icon active name={iconPrefix} type={theme.iconsType} />
    ) : (
      <View />
    );

  const getIconSufix = () =>
    iconSufix ? <Icon name={iconSufix} type={theme.iconsType} /> : <View />;

  return (
    <Item
      floatingLabel={floatingLabel}
      error={error}
      fixed={fixed}
      regular={regular}>
      {getIconPrefix()}
      <Label>{label}</Label>
      <Input
        keyboardType="number-pad"
        onChangeText={onValueChange}
        {...props}
      />
      {getIconSufix()}
    </Item>
  );
};

export default InputNumber;
