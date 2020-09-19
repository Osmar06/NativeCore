import React, {useState} from 'react';
import {Item, Input, Label, Icon, View} from 'native-base';
import theme from '../../themes';

const InputSecure = ({
  label,
  iconSufix,
  iconPrefix,
  onValueChange,
  ...props
}) => {
  const {floatingLabel, fixed, regular, error} = props;
  const [showText, setShowText] = useState(false);

  const getIconPrefix = () =>
    iconPrefix ? (
      <Icon active name={iconPrefix} type={theme.iconsType} />
    ) : (
      <View />
    );

  return (
    <Item
      floatingLabel={floatingLabel}
      error={error}
      fixed={fixed}
      regular={regular}>
      {getIconPrefix()}
      <Label>{label}</Label>
      <Input
        secureTextEntry={!showText}
        onChangeText={onValueChange}
        {...props}
      />
      <Icon
        name={showText ? 'eye-off' : 'eye'}
        iconsType={theme.iconsType}
        onPress={() => setShowText(!showText)}
      />
    </Item>
  );
};

export default InputSecure;
