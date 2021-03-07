import * as React from 'react';
import UserPageTemplate from '../templates/UserPageTemplate';
import PlayersTemplate from '../templates/PlayersTemplate';
import { useSelector } from 'react-redux';
import { State } from '../redux/reducers/PlayerReducer';

const Players: React.FC = () => {
  const players = useSelector<State, State['players']>(
    (state) => state.players
  );
  return (
    <UserPageTemplate>
      <PlayersTemplate>Players{console.log(players)}</PlayersTemplate>;
    </UserPageTemplate>
  );
};

export default Players;
