import * as React from 'react';
import { ITextFieldProps } from '../TextField';
export declare const TEXT_TYPE = "text";
export declare const SEARCH_TYPE = "search";
export declare const PASSWORD_TYPE = "password";
export declare const Field: React.ForwardRefExoticComponent<Pick<ITextFieldProps, string | number> & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
export default Field;
