const bundlingProgress = (premessage = '') => (percentage) => {
    process.stdout.write(`\t${ premessage } ${ (percentage * 100).toFixed(2) }%\r`);
};

module.exports = { bundlingProgress };
