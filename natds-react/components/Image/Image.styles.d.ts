import { Theme } from '@naturacosmeticos/natds-themes';
declare type StyleProps = {
    highlight: boolean;
    fade: 'top' | 'bottom' | 'right' | 'left' | undefined;
    border: 'medium' | 'circle' | undefined;
};
declare const styles: (data?: (StyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"overlay" | "wrapper">;
export default styles;
