import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom   from 'jsdom';
import dotenv  from 'dotenv';

// for getEnv helper
dotenv.config();

const { JSDOM }    = jsdom;
const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;
global.document    = document;

// @ts-ignore
global.window = document.defaultView;

Enzyme.configure({ adapter: new Adapter() });

// eslint-disable-next-line
console.error = (message: any) => {
    throw new Error(message);
};
