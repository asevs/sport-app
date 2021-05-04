import styled, { css } from 'styled-components';

type Props = {
  secondary?: boolean;
};

const Button = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0;
  background-color: ${({ theme }) => theme.blue};
  width: 220px;
  height: 44px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;

  ${({ secondary }) =>
    secondary &&
    css`
      width: 150px;
      height: 30px;
      font-size: 14px;
    `}
`;

export default Button;
