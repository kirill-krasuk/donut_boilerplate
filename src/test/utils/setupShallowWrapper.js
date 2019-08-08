import React        from 'react';
import { Provider } from 'react-redux';

import { store }    from 'test/__mocks__/store';

const setupShallowWrapper = (Component, provideProps) => {
    const props = provideProps || {};

    const wrapper = shallow(
        <Provider store={ store }>
            <Component { ...props } />
        </Provider>
    );

    return { wrapper, props };
};

export { setupShallowWrapper };
