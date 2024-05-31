import { fireEvent, render, screen } from '@testing-library/react/';
import Calculator from '../src/components/calculator';

it('It should do math operations correctly', () => {
    const click = new MouseEvent('click', { bubbles: true });
    render(<Calculator />);
    const display = screen.getByTestId('display');
    const two = screen.getByRole('button', { name: '2' });
    const plus = screen.getByRole('button', { name: '+' });
    const minus = screen.getByRole('button', { name: '-' });
    const divide = screen.getByRole('button', { name: '/' });
    const multiply = screen.getByRole('button', { name: 'x' });
    const equal = screen.getByRole('button', { name: '=' });

    fireEvent(two, click);
    fireEvent(plus, click);
    fireEvent(two, click);
    fireEvent(equal, click);
    expect(display).toHaveTextContent('4');
    fireEvent(minus, click);
    fireEvent(two, click);
    fireEvent(equal, click);
    expect(display).toHaveTextContent('2');
    fireEvent(multiply, click);
    fireEvent(two, click);
    fireEvent(equal, click);
    expect(display).toHaveTextContent('4');
    fireEvent(divide, click);
    fireEvent(two, click);
    fireEvent(equal, click);
    expect(display).toHaveTextContent('2');
});
