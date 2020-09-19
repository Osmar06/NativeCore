import React from 'react';
import {Grid, Col, Row} from 'native-base';

const Center = ({children}) => (
  <Grid style={{alignItems: 'center'}}>
    <Col contentContainerStyle={{flex: 1}}>
      <Row style={{justifyContent: 'center'}}>{children}</Row>
    </Col>
  </Grid>
);

export default Center;
