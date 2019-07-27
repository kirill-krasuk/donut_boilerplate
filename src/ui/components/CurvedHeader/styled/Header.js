import styled            from 'styled-components/macro';

import { HEADER_HEIGHT } from 'ui/constants/header';

export default styled.header`
    height: ${ HEADER_HEIGHT };
    width: 100%;

    &:before {
        content: '';
        background: ${ ({ theme }) => `linear-gradient(90deg, ${ theme[theme.mode]['ui_ch_header--lg-from'] } , ${ theme[theme.mode]['ui_ch_header--lg-to'] })` };
        height: inherit;
        width: 100%;
        border-radius: 0 0 50% 50%;
        transform: scaleX(1.2);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
`;
