import styled from 'styled-components/macro';

export default styled.div`
    background-color: white;
    min-width: 400px;
    width: ${ ({ width }) => `${ width }px` };
    height: auto;
    color: black;
    box-shadow: 3px 3px 5px 1px rgb(0, 0, 0);
`;
