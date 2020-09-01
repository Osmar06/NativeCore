import React from 'react';
import {Form} from 'native-base';
import {Button, FormInput} from '../../components';
import {Keyboard} from 'react-native';
import useAuth from '../../services/auth';
import {showErrorToast} from '../../components/toast';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {Status} from '../../constants';
import BasicLayout from '../layout/BasicLayout';

export default LoginScreen = () => {
  const onLoginInputChange = useStoreActions(
    (actions) => actions.login.onLoginInputChange,
  );
  const {login} = useAuth();

  const {email, password, status} = useStoreState((state) => ({
    email: state.login.email,
    password: state.login.password,
    status: state.login.status,
  }));

  const loginUser = () => {
    Keyboard.dismiss();

    if (!email || !password)
      return showErrorToast('Email and password are mandatory, try again !');

    login({
      email,
      password,
    });
  };

  const isLoading = status === Status.FETCHING;

  return (
    <BasicLayout hideHeader>
      <Form>
        <FormInput
          label="Date"
          type="date"
          iconPrefix="mail"
          onValueChange={(value) =>
            onLoginInputChange({key: 'email', value: value})
          }
        />
        <FormInput
          label="Email"
          type="email"
          iconPrefix="mail"
          onValueChange={(value) =>
            onLoginInputChange({key: 'email', value: value})
          }
        />
        <FormInput
          last
          label="Password"
          type="password"
          iconPrefix="lock"
          onValueChange={(value) =>
            onLoginInputChange({key: 'password', value: value})
          }
        />
        <Button
          full
          primary
          style={{paddingBottom: 4}}
          onPress={loginUser}
          rounded
          loading={isLoading}
          text="Login"
        />
      </Form>
    </BasicLayout>
  );
};
