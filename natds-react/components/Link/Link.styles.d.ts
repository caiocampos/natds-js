import { Theme } from '@naturacosmeticos/natds-themes';
import { LinkProps } from './Link.props';
declare type LinkStyleProps = Pick<LinkProps, 'iconPosition' | 'variant' | 'textColor' | 'IconComponent'>;
declare const styles: (data?: (LinkStyleProps & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"link" | "container">;
export default styles;
