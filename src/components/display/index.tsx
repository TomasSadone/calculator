import { useMemo } from 'react';
import './style.css';

type Props = {
    value: string;
};

function formatNumberWithCommas(number: string) {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const Display = ({ value }: Props) => {
    const displayValue = useMemo(() => {
        return formatNumberWithCommas(value);
    }, [value]);
    return (
        <div className='container display-container'>
            <p className='display-text'>{value === '' ? '0' : displayValue}</p>
        </div>
    );
};
