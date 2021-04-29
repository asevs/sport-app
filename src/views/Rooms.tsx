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

const Rooms: React.FC = () => {
  const rooms = useSelector<AppState, AppState['roomReducer']>(
    (state: AppState) => state.roomReducer
  );

  const dispatch: RoomDispatch = useDispatch();

  

  return <RoomsTemplate>Rooms</RoomsTemplate>;
};

export default Rooms;
