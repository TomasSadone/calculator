import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../src/components/calculator';

const expectedButtonsContent = [
    '7',
    '8',
    '9',
    'DEL',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '-',
    '.',
    '0',
    '/',
    'x',
    'RESET',
    '=',
];

describe('It should render the display and all buttons correctly', () => {
    test('renders screen conrrectly', () => {
        render(<Calculator />);
        const buttons = screen.getAllByRole('button');
        const display = screen.getByTestId('display');
        expect(buttons.length).toBe(expectedButtonsContent.length);
        buttons.forEach((b, i) => {
            expect(b).toHaveTextContent(expectedButtonsContent[i]);
        });
        expect(display).toHaveTextContent('0');
        fireEvent(buttons[8], new MouseEvent('click', { bubbles: true }));
    });
});
