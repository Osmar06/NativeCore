import React, {useState, useEffect} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Item as FormItem, Input, Label, Icon, View} from 'native-base';
import theme from '../../themes';

const InputDate = ({
  label,
  iconSufix,
  iconPrefix,
  onValueChange,
  defaultValue,
  value,
  ...props
}) => {
  const {floatingLabel, fixed, regular, error} = props;
  const [showDate, setShowDate] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  useEffect(() => {
    setCurrentValue(value || defaultValue);
  }, []);

  const getIconPrefix = () =>
    iconPrefix ? (
      <Icon active name={iconPrefix} type={theme.iconsType} />
    ) : (
      <View />
    );

  const onChangeDatePicker = (_event, selectedDate) => {
    setShowDate(false);
    setCurrentValue(selectedDate);
  };

  return (
    <>
      <FormItem
        floatingLabel={floatingLabel}
        error={error}
        fixed={fixed}
        regular={regular}>
        {getIconPrefix()}
        <Label>{label}</Label>
        <Input
          onChangeText={onValueChange}
          {...props}
          value={`${currentValue}`}
        />
        <Icon
          name="date-range"
          type={theme.iconsType}
          onPress={() => setShowDate(!showDate)}
        />
      </FormItem>

      {showDate && (
        <DateTimePicker
          testID="dateTimePicker"
          is24Hour={true}
          value={props.value || new Date()}
          display="default"
          onChange={onChangeDatePicker}
        />
      )}
    </>
  );
};

export default InputDate;
