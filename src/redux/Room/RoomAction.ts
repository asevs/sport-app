import { Dispatch } from 'redux';

import { AppActions } from '../models/actions';

import {
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAILURE,
} from './models/actions';
import { Room } from './models/Room';

const requestRooms = (): AppActions => ({
  type: FETCH_ROOMS_REQUEST,
  loading: true,
  rooms: [],
  error: '',
});
const receiveRooms = (rooms: Room[]): AppActions => ({
  type: FETCH_ROOMS_SUCCESS,
  loading: false,
  rooms: rooms,
  error: '',
});
const invalidateRooms = (): AppActions => ({
  type: FETCH_ROOMS_FAILURE,
  loading: false,
  rooms: [],
  error: 'Unable to fetch room list',
});

export const boundRequestRooms = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(requestRooms());
    return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
      .then((res) => res.json())
      .then((json) => dispatch(receiveRooms(json)))
      .catch((err) => dispatch(invalidateRooms()));
  };
};
