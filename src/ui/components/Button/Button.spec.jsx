import Button from '.';

it('should render a button', () => {
    const button = shallow(
        <Button>Click me</Button>
    );

    expect(button).toMatchSnapshot();
});
