const { log } = require('fp-ts/lib/Console');
const fs      = require('fs');
const emoji   = require('node-emoji');

const createTemplate  = require('../utils/creators/component/createComponentTemplate');
const createPath      = require('../utils/creators/component/createComponentPath');
const createProps     = require('../utils/creators/component/createPropsTemplate');
const createLoadable  = require('../utils/creators/component/createLodableTemplate');
const createIntl      = require('../utils/creators/component/createIntlTemplate');
const updateRootFile  = require('../utils/updates/updateComponentExportFile');
const makeQuestions   = require('../utils/makeQuestions');
const getRootPath     = require('../utils/getRootPath');
const yesNoCallback   = require('../utils/callbacks/yesNoCallback');
const successCreating = require('../utils/successCreating');

const component = {};

const questions = {
    type: {
        message : `\n ${ emoji.get('thinking_face') } A component of an application or ui? (app/ui): `,
        callback: (answer, reject) => {
            if (answer !== 'app' && answer !== 'ui') {
                reject(new Error(`${ emoji.get('rotating_light') } Error! given data was invalid`));
            }
        }
    },
    hasProps: {
        message : `\n${ emoji.get('pushpin') } Declare props? (y/n): `,
        callback: yesNoCallback
    },
    isLoadable: {
        message : `\n${ emoji.get('arrows_counterclockwise') } Do you want the component to load dynamically? (y/n): `,
        callback: yesNoCallback
    },
    needIntl: {
        message : `\n${ emoji.get('speech_balloon') } Do you want to create a file with translations? (y/n): `,
        callback: yesNoCallback
    },
    name: `\n${ emoji.get('memo') } What component name do you want to give? `
};

const main = async () => {
    let answers;

    try {
        answers = await makeQuestions(questions);
    } catch (err) {
        log(err)();
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

    successCreating();
};

main();
