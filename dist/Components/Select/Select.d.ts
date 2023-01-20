import * as React from 'react';
import { ISelectProps, SelectOptions, UpdatedOptions } from './Select.props';
export { ISelectProps } from './Select.props';
/**
 * ## Importing
 *
 * ```
 * import { Select } from '@naturacosmeticos/natds-web';
 * ```
 */
export declare const handleOptions: (selectOptions: SelectOptions) => UpdatedOptions[];
export declare const Select: React.ForwardRefExoticComponent<ISelectProps & React.RefAttributes<HTMLInputElement | HTMLSelectElement>>;
export default Select;
