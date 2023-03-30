import { isRejectedWithValue, isFulfilled } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
import { notifications } from '@mantine/notifications';

const getError = (status: number) => {
  switch (status) {
    case 400:
      return '400 Bad Request';
    case 401:
      return '401 Unauthorized';
    case 402:
      return '402 Payment Required';
    case 403:
      return '403 Forbidden';
    case 404:
      return '404 Not Found';
    case 500:
      return '500 Internal Server Error';
    case 501:
      return '503 Service Unavailable';
    default:
      return 'Something Went Wrong!';
  }
};

export const rtkQueryLogger: Middleware = () => next => action => {
  if (
    isRejectedWithValue(action) &&
    (action?.meta?.arg?.originalArgs?.message === 'E' || action?.meta?.arg?.originalArgs?.message === 'B')
  ) {
    notifications.show({
      title: 'Error',
      message: action?.payload?.data?.messages || getError(action.payload.status),
      color: 'red',
    });
  }
  if (
    isFulfilled(action) &&
    (action?.meta?.arg?.originalArgs?.message === 'S' || action?.meta?.arg?.originalArgs?.message === 'B')
  ) {
    notifications.show({
      title: 'Success',
      message: action?.payload?.messages || 'Success!',
      color: 'green',
    });
  }

  return next(action);
};
