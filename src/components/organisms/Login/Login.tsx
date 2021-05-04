import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import Heading from '../../atoms/Heading/Heading';
import Input from '../../atoms/Input/Input';
import VisibilityIcon from '../../../assets/icons/visibility.svg';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../redux/rootStore';
import { AppActions } from '../../../redux/models/actions';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/Auth/AuthAction';
import { AuthRoutes } from '../../../routes';
export interface ILoginProps {}

type AuthDispatch = ThunkDispatch<
  AppState,
  AppState['authReducer'],
  AppActions
>;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 3rem;
  max-width: 450px;
  margin: auto;
  * {
    margin: 1rem auto 1rem auto;
  }

  span {
    margin: 0 0 0 1rem;
  }
  place-content: center;
`;

const CheckInput = styled(Input)`
  height: 20px;
  width: 20px;
`;

const StyledInput = styled(Input)`
  width: 100%;
  max-width: 320px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.blue};
  :visited{color: ${({ theme }) => theme.blue};
  :active{color: #5c3c92}
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0 1rem 2.2rem 0;
  z-index: 2;
  cursor: pointer;
`;

const Login: React.FC<ILoginProps> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const dispatchAuth: AuthDispatch = useDispatch();
  const history = useHistory();

  const LogIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const resError = await dispatchAuth(
        loginUser({ username: 'test', password: 'test' })
      );
      if (resError) throw 'Nie udało sie zalogować. Spróbój ponownie.';
      else history.push(AuthRoutes.rooms);
    } catch (error) {
      setErrorMsg(error);
    }
  };
  return (
    <StyledWrapper>
      <Heading big>Zaloguj się</Heading>
      {errorMsg && <p>{errorMsg}</p>}
      <form onSubmit={LogIn}>
        <InputContainer>
          <StyledInput
            placeholder="email"
            type="email"
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <StyledInput
            placeholder="password"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <StyledButtonIcon
            type="button"
            icon={VisibilityIcon}
            onClick={() => setShowPassword(!showPassword)}
          ></StyledButtonIcon>
        </InputContainer>
        <CheckInput placeholder="checkbox" type="checkbox" />
        <span>Pozostań zalogowany</span>
        <Button type="submit">ZALOGUJ SIĘ</Button>
      </form>
      <StyledLink to="/resetpassword">Zapomniałeś hasła?</StyledLink>
      <div>
        Nie masz jeszcze konta?
        <StyledLink to="/register"> Zarejestruj się</StyledLink>
      </div>
    </StyledWrapper>
  );
};

export default Login;
