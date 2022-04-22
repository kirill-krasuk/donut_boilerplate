enum Layer {
	Pages = 'pages',
}

enum StylesType {
	CSS = 'css',
	SASS = 'sass',
	Styled = 'styled',
	ModuleCSS = 'moduleCss',
	ModuleSASS = 'moduleSass',
}

export type StylePathProps = {
	styleType?: StylesType,
	directoryName: string,
	layer: Layer
};

export { Layer, StylesType };
