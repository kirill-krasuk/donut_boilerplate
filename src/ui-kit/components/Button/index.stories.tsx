import React            from 'react';

import { ButtonStyles } from '@ui-kit/enums/button';
import { Button }       from './component';

export default {
    title: 'Button',
};

export const withText = () => <Button style={ ButtonStyles.Primary }>Hello</Button>;

export const withEmoji = () => (
    <Button>
        <span role="img" aria-label="so cool">
            😀 😎 👍 💯
        </span>
    </Button>
);
