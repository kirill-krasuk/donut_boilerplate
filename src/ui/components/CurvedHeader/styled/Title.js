import styled from 'styled-components/macro';

export default styled.h1`
    font-size: 61px;
    color: white;
    font-family: Adigiana, sans-serif;
    text-shadow: 2px 2px 5px ${ ({ theme }) => theme[theme.mode]['ui-ch-title--shadow'] };
`;
