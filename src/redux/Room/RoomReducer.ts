import {
  RoomActionTypes,
  FETCH_ROOMS_REQUEST,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAILURE,
} from './models/actions';
import { Room } from './models/Room';

interface RoomState {
  loading: boolean;
  rooms: Room[];
  error: string;
}
const defaultState: RoomState = {
  loading: false,
  rooms: [{ id: 1, title: 'string', isOpen: true }],
  error: '',
};

export const roomReducer = (
  state = defaultState,
  action: RoomActionTypes
): RoomState => {
  switch (action.type) {
    case FETCH_ROOMS_REQUEST:
      return { loading: true, rooms: state.rooms, error: '' };
    case FETCH_ROOMS_SUCCESS:
      return {
        loading: false,
        rooms: action.rooms,
        error: '',
      };
    case FETCH_ROOMS_FAILURE:
      return { loading: false, rooms: state.rooms, error: action.error };

    default:
      return state;
  }
};
