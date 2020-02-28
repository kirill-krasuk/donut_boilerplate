import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// eslint-disable-next-line
console.error = (message: any) => {
    throw new Error(message);
};
