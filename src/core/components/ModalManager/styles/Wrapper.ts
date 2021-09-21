import styled from 'styled-components/macro';

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: calc(100% - 300px);
    padding-top: 300px;
    color: white;
    backdrop-filter: blur(5px);

    &:before {
        position: absolute;
        top: 0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        background-color: black;
        filter: opacity(.3);
        content: '';
    }

    & > div {
        z-index: 1001;
    }
`;
