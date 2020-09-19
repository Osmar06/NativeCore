import React, {useEffect} from 'react';
import BasicLayout from '../layout/BasicLayout';
import {Form, Item, Input, Label, Thumbnail} from 'native-base';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {Image} from 'react-native';
import {Status} from '../../constants';

export default UserDetailScreen = ({route}) => {
  const {id} = route.params;
  const getDataById = useStoreActions((actions) => actions.users.fetchById);

  const {user = {}, status} = useStoreState((state) => ({
    user: state.users.user,
    status: state.users.status,
  }));
  const isLoading = status === Status.FETCHING;

  useEffect(() => {
    getDataById(id);
  }, []);

  return (
    <BasicLayout title="User Detail" loading={isLoading}>
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
