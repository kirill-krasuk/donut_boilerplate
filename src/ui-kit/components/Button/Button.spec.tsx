/* eslint-disable @typescript-eslint/no-empty-function */
import { setupShallowWrapper } from '@test/utils';
import Button                  from '.';

describe('UI Button component', () => {
    const props = {
        onClick : (): void => {},
        size    : 'sm',
        type    : 'secondary',
        children: 'Test'
    };

    describe('Button init', () => {
        it('renders properly', () => {
            const { wrapper } = setupShallowWrapper(Button, props);

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('Button default props', () => {
        const { wrapper } = setupShallowWrapper(Button, { children: 'Test' });

        const button = wrapper.find('Button');

        it('should render button with default TYPE prop', () => {
            expect(button.prop('type')).toEqual('primary');
        });

        it('should render button with default SIZE prop', () => {
            expect(button.prop('size')).toEqual('md');
        });
    });

    describe('Button provided props', () => {
        const { wrapper, props: nextProps } = setupShallowWrapper(Button, {
            ...props,
            children: 'Click me'
        });

        const button = wrapper.find('Button');

        it('should render button with children prop equal to "Click me"', () => {
            expect(button.prop('children')).toEqual(nextProps.children);
        });
    });
});
