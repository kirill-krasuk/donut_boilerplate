import configureStore from 'redux-mock-store';

const middlewares: Array<any> = [];
const mockStore: Function     = configureStore(middlewares);

const initState = {};
const store     = mockStore(initState);

export { mockStore, store };
