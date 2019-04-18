import { AlertMessage } from '../messages/AlertMessage';

export const AlertActions= {
    success,
    error,
    clear
};

function success(message) {
    return { type: AlertMessage.SUCCESS, message };
}

function error(message) {
    return { type: AlertMessage.ERROR, message };
}

function clear() {
    return { type: AlertMessage.CLEAR };
}