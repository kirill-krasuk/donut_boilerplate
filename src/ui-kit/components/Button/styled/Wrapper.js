import styled    from 'styled-components/macro';

import { SIZES } from 'ui-kit/constants/button';

export default styled.button`
    height: ${ ({ size }) => SIZES[size] };
    color: ${ ({ type, theme }) => theme[theme.mode][type] };
    background-color: white;
    border-radius: 10px;
    border: 1px solid ${ ({ type, theme }) => theme[theme.mode][type] };
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: #a1a1a1;
    }
`;
