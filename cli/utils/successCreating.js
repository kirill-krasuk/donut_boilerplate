const { log } = require('fp-ts/lib/Console');
const emoji   = require('node-emoji');

const COLORS = require('../constants/color');

module.exports = () => {
    log(COLORS.FgGreen, `\n${ emoji.get('tada') } ${ emoji.get('tada') }   The component was successfully created!   ${ emoji.get('tada') } ${ emoji.get('tada') }`)();
    log(COLORS.FgWhite)();
};
