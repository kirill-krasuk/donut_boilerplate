module.exports = {
    allowCustomScopes: true,
    types: [{
        value: 'feat',
        name: '✨ feat:     a new feature'
    }, {
        value: 'fix',
        name: '🐛 fix:      A bug fix'
    }, {
        value: 'wip',
        name: '👨‍💻 WIP:    The task is still in development'
    }, {
        value: 'docs',
        name: '📚 docs:     Documentation only changes'
    }, {
        value: 'style',
        name: '💅 style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
    }, {
        value: 'refactor',
        name: '🛠  refactor: A code change that neither fixes a bug nor adds a feature'
    }, {
        value: 'perf',
        name: '⚡️ perf:     A code change that improves performance'
    }, {
        value: 'test',
        name: '🧪 test:     Adding missing tests or correcting existing tests'
    }, {
        value: 'build',
        name: '📦 build:    Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)'
    }, {
        value: 'chore',
        name: '🗯  chore:    Other changes that don\'t modify src or test files'
    }, {
        value: 'revert',
        name: '♻️  revert:   Reverts a previous commit'
    }]
}
