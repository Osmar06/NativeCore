import {action, thunk} from 'easy-peasy';
import BaseModel from './Base';
import {Status} from '../../constants';

const fetch = thunk(async (actions, payload, {injections}) => {
  const {api} = injections;
  actions.updateStatus(Status.FETCHING);
  const {ok, data} = await api.resources.get(payload);
  actions.updateStatus(ok ? Status.SUCCESS : Status.FAILED);
  if (!ok) {
    actions.setData([]);
    return actions.showError(data.error);
  }

  actions.setData(data.data);
});

export default {
  ...BaseModel(),
  fetch,
  setData: action((state, data) => {
    state.data = data;
  }),
};
