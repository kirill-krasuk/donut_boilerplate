import React  from 'react';
import Button from '.';

describe('UI Button component', () => {
    const props = {
        onClick : () => {},
        size    : 'sm',
        type    : 'secondary',
        children: 'Test'
    };

    describe('Button init', () => {
        it('renders properly', () => {
            const button = shallow(<Button { ...props } />);

            expect(button).toMatchSnapshot();
        });
    });

    describe('Button default props', () => {
        const button = shallow(<Button>Test</Button>);

        it('should render button with default TYPE prop', () => {
            expect(button.prop('type')).toEqual('primary');
        });

        it('should render button with default SIZE prop', () => {
            expect(button.prop('size')).toEqual('md');
        });
    });

    describe('Button provided props', () => {
        it('should render button with children prop equal to "Click me"', () => {
            const nextProps = {
                ...props,
                children: 'Click me'
            };

            const button = shallow(<Button { ...nextProps } />);

            expect(button.prop('children')).toEqual(nextProps.children);
        });
    });
});
