import { Theme } from '@naturacosmeticos/natds-themes';
import { TabItemProps } from './TabItem.props';
declare const styles: (data?: (Required<Pick<TabItemProps, "isDisabled" | "isActive">> & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"wrapper" | "tabButton">;
export default styles;
