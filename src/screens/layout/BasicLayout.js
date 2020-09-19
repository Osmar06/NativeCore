import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Spinner,
} from 'native-base';
import {NavigationService} from '../../navigation';
import theme from '../../themes';

export default MainLayout = ({
  title,
  hideBack,
  hideHeader,
  loading,
  children,
  style,
}) => {
  const getElement = () =>
    loading ? <Spinner color={theme.primary} /> : children;
  return (
    <Container>
      {!hideHeader && (
        <Header>
          {!hideBack && (
            <Left>
              <Button transparent onPress={NavigationService.goBack}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
          )}
          <Body>
            <Title>{title || ''}</Title>
          </Body>
          <Right />
        </Header>
      )}
      <Content style={style} padder>
        {getElement()}
      </Content>
    </Container>
  );
};
