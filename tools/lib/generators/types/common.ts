enum Layer {
	Pages = 'pages'
}

enum StylesType {
	CSS = 'css',
	SASS = 'sass',
	Styled = 'styled',
	ModuleCSS = 'moduleCss',
	ModuleSASS = 'moduleSass'
}

type StylePathProps = {
	styleType: StylesType | null,
	directoryName: string,
	layer: Layer
};

export type { StylePathProps };
export { Layer, StylesType };
