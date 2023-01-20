import { SpacingStylePropKey, SpacingMarginAndPaddingProps } from '../../Components/Spacing/Spacing.props';
declare type SpacingMarginAndPaddingPropsArray = Array<keyof SpacingMarginAndPaddingProps>;
declare type GetSpacingPropNamesFunc = (stylePropName: SpacingStylePropKey) => SpacingMarginAndPaddingPropsArray;
export declare const getSpacingPropNames: GetSpacingPropNamesFunc;
export declare const useSpacingPropNames: GetSpacingPropNamesFunc;
export default useSpacingPropNames;
