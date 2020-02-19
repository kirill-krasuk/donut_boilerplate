import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 300px);
    z-index: 999;
    color: white;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 300px;
    backdrop-filter: blur(5px);

    &:before {
        content: '';
        position: absolute;
        z-index: 1000;
        background-color: black;
        filter: opacity(.3);
        width: 100%;
        height: 100%;
        top: 0;
    }

    & > div {
        z-index: 1001;
    }
`;
