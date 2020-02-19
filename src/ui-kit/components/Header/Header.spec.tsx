import { setupShallowWrapper } from '@test/utils';
import Header                  from '.';

describe('UI Header component', () => {
    describe('Header init', () => {
        const { wrapper } = setupShallowWrapper(Header);

        it('renders properly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
