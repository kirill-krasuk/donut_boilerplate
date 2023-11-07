import { BADGE }               from '@geometricpanda/storybook-addon-badges';
import { action }              from '@storybook/addon-actions';

import { Button }              from './Button';

import type { StoryObj, Meta } from '@storybook/react';

const meta = {
	title     : 'Design System/Atoms/Button',
	component : Button,
	parameters: {
		layout: 'centered',
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
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

const withText: Story = {
	name: 'with text!!!',
	args: {
		title  : 'Button',
		onClick: action('click test')
	},
	render: args => <Button { ...args }>
		{ args.title }
	</Button>
};

const withEmoji: Story = {
	render: args => (
		<Button { ...args }>
			<span aria-label='so cool' role='img'>
				😀 😎 👍 💯
			</span>
		</Button>
	)
};

withEmoji.parameters = {
	viewport: {
		defaultViewport: 'iphonex'
	}
};

export { withText, withEmoji };
export default meta;
