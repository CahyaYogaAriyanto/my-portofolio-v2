import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  onClick,
  className = '' 
}) => {
  const baseStyles = "flex flex-col items-start text-left py-5 px-[35px] rounded-[14px] border-0";
  
  const variantStyles = {
    primary: "bg-[#191A23] text-white",
    outline: "bg-transparent border border-solid border-[#191A23] text-black"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
