/* Global VARS */
declare const __IS_DEV__: boolean;
declare const __IS_PROD__: boolean;
declare const __IS_SERVER__: boolean;
declare const __IS_CLIENT__: boolean;

/* CSS MODULES */
declare module '*.module.sass' {
	const classes: Record<string, string>;
	export default classes;
}
declare module '*.module.less' {
	const classes: Record<string, string>;
	export default classes;
}
declare module '*.module.styl' {
	const classes: Record<string, string>;
	export default classes;
}

/* CSS */
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';
declare module '*.styl';

/* FONTS */
declare module '*.ttf';
declare module '*.otf';
declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';

/* IMAGES */
declare module '*.bmp' {
	const ref: string;
	export default ref;
}
declare module '*.gif' {
	const ref: string;
	export default ref;
}
declare module '*.jpg' {
	const ref: string;
	export default ref;
}
declare module '*.jpeg' {
	const ref: string;
	export default ref;
}
declare module '*.png' {
	const ref: string;
	export default ref;
}

declare module '*.svg' {
	const content: any;
	export default content;
	export const ReactComponent: any;
}

/* CUSTOM: ADD YOUR OWN HERE */
declare module '*.json' {
	const content: any;
	export default content;
}

declare module 'express-processimage';
declare module 'fastify-express';

declare module 'dotenv' {
	const content: any;
	export default content;
}

declare module '*.dev' {
	const content: any;
	export default content;
}

declare module '*.prod' {
	const content: any;
	export default content;
}
