import React from 'react';
import {Item, Label, Icon, Picker, View} from 'native-base';
import theme from '../../themes';

const InputDropdown = ({
  label,
  iconSufix,
  iconPrefix,
  data = [],
  defaultValue,
  value,
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

  const getDropdownItem = () =>
    data.map((item) => (
      <Picker.Item label={item.text} value={item.value} key={item.value} />
    ));

  return (
    <Item
      floatingLabel={floatingLabel}
      error={error}
      fixed={fixed}
      regular={regular}
      picker>
      {getIconPrefix()}
      <Label>{label}</Label>
      <Picker
        mode="dropdown"
        iosIcon={<Icon name="arrow-dwon" type={theme.iconsType} />}
        {...props}>
        {getDropdownItem()}
      </Picker>
      {getIconSufix()}
    </Item>
  );
};

export default InputDropdown;
