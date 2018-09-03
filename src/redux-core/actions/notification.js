import {notification} from '../types';

const {TOGGLE_SNACKBAR} = notification;

export const toggleSnackbar = (message = '') => ({
  type: TOGGLE_SNACKBAR,
  payload: message,
});