// import { generateObjectReplacePattern, generateEndOfObjectPattern } from '../utils/patternGenerators';

/**
 * end of json file
 */
const jsonPattern = `
    }
}
`;

/**
 * new end of json file
 * with replace pattern
 */
const replaceJSONPattern = `
    },
    "{$name}": {
        "localeId": "localeValue"
    }
}
`;

/** TODO: refactoring to regexp */
const routesPattern1 = `
    }
} as const;
`;

// TODO: refactoring on regexp
// const endOfObjectPattern     = generateEndOfObjectPattern();
// const replaceJSONPattern10   = generateObjectReplacePattern('name', '"localeId"', '"localeValue"');
// const replaceRoutesPattern10 = generateObjectReplacePattern('camelName', 'path', 'kebabName');

const routesPattern2 = `
    },
} as const;
`;

const routesReplacePattern1 = `
    },
    {$camelName}: {
        path: '/{$kebabName}'
    }
} as const;
`;

const routesReplacePattern2 = `
    },
    {$camelName}: {
        path: '/{$kebabName}'
    },
} as const;
`;

export const patterns = {
	json: {
		pattern: jsonPattern,
		replace: replaceJSONPattern
	},
	routes: {
		pattern: [ routesPattern1, routesPattern2 ],
		replace: [ routesReplacePattern1, routesReplacePattern2 ]
	}
};

export type PatternsKey = keyof typeof patterns;
