/// <reference types="react" />
import { IProgressIndicatorProps } from './ProgressIndicator.props';
/**
 * ```
 * import { ProgressIndicator } from "@naturacosmeticos/natds-web"
 * ```
 */
export declare const ProgressIndicator: {
    (props: IProgressIndicatorProps): JSX.Element;
    displayName: string;
};
/**
 * @deprecated `CircularProgress` component will be deprecated soon.
 * Use `ProgressIndicator` instead
 */
export declare const CircularProgress: {
    (props: IProgressIndicatorProps): JSX.Element;
    displayName: string;
};
declare const _default: {
    CircularProgress: {
        (props: IProgressIndicatorProps): JSX.Element;
        displayName: string;
    };
    ProgressIndicator: {
        (props: IProgressIndicatorProps): JSX.Element;
        displayName: string;
    };
};
export default _default;
