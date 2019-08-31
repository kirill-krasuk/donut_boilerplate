const emoji = require('node-emoji');

const COLORS = require('../constants/color');

module.exports = () => {
    console.log(COLORS.FgGreen, `\n${ emoji.get('tada') } ${ emoji.get('tada') }   The component was successfully created!   ${ emoji.get('tada') } ${ emoji.get('tada') }`);
    console.log(COLORS.FgWhite);
};
