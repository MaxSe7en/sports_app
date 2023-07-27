import React, { ReactNode } from 'react';

interface ButtonsProps {
  children: ReactNode;
  onClick: () => void;
  type?: 'primary' | 'secondary';
  hover?: boolean;
  disabled?: boolean;
}

const Buttons: React.FC<ButtonsProps> = ({
  children,
  onClick,
  type = 'primary',
  hover = true,
  disabled = false,
}) => {
  const buttonClasses = `bg-${type === 'secondary' ? 'gray' : 'blue'}-500 text-white font-bold py-2 px-4 rounded`;
  const hoverClasses = hover ? `hover:bg-${type === 'secondary' ? 'gray' : 'blue'}-700` : '';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  const buttonStyle = `${buttonClasses} ${hoverClasses} ${disabledClasses}`;

  return (
    <button onClick={onClick} className={buttonStyle} disabled={disabled}>
      {children}
    </button>
  );
};

export default Buttons;
