import {
	withKnobs,
	text,
	boolean
} from '@storybook/addon-knobs';
import { BADGE }        from '@geometricpanda/storybook-addon-badges';

import { ButtonThemes } from './enums';
import { Button }       from './Button';

import type { Story }   from '@storybook/react';

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
				rules: [
					{
						id     : 'listitem',
						enabled: false
					}
				]
			}
		}
	}
};

const withText: Story = args => {
	const isLoading = boolean('isLoading', false);

	return (
		<Button { ...args } theme={ ButtonThemes.Primary }>
			{ isLoading
				? 'loading...'
				: text('content', 'Hello') }
		</Button>
	);
};

const withEmoji: Story = args => (
	<Button { ...args }>
		<span aria-label='so cool' role='img'>
			😀 😎 👍 💯
		</span>
	</Button>
);

withEmoji.parameters = {
	viewport: {
		defaultViewport: 'iphonex'
	}
};

export { withText, withEmoji };
