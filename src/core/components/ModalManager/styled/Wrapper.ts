import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: calc(100% - 300px);
    align-items: flex-start;
    justify-content: center;
    padding-top: 300px;
    backdrop-filter: blur(5px);
    color: white;

    &:before {
        position: absolute;
        z-index: 1000;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        content: '';
        filter: opacity(.3);
    }

    & > div {
        z-index: 1001;
    }
`;
