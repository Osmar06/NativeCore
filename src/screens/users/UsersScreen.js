import React, {useEffect} from 'react';
import {
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
import MainLayout from '../layout/MainLayout';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {Status} from '../../constants';
import {NavigationService} from '../../navigation';
import Routes from '../../navigation/routes';

export default UsersScreen = () => {
  const getUsers = useStoreActions((actions) => actions.users.fetch);

  const {users = [], status} = useStoreState((state) => ({
    users: state.users.data,
    status: state.users.status,
  }));

  useEffect(() => {
    getUsers();
  }, []);

  const onItemClick = (id) =>
    NavigationService.navigate(Routes.USER_DETAIL, {id: id});

  const isLoading = status === Status.FETCHING;

  const getItems = () => {
    return users.map((item) => (
      <ListItem thumbnail key={item.id}>
        <Left>
          <Thumbnail square source={{uri: item.avatar}} />
        </Left>
        <Body>
          <Text>
            {item.first_name} {item.last_name}
          </Text>
          <Text note numberOfLines={1}>
            {item.email}
          </Text>
        </Body>
        <Right>
          <Button transparent onPress={() => onItemClick(item.id)}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    ));
  };
  return (
    <MainLayout loading={isLoading} title="Users">
      <List>{getItems()}</List>
    </MainLayout>
  );
};
