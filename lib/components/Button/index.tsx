import React from 'react';
import buttonStyle from './Button.module.css';

const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, ...restProps } = props;

  return (
    <button
      className={`${className} ${buttonStyle.button}`}
      title='Component Library Button'
      {...restProps}
    />
  );
};

export default Button;

