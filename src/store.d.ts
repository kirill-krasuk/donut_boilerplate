// Hack: Global app state

type AppState = ReturnType<typeof import('@app/store').store.getState>;
type AppDispatch = typeof import('@app/store').store.dispatch;
