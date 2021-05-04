import styled, { css } from 'styled-components';
import magnifierIcon from '../../../assets/icons/magnifier.svg';

type Props = { search?: boolean };

const Input = styled.input<Props>`
  padding: 15px 30px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  border-radius: 7px;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }

  ${({ search }) =>
    search &&
    css`
      padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.s};
      background-image: url(${magnifierIcon});
      background-size: 15px;
      background-position: 92% 50%;
      background-repeat: no-repeat;
      background-color: rgba(255, 255, 255, 0.15);
      border-radius: 20px;
      color: white;
    `}
`;

export default Input;
