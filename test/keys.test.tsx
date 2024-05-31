import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../src/components/calculator';

const keys = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '+',
    '-',
    'x',
    'X',
    '*',
    '/',
    '.',
];

test('Key input in all numbers and symbols should output to screen as expected', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    keys.forEach((k) => fireEvent.keyDown(document, { key: k }));
    expect(display).toHaveTextContent('1,234,567,890+-***/.');
});
