import React from 'react';
import PropTypes from 'prop-types';
import {Item, Input, Label, Icon, Textarea, View} from 'native-base';
import theme from '../../themes';

const InputText = ({
  label,
  type = 'text',
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

  const getFormInput = () => {
    let input;
    switch (type) {
      case 'email':
        input = (
          <Input
            keyboardType="email-address"
            onChangeText={onValueChange}
            {...props}
          />
        );
        break;
      case 'textArea':
        input = (
          <Textarea
            rowSpan={props.rowSpan || 5}
            onChangeText={onValueChange}
            bordered
            {...props}
          />
        );
        break;
      default:
        input = <Input {...props} />;
        break;
    }

    return (
      <Item
        floatingLabel={floatingLabel}
        error={error}
        fixed={fixed}
        regular={regular}>
        {getIconPrefix()}
        {label && <Label>{label}</Label>}
        {input}
        {getIconSufix()}
      </Item>
    );
  };

  return getFormInput();
};

InputText.propTypes = {
  type: PropTypes.oneOf(['email', 'text', 'textArea']),
};

export default InputText;
