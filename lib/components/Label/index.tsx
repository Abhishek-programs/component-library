import React from 'react';
import labelStyles from './Label.module.css';

const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  const { className, ...restProps } = props;
  return (
    <label className={`${className} ${labelStyles.label}`} {...restProps} />
  );
};

export default Label;
