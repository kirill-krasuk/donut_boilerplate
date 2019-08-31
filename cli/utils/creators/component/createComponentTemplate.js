module.exports = component => `// @flow
import React                        from 'react';
import type { ComponentType, Node } from 'react';${ component.needIntl ? `
import { FormattedMessage }         from 'react-intl';` : '' }${ component.hasProps ? `

import type { PropsType }           from './props';` : '' }${ component.needIntl ? `
import messages                     from './messages';` : '' }

const ${ component.name }: ComponentType<${ component.hasProps ? 'PropsType' : '{}' }> = (${ component.hasProps ? 'props' : '' }): Node => {
    console.log(${ component.hasProps ? 'props' : '\'created component\'' });

    return (
        <div>${ component.needIntl ? '<FormattedMessage { ...messages.example } />' : component.name } component</div>
    );
};

export default ${ component.name };
`;
