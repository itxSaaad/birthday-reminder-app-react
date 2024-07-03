import React from 'react';

interface ButtonProps {
  title: string | React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  onClick: () => void;
  className?: string;
}

export default function Button({
  title,
  type,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={() => {
        onClick();
      }}
      className={className}
    >
      {title}
    </button>
  );
}
