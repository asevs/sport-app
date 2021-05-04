import React from 'react';
import styled from 'styled-components';
import Plus from '../../../assets/icons/addroom.svg';
import Notification from '../../../assets/icons/notification.svg';
import Avatar from '../../../assets/icons/logout.svg';
import Search from '../../../assets/icons/searchroom.svg';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import { AppState } from '../../../redux/rootStore';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AppActions } from '../../../redux/models/actions';
import { logoutUser } from '../../../redux/Auth/AuthAction';
import Input from '../../atoms/Input/Input';
export interface INavbarProps {}

type AuthDispatch = ThunkDispatch<
  AppState,
  AppState['authReducer'],
  AppActions
>;

const StyledWrapper = styled.div`
  background-color: #585865;
  height: 6rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem 0 1.5rem;
`;

const LogoWrapper = styled.div`
  font-weight: ${({ theme }) => theme.bold};
`;
const IconWrapper = styled.div`
  margin: auto 0 auto auto;
  display: flex;
  * {
    margin: auto 0 auto 1rem;
  }
`;

const SportParagraph = styled.p`
  color: white;
  display: inline;
`;

const AppParagraph = styled.p`
  color: ${({ theme }) => theme.blue};
  display: inline;
`;

const UserAvatar = styled(ButtonIcon)`
  width: 40px;
  height: 40px;
  margin-left: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.grey300};
  :visited{color: ${({ theme }) => theme.grey300};
  :active{color: ${({ theme }) => theme.blue}
`;

const StyledSearchInput = styled(Input)``;

const Navbar: React.FC<INavbarProps> = () => {
  const dispatchAuth: AuthDispatch = useDispatch();
  const auth = useSelector<AppState, AppState['authReducer']>(
    (state: AppState) => state.authReducer
  );

  const LogOut = async () => {
    dispatchAuth(logoutUser());
  };

  return (
    <StyledWrapper>
      <LogoWrapper>
        <SportParagraph>SPORT</SportParagraph>
        <AppParagraph>_APP</AppParagraph>
        <StyledSearchInput search />
      </LogoWrapper>
      {auth.auth.isLoggedIn ? (
        <>
          <IconWrapper>
            <ButtonIcon icon={Search} />
            <ButtonIcon icon={Plus} />
            <ButtonIcon icon={Notification} />
          </IconWrapper>
          <UserAvatar onClick={LogOut} icon={Avatar} />
        </>
      ) : (
        <IconWrapper>
          <StyledLink to="/register">Załóż konto</StyledLink>
          <Button secondary>ZALOGUJ SIĘ </Button>
        </IconWrapper>
      )}
    </StyledWrapper>
  );
};

export default Navbar;
