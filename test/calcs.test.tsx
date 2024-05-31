import { render, screen } from '@testing-library/react/';
import { clickButton } from './helpers/clickButton';
import Calculator from '../src/components/calculator';

it('It should do math operations correctly', () => {
    render(<Calculator />);
    const display = screen.getByTestId('display');

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
