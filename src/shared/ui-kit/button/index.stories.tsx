import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { BADGE }                    from '@geometricpanda/storybook-addon-badges';

import { ButtonStyles }             from './enums';
import { Button }                   from './Button';

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

const withText = (args: any) => {
	const isLoading = boolean('isLoading', false);

	return (
		<Button { ...args } style={ ButtonStyles.Primary }>
			{ isLoading ? 'loading...' : text('content', 'Hello') }
		</Button>
	);
};

const withEmoji = (args: any) => (
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
