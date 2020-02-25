import styled from 'styled-components';

export const Head =  styled.div`
    color: white;
    font-size: 20px;
    text-transform: uppercase;
    width: calc(100% - 5px * 2);
    background-color: ${ ({ theme }): string => theme[theme.mode].secondary };
    padding: 4px 5px;
`;
