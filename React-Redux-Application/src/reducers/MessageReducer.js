import { AlertMessage } from '../messages/AlertMessage';

export default function MessageReducer(state = {}, action) {
  switch (action.type) {
    case AlertMessage.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case AlertMessage.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case AlertMessage.CLEAR:
      return {};
    default:
      return state
  }
}