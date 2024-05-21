type Props = {
    onClick: (text: string) => void;
    children: string;
    className?: string;
};

const Button = ({ children, onClick, className }: Props) => {
    return (
        <button
            className={['btn', className].join(' ')}
            onClick={() => onClick(children)}
        >
            {children}
        </button>
    );
};

export default Button;
