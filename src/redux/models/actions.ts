import { RoomActionTypes } from '../Room/models/actions';
import { AuthActionTypes } from '../Auth/models/actions';

export type AppActions = RoomActionTypes | AuthActionTypes;
