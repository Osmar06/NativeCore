import React from 'react';
import {Toast} from 'native-base';
let toast;

export default function showToast(message, buttonText, type, duration = 3000) {
  Toast.show({
    text: message,
    buttonText: buttonText || 'Ok',
    type: type,
    duration: duration,
  });
}

export function showError(message, buttonText) {
  showToast(message, buttonText, 'danger');
}

export function showSuccess(message, buttonText) {
  showToast(message, buttonText, 'success');
}

export function showWarning(message, buttonText) {
  showToast(message, buttonText, 'warning');
}
