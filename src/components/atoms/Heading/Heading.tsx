import styled from 'styled-components';

type Props = { big?: boolean };

const Heading = styled.h1<Props>`
  font-size: ${({ theme, big }) =>
    big ? theme.fontSize.xl : theme.fontSize.l};
  font-weight: ${({ theme, big }) => (big ? theme.bold : theme.light)};};
`;

export default Heading;
