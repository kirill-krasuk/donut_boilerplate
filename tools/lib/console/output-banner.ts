import chalk  from 'chalk';
import figlet from 'figlet';

export function outputBanner() {
    console.info(
        chalk.magenta.bold(
            figlet.textSync('Donut-tools', {
                font            : '3D-ASCII',
                horizontalLayout: 'default',
                verticalLayout  : 'default',
            })
        )
    );
}
