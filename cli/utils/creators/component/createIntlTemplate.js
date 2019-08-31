module.exports = components => `import { defineMessages } from 'react-intl';

export default defineMessages({
    example: {
        id            : '${ components.type }.components.${ components.name }.example',
        defaultMessage: 'example'
    },
});
`;
