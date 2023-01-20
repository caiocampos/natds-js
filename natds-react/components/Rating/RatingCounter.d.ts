/// <reference types="react" />
import { RatingCounterProps, RatingProps } from './Rating.props';
export declare const isRatingCounter: (props: RatingProps) => props is RatingCounterProps;
declare const RatingCounter: ({ ariaLabelGroup, testID, ...props }: RatingProps) => JSX.Element;
export default RatingCounter;
