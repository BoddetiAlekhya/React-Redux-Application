import { UserMessage } from '../messages/UserMessage';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case UserMessage.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case UserMessage.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case UserMessage.LOGIN_FAILURE:
      return {};
    case UserMessage.LOGOUT:
      return {};
    default:
      return state
  }
}