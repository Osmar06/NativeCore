import React, {useEffect} from 'react';
import BasicLayout from '../layout/BasicLayout';
import {Form, Item, Input, Label, Thumbnail} from 'native-base';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {Image} from 'react-native';
import {Status} from '../../constants';

export default ResourceScreen = () => {
  const getData = useStoreActions((actions) => actions.resource.getData);

  const {user = {}, status} = useStoreState((state) => ({
    user: state.resource.data,
    status: state.resource.status,
  }));

  const isLoading = status === Status.FETCHING;

  useEffect(() => {
    getData();
  }, []);

  return (
    <BasicLayout title="Resources" loading={isLoading}>
      <Form>
        <Image
          source={{
            uri: user.avatar,
          }}
          style={{
            height: 200,
            flex: 1,
          }}
        />
        <Item floatingLabel>
          <Label>Fisrt Name</Label>
          <Input value={user.first_name} />
        </Item>
        <Item floatingLabel>
          <Label>Last Name</Label>
          <Input value={user.last_name} />
        </Item>
        <Item floatingLabel last>
          <Label>Email</Label>
          <Input value={user.email} />
        </Item>
      </Form>
    </BasicLayout>
  );
};
