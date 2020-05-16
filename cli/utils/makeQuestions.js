require('./initSettings');

const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

const asyncQuestion = (q, callback) => new Promise((resolve, reject) => {
    rl.question(
        q,
        (answer) => {
            if (callback) {
                const returnedValue = callback(answer, reject);

                if (returnedValue !== null && returnedValue !== undefined) {
                    return resolve(returnedValue);
                }
            }

            resolve(answer);
        }
    );
});

// eslint-disable-next-line no-async-promise-executor
const makeQuestions = questions => new Promise(async (resolve) => {
    const answers = {};
    let answer;

    const keys = Object.keys(questions);

    for (let i = 0; i < keys.length; i++) {
        if (typeof questions[keys[i]] === 'string') {
            answer = await asyncQuestion(questions[keys[i]]); // eslint-disable-line
        }

        if (typeof questions[keys[i]] === 'object') {
            const { message, callback } = questions[keys[i]];

            answer = await asyncQuestion(message, callback); // eslint-disable-line
        }

        answers[keys[i]] = answer;
    }

    resolve(answers);
    rl.close();
});

module.exports = makeQuestions;
