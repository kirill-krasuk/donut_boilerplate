import configureStore from 'redux-mock-store';

const middlewares: Array<any> = [];
const mockStore               = configureStore(middlewares);

const initState = {
	locale: 'en',
	theme : { mode: 'dark' },
};

const store = mockStore(initState);

export { mockStore, store };
