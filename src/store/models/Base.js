import { action } from "easy-peasy";
import { Status } from "../../constants";
import { showErrorToast } from "../../components/toast";


const BaseModel = () => ({
  status: Status.NOT_STARTED,
  updateStatus: action((state, status) => {
    state.status = status;
  }),
  mergeState: action((state, extra) => {
    Object.assign(state, extra);
  }),
  showError: action((state, message) => {
    state.error = message
    showErrorToast(message);
  })
});

export default BaseModel;
