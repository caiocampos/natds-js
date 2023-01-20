import { Theme } from '@naturacosmeticos/natds-themes';
import { ListItemProps } from './ListItem.props';
declare const styles: (data?: (Required<Pick<ListItemProps, "selected" | "interaction">> & {
    theme?: Theme | undefined;
}) | undefined) => import("jss").Classes<"listItem">;
export default styles;
