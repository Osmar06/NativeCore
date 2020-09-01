import model from './models';
import ConfigureStore from './ConfigureStore';
import Api from '../services/api';

let store = null;
let apiClient = null;

const createStore = () => {
  console.log('LOG_createstore ok');

  apiClient = Api.createApiClient();
  store = ConfigureStore(model, apiClient);
  return store;
};

// Kickoff our StoreCreater and store instance

export default createStore;
export {store as StoreService, apiClient as ApiService};
