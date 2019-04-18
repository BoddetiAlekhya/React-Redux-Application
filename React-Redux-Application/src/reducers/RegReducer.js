import { UserMessage } from '../messages/UserMessage';

export default function RegReducer(state = {}, action) {
  switch (action.type) {
    case UserMessage.REGISTER_REQUEST:
      return { registering: true };
    case UserMessage.REGISTER_SUCCESS:
      return {};
    case UserMessage.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}