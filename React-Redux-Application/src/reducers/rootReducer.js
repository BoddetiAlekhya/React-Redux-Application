import { combineReducers } from 'redux';
import  AuthReducer  from './AuthReducer';
import RegReducer  from './RegReducer';
import UserReducer from './UserReducer';
import MessageReducer from './MessageReducer';

const rootReducer = combineReducers({
  AuthReducer,
  RegReducer,
  UserReducer,
  MessageReducer
});

export default rootReducer;