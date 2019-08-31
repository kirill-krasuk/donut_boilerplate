module.exports = (answer, reject) => {
    switch (answer) {
        case 'y':
        case 'Y':
        case 'Yes':
        case 'yes':
        case 'YES':
            return true;

        case 'n':
        case 'N':
        case 'No':
        case 'no':
        case 'NO':
            return false;

        default: return reject(new Error(`${ emoji.get('rotating_light') } Error! given data was invalid`));
    }
};
