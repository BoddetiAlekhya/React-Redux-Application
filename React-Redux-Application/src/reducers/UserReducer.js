import { UserMessage } from '../messages/UserMessage';

export default function UserReducer(state = {}, action) {
  switch (action.type) {
    case UserMessage.GETALL_REQUEST:
      return {
        loading: true
      };
    case UserMessage.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case UserMessage.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}