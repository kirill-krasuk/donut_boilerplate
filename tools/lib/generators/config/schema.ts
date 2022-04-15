import { getLocalesConfigFiles } from '../utils/getLocalesConfigFiles';
import { camelToKebab }          from '../../../../src/shared/lib/string';

const cssExtensionsMap = {
    css       : '.css',
    sass      : '.scss',
    moduleSass: '.module.scss',
    moduleCss : '.module.css'
};

type CreateSource = string;
type CreateTemplate = string;

type UpdateFileType = 'json' | 'routes';
type UpdateSource = string;

export type Schema = {
    [key: string]: {
        create: [CreateSource, CreateTemplate][] | [CreateSource, CreateTemplate],
        update: [UpdateSource, UpdateFileType][] | [UpdateSource, UpdateFileType]
    }
}

function getStylesTemplates(styleType: keyof typeof cssExtensionsMap | 'styled') {
    return styleType === 'styled'
        ? [
            './templates/styled-component.ejs',
            './templates/styled-reexport.ejs'
        ]
        : './templates/style.ejs';
}

function getStylesPath({ styleType, directoryName, layer }) {
    return styleType === 'styled'
        ? [
            `src/${ layer }/${ directoryName }/ui/styles/Example.ts`,
            `src/${ layer }/${ directoryName }/ui/styles/index.ts`
        ]
        : `src/${ layer }/${ directoryName }/ui/style${ cssExtensionsMap[styleType] }`;
}

export const generateSchema = ({
    name,
    styleType,
    layer,
    isNeedLocales,
    isNeedLazy
}): Schema => {
    const directoryName = camelToKebab(name);

    const isNeedStyles = !!styleType;

    console.info(isNeedLazy);

    const styles = getStylesPath({ styleType, directoryName, layer });

    const stylesTemplate = getStylesTemplates(styleType);
    const pathsToLocales = getLocalesConfigFiles();

    const commonValues = {
        ...isNeedStyles && {
            styles: {
                create: [
                    ...Array.isArray(styles)
                        ? [
                            [ styles[0], stylesTemplate[0] ],
                            [ styles[1], stylesTemplate[1] ],
                        ]
                        : [ styles, stylesTemplate ]
                ]
            }
        }
    };

    return {
        pages: {
            index: {
                create: [
                    `src/pages/${ directoryName }/index.tsx`,
                    './templates/page-entrypoint.ejs'
                ]
            },
            component: {
                create: [
                    `src/pages/${ directoryName }/ui/${ name }.tsx`,
                    './templates/component.ejs'
                ]
            },
            routes: {
                update: [
                    'src/shared/config/routes.ts',
                    'routes'
                ]
            },
            ...isNeedLocales && {
                locales: {
                    create: [
                        `src/pages/${ directoryName }/config/locales.ts`,
                        './templates/locales.ejs',
                    ],
                    update: pathsToLocales.map(localePath => [ localePath, 'json' ])
                }
            },
            ...commonValues,
        }
    }[layer];
};
