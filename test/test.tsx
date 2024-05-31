import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../src/components/calculator';
// import { act } from 'react';

test('should fail', () => {
    render(<Calculator />);
    const buttonTwo = screen.getByRole('button', { name: '2' });
    const buttonPlus = screen.getByRole('button', { name: '+' });
    const buttonEqual = screen.getByRole('button', { name: '=' });
    const display = screen.getByTestId('display');
    expect(display.textContent).toBe('0');
    // act(() => {});
    const click: MouseEvent = new MouseEvent('click', { bubbles: true });
    fireEvent(buttonTwo, click);
    fireEvent(buttonPlus, click);
    fireEvent(buttonTwo, click);
    fireEvent(buttonEqual, click);
    expect(display.textContent).toBe('4');
});
