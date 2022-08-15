type ServerSideProps = {
	store: import('@reduxjs/toolkit').Store,
	context: import('@shared/types/client-server').Context,
	location: string,
	extractor: import('@loadable/server').ChunkExtractor
};

type AppState = ReturnType<typeof import('@app/store').store.getState>;
type AppDispatch = typeof import('@app/store').store.dispatch;
