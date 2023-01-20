import { IThemeWeb } from '../../Themes';
import { IRatingProps } from './Rating.props';
export declare const getFontSize: (theme: IThemeWeb) => ({ size }: IRatingProps) => string;
export declare const useStyles: (props: IRatingProps) => import("@material-ui/styles").ClassNameMap<"root" | "iconEmpty">;
export default useStyles;
