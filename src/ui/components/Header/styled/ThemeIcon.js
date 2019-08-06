import styled               from 'styled-components/macro';

import { THEME_ICON_SIZE }  from 'ui/constants/header';

export default styled.div`
    & svg {
        height: ${ THEME_ICON_SIZE };
        width: ${ THEME_ICON_SIZE };
        color: ${ ({ theme }) => theme[theme.mode]['ui_ch_theme-icon'] };
        filter: brightness(1);

        &:hover {
            cursor: pointer;
            filter: brightness(1.14);
        }
    }
`;
