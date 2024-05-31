import { render, screen } from '@testing-library/react';
import Calculator from '../src/components/calculator';
import { clickButton } from './helpers/clickButton';

it('should do nothing with equal, DEL, and RESET if value is 0', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');
    const expectZero = () => {
        expect(display).toHaveTextContent('0');
    };

    clickButton('DEL');
    expectZero();

    clickButton('RESET');
    expectZero();

    clickButton('=');
    expectZero();
});
