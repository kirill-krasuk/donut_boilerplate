import React        from 'react';
import { Provider } from 'react-redux';

import { store }    from 'test/__mocks__/store';
import Header       from '.';

describe('UI Header component', () => {
    describe('Header init', () => {
        const header = shallow(
            <Provider store={ store }>
                <Header />
            </Provider>
        );

        it('renders properly', () => {
            expect(header).toMatchSnapshot();
        });
    });
});
