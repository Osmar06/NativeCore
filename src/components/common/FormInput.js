import React from 'react';
import PropTypes from 'prop-types';
import InputDropDown from './InputDropdown';
import InputDate from './InputDate';
import InputNumber from './InputNumber';
import InputSecure from './InputSecure';
import InputText from './InputText';

const FormInput = ({type = 'text', ...props}) => {
  const getFormInput = () => {
    switch (type) {
      case 'password':
        return <InputSecure {...props} />;
      case 'number':
        return <InputNumber {...props} />;
      case 'dropdown':
        return <InputDropDown {...props} />;
      case 'date':
        return <InputDate {...props} />;
      default:
        return <InputText type={type} {...props} />;
    }
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
};

export default FormInput;
