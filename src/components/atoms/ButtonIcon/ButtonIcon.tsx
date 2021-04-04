import styled from 'styled-components';

type Props = { icon: string };

const ButtonIcon = styled.button<Props>`
  width: 25px;
  height: 25px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100% 100%;
  border: none;
  background-color: transparent;
  margin-right: 1.5rem;
`;

export default ButtonIcon;
