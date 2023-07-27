import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  type?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'primary' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${type === 'secondary' ? 'gray' : 'blue'}-500 hover:bg-${type === 'secondary' ? 'gray' : 'blue'}-700 text-white font-bold py-2 px-4 rounded`}
    >
      {children}
    </button>
  );
};

export default Button;
