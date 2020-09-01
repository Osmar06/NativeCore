import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Item as FormItem,
  Input,
  Label,
  Icon,
  Image,
  Textarea,
  Picker,
} from 'native-base';

const FormInput = ({
  label,
  type = 'text',
  iconSufix,
  iconPrefix,
  dropdownData = [],
  onValueChange,
  ...props
}) => {
  const [showPassword, onShowPassword] = useState(false);
  const [showDate, onShowDate] = useState(false);

  const isDropDown = type === 'dropdown';
  const isDate = type === 'date';
  const isPassword = type === 'password';

  const getIconPrefix = () =>
    iconPrefix ? (
      <Icon active name={iconPrefix} type="MaterialIcons" />
    ) : (
      <div />
    );

  const getIconSufix = () => {
    if (isPassword)
      return (
        <Icon
          name={showPassword ? 'eye-off' : 'eye'}
          onPress={() => onShowPassword(!showPassword)}
        />
      );

    if (isDate)
      return (
        <Icon
          name="date-range"
          type="MaterialIcons"
          onPress={() => onShowDate(!showDate)}
        />
      );

    return iconSufix ? <Icon name={iconSufix} type="MaterialIcons" /> : <div />;
  };

  const getDropdownItem = () =>
    dropdownData.map((item) => (
      <Picker.Item label={item.text} value={item.value} key={item.value} />
    ));

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
      case 'number':
        input = (
          <Input
            keyboardType="number-pad"
            onChangeText={onValueChange}
            {...props}
          />
        );
        break;
      case 'password':
        input = (
          <Input
            secureTextEntry={!showPassword}
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
      case 'date':
        input = <Input onChangeText={onValueChange} {...props} />;
        break;
      case 'dropdown':
        input = (
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-dwon" />}
            onValueChange={onValueChange}
            {...props}>
            {getDropdownItem()}
          </Picker>
        );
        break;
      default:
        input = <Input {...props} />;
        break;
    }
    if (isDropDown) return <FormItem picker={true}>{input}</FormItem>;

    return (
      <>
        <FormItem floatingLabel>
          {getIconPrefix()}
          <Label>{label}</Label>
          {input}
          {getIconSufix()}
        </FormItem>

        {showDate && (
          <DateTimePicker
            testID="dateTimePicker"
            is24Hour={true}
            value={props.value || new Date()}
            display="default"
          />
        )}
      </>
    );
  };

  return getFormInput();
};

FormInput.propTypes = {
  type: PropTypes.oneOf([
    'email',
    'password',
    'text',
    'textArea',
    'number',
    'dropdown',
    'date',
  ]),
  keyboardType: PropTypes.oneOf([
    'default',
    'email-address',
    'numeric',
    'phone-pad',
    'number-pad',
    'decimal-pad',
  ]),
};

export default FormInput;
