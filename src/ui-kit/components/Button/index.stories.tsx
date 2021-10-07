import {
    withKnobs, text, boolean
} from '@storybook/addon-knobs';
import { BADGE }        from '@geometricpanda/storybook-addon-badges';

import { ButtonStyles } from '@ui-kit/enums/button';
import { Button }       from './component';

export default {
    title     : 'Design System/Atoms/Button',
    component : Button,
    decorators: [ withKnobs ],
    argTypes  : {
        onClick: {
            action: 'clicked'
        }
    },
    parameters: {
        badges: [ BADGE.EXPERIMENTAL ],
        a11y  : {
            config: {
                rules: [ { id: 'listitem', enabled: false } ],
            },
        },
    },
};

export const withText = (args: any) => {
    const isLoading = boolean('isLoading', false);

    return (
        <Button { ...args } style={ ButtonStyles.Primary }>
            {
                isLoading
                    ? 'loading...'
                    : text('content', 'Hello')
            }
        </Button>
    );
};

export const withEmoji = (args: any) => (
    <Button { ...args }>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
);
