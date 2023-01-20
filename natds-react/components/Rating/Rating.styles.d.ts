import { Theme } from '@naturacosmeticos/natds-themes';
import { BaseComponentProps, RatingProps } from './Rating.props';
declare type RatingBaseStyleProps = Pick<BaseComponentProps, 'disabled' | 'isClickable' | 'iconFilled' | 'iconActive'>;
export declare const getRatingColor: ({ color }: Theme) => ({ iconFilled, iconActive, disabled }: RatingBaseStyleProps) => string;
export declare const useBaseStyles: (data?: (RatingBaseStyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"ratingContainer" | "ratingIcon">;
export declare const useContainerStyles: (data?: (Pick<RatingProps, "variant"> & {
    align?: "left" | "right" | undefined;
} & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"container">;
export declare const useLabelStyles: (data?: (Pick<RatingProps, "variant"> & {
    align?: "left" | "right" | undefined;
} & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"labelText">;
export declare const useRatingStyles: (data?: (Pick<RatingProps, "variant"> & {
    align?: "left" | "right" | undefined;
} & {
    theme?: Jss.Theme | undefined;
}) | undefined) => import("jss").Classes<"rating">;
export {};
