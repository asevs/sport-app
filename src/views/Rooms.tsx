import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RoomsTemplate from '../templates/RoomsTemplate';
import { AppState } from '../redux/rootStore';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../redux/models/actions';
import { loginUser } from '../redux/Auth/AuthAction';

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

  const auth = useSelector<AppState, AppState['authReducer']>(
    (state: AppState) => state.authReducer
  );

  const dispatchauth: AuthDispatch = useDispatch();

  useEffect(() => {
    dispatchauth(loginUser({ username: 'test', password: 'test' }));
  }, []);

  return <RoomsTemplate>Rooms</RoomsTemplate>;
};

export default Rooms;
