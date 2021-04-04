import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RoomsTemplate from '../templates/RoomsTemplate';
import { AppState } from '../redux/rootStore';
import { ThunkDispatch } from 'redux-thunk';
import { boundRequestRooms } from '../redux/Room/RoomAction';
import { AppActions } from '../redux/models/actions';
import { boundRequestAuth } from '../redux/Auth/AuthAction';

type RoomDispatch = ThunkDispatch<
  AppState,
  AppState['roomReducer'],
  AppActions
>;

type AuthDispatch = ThunkDispatch<
  AppState,
  AppState['authReducer'],
  AppActions
>;

const Rooms: React.FC = () => {
  const rooms = useSelector<AppState, AppState['roomReducer']>(
    (state: AppState) => state.roomReducer
  );

  const dispatch: RoomDispatch = useDispatch();

  useEffect(() => {
    dispatch(boundRequestRooms());
  }, []);
  useEffect(() => {
    dispatch(boundRequestRooms());
  }, []);

  const auth = useSelector<AppState, AppState['authReducer']>(
    (state: AppState) => state.authReducer
  );

  const dispatchauth: AuthDispatch = useDispatch();

  useEffect(() => {
    dispatchauth(boundRequestAuth());
  }, []);

  return <RoomsTemplate>Rooms{console.log(rooms.rooms)}</RoomsTemplate>;
};

export default Rooms;
