import React from 'react';
import { SnackbarProps } from './Snackbar.props';
export declare type refProp = {
    show: () => void;
};
declare const Snackbar: React.ForwardRefExoticComponent<SnackbarProps & React.RefAttributes<refProp>>;
export default Snackbar;
