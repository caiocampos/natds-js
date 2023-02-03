import { Theme } from '@naturacosmeticos/natds-themes';
import { IOverlay } from './IOverlay';
export declare const getOverlay: (theme: Theme) => IOverlay;
/**
 * @deprecated `overlay` is deprecated since v0.20 and will be removed at v1.0.
 * Please use `mediumHigh` opacity token from your theme.
 */
export declare const overlay: IOverlay;
