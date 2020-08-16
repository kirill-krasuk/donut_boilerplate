import React       from 'react';
import { shallow } from 'enzyme';

function setupShallowWrapper<T extends Object>(Component: React.FC<any>, props: T = {} as T) {
    const wrapper = shallow(<Component { ...props } />);

    return { wrapper, props };
}

export { setupShallowWrapper };
