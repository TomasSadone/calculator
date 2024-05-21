import { useCallback, useEffect } from 'react';
import Button from '../button';
import './style.css';

type Props = {
    setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
};

const validKeys = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '+',
    '=',
    '-',
    '*',
    'x',
    'X',
    '/',
    'Backspace',
    'C',
    'c',
    'Enter',
];

const Keyboard = ({ setDisplayValue }: Props) => {
    const handleResult = useCallback(() => {
        setDisplayValue((value) => {
            try {
                return eval(value);
            } catch {
                return 'err';
            }
        });
    }, [setDisplayValue]);
    const handleReset = useCallback(() => {
        setDisplayValue('');
    }, [setDisplayValue]);
    const handleDelete = useCallback(() => {
        setDisplayValue((value) => {
            try {
                return value.slice(0, -1);
            } catch {
                return 'err';
            }
        });
    }, [setDisplayValue]);
    const handleConcat = useCallback(
        (char: string) => {
            setDisplayValue((value) => {
                if (value === 'err') {
                    return char;
                } else {
                    return (value += char);
                }
            });
        },
        [setDisplayValue]
    );
    const handleInput = useCallback(
        (text: string) => {
            switch (text) {
                case '=':
                case 'Enter':
                    handleResult();
                    break;
                case 'RESET':
                case 'c':
                case 'C':
                    handleReset();
                    break;
                case 'DEL':
                case 'Backspace':
                    handleDelete();
                    break;
                case 'X':
                case 'x':
                    handleConcat('*');
                    break;
                default:
                    handleConcat(text);
            }
        },
        [handleResult, handleReset, handleConcat, handleDelete]
    );
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!validKeys.includes(e.key)) {
                return;
            }
            handleInput(e.key);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleInput]);
    return (
        <div className='keyboard container'>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                7
            </Button>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                8
            </Button>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                9
            </Button>
            <Button
                className='btn-light'
                onClick={handleInput}
            >
                DEL
            </Button>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                4
            </Button>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                5
            </Button>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                6
            </Button>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                +
            </Button>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                1
            </Button>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                2
            </Button>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                3
            </Button>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                -
            </Button>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                .
            </Button>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                0
            </Button>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                /
            </Button>
            <Button
                className='btn-main'
                onClick={handleInput}
            >
                X
            </Button>
            <Button
                className='btn-light btn-reset'
                onClick={handleInput}
            >
                RESET
            </Button>
            <Button
                className='btn-equal btn-highlight'
                onClick={handleInput}
            >
                =
            </Button>
        </div>
    );
};

export default Keyboard;
