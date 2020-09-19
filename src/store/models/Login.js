import {action, thunk} from 'easy-peasy';
import BaseModel from './Base';
import {AppState, Status, Storage} from '../../constants';
import {StorageService} from '../../services/StorageService';

const actions = {
  changeAppState: action((state, payload) => {
    state.appstate = payload;
  }),
  onLoginInputChange: action((state, {key, value}) => {
    state[key] = value;
  }),
};

const checkLogin = thunk(async (actions, payload, {injections}) => {
  const {api} = injections;
  const credentials = await StorageService.get(Storage.CREDENTIALS);

  if (credentials && credentials.token) {
    api.setAuthorizationHeader(credentials.token);
    actions.changeAppState(AppState.PRIVATE);
    actions.mergeState(credentials);
  } else actions.changeAppState(AppState.PUBLIC);
});

const loginUser = thunk(async (actions, payload, {injections}) => {
  const {api} = injections;
  if (!payload.email || !payload.password) return;

  actions.updateStatus(Status.FETCHING);

  let response = await api.auth.login(payload);

  actions.updateStatus(response.ok ? Status.SUCCESS : Status.FAILED);
  if (!response.ok) return actions.showError(response.data.error);

  actions.changeAppState(AppState.PRIVATE);
  api.setAuthorizationHeader(response.data.token);
  await StorageService.add(Storage.CREDENTIALS, response.data);
});

export default {
  ...BaseModel(),
  loginUser,
  checkLogin,
  appstate: AppState.UNKNOWN,
  ...actions,
};
