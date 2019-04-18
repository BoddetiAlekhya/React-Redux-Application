import { UserMessage } from '../messages/UserMessage';
import { UserService } from '../UserService';
import { AlertActions } from './AlertActions';
import { History } from '../backend/History';

export const UserActions = {
    login,
    logout,
    register,
    getAll,
    
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        UserService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                    History.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(AlertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: UserMessage.LOGIN_REQUEST, user } }
    function success(user) { return { type: UserMessage.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: UserMessage.LOGIN_FAILURE, error } }
}

function logout() {
    UserService.logout();
    return { type: UserMessage.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        UserService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    History.push('/login');
                    dispatch(AlertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(AlertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: UserMessage.REGISTER_REQUEST, user } }
    function success(user) { return { type: UserMessage.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: UserMessage.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        UserService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: UserMessage.GETALL_REQUEST } }
    function success(users) { return { type: UserMessage.GETALL_SUCCESS, users } }
    function failure(error) { return { type: UserMessage.GETALL_FAILURE, error } }
}

