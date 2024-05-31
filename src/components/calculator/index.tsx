import { useState } from 'react';
import Keyboard from '../keyboard';
import './style.css';
import { Display } from '../display';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('');

    return (
        <main className='calculator-container'>
            <div className='calculator'>
                <Display value={displayValue} />
                <Keyboard setDisplayValue={setDisplayValue} />
            </div>
        </main>
    );
};

export default Calculator;
