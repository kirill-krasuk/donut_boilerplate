import styled            from 'styled-components/macro';

export default styled.header`
    width: 100%;
    background: ${ ({ theme }) => theme[theme.mode].header_bg };
    position: relative;
    display: flex;
    justify-content: center;

    &:before {
        background: ${ ({ theme }) => theme[theme.mode].secondary };
        content: '';
        height: 2px;
        width: 60%;
        position: absolute;
        bottom: 0;
        z-index: 10;
    }
`;
