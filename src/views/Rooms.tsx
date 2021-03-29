import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RoomsTemplate from '../templates/RoomsTemplate';
import { AppState } from '../redux/rootStore';
import { ThunkDispatch } from 'redux-thunk';
import { boundRequestRooms } from '../redux/Room/RoomAction';
import { AppActions } from '../redux/models/actions';

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

  useEffect(() => {
    dispatch(boundRequestRooms());
  }, []);
  return <RoomsTemplate>Rooms{console.log(rooms)}</RoomsTemplate>;
};

export default Rooms;
