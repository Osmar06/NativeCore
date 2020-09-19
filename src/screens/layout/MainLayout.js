import React, {useRef} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Drawer,
} from 'native-base';
import {Loading, SideBar} from '../../components';

const MainLayout = ({loading, title = '', children}) => {
  const drawer = useRef();

  const closeDrawer = () => {
    drawer.current._root.close();
  };
  const openDrawer = () => {
    drawer.current._root.open();
  };

  return (
    <Drawer
      ref={drawer}
      content={<SideBar onNavigate={closeDrawer} />}
      onClose={() => closeDrawer()}>
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Loading loading={loading}>{children}</Loading>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    </Drawer>
  );
};

export default MainLayout;
