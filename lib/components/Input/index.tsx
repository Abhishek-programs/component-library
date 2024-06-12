import React from 'react';
import inputStyle from './Input.module.css';

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...restProps } = props;
  return (
    <input className={`${className} ${inputStyle.input}`} {...restProps} />
  );
};

export default Input;

