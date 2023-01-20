import { ISpacingProps } from '../../Components/Spacing';
import { SpacingStylePropKey } from '../../Components/Spacing/Spacing.props';
import { IThemeWeb } from '../../Themes';
declare type UseSpacingFromStylePropValueArgs = {
    props: ISpacingProps;
    stylePropName: SpacingStylePropKey;
};
interface GetArgs extends UseSpacingFromStylePropValueArgs {
    theme: IThemeWeb;
}
declare type GetSpacingPropValueFunc = ({ props, stylePropName, theme }: GetArgs) => string | number | undefined;
export declare const getSpacingFromStyleProp: GetSpacingPropValueFunc;
declare type UseArgs = ({ props, stylePropName }: UseSpacingFromStylePropValueArgs) => string | number | undefined;
export declare const useSpacingFromStylePropValue: UseArgs;
export default useSpacingFromStylePropValue;
