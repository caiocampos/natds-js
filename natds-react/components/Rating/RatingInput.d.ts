/// <reference types="react" />
import { RatingInputProps, RatingProps } from './Rating.props';
export declare const isRatingInput: (props: RatingProps) => props is RatingInputProps;
declare const RatingInput: ({ ariaLabelGroup, testID, ...props }: RatingProps) => JSX.Element;
export default RatingInput;
