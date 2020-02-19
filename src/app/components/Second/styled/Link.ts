import styled                from 'styled-components/macro';
import { Link as ReactLink } from 'react-router-dom';

export const Link = styled(ReactLink)`
    color: ${ ({ theme }): string => theme[theme.mode].secondary };
`;
