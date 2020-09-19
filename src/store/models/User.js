import {action, thunk} from 'easy-peasy';
import BaseModel from './Base';
import {Status} from '../../constants';

const fetch = thunk(async (actions, payload, {injections}) => {
  const {api} = injections;
  actions.updateStatus(Status.FETCHING);
  const response = await api.users.get(payload);
  actions.updateStatus(response.ok ? Status.SUCCESS : Status.FAILED);
  if (!response.ok) {
    actions.setData([]);
    return actions.showError(response.data.error);
  }

  var data = response.data.data;
  actions.setData(data);
});

const fetchById = thunk(async (actions, payload, {injections}) => {
  const {api} = injections;
  actions.updateStatus(Status.FETCHING);
  const response = await api.users.getById(payload);
  actions.updateStatus(response.ok ? Status.SUCCESS : Status.FAILED);
  if (!response.ok) {
    actions.setData({});
    return actions.showError(response.data.error);
  }

  var data = response.data.data;
  actions.setUser(data);
});

const UserModel = {
  ...BaseModel(),
  fetch,
  fetchById,
  setData: action((state, data) => {
    state.data = data;
  }),
  setUser: action((state, user) => {
    state.user = user;
  }),
};

export default UserModel;
