import React from 'react';
import styled from 'styled-components';
import Plus from '../../../assets/icons/addroom.svg';
import Notification from '../../../assets/icons/notification.svg';
import Avatar from '../../../assets/icons/logout.svg';
import Search from '../../../assets/icons/searchroom.svg';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
export interface INavbarProps {}

const StyledWrapper = styled.div`
  background-color: #585865;
  height: 6rem;
  display: flex;
  align-items: center;
`;

const LogoWrapper = styled.div`
  font-weight: ${({ theme }) => theme.bold};
`;
const IconWrapper = styled.div`
  margin-left: auto;
`;

const SportParagraph = styled.p`
  color: white;
  display: inline;
  margin-left: 1.5rem;
`;

const AppParagraph = styled.p`
  color: ${({ theme }) => theme.blue};
  display: inline;
`;

const UserAvatar = styled(ButtonIcon)`
  width: 40px;
  height: 40px;
`;

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <StyledWrapper>
      <LogoWrapper>
        <SportParagraph>SPORT</SportParagraph>
        <AppParagraph>_APP</AppParagraph>
      </LogoWrapper>
      <IconWrapper>
        <ButtonIcon icon={Search} />
        <ButtonIcon icon={Plus} />
        <ButtonIcon icon={Notification} />
      </IconWrapper>
      <UserAvatar icon={Avatar} />
    </StyledWrapper>
  );
};

export default Navbar;
