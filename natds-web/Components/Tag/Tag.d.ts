import * as React from 'react';
import { ITagProps } from './Tag.props';
export { ITagProps } from './Tag.props';
export declare const Tag: React.ForwardRefExoticComponent<Pick<ITagProps, keyof ITagProps> & React.RefAttributes<HTMLDivElement>>;
/**
     * @deprecated `Contextual Badge` is deprecated since 1.1.0.
     * Use Tag instead.
*/
export declare const ContextualBadge: React.ForwardRefExoticComponent<Pick<ITagProps, keyof ITagProps> & React.RefAttributes<HTMLDivElement>>;
declare const _default: {
    ContextualBadge: React.ForwardRefExoticComponent<Pick<ITagProps, keyof ITagProps> & React.RefAttributes<HTMLDivElement>>;
    Tag: React.ForwardRefExoticComponent<Pick<ITagProps, keyof ITagProps> & React.RefAttributes<HTMLDivElement>>;
};
export default _default;
