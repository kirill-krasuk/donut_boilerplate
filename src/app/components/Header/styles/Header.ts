import styled from 'styled-components/macro';

export const Header = styled.header`
    width: 100%;
    background: var(--header-background);
    position: relative;
    display: flex;
    justify-content: center;

    &:before {
        background: var(--secondary);
        content: '';
        height: 2px;
        width: 60%;
        position: absolute;
        bottom: 0;
        z-index: 10;
    }
`;
