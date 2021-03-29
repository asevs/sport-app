import { Room } from './Room';

export const FETCH_ROOMS_REQUEST = 'FETCH_ROOMS_REQUEST';
export const FETCH_ROOMS_SUCCESS = 'FETCH_ROOMS_SUCCESS';
export const FETCH_ROOMS_FAILURE = 'FETCH_ROOMS_FAILURE';

interface RoomAsync {
  loading: boolean;
  rooms: Room[];
  error: string;
}

interface FetchRoomsRequest extends RoomAsync {
  type: typeof FETCH_ROOMS_REQUEST;
}
interface FetchRoomsSuccess extends RoomAsync {
  type: typeof FETCH_ROOMS_SUCCESS;
}
interface FetchRoomsFailure extends RoomAsync {
  type: typeof FETCH_ROOMS_FAILURE;
}

export type RoomActionTypes =
  | FetchRoomsRequest
  | FetchRoomsSuccess
  | FetchRoomsFailure;
