import { fireEvent, render, screen } from '@testing-library/react/';
import Calculator from '../src/components/calculator';

it('It should do math operations correctly', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    const clickButton = (name: string) => {
        const button = screen.getByRole('button', { name });
        fireEvent.click(button);
    };

    clickButton('2');
    clickButton('+');
    clickButton('2');
    clickButton('=');
    expect(display).toHaveTextContent('4');

    clickButton('-');
    clickButton('2');
    clickButton('=');
    expect(display).toHaveTextContent('2');

    clickButton('x');
    clickButton('2');
    clickButton('=');
    expect(display).toHaveTextContent('4');

    clickButton('/');
    clickButton('2');
    clickButton('=');
    expect(display).toHaveTextContent('2');
});
