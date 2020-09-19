import React from 'react';
import {Form, H1} from 'native-base';
import {Button, FormInput, Center, Margin} from '../../components';
import {Keyboard} from 'react-native';
import useAuth from '../../services/auth';
import {showError} from '../../components/toast';
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
      return showError('Email and password are mandatory, try again !');

    login({
      email,
      password,
    });
  };

  const isLoading = status === Status.FETCHING;

  return (
    <BasicLayout hideHeader>
      <Form>
        <Center>
          <Margin top={60} bottom={20}>
            <H1>Native Core</H1>
          </Margin>
        </Center>
        <FormInput
          placeholder="Email"
          type="email"
          regular
          iconPrefix="mail"
          onValueChange={(value) =>
            onLoginInputChange({key: 'email', value: value})
          }
        />
        <FormInput
          last
          placeholder="Password"
          type="password"
          regular
          iconPrefix="lock"
          onValueChange={(value) =>
            onLoginInputChange({key: 'password', value: value})
          }
        />
        <Margin top={40}>
          <Button
            full
            onPress={loginUser}
            rounded
            loading={isLoading}
            text="Login"
          />
        </Margin>
      </Form>
    </BasicLayout>
  );
};
