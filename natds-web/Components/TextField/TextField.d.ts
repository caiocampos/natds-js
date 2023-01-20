import * as React from 'react';
import { ITextFieldProps } from './TextField.props';
export { ITextFieldProps } from './TextField.props';
/**
 * Some props passed to the `TextField` will be forwarded to the `input`/`textarea` element.
 *
 * ## Importing
 *
 * ```
 * import { TextField } from '@naturacosmeticos/natds-web';
 * ```
 */
export declare const TextField: React.ForwardRefExoticComponent<Pick<ITextFieldProps, string | number> & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
export default TextField;
