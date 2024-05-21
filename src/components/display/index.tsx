import './style.css';

type Props = {
    value: string;
};

export const Display = ({ value }: Props) => {
    return (
        <div className='container display-container'>
            <p className='display-text'>{value === '' ? '0' : value}</p>
        </div>
    );
};
