import { render, screen } from '@testing-library/react';
import Calculator from '../src/components/calculator';
import { clickButton } from './helpers/clickButton';

it('should delete properly', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');

    clickButton('1');
    clickButton('2');
    clickButton('3');
    clickButton('4');
    clickButton('5');
    clickButton('DEL');
    expect(display).toHaveTextContent('1,234');

    clickButton('DEL');
    clickButton('DEL');
    expect(display).toHaveTextContent('1');

    clickButton('DEL');
    clickButton('DEL');
    expect(display).toHaveTextContent('0');
});
