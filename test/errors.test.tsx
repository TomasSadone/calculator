import { render, screen } from '@testing-library/react';
import { clickButton } from './helpers/clickButton';
import Calculator from '../src/components/calculator';

describe('It should handle errors as expected', () => {
    it('Should handle diffrent mathematical errors', () => {
        render(<Calculator />);
        const display = screen.getByTestId('display');
        const expectError = () => {
            expect(display).toHaveTextContent('err');
        };

        clickButton('1');
        clickButton('+');
        clickButton('=');
        expectError();
        clickButton('RESET');

        clickButton('/');
        clickButton('1');
        clickButton('=');
        expectError();
        clickButton('RESET');

        clickButton('RESET');
        clickButton('1');
        clickButton('.');
        clickButton('.');
        clickButton('=');
        expectError();
        clickButton('RESET');

        clickButton('1');
        clickButton('+');
        clickButton('+');
        clickButton('2');
        clickButton('=');
        expectError();

        clickButton('2');
        expect(display).toHaveTextContent('2');
    });
    it('Should hande use after errors correctly', () => {
        render(<Calculator />);
        const display = screen.getByTestId('display');

        clickButton('+');
        clickButton('+');
        clickButton('=');
        clickButton('1');
        expect(display).toHaveTextContent('1');

        clickButton('+');
        clickButton('+');
        clickButton('=');
        clickButton('DEL');
        expect(display).toHaveTextContent('0');
    });
});
