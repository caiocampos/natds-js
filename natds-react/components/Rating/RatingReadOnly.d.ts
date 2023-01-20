/// <reference types="react" />
import { RatingReadOnlyProps, RatingProps, RatingInputProps } from './Rating.props';
export declare const isRatingReadOnly: (props: RatingProps) => props is RatingReadOnlyProps;
export declare const isRatingInput: (props: RatingProps) => props is RatingInputProps;
declare const RatingReadOnly: ({ ariaLabelGroup, testID, ...props }: RatingProps) => JSX.Element;
export default RatingReadOnly;
