import { screen, fireEvent } from '@testing-library/react';

export const clickButton = (name: string) => {
    const button = screen.getByRole('button', { name });
    fireEvent.click(button);
};
