import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../src/components/calculator';

test('Clicks in all numbers and symbols should output to screen as expected', () => {
    render(<Calculator />);
    const click = new MouseEvent('click', { bubbles: true });
    const display = screen.getByTestId('display');
    const buttons = screen
        .getAllByRole('button')
        .filter(
            (button) =>
                button.textContent !== 'RESET' &&
                button.textContent !== 'DEL' &&
                button.textContent !== '='
        );
    buttons.forEach((button) => {
        fireEvent(button, click);
    });

    expect(display).toHaveTextContent('789,456+123-.0/*');
});
