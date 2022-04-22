import chalk  from 'chalk';
import figlet from 'figlet';

export function outputBanner() {
	const label = process.stdout.columns >= 120 ? 'Donut-tools' : 'Donut';

	console.info(
		chalk.magenta.bold(
			figlet.textSync(label, {
				font            : '3D-ASCII',
				horizontalLayout: 'default',
				verticalLayout  : 'default'
			})
		)
	);
}
