import React        from 'react';
import { Provider } from 'react-redux';
import { shallow }  from 'enzyme';

import { store }    from '../__mocks__/store';

const setupShallowWrapper = (Component: any, provideProps?: Record<string, any>): Record<string, any> => {
    const props = provideProps || {};

    const wrapper = shallow(
        <Provider store={ store }>
            <Component { ...props } />
        </Provider>
    );

    return { wrapper, props };
};

export { setupShallowWrapper };
