import type prompts from 'prompts';

// TODO: move choices to constants
const layerQuestion: prompts.PromptObject<'layer'> = {
	type   : 'select',
	name   : 'layer',
	message: 'Select app layer',
	choices: [
		{
			title: 'page',
			value: 'pages'
		},
		{
			title: 'widget',
			value: 'widgets'
		},
		{
			title: 'feature',
			value: 'features'
		},
		{
			title: 'entity',
			value: 'entities'
		},
		{
			title: 'ui-kit',
			value: 'ui-kit'
		},
		{
			title: 'lib',
			value: 'lib'
		}
	]
};

const componentQuestion: prompts.PromptObject<'name'> = {
	type    : 'text',
	name    : 'name',
	message : 'Write name of component',
	validate: value =>
		value[0].toUpperCase() === value[0] || 'name must be a camelCase format'
};

const generateOptionsQuestion: prompts.PromptObject<'generateOptions'> = {
	type   : 'multiselect',
	name   : 'generateOptions',
	message: 'Enable the options you need when generating',
	choices: [
		{
			title: 'localization',
			value: 'locales'
		},
		{
			title: 'lazy',
			value: 'lazy'
		},
		{
			title: 'styles',
			value: 'styles'
		}
	]
};

const stylesQuestion: prompts.PromptObject<'styles'> = {
	type   : 'select',
	name   : 'styles',
	message: 'Choose type of styling',
	choices: [
		{
			title: 'styled-components',
			value: 'styled'
		},
		{
			title: 'css',
			value: 'css'
		},
		{
			title: 'css-module',
			value: 'moduleCss'
		},
		{
			title: 'sass',
			value: 'sass'
		},
		{
			title: 'sass-module',
			value: 'moduleSass'
		}
	]
};

export { layerQuestion, componentQuestion, generateOptionsQuestion, stylesQuestion };
