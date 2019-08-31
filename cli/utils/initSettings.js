const emoji = require('node-emoji');

const COLORS = require('../constants/color');

console.log(COLORS.FgCyan, `${ emoji.get('raised_back_of_hand') } Welcome to ${ emoji.get('doughnut') } Donut Boilerplate CLI ${ emoji.get('computer') }`);
console.log(COLORS.FgWhite);
