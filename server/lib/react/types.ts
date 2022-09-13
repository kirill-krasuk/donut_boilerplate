import type { HelmetDatum }    from 'react-helmet';
import type { Theme }          from '@entities/theme';
import type { Store }          from '@reduxjs/toolkit';
import type { ChunkExtractor } from '@loadable/server';

type StaticTemplate = Record<string, HelmetDatum | string>;

type OptionsForGenerate = {
	store: Store,
	extractor: ChunkExtractor,
	props: Record<string, any>,
	mode: Theme,
	Component(): JSX.Element
};

export type { StaticTemplate, OptionsForGenerate };
