import styled from 'styled-components/macro';

export const Text = styled.span`
    color: ${ ({ theme }): string => theme.dark.secondary };
    font-size: 20px;
    margin-bottom: 10px;
`;
