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
  Spinner,
} from 'native-base';
import theme from '../../themes';
import {SideBar} from '../../components';

const MainLayout = ({loading, children}) => {
  const drawer = useRef();

  const closeDrawer = () => {
    drawer.current._root.close();
  };
  const openDrawer = () => {
    drawer.current._root.open();
  };

  const getElement = () =>
    loading ? <Spinner color={theme.primaryColor} /> : children;

  return (
    <Drawer ref={drawer} content={<SideBar />} onClose={() => closeDrawer()}>
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>{getElement()}</Content>
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
