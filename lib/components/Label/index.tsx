import React from 'react';
import styles from './styles.module.css';

export const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  const { className, ...restProps } = props;
  return <label className={`${className} ${styles.label}`} {...restProps} />;
};

