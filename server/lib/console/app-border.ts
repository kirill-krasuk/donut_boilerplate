import box from 'boxen';

const appBorder = (content: string) =>
	console.info(
		box(content, {
			padding: {
				top   : 1,
				right : 10,
				left  : 10,
				bottom: 1
			},
			margin     : 2,
			borderColor: 'magentaBright',
			borderStyle: 'double'
		})
	);

export { appBorder };
