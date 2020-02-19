import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore   = configureStore(middlewares);

const initState = {};
const store     = mockStore(initState);

export { mockStore, store };
