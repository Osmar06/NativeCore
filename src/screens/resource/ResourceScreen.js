import React, {useEffect} from 'react';
import {MainLayout} from '..';
import {List, ListItem, Text} from 'native-base';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {Status} from '../../constants';

export default ResourceScreen = () => {
  const getData = useStoreActions((actions) => actions.resource.fetch);

  const {resources = [], status} = useStoreState((state) => ({
    resources: state.resource.data,
    status: state.resource.status,
  }));

  const isLoading = status === Status.FETCHING;

  useEffect(() => {
    getData();
  }, []);

  const getItems = () =>
    resources.map((item, index) => (
      <ListItem key={index}>
        <Text>{item.name}</Text>
      </ListItem>
    ));

  return (
    <MainLayout title="Resources" loading={isLoading}>
      <List>{getItems()}</List>
    </MainLayout>
  );
};
