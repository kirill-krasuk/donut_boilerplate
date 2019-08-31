const fs    = require('fs');
const emoji = require('node-emoji');

const COLORS         = require('../constants/color');
const createTemplate = require('../utils/creators/createComponentTemplate');
const createPath     = require('../utils/creators/createComponentPath');
const createProps    = require('../utils/creators/createPropsTemplate');
const createLoadable = require('../utils/creators/createLodableTemplate');
const createIntl     = require('../utils/creators/createIntlTemplate');
const updateRootFile = require('../utils/updates/updateComponentExporFile');
const makeQuestions  = require('../utils/makeQuestions');
const getRootPath    = require('../utils/getRootPath');
const yesNoCallback  = require('../utils/callbacks/yesNoCallback');

const component = {};

const questions = {
    type: {
        message : `\nA component of an application or ui? ${ emoji.get('thinking_face') } (app/ui): `,
        callback: (answer, reject) => {
            if (answer !== 'app' && answer !== 'ui') {
                reject(new Error(`${ emoji.get('rotating_light') } Error! given data was invalid`));
            }
        }
    },
    hasProps: {
        message : '\nDeclare props? (y/n): ',
        callback: yesNoCallback
    },
    isLoadable: {
        message : '\nDo you want the component to load dynamically? (y/n): ',
        callback: yesNoCallback
    },
    needIntl: {
        message : '\nDo you want to create a file with translations? (y/n): ',
        callback: yesNoCallback
    },
    name: '\nWhat component name do you want to give? '
};

const main = async () => {
    let answers;

    try {
        answers = await makeQuestions(questions);
    } catch (err) {
        console.log(err);
    }

    Object.keys(answers).forEach((key) => {
        component[key] = answers[key];
    });

    const fileDir     = createPath(component);
    const rootFileDir = getRootPath(component);

    fs.mkdirSync(fileDir);
    fs.writeFileSync(`${ fileDir }/index.jsx`, createTemplate(component));

    if (component.hasProps) {
        fs.writeFileSync(`${ fileDir }/props.js`, createProps());
    }

    if (component.isLoadable) {
        fs.writeFileSync(`${ fileDir }/loadable.js`, createLoadable(component));
    }

    if (component.needIntl) {
        fs.writeFileSync(`${ fileDir }/messages.js`, createIntl(component));
    }

    fs.appendFile(rootFileDir, updateRootFile(component), (err) => {
        if (err) throw err;
    });

    console.log(COLORS.FgGreen, `\n${ emoji.get('tada') } ${ emoji.get('tada') }   The component was successfully created!   ${ emoji.get('tada') } ${ emoji.get('tada') }`);
    console.log(COLORS.FgWhite);
};

main();
