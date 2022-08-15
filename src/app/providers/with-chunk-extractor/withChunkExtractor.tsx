import { ChunkExtractorManager } from '@loadable/server';

import type { FC }               from 'react';

function withChunkExtractor(Component: FC<ServerSideProps>) {
	return function (props: ServerSideProps) {
		const { extractor } = props;

		return (
			<ChunkExtractorManager extractor={ extractor }>
				<Component { ...props } />
			</ChunkExtractorManager>
		);
	};
}

export { withChunkExtractor };
