import React from 'react';
import {Image} from 'react-native';
import {Container, Content, Text, List, ListItem} from 'native-base';
import Routes from '../../navigation/routes';
import {NavigationService} from '../../navigation';
import useAuth from '../../services/auth';

export default SideBar = ({onNavigate}) => {
  const {logout} = useAuth();
  const routes = [
    {title: 'Home', route: Routes.HOME},
    {title: 'Users', route: Routes.USERS},
    {title: 'Resources', route: Routes.RESOURCES},
    {title: 'Logout', handler: logout},
  ];

  const getRowItems = (data) => {
    return (
      <ListItem
        button
        onPress={
          data.handler
            ? data.handler
            : () => {
                if (onNavigate && onNavigate instanceof Function) onNavigate();
                NavigationService.navigate(data.route);
              }
        }>
        <Text>{data.title}</Text>
      </ListItem>
    );
  };
  return (
    <Container>
      <Content>
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png',
          }}
          style={{
            height: 120,
            width: '100%',
            alignSelf: 'stretch',
            position: 'absolute',
          }}
        />
        <Image
          square
          style={{
            height: 80,
            width: 70,
            position: 'absolute',
            alignSelf: 'center',
            top: 20,
          }}
          source={{
            uri:
              'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png',
          }}
        />
        <List
          dataArray={routes}
          contentContainerStyle={{marginTop: 120}}
          renderRow={(data) => getRowItems(data)}
        />
      </Content>
    </Container>
  );
};
