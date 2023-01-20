import React from 'react';
export interface LabelProps {
    className?: string;
    htmlFor?: string;
    label?: string;
    required?: boolean;
}
declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
export default Label;
