import { Size } from '@naturacosmeticos/natds-themes';
export declare type RatingPosition = 'left' | 'right';
export declare type RatingValue = 0 | 1 | 2 | 3 | 4 | 5;
export declare type RatingInputSize = keyof Pick<Size, 'semi' | 'semiX' | 'medium'>;
export declare type RatingCounterSize = keyof Pick<Size, 'small' | 'standard' | 'semi' | 'semiX'>;
export declare type RatingReadOnlySize = keyof Pick<Size, 'small' | 'standard' | 'semi' | 'semiX'>;
export declare type BaseComponentProps = {
    ariaLabel: string;
    disabled?: boolean;
    iconActive?: boolean;
    iconFilled?: boolean;
    isClickable?: boolean;
    onClick?: (e: any) => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    size: keyof Size;
    testID?: string;
    value?: number;
};
export interface RatingBaseProps {
    /**
     * Use to define a text that explains the meaning of EACH Rating.
     */
    ariaLabel: string;
    /**
     * Use to define a text that explains the meaning of group
     */
    ariaLabelGroup?: string;
    /**
     * Specify an optional className to be added to your Counter
     */
    className?: string;
    /**
     * Optional ID for testing
     * By default, this value will be concatenated to the position of each element.
     * @example rating-1
     */
    testID?: string;
}
export declare type RatingCounterProps = RatingBaseProps & ({
    /**
     * The Rating position relative to placeholder
     * @default left
     */
    align?: RatingPosition;
    /**
     * The text aside the Rating
     */
    label: string;
    /**
     * The size of Rating
     */
    size: RatingCounterSize;
    /**
     * The variant
     */
    variant: 'counter';
});
export declare type RatingInputProps = RatingBaseProps & ({
    /**
    * If `true`, the Rating will be disabled
    * @default false
    */
    disabled?: boolean;
    /**
     * The text below the Rating
     */
    label?: string;
    /**
     * Click handler
     */
    onClick: (e: any) => void;
    /**
     * The number of Rating stars filled
     */
    rate: RatingValue;
    /**
     * The size of Rating
     */
    size: RatingInputSize;
    /**
     * The variant
     */
    variant: 'input';
});
export declare type RatingReadOnlyProps = RatingBaseProps & ({
    /**
     * The number of Rating stars filled
     */
    rate: RatingValue;
    /**
     * The size of Rating
     */
    size: RatingReadOnlySize;
    /**
     * The variant
     */
    variant: 'read-only';
});
export declare type RatingProps = RatingCounterProps | RatingInputProps | RatingReadOnlyProps;
