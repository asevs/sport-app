import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RoomsTemplate from '../templates/RoomsTemplate';
import { State } from '../reducers';

const Rooms: React.FunctionComponent = () => {
  const rooms = useSelector<State, State['rooms']>((state) => state.rooms);
  const dispatch = useDispatch();

  return <RoomsTemplate>Rooms{console.log(rooms)}</RoomsTemplate>;
};

export default Rooms;
