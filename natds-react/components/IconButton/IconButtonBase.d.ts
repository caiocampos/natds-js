import React from 'react';
import { Size } from '@naturacosmeticos/natds-themes';
export interface IconButtonBaseProps {
    ariaLabel?: string;
    className?: string;
    disabled?: boolean;
    IconComponent: React.ReactElement;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    size: keyof Size;
    testID?: string;
    value?: string | number;
    id?: HTMLButtonElement['id'];
}
declare const IconButtonBase: React.ForwardRefExoticComponent<IconButtonBaseProps & React.RefAttributes<HTMLButtonElement>>;
export default IconButtonBase;
